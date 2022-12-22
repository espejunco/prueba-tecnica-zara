import { from, useMediaQuery } from "styles/media";

import { Component, Video } from "./styles";

const VideoComponent = ({ url }) => {
  return <Video type="video/mp4" src={url} autoPlay loop muted />;
};

export const ResponsiveVideo = ({ desktopUrl, mobileUrl }) => {
  const isMobile = !useMediaQuery(from.tabletPortrait);

  return (
    <Component>
      <VideoComponent url={isMobile ? mobileUrl : desktopUrl} />
    </Component>
  );
};
