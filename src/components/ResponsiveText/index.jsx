import Image from "next/image";
import { from, useMediaQuery } from "styles/media";

import { Component } from "./styles";

const ImageSvg = ({ url }) => {
  return <Image src={url} alt="Text" />;
};

export const ResponsiveText = (props) => {
  const isMobile = !useMediaQuery(from.tabletPortrait);
  const MobileText = props.mobileText;
  const DesktopText = props.desktopText;

  return <Component>{isMobile ? <MobileText /> : <DesktopText />}</Component>;
};
