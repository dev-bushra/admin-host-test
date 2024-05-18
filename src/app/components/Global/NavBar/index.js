import '@/app/scss/components/navbar.scss'
import Image from 'next/image'

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

export default function Navbar () {
    return (
        <div className="navbar-wrapper">
            <div className="wrapper main-nav">
                <div className='left-side flex gap-6'>
                    <Image src={Logo} width={114} height={46} alt='find-main-logo'/>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <Image src={LocationIcon} width={24} height={24} alt='location-icon' />
                            <span className='text-xs text-white'>Delivery to</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='text-xs text-secondary'>Abu Dhabi Street 28 Al Mashreq</span>
                            <IoIosArrowDown size={16} />
                        </div>
                    </div>
                </div>
                <div className='right-side flex items-center'>
                    <Image src={ProfileIcon} width={24} height={24} alt='user-profile-icon' />
                    <hr className='divider' />
                    <Image src={NotificationIcon} width={24} height={24} alt='user-profile-icon' />
                    <hr className='divider' />
                    <Image src={CartIcon} width={24} height={24} alt='user-profile-icon' />
                    <hr className='divider' />
                    <Image src={FavoriteIcon} width={24} height={24} alt='user-profile-icon' />
                </div>
            </div>
            <div className="wrapper sub-nav relative">
                <div className='right-side flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <Image src={AllCategoriesIcon} width={24} height={24} alt='icon' />
                        <span>All categories</span>
                    </div>
                    <hr className='divider' />
                    <div className='flex items-center gap-2'>
                        <Image src={ThumpsUpIcon} width={24} height={24} alt='icon' />
                        <span>Best seller</span>
                    </div>
                    <hr className='divider' />
                    <div className='flex items-center gap-2'>
                        <Image src={StarFavIcon} width={24} height={24} alt='icon' />
                        <span>Most rated</span>
                    </div>
                    <hr className='divider' />
                    <div className='flex items-center gap-2'>
                        <Image src={SaleDiscountIcon} width={24} height={24} alt='icon' />
                        <span className='flex'>Offers 
                            <div className='flex items-center'>
                                <b className='ml-4 mr-1'>Premium</b>
                                <IoIosArrowDown size={12} />
                            </div>
                        </span>
                    </div>
                </div>
                <div className='left-side flex'>
                    <b className='mr-[6rem]'>Sell on</b>
                    <Image className='absolute bottom-0 right-[3rem]' src={VictorArtLogo} width={122} height={122} alt='victor-art-logo' />
                </div>
            </div>
        </div>
    )
}