import { from, useMediaQuery } from "styles/media";

import {
  ImagesSection,
  ImageWrap,
  MobileImagesSection,
  FirstImage,
  SecondImage,
} from "./styles";

export const ScrollResponsiveLook = ({ image1, image2 }) => {
  const isMobile = !useMediaQuery(from.tabletPortrait);

  if (isMobile)
    return (
      <MobileImagesSection url={image1}>
        <FirstImage />
        <SecondImage url={image2} />
      </MobileImagesSection>
    );

  return (
    <ImagesSection>
      <ImageWrap url={image1} />
      <ImageWrap url={image2} />
    </ImagesSection>
  );
};
