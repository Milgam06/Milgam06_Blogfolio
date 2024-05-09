import { css } from "@emotion/react";
import { reset } from "./reset";

export const globalStyle = () => {
  return css`
    ${reset}

    * {
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }

    html {
      font-size: 14px;
      width: 100%;
      height: 100%;
    }

    html,
    body,
    #app,
    #root,
    #__next {
      width: 100%;
      height: 100%;
    }

    #app,
    #root,
    #__next {
      font-family: "Spoqa Han Sans Neo", "sans-serif";
      font-weight: 300;
      font-style: normal;
      letter-spacing: -0.03rem;
    }

    html,
    body {
      @media screen and (min-width: 2000px) {
        font-size: 16px;
      }

      @media screen and (max-width: 2000px) and (min-width: 1500px) {
        font-size: 16px;
      }

      @media screen and (max-width: 1500px) and (min-width: 1000px) {
        font-size: 16px;
      }

      @media screen and (max-width: 1000px) and (min-width: 700px) {
        font-size: 14px;
      }

      @media screen and (max-width: 700px) and (min-width: 500px) {
        font-size: 12px;
      }

      @media screen and (max-width: 500px) {
        font-size: 12px;
      }
    }
  `;
};
