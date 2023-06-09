import styled, { css } from "styled-components";

import { gilroySemibold, gilroyBold, gilroyExtrabold } from "fonts";

import { IWindowWidth } from "./types";

const fontWeight600 = css`
  font-weight: 600;
  font-family: gilroy_semibold;
`;

export const Section = styled.section<IWindowWidth>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  ${({ theme, windowWidth }) => css`
    @font-face {
      font-family: gilroy_semibold;
      src: url(${gilroySemibold}) format("woff2");
    }

    @font-face {
      font-family: gilroy_bold;
      src: url(${gilroyBold}) format("woff2");
    }

    @font-face {
      font-family: gilroy_extrabold;
      src: url(${gilroyExtrabold}) format("woff2");
    }

    ${windowWidth < 767 &&
    theme.responsive.isMobile &&
    css`
      justify-content: center;
      align-items: center;
    `}

    ${theme.responsive.isMobile &&
    css`
      text-align: center;
    `}
  `}
`;

export const Offer = styled.div`
  max-width: 427px;
`;

export const StyleWebinar = styled.div`
  display: flex;

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      justify-content: center;
    `}
`;

export const TitleH2 = styled.h2<IWindowWidth>`
  padding: 35px 0;
  font-size: 77px;
  line-height: 20px;
  font-weight: 800;
  text-transform: uppercase;

  ${({ theme, windowWidth }) => css`
    font-family: gilroy_extrabold;
    color: ${theme.colors.red};

    ${windowWidth < 790 &&
    theme.responsive.isTablet &&
    css`
      font-size: 60px;
    `}

    ${theme.responsive.isMobile &&
    css`
      padding: 23px 0;
      font-size: 52px;
    `}
  `}
`;

export const StyleFromZero = styled.span`
  transform: rotate(-3.51deg);

  p {
    font-size: 23px;
    line-height: 29px;
    text-transform: uppercase;
    font-weight: 800;
    font-family: gilroy_extrabold;

    ${({ theme }) =>
      theme.responsive.isMobile &&
      css`
        width: 58px;
        font-size: 16px;
        line-height: 20px;
      `}
  }
`;

export const EasyStart = styled.h3<IWindowWidth>`
  ${fontWeight600};

  padding-left: 16px;
  font-size: 22px;
  line-height: 26px;

  ${({ theme, windowWidth }) => css`
    ${windowWidth < 790 &&
    theme.responsive.isTablet &&
    css`
      font-size: 18px;
    `}

    ${theme.responsive.isMobile &&
    css`
      padding-left: 12px;
      font-size: 15px;
      line-height: 18px;
    `}
  `}
`;

export const IntroStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AboutWebinar = styled.div<IWindowWidth>`
  padding-top: 20px;
  font-size: 18px;
  line-height: 26px;

  ${({ theme, windowWidth }) => css`
    ${windowWidth < 790 &&
    theme.responsive.isTablet &&
    css`
      width: 395px;
    `}

    ${theme.responsive.isMobile &&
    css`
      padding: 16px 0 20px;
      font-size: 14px;
      line-height: 20px;
    `}
  `}
`;

export const Span = styled.span`
  ${fontWeight600};
`;

export const SalarySpan = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: gilroy_bold;
  }
`;

export const Salary = styled.span`
  ${fontWeight600};

  margin-right: 8px;
`;

export const WithPotentialSalary = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.whiteBlue};
`;

export const ExperienceWrapper = styled.div`
  margin-top: 52px;

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      margin-top: 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
    `}
`;

export const StyledWord = styled.span`
  color: ${({ theme }) => theme.colors.whiteBlue};
`;

export const FrontEndDeveloper = styled.img`
  position: absolute;
  bottom: -31%;
  left: -28%;
`;

export const Html = styled.img`
  position: absolute;
  top: 4%;
  right: -25%;
`;

export const Css = styled.img`
  position: absolute;
  bottom: 52%;
  right: -14%;
`;

export const Js = styled.img`
  position: absolute;
  bottom: 42%;
  right: -26%;
`;

export const SublimeText = styled.img`
  position: absolute;
  bottom: 30%;
  right: -12%;
`;

export const VsCode = styled.img`
  position: absolute;
  bottom: 14%;
  right: -23%;
`;
