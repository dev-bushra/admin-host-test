import '@/app/[locale]/scss/sections/storiesSection.scss'
import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

// Assets
import AppleWatch from '../../../../../public/apple-watch-add-banner.png'
import { IoPlayCircleOutline } from "react-icons/io5";
import PlayIcon from '../../../../../public/icons/play-icon.png'

const AdvertisementOne = () => {
  const t = useTranslations('AdvertisementOne');

  const p2 = t('p2');
  const p4 = t('p4');

  return (
    <Container className='add-one-wrapper py-10'>
    <Row className='bg-[#32333B] w-full min-h-[140px] rounded-[20px] pt-4 pb-0 px-6'>
      <Col md="1" className='p-0 pb-4 flex flex-col items-start justify-center text-white'>
        <span className='font-medium text-[20px]'>{t('p1')}</span>
        <span className='font-light uppercase text-[10px]' dangerouslySetInnerHTML={{__html: p2}}></span>
        <span className='font-normal text-[14px] mt-2'>{t('p3')}</span>
      </Col>
      <Col md="6" className='p-0 flex justify-center'>
        <Image src={AppleWatch} width={286} height={248} alt='apple-watch' />
      </Col>
      <Col md="3" className='p-0 pb-4 flex flex-col items-start justify-around text-white'>
        <span className='font-light' dangerouslySetInnerHTML={{__html: p4}}></span>
        <h4 className=''>{t('p5')}</h4>
      </Col>
      <Col md="2" lg="2" className='p-0 pb-4 flex items-center justify-end'>
        <Link href='#' className='bg-white rounded-full py-2 px-4 text-black font-medium text-[14px]'>{t('DiscoverNow')}</Link>
      </Col>
    </Row>
  </Container>
  )
}

export default AdvertisementOne;