import '@/app/[locale]/scss/sections/storiesSection.scss'
import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import Link from "next/link";

// Assets
import NextArrowIcon from '../../../../../public/icons/categories/next-arrow-icon.svg'
import PreviousArrowIcon from '../../../../../public/icons/categories/previous-arrow-icon.svg'
import PhoneIcon from '../../../../../public/icons/categories/phone-icon.svg'
import CameraIcon from '../../../../../public/icons/categories/camera-icon.svg'
import ComputerIcon from '../../../../../public/icons/categories/computer-icon.svg'
import SmartWatchIcon from '../../../../../public/icons/categories/smart-watch-icon.svg'
import GamePadIcon from '../../../../../public/icons/categories/gamepad-icon.svg'
import HeadPhoneIcon from '../../../../../public/icons/categories/headphone-icon.svg'
import CamerasPhoto from '../../../../../public/icons/categories/Category-Camera.svg'
import ComputerPhoto from '../../../../../public/icons/categories/Category-Computer.svg'
import GamePadPhoto from '../../../../../public/icons/categories/Category-Gamepad.svg'
import HeadPhonesPhoto from '../../../../../public/icons/categories/Category-Headphone.svg'
import SmartWatchesPhoto from '../../../../../public/icons/categories/Category-Smartwatch.svg'
import PhonesPhoto from '../../../../../public/icons/categories/Category-phones.svg'

const BrowseByCategorySection = () => {
  const t = useTranslations('BrowseByCategorySection');
  const categories = [
    { name: 'Phones', icon: 'phone', link: '/products/phone'},
    { name: 'Computer', icon: 'computer', link: '/products/computer'},
    { name: 'Camera', icon: 'camera', link: '/products/camera'},
    { name: 'Smart Watch', icon: 'smart_watch', link: '/products/smart_watch'},
    { name: 'Game Pad', icon: 'game_pad', link: '/products/gamepad'},
    { name: 'Head Phones', icon: 'head_phones', link: '/products/headphones'},
    { name: 'Phones', icon: 'phone', link: '/products/phone'},
  ];

  // TODO: change this cat names to arabic as well through a function that read url path and check the current selected lang
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
    <div className="wrapper min-w-full max-w-full py-[5rem] flex flex-col items-start justify-start text-start">
      <div className="flex items-center justify-between w-full mb-10">
        <h1 className="main-title">{t('title')}</h1>
        <div className="flex items-center gap-2">
          <Image src={PreviousArrowIcon} width={46} height={46} alt="previous-arrow-icon" />
          <Image src={NextArrowIcon} width={46} height={46} alt="next-arrow-icon" />
        </div>
      </div>
      <div className="flex items-start justify-between w-full max-w-full overflow-x-auto">
      {categories && categories.map((category, index) => (
          <button 
          type="button"
          className="btn btn-outline-primary flex items-center justify-center category-btn  text-black hover:text-white"
          style={{borderColor: '#D0D3D8 !important'}}
          key={index}
        >
          <Link href={category.link} className="no-underline flex flex-col items-center justify-center text-center min-w-[145px] max-w-[145px] min-h-[120px] max-h-[120px] text-black hover:text-white">
          {renderIcon(category.icon)}
            <span className="text-center text-[14px] font-normal mt-1 no-underline text-black hover:text-white  ">{ category.name }</span>
          </Link>
        </button>
        ))}
      </div>
    </div>
  )
}

export default BrowseByCategorySection;