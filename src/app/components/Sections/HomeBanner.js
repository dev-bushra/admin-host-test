"use client"
import "@/app/scss/sections/homeBanner.scss";
import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { useState } from 'react';

// Assets
import { CiSearch } from "react-icons/ci";

export default function HomeBanner() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchClick = () => {
      // Handle search click (optional)
      console.log('Search term:', searchTerm);
    };
  
    const suggestions = [
      'Vacuum Robot', 'Bluetooth Speaker', 'Oled TV', 'Security Camera',
      'Macbook M1', 'Smart Washing Machine', 'iPad Mini 2023', 'Earbuds',
      'Air Condition Inverter', 'Flycam', 'Electric Bike', 'Gaming Computer',
      'Smart Air Purifier', 'Apple Watch'
    ];

  return (
    <div className="search-section min-h-full">
      <Container className="min-h-full">
        <h1 className="font-light">Ready to start shopping?</h1>
        <div className="search-container gap-3 mt-24 mb-5">
            <div className="flex items-center w-full search-input-wrapper">
            <Form.Control
                type="text"
                placeholder="What are you looking for"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input h-[56px] p-3"
            />
                <CiSearch color="#2C6FF4" size={20} className="search-icon-io absolute top-[3] right-5" />
            </div>
          <Button onClick={handleSearchClick} className="search-button h-[56px] w-[132px]">
            Search
          </Button>
        </div>
        <div className="search-suggestions">
          {suggestions.map((item, index) => (
            <div key={index} className="suggestion-item">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
