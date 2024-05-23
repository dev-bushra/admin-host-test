import "@/app/[locale]/scss/components/productCard.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

// Assets
import WatchProductImage from "../../../../public/products/watch-product.png";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  const t = useTranslations('ProductCard');
  const pathname = usePathname();
  const [favoritesToggler, setFavoritesToggler] = useState(false)

  return (
    <Card className="offers-card">
      <Card.Body className="card-wrapper">
        <div className="product-image-wrapper">
          <Image
            className=""
            src={WatchProductImage}
            width={256}
            height={220}
            alt="product-image"
          />
          <Button className="add-to-favorites-btn" onClick={() => {setFavoritesToggler(!favoritesToggler)}}>
            {favoritesToggler ? 
            <MdOutlineFavorite size={24} color="#F1352B" />
            :
            <GrFavorite size={24} color="#000" />
            }
          </Button>
          <div className="popularity-counter">
            <FaStar size={14} color="#F19371" />
            <span>4.5</span>
          </div>
        </div>
        <Card.Title className="product-name">
          Pull-Out Sofa - Practical & Versatile 2 Seater Charcol Grey 2.03m x
          2.24m x 66cm
        </Card.Title>
        <Card.Text className="price-details">
          <span className="price">400 AED</span>
          <span className="offer">
            <span className="old-price">500 AED</span>
            <span className="vat-offer">35% off</span>
          </span>
          <span className="sold-counter">50% {t('SoldRecently')} </span>
        </Card.Text>
      </Card.Body>
      <Button className="btn" variant="primary">
        <span className="text-[16px] font-bold w-fit">{t('AddToCard')}</span>
        <PiShoppingCartSimpleThin color="#fff" size={18} className="w-fit" />
      </Button>
    </Card>
  );
};

export default ProductCard;
