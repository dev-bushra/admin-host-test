import "@/app/[locale]/scss/components/bestSellersOfTheWeekCard.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

// Assets
import BestSellersOfTheWeekCardImage from "../../../../public/products/BestSellersOfTheWeekCardImage.png";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const BestSellersOfTheWeekCard = () => {
  const t = useTranslations('BestSellersOfTheWeekCard');
  const pathname = usePathname();
  const [favoritesToggler, setFavoritesToggler] = useState(false)

  return (
    <Card className="best-sellers-of-the-week-card">
      <Card.Body className="card-wrapper">
          <Image
            className=""
            src={BestSellersOfTheWeekCardImage}
            width={300}
            height={220}
            alt="product-image"
          />
          <div className="flex items-center justify-between my-3">
            <Card.Title className="product-name">Find Shop</Card.Title>
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="text-[12px] font-normal">Abo Dhabi</span>
              <span className="text-[#b6b6b6dd] text-[12px] font-light">Electronics section</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col items-start justify-start">
              <span className="text-[10px] text-[#8C8C8C] font-light">Within the last 30 days</span>
              <span className="text-[10px] text-[#8C8C8C] font-light">80% positive seller rating</span>
              <div className="flex items-center justify-start gap-1 mt-2">
                <FaStar size={18} color="#F19371" />
                <FaStar size={18} color="#F19371" />
                <FaStar size={18} color="#F19371" />
                <FaStar size={18} color="#F19371" />
                <FaStar size={18} color="#F19371" />
                <span className="font-light text-[10px] mx-1 text-[#8C8C8C]">(4.5)</span>
              </div>
            </div>
            <Button className="view-all-outline-btn">Preview</Button>
          </div>
      </Card.Body>
    </Card>
  );
};

export default BestSellersOfTheWeekCard;
