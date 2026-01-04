import { useState } from 'react';
import styles from './EntryCardStyles.module.css';

function EntryCard({ entry, category, isAdmin, onEdit, onDelete, onTogglePin }) {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFullEntry, setShowFullEntry] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const openImageModal = (imageUrl, e) => {
    e.stopPropagation();
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage(null);
  };

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleCardClick = (e) => {
    // Don't open modal if clicking on admin buttons
    if (e.target.closest(`.${styles.adminActions}`)) return;
    setShowFullEntry(true);
  };

  return (
    <>
      <div 
        className={styles.card} 
        data-pinned={entry.isPinned || false}
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.categoryBadge}>
            <span className={styles.categoryIcon}>{category?.icon}</span>
            <span>{category?.name}</span>
          </div>
          {isAdmin && (
            <div className={styles.adminActions}>
              <button 
                className={`${styles.pinButton} ${entry.isPinned ? styles.pinned : ''}`}
                onClick={(e) => { e.stopPropagation(); onTogglePin(); }}
                title={entry.isPinned ? 'Unpin entry' : 'Pin entry'}
              >
                {entry.isPinned ? '📌' : '📍'}
              </button>
              <button 
                className={styles.editButton}
                onClick={(e) => { e.stopPropagation(); onEdit(); }}
                title="Edit entry"
              >
                ✏️
              </button>
              <button 
                className={styles.deleteButton}
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                title="Delete entry"
              >
                🗑️
              </button>
            </div>
          )}
        </div>

        <h3 className={styles.title}>{entry.title}</h3>
        
        <div className={styles.content}>
          {truncateText(entry.content)}
        </div>

        {entry.images && entry.images.length > 0 && (
          <div className={styles.imagesGrid}>
            {entry.images.slice(0, 2).map((image, index) => (
              <div 
                key={index} 
                className={styles.imageWrapper}
                onClick={(e) => { e.stopPropagation(); openImageModal(image.url, e); }}
              >
                <img src={image.url} alt={`${entry.title} - ${index + 1}`} />
                {index === 1 && entry.images.length > 2 && (
                  <div className={styles.imageOverlay}>
                    +{entry.images.length - 2} more
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {entry.source && (
          <div className={styles.source}>
            <span className={styles.sourceLabel}>Source:</span> {entry.source}
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.date}>{formatDate(entry.createdAt)}</span>
          {entry.updatedAt !== entry.createdAt && (
            <span className={styles.updated}>Updated</span>
          )}
          <span className={styles.readMore}>Click to read more →</span>
        </div>
      </div>

      {showFullEntry && (
        <div className={styles.entryModal} onClick={() => setShowFullEntry(false)}>
          <div className={styles.entryModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setShowFullEntry(false)}>✕</button>
            
            <div className={styles.modalHeader}>
              <div className={styles.categoryBadge}>
                <span className={styles.categoryIcon}>{category?.icon}</span>
                <span>{category?.name}</span>
              </div>
              <span className={styles.date}>{formatDate(entry.createdAt)}</span>
            </div>

            <h2 className={styles.modalTitle}>{entry.title}</h2>
            
            <div className={styles.modalContent}>
              {entry.content}
            </div>

            {entry.images && entry.images.length > 0 && (
              <div className={styles.imagesGrid}>
                {entry.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={styles.imageWrapper}
                    onClick={(e) => openImageModal(image.url, e)}
                  >
                    <img src={image.url} alt={`${entry.title} - ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}

            {entry.source && (
              <div className={styles.modalSource}>
                <span className={styles.sourceLabel}>Source:</span> {entry.source}
              </div>
            )}

            {entry.tags && entry.tags.length > 0 && (
              <div className={styles.tags}>
                {entry.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {imageModalOpen && (
        <div className={styles.imageModal} onClick={closeImageModal}>
          <div className={styles.imageModalContent}>
            <button className={styles.closeModal} onClick={closeImageModal}>✕</button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </>
  );
}

export default EntryCard;
