import React, { useState } from 'react';

// Static image imports
import club1 from '../img/886Y.JPG';
import club2 from '../img/886Y.JPG';
import club3 from '../img/886Y.JPG';
import competition1 from '../img/886W Salish.JPG';
import competition2 from '../img/886Y Salish.JPG';
import competition3 from '../img/Champ Salish.JPG';
import competition4 from '../img/Champ Seaquam.JPG';
import competition5 from '../img/Finalist Salish.JPG';
import award1 from '../img/886Y.JPG';
import award2 from '../img/886Y.JPG';
import award3 from '../img/886Y.JPG';

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // Tracks the selected image

  const sections = [
    {
      title: 'Club Environment',
      images: [
        { src: club1, alt: 'Club Environment 1' },
        { src: club2, alt: 'Club Environment 2' },
        { src: club3, alt: 'Club Environment 3' },
      ],
      description: 'Explore the vibrant and collaborative club atmosphere where members design, build, and program robots.',
    },
    {
      title: 'Competitions',
      images: [
        { src: competition1, alt: 'Competition 1' },
        { src: competition2, alt: 'Competition 2' },
        { src: competition3, alt: 'Competition 3' },
        { src: competition4, alt: 'Competition 4' },
        { src: competition5, alt: 'Competition 5' },
      ],
      description: 'Showcasing moments from exciting competitions, where students test their skills and teamwork.',
    },
    {
      title: 'Awards & Achievements',
      images: [
        { src: award1, alt: 'Award 1' },
        { src: award2, alt: 'Award 2' },
        { src: award3, alt: 'Award 3' },
      ],
      description: 'Celebrating our proudest accomplishments, recognizing excellence in robotics and teamwork.',
    },
  ];

  const scrollLeft = (index) => {
    document.querySelectorAll('.image-scroll-container')[index].scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = (index) => {
    document.querySelectorAll('.image-scroll-container')[index].scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-intro">Take a glimpse into our journey through our club environment, competitions, and achievements.</p>

      {sections.map((section, index) => (
        <div key={index} className="gallery-section">
          <h2 className="section-title">{section.title}</h2>
          <p className="section-description">{section.description}</p>
          <div className="scroll-container">
            <button className="scroll-button left" onClick={() => scrollLeft(index)}>❮</button>
            <div className="image-scroll-container">
              {section.images.map((image, i) => (
                <div key={i} className="image-container" onClick={() => openModal(image)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(index)}>❯</button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <button className="modal-close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
