import React, { useState } from 'react';
import FloatingButton from '../components/FloatingButton';

// Static image imports
import club1 from '../img/comp3.jpg';
import club2 from '../img/886N.jpg';
import club3 from '../img/886Y.JPG';
import awards1 from '../img/886W Salish.JPG';
import awards2 from '../img/886Y Salish.JPG';
import awards3 from '../img/Champ Salish.JPG';
import awards4 from '../img/Champ Seaquam.JPG';
import awards5 from '../img/Finalist Salish.JPG';
import competition1 from '../img/Mecha1.jpg';
import competition2 from '../img/Mecha2.jpg';
import competition3 from '../img/Mecha3.jpg';

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // Tracks the selected image

  const sections = [
    {
      title: 'Competitions',
      images: [
        { src: club1, alt: 'Club Environment 1' },
        { src: club2, alt: 'Club Environment 2' },
        { src: club3, alt: 'Club Environment 3' },
      ],
      description: 'Explore the vibrant and collaborative club atmosphere where members design, build, and program robots.',
    },
    {
      title: 'Awards & Achievements',
      images: [
        { src: awards1, alt: 'Award 1' },
        { src: awards2, alt: 'Award 2' },
        { src: awards3, alt: 'Award 3' },
        { src: awards4, alt: 'Award 4' },
        { src: awards5, alt: 'Award 5' },
      ],
      description: 'Showcasing moments from exciting competitions, where students test their skills and teamwork.',
    },
    {
      title: 'Academy Environment',
      images: [
        { src: competition1, alt: 'Competition 1' },
        { src: competition2, alt: 'Competition 2' },
        { src: competition3, alt: 'Competition 3' },
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
      <FloatingButton />
    </div>
  );
};

export default GalleryPage;
