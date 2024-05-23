import "@/app/[locale]/scss/components/footer.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Assets
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import FooterBackground from "../../../../../public/footer/footer-bg.png";
import AppStore from "../../../../../public/footer/app-store-add.png";
import GooglePlay from "../../../../../public/footer/google-play-add.png";
import OfferCouponsIcon from "../../../../../public/footer/offers-coupons-icon.svg";
import SupportIcon from "../../../../../public/footer/support-icons.svg";
import TrackOrderIcon from "../../../../../public/footer/track-orders-icon.svg";
import WarningProductIcon from "../../../../../public/footer/warning-product-icon.svg";
import WeAcceptPaymentSectionIcons from "../../../../../public/footer/we-accept-payment-section-full-icons.png";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="footer-wrapper w-full items-center justify-center mt-10">
      
      <div className="top-footer min-w-full pt-[5rem] pb-[5rem] flex flex-wrap gap-y-5 items-center justify-between wrapper">
        <span className="text-[24px] font-normal text-white">
          Register with us to receive all new updates
        </span>

        <div className="form-group">
          <input
            type="email"
            className="form-control py-2 min-w-[420px] text-[#8C8C8C]"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[16px] font-semibold text-white">
            Follow us on :
          </span>
          <div className="flex items-center justify-center gap-2">
            <LiaFacebookSquare size={24} color="#fff" />
            <FaXTwitter size={24} color="#fff" />
            <IoLogoInstagram size={24} color="#fff" />
          </div>
        </div>
      </div>

      <div className="footer-links-wrapper wrapper py-5 bg-[#F0F0F0]">
        <div className="links-wrapper flex flex-wrap items-start justify-between gap-y-10">
          <div className="link-container">
            <h3 className="font-semibold text-[24px] mb-4">Customers Service</h3>
            <ul className="flex flex-col items-start justify-start gap-3 p-0">
              <li className="text-[14px] font-medium">Return and refund policy</li>
              <li className="text-[14px] font-medium">Intellectual property policy</li>
              <li className="text-[14px] font-medium">Shipping information</li>
              <li className="text-[14px] font-medium">Report suspicious activity</li>
            </ul>
          </div>
          <div className="link-container">
            <h3 className="font-semibold text-[24px] mb-4">Help</h3>
            <ul className="flex flex-col items-start justify-start gap-3 p-0">
              <li className="text-[14px] font-medium">Support Center and FAQs</li>
              <li className="text-[14px] font-medium">Purchase protection at Find</li>
              <li className="text-[14px] font-medium">Sell with Find</li>
            </ul>
          </div>
          <div className="link-container">
          <h3 className="font-semibold text-[24px] mb-4">Shop easier with Find</h3>
            <ul className="flex flex-col items-start justify-start gap-3 p-0">
              <li className="text-[14px] font-medium flex items-center gap-2"><Image src={TrackOrderIcon} width={24} height={24} alt="support-icon" />Track orders at any time</li>
              <li className="text-[14px] font-medium flex items-center gap-2"><Image src={WarningProductIcon} width={24} height={24} alt="support-icon" />Warning Product availability is limited</li>
              <li className="text-[14px] font-medium flex items-center gap-2"><Image src={OfferCouponsIcon} width={24} height={24} alt="support-icon" />Offers and coupons alerts</li>
            </ul>
          </div>
          <div className="link-container">
            <h3 className="font-semibold text-[24px] mb-4 flex items-center gap-2"><Image src={SupportIcon} width={24} height={24} alt="support-icon" />Support</h3>
            <ul className="flex flex-col items-start justify-start gap-3 p-0">
              <li className="text-[14px] font-medium flex items-center gap-2"><IoCallOutline size={24} />16999</li>
              <li className="text-[14px] font-medium flex items-center gap-2"><TfiEmail size={20} />Support@find.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="we-accept-payment wrapper flex flex-col items-center gap-2 mx-auto w-full bg-[#121A32] py-4">
        {/* <span className='text-[16px] font-semibold text-white text-start min-w-full'>We accept</span> */}
        <Image
          src={WeAcceptPaymentSectionIcons}
          width={565}
          height={40}
          alt="we-accept"
          className="text-center"
        />
      </div>
      <div className="bottom-footer flex flex-wrap items-center justify-center gap-5 py-4">
        <span className="text-[14px] text-[#121A32]">Advertising options</span>
        <span className="text-[14px] text-[#121A32]">Your privacy choices</span>
        <span className="text-[14px] text-[#121A32]">privacy policy</span>
        <span className="text-[14px] text-[#121A32]">terms of use</span>
        <span className="text-[14px] text-[#121A32] font-semibold">
          {" "}
          © 2024 Find.in.te{" "}
        </span>
      </div>
    </footer>
  );
}
