import { Head } from "components/Head";
import { ResponsiveVideo } from "components/ResponsiveVideo";
import { ScrollResponsiveLook } from "components/ScrollResponsiveLook";
import { ResponsiveText } from "components/ResponsiveText";
import { from, useMediaQuery } from "styles/media";

// Main video urls
import MobileMainVideo from "assets/video/portrait/aw22-man-studio-nicholson.layout_videomain02.portrait.default.mp4";
import DesktopMainVideo from "assets/video/lanscape/aw22-man-studio-nicholson.layout-video_main_02.1920.mp4";

// First text
import MobileFirstText from "assets/texts/aw22-man-studio-nicholson_001copy.svg";
import DesktopFirstText from "assets/texts/aw22-man-studio-nicholson_001.svg";

// Logo text
import MobileLogoText from "assets/texts/logo01copy.svg";
import DesktopLogoText from "assets/texts/logo01.svg";

// Second text
import MobileSecondText from "assets/texts/aw22-man-studio-nicholson_002copy.svg";
import DesktopSecondText from "assets/texts/aw22-man-studio-nicholson_002.svg";

// Third text
import MobileThirdText from "assets/texts/aw22-man-studio-nicholson_003.svg";
import DesktopThirdText from "assets/texts/aw22-man-studio-nicholson_003.svg";

// First Look Image
import FirstLookImage1 from "assets/imgs/Look25.png";
import FirstLookImage2 from "assets/imgs/Look26.png";
import FirstLookImage3 from "assets/imgs/Look27.png";

// Second Look Image
import SecondLookImage1 from "assets/imgs/Look28.png";
import SecondLookImage2 from "assets/imgs/Look29.png";
import SecondLookImage3 from "assets/imgs/Look30.png";

// Third Look Image
import ThirdLookImage1 from "assets/imgs/Look31.png";
import ThirdLookImage2 from "assets/imgs/Look32.png";
import ThirdLookImage3 from "assets/imgs/Look33.png";

// Fourth Look Image
import FourthLookImage1 from "assets/imgs/Look34.png";
import FourthLookImage2 from "assets/imgs/Look35.png";
import FourthLookImage3 from "assets/imgs/Look36.png";

// Desktop Videos presentation
import LanscapeVideo1 from "assets/video/lanscape/aw22-man-studio-nicholson.layout_video01.portrait.default.mp4";
import LanscapeVideo2 from "assets/video/lanscape/aw22-man-studio-nicholson.layout_video02.portrait.default.mp4";
import LanscapeVideo3 from "assets/video/lanscape/aw22-man-studio-nicholson.layout_video03.portrait.default.mp4";
import LanscapeVideo4 from "assets/video/lanscape/aw22-man-studio-nicholson.layout_video04.portrait.default.mp4";
import LanscapeVideo5 from "assets/video/lanscape/aw22-man-studio-nicholson.layout_video05.portrait.default.mp4";

// Mobile Videos presentation
import PortraitVideo1 from "assets/video/portrait/aw22-man-studio-nicholson.layout_video06.portrait.default.mp4";
import PortraitVideo2 from "assets/video/portrait/aw22-man-studio-nicholson.layout_video07.portrait.default.mp4";
import PortraitVideo3 from "assets/video/portrait/aw22-man-studio-nicholson.layout_video08.portrait.default.mp4";
import PortraitVideo4 from "assets/video/portrait/aw22-man-studio-nicholson.layout_video09.portrait.default.mp4";

import {
  Container,
  DesktopVideosSection,
  ImagesSection,
  ImageWrap,
  Main,
  MobileVideosSection,
  Section,
  VideoWrap,
} from "./styles";

export default function Home() {
  const isMobile = !useMediaQuery(from.tabletPortrait);

  return (
    <Container>
      <Head title="Studio Nicholson + Zara" />
      <Main>
        <ResponsiveVideo
          desktopUrl={DesktopMainVideo}
          mobileUrl={MobileMainVideo}
        />

        <Section>
          <ResponsiveText
            desktopText={DesktopFirstText}
            mobileText={MobileFirstText}
          />

          <ResponsiveText
            desktopText={DesktopLogoText}
            mobileText={MobileLogoText}
          />
        </Section>

        <ScrollResponsiveLook
          image1={FirstLookImage1}
          image2={FirstLookImage2}
        />
        <ImageWrap url={FirstLookImage3} />

        <ScrollResponsiveLook
          image1={SecondLookImage1}
          image2={SecondLookImage2}
        />
        <ImageWrap url={SecondLookImage3} />

        {isMobile ? (
          <MobileVideosSection>
            <VideoWrap>
              <video src={PortraitVideo1} autoPlay loop muted />
            </VideoWrap>
            <VideoWrap>
              <video src={PortraitVideo2} autoPlay loop muted />
            </VideoWrap>
            <VideoWrap>
              <video src={PortraitVideo3} autoPlay loop muted />
            </VideoWrap>
            <VideoWrap>
              <video src={PortraitVideo4} autoPlay loop muted />
            </VideoWrap>
          </MobileVideosSection>
        ) : (
          <DesktopVideosSection>
            <VideoWrap>
              <video
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={LanscapeVideo1}
                muted
              />
            </VideoWrap>
            <VideoWrap>
              <video
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={LanscapeVideo2}
                muted
              />
            </VideoWrap>
            <VideoWrap>
              <video
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={LanscapeVideo3}
                muted
              />
            </VideoWrap>
            <VideoWrap>
              <video
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={LanscapeVideo4}
                muted
              />
            </VideoWrap>
            <VideoWrap>
              <video
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={LanscapeVideo5}
                muted
              />
            </VideoWrap>
          </DesktopVideosSection>
        )}

        <Section>
          <ResponsiveText
            desktopText={DesktopSecondText}
            mobileText={MobileSecondText}
          />

          <ResponsiveText
            desktopText={DesktopThirdText}
            mobileText={MobileThirdText}
          />
        </Section>

        <ScrollResponsiveLook
          image1={ThirdLookImage1}
          image2={ThirdLookImage2}
        />
        <ImageWrap url={ThirdLookImage3} />

        <ScrollResponsiveLook
          image1={FourthLookImage1}
          image2={FourthLookImage2}
        />
        <ImageWrap url={FourthLookImage3} />
      </Main>
    </Container>
  );
}
