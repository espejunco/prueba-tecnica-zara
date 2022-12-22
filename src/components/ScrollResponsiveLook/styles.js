import styled from "styled-components";
import { from } from "styles/media";

export const ImagesSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: stretch;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1200px;
  background: url(${(props) => props.url ?? ""}) no-repeat center;
  background-size: cover;

  ${from.tabletLandscape} {
    margin-block: 0 80px;
  }

  ${from.laptop} {
    margin-block: 0 140px;
  }
`;

export const MobileImagesSection = styled.section`
  width: 100%;
  height: 800px;
  margin-block: 0 60px;
  position: relative;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  background: url(${(props) => props.url ?? ""}) no-repeat center;
`;

export const FirstImage = styled.div`
  width: 100%;
  height: 800px;
  background: url(${(props) => props.url ?? ""}) no-repeat center;
  background-size: cover;
`;

export const SecondImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url ?? ""}) no-repeat center;
  background-size: cover;
`;
