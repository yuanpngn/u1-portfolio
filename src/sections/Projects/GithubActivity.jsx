import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import styles from './GithubActivityStyles.module.css';

const DEFAULT_USERNAME = 'yuanpngn';
const LEVEL_CLASSES = ['level0', 'level1', 'level2', 'level3', 'level4'];

function usernameFromUrl(url) {
  if (!url) return DEFAULT_USERNAME;
  const match = url.match(/github\.com\/([^/?#]+)/i);
  return match ? match[1] : DEFAULT_USERNAME;
}

function groupByWeek(contributions) {
  const weeks = [];
  let currentWeek = [];
  contributions.forEach((day, i) => {
    const dow = new Date(`${day.date}T00:00:00`).getDay();
    if (i === 0) {
      for (let j = 0; j < dow; j++) currentWeek.push(null);
    }
    currentWeek.push(day);
    if (dow === 6 || i === contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  return weeks;
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function GithubActivity() {
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [weeks, setWeeks] = useState(null);
  const [total, setTotal] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Fetch the contribution graph immediately using the default username,
    // in parallel with the (slower) Firestore lookup for a possibly-updated one.
    (async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${DEFAULT_USERNAME}?y=last`);
        if (!res.ok) throw new Error('bad response');
        const data = await res.json();
        setWeeks(groupByWeek(data.contributions));
        const totals = Object.values(data.total || {});
        setTotal(totals.length ? totals[totals.length - 1] : null);
      } catch (error) {
        console.error('Error loading GitHub contributions:', error);
        setFailed(true);
      }
    })();

    (async () => {
      try {
        const docSnap = await getDoc(doc(db, 'portfolio', 'main'));
        if (docSnap.exists()) {
          setUsername(usernameFromUrl(docSnap.data().social?.github));
        }
      } catch (error) {
        console.error('Error loading social links:', error);
      }
    })();
  }, []);

  const monthLabels = weeks
    ? weeks.reduce((acc, week, i) => {
        const firstReal = week.find((d) => d);
        if (!firstReal) return acc;
        const month = new Date(`${firstReal.date}T00:00:00`).getMonth();
        if (acc.length === 0 || acc[acc.length - 1].month !== month) {
          acc.push({ month, col: i });
        }
        return acc;
      }, [])
    : [];

  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow}>GITHUB ACTIVITY</div>
      <div className={styles.headingWrap}>
        <h3 className={styles.h3}>Code, most days.</h3>
        <div className={styles.underline} />
      </div>

      <div className={styles.card}>
        {failed ? (
          <p className={styles.fallback}>
            Couldn&apos;t load the activity graph right now — check out the commits directly.
          </p>
        ) : !weeks ? (
          <p className={styles.fallback}>Loading activity…</p>
        ) : (
          <div className={styles.scrollArea}>
            <div className={styles.graph}>
              <div className={styles.months} style={{ gridTemplateColumns: `repeat(${weeks.length}, 14px)` }}>
                {monthLabels.map(({ month, col }) => (
                  <span key={col} className={styles.monthLabel} style={{ gridColumnStart: col + 1 }}>
                    {MONTH_NAMES[month]}
                  </span>
                ))}
              </div>
              <div className={styles.weeks}>
                {weeks.map((week, wi) => (
                  <div key={wi} className={styles.week}>
                    {week.map((day, di) =>
                      day ? (
                        <div
                          key={di}
                          className={`${styles.cell} ${styles[LEVEL_CLASSES[day.level] || 'level0']}`}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                        />
                      ) : (
                        <div key={di} className={styles.cellEmpty} />
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={styles.footer}>
          {total !== null && (
            <span className={styles.total}>{total} contributions in the last year</span>
          )}
          {!failed && weeks && (
            <div className={styles.legend}>
              <span>Less</span>
              {LEVEL_CLASSES.map((cls) => (
                <div key={cls} className={`${styles.cell} ${styles[cls]}`} />
              ))}
              <span>More</span>
            </div>
          )}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover="true"
            className={styles.link}
          >
            View GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default GithubActivity;
