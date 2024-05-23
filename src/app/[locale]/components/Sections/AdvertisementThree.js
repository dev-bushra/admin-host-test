import "@/app/[locale]/scss/globals.scss";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

// Assets
import AdvertisementThreeImage from "../../../../../public/advertisement-three-full.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import PlayIcon from "../../../../../public/icons/play-icon.png";

const AdvertisementThree = () => {
  const t = useTranslations("AdvertisementThree");

  // const p2 = t("p2");

  return (
    <Container className="advertisement-three-wrapper w-full min-h-[5rem] my-5">
      <Row className=" w-full rounded-[20px]">
        <Col
          md="12"
          className="advertisement-three-wrapper"
        ><Image src={AdvertisementThreeImage} width={1200} height={140} alt="AdvertisementThreeImage" />
          </Col>
      </Row>
    </Container>
  );
};

export default AdvertisementThree;
