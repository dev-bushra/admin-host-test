import "@/app/[locale]/scss/globals.scss";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";

// Assets
import OurCustomersIcon from "../../../../../public/popularity-counter/our-coustomer-counter-icon.svg";
import OurProductsIcon from "../../../../../public/popularity-counter/our-proucts-counter-icon.svg";
import OurStoreIcon from "../../../../../public/popularity-counter/our-store-counter-icon.svg";

const PopularityCounterSection = () => {
  // const t = useTranslations("PopularityCounterSection");

  // const p2 = t("p2");

  return (
    <Container className="my-5 w-full">
      <Row className="w-full justify-content-around">
        <Col md="3" className="flex flex-col items-center justify-center text-center gap-4">
          <Image
            src={OurCustomersIcon}
            width={100}
            height={100}
            alt="our-customers-icon"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-[36px]">104,560</span>
            <span className="font-normal text-[20px]">Our Customer</span>
          </div>
        </Col>
        <Col md="3" className="flex flex-col items-center justify-center text-center gap-4">
          <Image
            src={OurProductsIcon}
            width={100}
            height={100}
            alt="our-customers-icon"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-[36px]">104,560</span>
            <span className="font-normal text-[20px]">Our Products</span>
          </div>
        </Col>
        <Col md="3" className="flex flex-col items-center justify-center text-center gap-4">
          <Image
            src={OurStoreIcon}
            width={100}
            height={100}
            alt="our-customers-icon"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold text-[36px]">104,560</span>
            <span className="font-normal text-[20px]">Our Store</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularityCounterSection;
