import React from "react";
import '@/app/scss/sections/storiesSection.scss'
import '@/app/scss/globals.scss'
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

// Assets
import NextArrowIcon from '../../../../public/icons/categories/next-arrow-icon.svg'
import PreviousArrowIcon from '../../../../public/icons/categories/previous-arrow-icon.svg'
import PhoneIcon from '../../../../public/icons/categories/phone-icon.svg'
import CameraIcon from '../../../../public/icons/categories/camera-icon.svg'
import ComputerIcon from '../../../../public/icons/categories/computer-icon.svg'
import SmartWatchIcon from '../../../../public/icons/categories/smart-watch-icon.svg'
import GamePadIcon from '../../../../public/icons/categories/gamepad-icon.svg'
import HeadPhoneIcon from '../../../../public/icons/categories/headphone-icon.svg'
import Link from "next/link";
import HeadPhoneImage from '../../../../public/products/headphone-product.png'
import SmallProductImageOne from '../../../../public/products/small-phone-product.png'
import BigProductImage from '../../../../public/products/phone-product.png'


const DealsOfTheDay = () => {
  const categories = [
    { name: 'Phones', icon: 'phone', link: '/products/phone'},
    { name: 'Computer', icon: 'computer', link: '/products/computer'},
    { name: 'Camera', icon: 'camera', link: '/products/camera'},
    { name: 'Smart Watch', icon: 'smart_watch', link: '/products/smart_watch'},
    { name: 'Game Pad', icon: 'game_pad', link: '/products/gamepad'},
    { name: 'Head Phones', icon: 'head_phones', link: '/products/headphones'},
    { name: 'Phones', icon: 'phone', link: '/products/phone'},
  ];

  const renderIcon = (icon) => {
    switch (icon) {
      case 'phone':
        return <Image src={PhoneIcon} width={40} height={40} alt="category-icon" />;
      case 'computer':
        return <Image src={ComputerIcon} width={40} height={40} alt="category-icon" />;
      case 'camera':
        return <Image src={CameraIcon} width={40} height={40} alt="category-icon" />;
      case 'smart_watch':
        return <Image src={SmartWatchIcon} width={40} height={40} alt="category-icon" />;
      case 'game_pad':
        return <Image src={GamePadIcon} width={40} height={40} alt="category-icon" />;
      case 'head_phones':
        return <Image src={HeadPhoneIcon} width={40} height={40} alt="category-icon" />;
      default:
        return null;
    }
  };

  return (
    <Container className="wrapper min-w-full max-w-full">
      <Row>
        <Col md='10' className="flex flex-col">
          <div className="flex items-center justify-between w-full bg-[#2C6FF4] text-white text-[16px] font-medium p-3 rounded-lg">Deals of the day</div>
          <div className="mt-10 product-details-wrapper flex items-center justify-start">
            <div className="product-images-container flex items-center justify-center gap-0">
              <div className="small-product-images flex flex-col items-center justify-between h-full gap-10">
                <Image src={SmallProductImageOne} width={53} height={60} alt="small-image" />
                <Image src={SmallProductImageOne} width={53} height={60} alt="small-image" />
                <Image src={SmallProductImageOne} width={53} height={60} alt="small-image" />
              </div>
              <div className="big-product-image flex items-center justify-center">
                <Image src={BigProductImage} width={400} height={200} alt="big-product-image" />
              </div> 
            </div>
            <div className="product-details-container flex flex-col">
              <span className="product-title-name font-bold text-[16px]">Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone</span>
              <div className="flex items-center gap-3 mt-3 mb-1">
                <span className="product-price font-bold text-[20px]">$569.00 </span>
                <span className="product-price text-[#666666] font-medium line-through text-[16px]">$759.00</span>
              </div>
              <ul className="flex flex-col gap-2 m-0 p-0 mt-2">
                <li className="text-[14px] text-[#929292] font-light flex items-center"><div className="bg-[#666666] rounded-full w-[5px] h-[6px] mr-2"></div> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                <li className="text-[14px] text-[#929292] font-light flex items-center"><div className="bg-[#666666] rounded-full w-[5px] h-[6px] mr-2"></div> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                <li className="text-[14px] text-[#929292] font-light flex items-center"><div className="bg-[#666666] rounded-full w-[5px] h-[6px] mr-2"></div> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
              </ul>
              <div className="flex items-center justify-start gap-2 mt-3">
                <span className="bg-[#b3ebb353] text-[#1ABA1A] rounded-[5px] text-center text-[14px] px-3 py-2">free shipping</span>
                <span className="bg-[#f1352b33] text-[#F1352B] rounded-[5px] text-center text-[14px] px-3 py-2">free gift</span>
              </div>
              <div className="flex items-center mt-3 border-b-[.5px] border-[#dddd] pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-normal max-w-[30%]">hurry up! Promotion will expires in</span>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#EBEDF3] w-[65px] h-[75px] rounded-[10px] flex items-center justify-center text-[16px] font-semibold text-black">10 d</div>
                    <div className="bg-[#EBEDF3] w-[65px] h-[75px] rounded-[10px] flex items-center justify-center text-[16px] font-semibold text-black">13 h</div>
                    <div className="bg-[#EBEDF3] w-[65px] h-[75px] rounded-[10px] flex items-center justify-center text-[16px] font-semibold text-black">3 m</div>
                    <div className="bg-[#EBEDF3] w-[65px] h-[75px] rounded-[10px] flex items-center justify-center text-[16px] font-semibold text-black">60 s</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                {/* TODO: Add progress bar in here */}
                <span className="flex items-center gap-2 text-[#666666] font-light">
                  Sold: <b className="font-bold text-black text-[14px]">26/75</b>
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col md='2' className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center border-[#dddd] border-[.5px] rounded-md p-10 min-w-[215px] max-w-[215px] min-h-[170px] max-h-[170px]">
            <Image src={HeadPhoneImage} width={85} height={85} alt="product" />
          </div>
          <div className="flex items-center justify-center border-[#dddd] border-[.5px] rounded-md p-10 min-w-[215px] max-w-[215px] min-h-[170px] max-h-[170px]">
            <Image src={HeadPhoneImage} width={85} height={85} alt="product" />
          </div>
          <div className="flex items-center justify-center border-[#dddd] border-[.5px] rounded-md p-10 min-w-[215px] max-w-[215px] min-h-[170px] max-h-[170px]">
            <Image src={HeadPhoneImage} width={85} height={85} alt="product" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DealsOfTheDay;