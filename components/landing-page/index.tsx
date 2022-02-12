import React from "react";

import Welcome from "@components/landing-page/Welcome";
import Mission from "@components/landing-page/Mission";
import Discord from "@components/landing-page/Discord";
import Join from "@components/landing-page/Join";
import Team from "@components/landing-page/Team";

const index = () => {
  return (
    <>
      <Welcome />
      <Mission />
      <Discord />
      <Team />
      <Join />
    </>
  );
};

export default index;
