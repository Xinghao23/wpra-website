import React, { useState } from 'react';
import FloatingButton from '../components/FloatingButton';

// Static image imports
import awards1 from '../img/886W Salish.JPG';
import awards2 from '../img/886Y Salish.JPG';
import awards3 from '../img/Champ Salish.JPG';
import awards4 from '../img/Champ Seaquam.JPG';
import awards5 from '../img/Finalist Salish.JPG';
import comp1 from '../img/Mecha1.jpg';
import comp2 from '../img/Mecha2.jpg';
import comp3 from '../img/Mecha3.jpg';
import comp4 from '../img/comp3.jpg';
import comp5 from '../img/886N.jpg';
import comp6 from '../img/886Y.JPG';
import E1 from '../img/DSC_0327.JPG';
import E2 from '../img/DSC_0329.JPG';
import E3 from '../img/DSC_0330.JPG';
import E4 from '../img/DSC_0331.JPG';
import E5 from '../img/DSC_0332.JPG';
import E6 from '../img/DSC_0333.JPG';
import E7 from '../img/DSC_0335.JPG';
import E8 from '../img/DSC_0336.JPG';
import E9 from '../img/DSC_0337.JPG';

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // Tracks the selected image

  const sections = [
    {
      title: 'Competitions',
      images: [
        { src: comp1, alt: 'Competition 1' },
        { src: comp2, alt: 'Competition 2' },
        { src: comp3, alt: 'Competition 3' },
        { src: comp4, alt: 'Competition 4' },
        { src: comp5, alt: 'Competition 5' },
        { src: comp6, alt: 'Competition 6' },



      ],
      description: 'Showcasing moments from exciting competitions, where students test their skills and teamwork.',
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
      description: 'Celebrating our proudest accomplishments, recognizing excellence in robotics and teamwork.',
    },
    {
      title: 'Academy Environment',
      images: [
        { src: E1, alt: 'Environment 1' },
        { src: E2, alt: 'Environment 2' },
        { src: E3, alt: 'Environment 3' },
        { src: E4, alt: 'Environment 4' },
        { src: E5, alt: 'Environment 5' },
        { src: E6, alt: 'Environment 6' },
        { src: E7, alt: 'Environment 7' },
        { src: E8, alt: 'Environment 8' },
        { src: E9, alt: 'Environment 9' },
      ],
      description: 'Explore the vibrant and collaborative academy atmosphere where members design, build, and program robots.',
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
      <p className="gallery-intro">Take a glimpse into our journey through our academy environment, competitions, and achievements.</p>

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
