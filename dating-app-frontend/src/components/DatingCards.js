import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DatingCards.css';
import axios from 'axios';

const DatingCards = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("http://localhost:8001/dating/cards")
            setPeople(req.data)
        }
        fetchData()
    }, [])

    return (
        <div className="datingCards">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                {people.map((person) => (
                    <div key={person.name} className="carousel-card">
                        <img src={person.imgUrl} alt={person.name} />
                        <p className="legend">{person.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DatingCards;
