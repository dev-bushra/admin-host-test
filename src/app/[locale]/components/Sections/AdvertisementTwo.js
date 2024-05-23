import '@/app/[locale]/scss/sections/storiesSection.scss'
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from 'react-bootstrap';

// Assets
import AdvertisementTwoImage from '../../../../../public/advertisement-two.png'

const AdvertisementTwo = () => {
  return (
    <Container className='add-two-wrapper my-20'>
      <Image src={AdvertisementTwoImage} height={400} alt='add-two' />
    </Container>
  )
}

export default AdvertisementTwo;