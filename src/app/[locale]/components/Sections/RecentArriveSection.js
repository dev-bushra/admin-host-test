import "@/app/[locale]/scss/sections/storiesSection.scss";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Button,
  Container,
  Row,
} from "react-bootstrap";
import ProductCard from "@/app/[locale]/components/ProductCard";

const RecentArriveSection = () => {
  const t = useTranslations("RecentArriveSection");

  const p2 = t("p2");
  const p4 = t("p4");
  const counter = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Container className="add-two-wrapper my-20">
      <Row className="w-full mb-10">
        <div className="flex items-center justify-between">
          <h1 className="main-title">{t("title")}</h1>
          <Button className="view-all-outline-btn">
            {t("viewAll")}
          </Button>
        </div>
      </Row>
      <Row className="flex flex-wrap items-start justify-between w-full">
        {counter && counter.map((item, index) => <ProductCard key={index} />)}
      </Row>
    </Container>
  );
};

export default RecentArriveSection;
