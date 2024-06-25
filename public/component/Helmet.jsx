import React from "react";
import { Helmet } from "react-helmet";

const SeoHelmet = ({ pagetitle, description, keywords }) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{pagetitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default SeoHelmet;
