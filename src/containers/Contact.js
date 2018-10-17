import React from "react";
import { withSiteData } from "react-static";
import Hero from "../components/hero";
import Content from "../components/content";
import { H2, H3 } from "../components/typography";

export default withSiteData(() => (
  <React.Fragment>
    <Hero>
      <Content>
        <H2>Contact</H2>
        <H3>> muhammad.mustadi@gmail.com</H3>
      </Content>
    </Hero>
  </React.Fragment>
));