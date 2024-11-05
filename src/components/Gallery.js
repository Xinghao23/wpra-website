import React from 'react';

// Sample gallery data (replace these URLs with actual image paths)
const galleryItems = [
  { id: 1, src: '/path/to/image1.jpg', alt: 'Image 1' },
  { id: 2, src: '/path/to/image2.jpg', alt: 'Image 2' },
  { id: 3, src: '/path/to/image3.jpg', alt: 'Image 3' },
  { id: 4, src: '/path/to/image4.jpg', alt: 'Image 4' },
  // Add more items as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.src} alt={item.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;