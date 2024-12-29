import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/gallery.css';

const galleryImages = [
  {
    id: 1,
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 2,
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  },
  {
    id: 3,
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
  },
  {
    id: 4,
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
  },
  {
    id: 5,
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
  },
  {
    id: 6,
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce',
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(galleryImages.map(item => item.category))];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(item => item.category === selectedCategory);

  return (
    <section className="gallery__section">
      <Container>
        <Row>
          <Col lg="12">
            <h2>Our Event Gallery</h2>
            <div className="gallery__filters">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`filter__btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col lg="12">
            <div className="gallery__grid">
              {filteredImages.map((item) => (
                <div key={item.id} className="gallery__item">
                  <img src={item.image} alt={item.category} />
                  <div className="gallery__overlay">
                    <h3>{item.category}</h3>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Gallery;
