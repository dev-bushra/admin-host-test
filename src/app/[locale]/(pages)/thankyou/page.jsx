import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const ThankYou = () => {
  const t = useTranslations("ThankYouPage");
  const description = t("description");
  return (
    <div className="min-h-screen bg-[#dddd] flex flex-col items-center justify-center">
      <h1 className="font-bold text-[32px] my-5">{t("title")}</h1>
      <div class="main-content">
        <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
        <p class="main-content__body text-center" data-lead-id="main-content-body" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <Link
        href="/"
        className="bg-[#4b7cf6dd] px-4 py-2 rounded-md text-white my-5 mb-10 no-underline"
      >
        {t("buttonText")}
      </Link>
    </div>
  );
};

export default ThankYou;
