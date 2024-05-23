"use client"
import '@/app/[locale]/scss/components/header.scss'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Assets
import Logo from '../../../../../public/logo.png'
import LocationIcon from '../../../../../public/icons/pin-sign-white.svg'
import { IoIosArrowDown } from "react-icons/io";
import ProfileIcon from '../../../../../public/icons/user-profile.svg'
import NotificationIcon from '../../../../../public/icons/bell-notification.svg'
import CartIcon from '../../../../../public/icons/shopping-cart.svg'
import FavoriteIcon from '../../../../../public/icons/heart-favorite.svg'
import AllCategoriesIcon from '../../../../../public/icons/all-categories.svg'
import ThumpsUpIcon from '../../../../../public/icons/thumps-up.svg'
import StarFavIcon from '../../../../../public/icons/star-favorite.svg'
import SaleDiscountIcon from '../../../../../public/icons/sale-discount.svg'
import VictorArtLogo from '../../../../../public/victore-art-find-adv.png'

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  // Current Selected Language form the URL
  console.log(pathname.slice(0,3));
  const handleLink = (href:any) => {
    console.log(href);
  }

  return (
    <header className='fixed w-full z-50'>
      <nav className="header-wrapper">
              <div className="wrapper main-nav">
                  <div className='left-side flex gap-6'>
                  <Link href={`${pathname.slice(0,3)}/`} className=' no-underline'>
                    <div className='logo'>
                      <Image src={Logo} width={114} height={46} alt='find-main-logo' onClick={()=>handleLink('/')}/>
                    </div>
                  </Link>
                      <div className='flex flex-col'>
                          <div className='flex gap-2'>
                              <Image src={LocationIcon} width={24} height={24} alt='location-icon' />
                              <span className='text-xs text-white'>{t('deliveryTo')}</span>
                          </div>
                          <div className='flex items-center gap-1'>
                              <span className='text-xs text-secondary'>{t('location')}</span>
                              <IoIosArrowDown size={16} />
                          </div>
                      </div>
                  </div>
                  <div className='right-side flex items-center'>
                  <Link href={`${pathname.slice(0,3)}/`} className='text-white no-underline'>{t('home')}</Link>
                      <hr className='divider' />
                  <Link href={`${pathname.slice(0,3)}/thankyou`} className='text-white no-underline'>{t('thankyou')}</Link>
                      <hr className='divider' />
                      <Image src={ProfileIcon} width={24} height={24} alt='user-profile-icon' />
                      <hr className='divider' />
                      <Image src={NotificationIcon} width={24} height={24} alt='user-profile-icon' />
                      <hr className='divider' />
                      <Image src={CartIcon} width={24} height={24} alt='user-profile-icon' />
                      <hr className='divider' />
                      <Image src={FavoriteIcon} width={24} height={24} alt='user-profile-icon' />
                      <hr className='divider' />
                      <LocalSwitcher />
                  </div>
              </div>
              <div className="wrapper sub-nav relative">
                  <div className='right-side flex items-center gap-5'>
                      <div className='flex items-center gap-2'>
                          <Image src={AllCategoriesIcon} width={24} height={24} alt='icon' />
                          <span>{t('allCategories')}</span>
                      </div>
                      <hr className='divider' />
                      <div className='flex items-center gap-2'>
                          <Image src={ThumpsUpIcon} width={24} height={24} alt='icon' />
                          <span>{t('bestSeller')}</span>
                      </div>
                      <hr className='divider' />
                      <div className='flex items-center gap-2'>
                          <Image src={StarFavIcon} width={24} height={24} alt='icon' />
                          <span>{t('mostRated')}</span>
                      </div>
                      <hr className='divider' />
                      <div className='flex items-center gap-2'>
                          <Image src={SaleDiscountIcon} width={24} height={24} alt='icon' />
                          <span className='flex'>
                            {t('offers')} 
                              <div className='flex items-center'>
                                  <b className='ml-4 mr-1'>{t('premium')}</b>
                                  <IoIosArrowDown size={12} />
                              </div>
                          </span>
                      </div>
                  </div>
                  <div className='left-side flex'>
                      <b className={`${pathname.slice(0,3)==='/ar'?'ml-[6rem]':'mr-[6rem]'}`}>{t('sellOn')}</b>
                      <Image className={`absolute bottom-0 ${pathname.slice(0,3)==='/ar'?'left-[3rem]':'right-[3rem]'}`} src={VictorArtLogo} width={122} height={122} alt='victor-art-logo' />
                  </div>
              </div>
          </nav>
    </header>
  );
}
