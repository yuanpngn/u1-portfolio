import { useState } from 'react';
import styles from './EntryCardStyles.module.css';

function EntryCard({ entry, category, isAdmin, onEdit, onDelete, onTogglePin }) {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.card} data-pinned={entry.isPinned || false}>
        <div className={styles.cardHeader}>
          <div className={styles.categoryBadge}>
            <span className={styles.categoryIcon}>{category?.icon}</span>
            <span>{category?.name}</span>
          </div>
          {isAdmin && (
            <div className={styles.adminActions}>
              <button 
                className={`${styles.pinButton} ${entry.isPinned ? styles.pinned : ''}`}
                onClick={onTogglePin}
                title={entry.isPinned ? 'Unpin entry' : 'Pin entry'}
              >
                {entry.isPinned ? '📌' : '📍'}
              </button>
              <button 
                className={styles.editButton}
                onClick={onEdit}
                title="Edit entry"
              >
                ✏️
              </button>
              <button 
                className={styles.deleteButton}
                onClick={onDelete}
                title="Delete entry"
              >
                🗑️
              </button>
            </div>
          )}
        </div>

        <h3 className={styles.title}>{entry.title}</h3>
        
        <div className={styles.content}>
          {entry.content}
        </div>

        {entry.images && entry.images.length > 0 && (
          <div className={styles.imagesGrid}>
            {entry.images.map((image, index) => (
              <div 
                key={index} 
                className={styles.imageWrapper}
                onClick={() => openImageModal(image.url)}
              >
                <img src={image.url} alt={`${entry.title} - ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        {entry.source && (
          <div className={styles.source}>
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

        <div className={styles.footer}>
          <span className={styles.date}>{formatDate(entry.createdAt)}</span>
          {entry.updatedAt !== entry.createdAt && (
            <span className={styles.updated}>Updated</span>
          )}
        </div>
      </div>

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
