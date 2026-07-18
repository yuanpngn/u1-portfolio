import { useRef, useState } from 'react';
import { useAdmin } from './AdminContext';
import { uploadImageToCloudinary } from './cloudinary';
import styles from './EditablePhoto.module.css';

function EditablePhoto({ src, alt, imgClassName, onUploaded, fallback, compact = false }) {
  const { isAdmin } = useAdmin();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImageToCloudinary(file);
      await onUploaded(url);
    } catch (error) {
      console.error('Error uploading photo:', error);
      alert('Failed to upload photo. Please try again.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  if (!src && !isAdmin && !fallback) return null;

  return (
    <div className={styles.wrap}>
      {src ? (
        <img src={src} alt={alt} className={imgClassName} />
      ) : fallback ? (
        <div className={imgClassName}>{fallback}</div>
      ) : (
        <div className={`${imgClassName} ${styles.placeholder}`}>No photo yet</div>
      )}
      {isAdmin && (
        <>
          <button
            type="button"
            className={`${styles.editButton} ${compact ? styles.editButtonCompact : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            disabled={uploading}
            title="Change photo"
          >
            {uploading ? '…' : compact ? '📷' : '📷 Edit'}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onClick={(e) => e.stopPropagation()}
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </>
      )}
    </div>
  );
}

export default EditablePhoto;
