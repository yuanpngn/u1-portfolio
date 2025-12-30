import { useState } from 'react';
import styles from './EntryFormStyles.module.css';

function EntryForm({ entry, categories, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: entry?.title || '',
    content: entry?.content || '',
    category: entry?.category || categories[0]?.id || '',
    source: entry?.source || '',
    tags: entry?.tags?.join(', ') || '',
    images: entry?.images || [],
  });
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const CLOUDINARY_UPLOAD_PRESET = 'portfolio_uploads';
  const CLOUDINARY_CLOUD_NAME = 'dxcmdqs3j';

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      
      const data = await response.json();
      return {
        url: data.secure_url,
        publicId: data.public_id,
      };
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  };

  const uploadImages = async () => {
    if (selectedFiles.length === 0) return [];

    setUploading(true);
    const uploadPromises = selectedFiles.map(file => uploadToCloudinary(file));

    try {
      const uploadedImages = await Promise.all(uploadPromises);
      setUploading(false);
      return uploadedImages;
    } catch (error) {
      console.error('Error uploading images:', error);
      setUploading(false);
      alert('Failed to upload images. Please try again.');
      return [];
    }
  };

  const handleRemoveImage = (index) => {
    // Remove from form data
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Upload new images if any
    const newImages = await uploadImages();
    
    const entryData = {
      ...formData,
      images: [...formData.images, ...newImages],
      tags: formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0),
    };

    if (entry) {
      onSubmit({ ...entry, ...entryData });
    } else {
      onSubmit(entryData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.formOverlay} onClick={onCancel}>
      <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.formHeader}>
          <h3>{entry ? 'Edit Entry' : 'New Entry'}</h3>
          <button className={styles.closeButton} onClick={onCancel}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={styles.select}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Entry title..."
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your entry here..."
              required
              rows={8}
              className={styles.textarea}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Source (Optional)</label>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="e.g., Book title, Article URL, Movie name..."
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Tags (Optional)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Comma separated tags..."
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Images (Optional)</label>
            
            {/* Existing images */}
            {formData.images.length > 0 && (
              <div className={styles.imagePreviewGrid}>
                {formData.images.map((image, index) => (
                  <div key={index} className={styles.imagePreview}>
                    <img src={image.url} alt={`Preview ${index + 1}`} />
                    <button
                      type="button"
                      className={styles.removeImageButton}
                      onClick={() => handleRemoveImage(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* New image upload */}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageSelect}
              className={styles.fileInput}
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className={styles.fileInputLabel}>
              📷 {selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : 'Choose images'}
            </label>
            {selectedFiles.length > 0 && (
              <p className={styles.fileInfo}>
                {selectedFiles.map(f => f.name).join(', ')}
              </p>
            )}
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton} disabled={uploading}>
              {uploading ? 'Uploading...' : (entry ? 'Update Entry' : 'Create Entry')}
            </button>
            <button type="button" onClick={onCancel} className={styles.cancelButton} disabled={uploading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EntryForm;
