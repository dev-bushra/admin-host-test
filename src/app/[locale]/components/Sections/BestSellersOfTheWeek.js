import "@/app/[locale]/scss/sections/storiesSection.scss";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Button,
  Container,
  Row,
} from "react-bootstrap";
import BestSellersOfTheWeekCard from "@/app/[locale]/components/BestSellersOfTheWeekCard";

// Assets
import { FaArrowRightLong } from "react-icons/fa6";

const BestSellersOfTheWeek = () => {
  const t = useTranslations("BestSellersOfTheWeek");

  const p2 = t("p2");
  const p4 = t("p4");
  const counter = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Container className="bg-[#1D1C22] p-5 rounded-[10px] w-full">
      <h1 className="text-[32px] text-white font-semibold">Best sellers of the week</h1>
      <div className="text-[#dddd] text-[12px] leading-normal font-light max-w-[20%]">Every week, our staff personally hand-pick some of the best new website themes from our collection.</div>
      <div className="flex items-start justify-start gap-2 mt-3">
        <div className="bg-[#2C6FF4] px-5 py-2 flex items-center justify-center text-center text-[14px] font-normal rounded-[8px] text-white min-w-fit">
          View All
          <FaArrowRightLong color="#fff" size={12} className="mx-2" />
        </div>

        <div className="flex items-start justify-around w-full ml-[6rem]">
          <BestSellersOfTheWeekCard />
          <BestSellersOfTheWeekCard />
          <BestSellersOfTheWeekCard />
        </div>
      </div>
    </Container>
  );
};

export default BestSellersOfTheWeek;
