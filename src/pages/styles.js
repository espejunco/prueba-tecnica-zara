import styled, { css } from "styled-components";
import { from } from "styles/media";

export const Container = styled.div``;

export const Main = styled.main``;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 1105px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  padding: 60px 24px;
  gap: 56px;

  ${from.tabletLandscape} {
    padding: 80px 24px;
  }

  ${from.laptop} {
    padding: 140px 24px;
  }
`;

export const ImagesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${from.laptop} {
    flex-direction: row;
    justify-content: stretch;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;
  background: url(${(props) => props.url ?? ""}) no-repeat center;
  background-size: contain;

  margin-block: 0 60px;

  ${from.tabletLandscape} {
    margin-block: 0 80px;
  }

  ${from.laptop} {
    margin-block: 0 140px;
  }
`;

export const DesktopVideosSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-height: 400px;

  video {
    width: 100%;
  }
`;

export const MobileVideosSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr
  justify-content: stretch; 
  gap: 16px;
  width: 100%
`;

export const VideoWrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  ${from.tabletLandscape} {
    height: 400px;
  }

  ${from.laptop} {
    height: 600px;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 0;
  }
`;
