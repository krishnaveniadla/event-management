import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventCard from '../Components/EventCard/EventCard';
import SearchBar from '../Components/SearchBar/SearchBar';
import '../styles/events.css';
import eventData from '../assets/data/FeaturedEvents';

const Events = () => {
  const [events] = useState(eventData);
  const [filteredEvents, setFilteredEvents] = useState(eventData);

  const handleFilter = (filters) => {
    const filtered = events.filter(event => {
      const matchesName = event.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesLocation = event.address.toLowerCase().includes(filters.area.toLowerCase());
      const matchesSize = event.maxGuestSize >= parseInt(filters.maxGuestSize);
      return matchesName && matchesLocation && matchesSize;
    });
    setFilteredEvents(filtered);
  };

  return (
    <>
      <section className="events__search">
        <Container>
          <Row>
            <Col lg="12">
              <SearchBar onSearch={handleFilter} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="events__listing">
        <Container>
          <Row>
            <Col lg="12">
              <div className="events__grid">
                {filteredEvents.map(event => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
              {filteredEvents.length === 0 && (
                <h3 className="text-center mt-5">No events found!</h3>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events
