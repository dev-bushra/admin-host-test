"use client"
import "@/app/[locale]/scss/sections/homeBanner.scss";
import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

// Assets
import { CiSearch } from "react-icons/ci";

export default function HomeBanner() {
  const t = useTranslations('BannerSection');
    const [searchTerm, setSearchTerm] = useState('');
    const pathname = usePathname();

    // Current Selected Language form the URL
    console.log(pathname.slice(0,3));

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchClick = () => {
      // Handle search click (optional)
      console.log('Search term:', searchTerm);
    };
  
    const suggestionsEN = [
      'Vacuum Robot', 'Bluetooth Speaker', 'Oled TV', 'Security Camera',
      'Macbook M1', 'Smart Washing Machine', 'iPad Mini 2023', 'Earbuds',
      'Air Condition Inverter', 'Flycam', 'Electric Bike', 'Gaming Computer',
      'Smart Air Purifier', 'Apple Watch'
    ];
    const suggestionsAR = [
      'روبوت فراغ', 'سماعة بلوتوث', 'تلفزيون أوليد', 'كاميرا الأمن',
      'ماك بوك ام 1', 'الغسالة الذكية', 'ايباد ميني 2023', 'سماعات الأذن',
      'عاكس تكييف الهواء', 'فلاي كام', 'دراجة كهربائية', 'كمبيوتر الألعاب',
      'جهاز تنقية الهواء الذكي', 'ساعة أبل'
    ];

    const suggestionsList = () => {
      if(pathname.slice(0,3)==='/ar') {
        return(suggestionsAR.map((item, index) => (
          <div key={index} className="suggestion-item">
            {item}
          </div>
        )))
      } else {
        return(suggestionsEN.map((item, index) => (
          <div key={index} className="suggestion-item">
            {item}
          </div>
        )))
      }
    }
    
    const iconStyle = {
      // right: pathname.slice(0,3)==='/ar' ? '70rem !important' : '1.5rem !important',
      // display: pathname.slice(0,3) === '/ar' ? 'none !important' : ''
    };

  return (
    <div className="search-section min-h-full">
      <Container className="min-h-full">
        <h1 className="font-light">{t('title')}</h1>
        <div className="search-container gap-2 mt-24 mb-5">

            <div className="flex items-center w-full search-input-wrapper">
            <Form.Control
                type="text"
                placeholder={`${t('inputPlaceholder')}`}
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input h-[56px] p-3"
            />
                <CiSearch color="#2C6FF4" size={20} className={`search-icon-io absolute top-[3] ${pathname.slice(0,3)==='/ar'?'left-5':'right-5'}`} style={iconStyle}  />
            </div>
          <Button onClick={handleSearchClick} className="search-button h-[56px] w-[132px]">
            {t('searchButton')}
          </Button>
        </div>
        <div className="search-suggestions">
          {suggestionsList()}
        </div>
      </Container>
    </div>
  );
}
