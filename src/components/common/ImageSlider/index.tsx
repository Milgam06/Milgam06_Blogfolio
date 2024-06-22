import Tiker from "framer-motion-ticker";

import * as S from "./styled";

import { NewJ, NewJ2, NewJ3, NewJ4, NewJ5, NewJ6 } from "@/assets";

export const ImageSlider = () => {
  const images = [NewJ, NewJ2, NewJ3, NewJ4, NewJ5, NewJ6];
  return (
    <>
      <S.ImageSliderWrapper>
        <Tiker duration={50} isPlaying={false}>
          {images.map((image, i) => (
            <S.ImageSliderContentWrapper key={i} src={image} />
          ))}
        </Tiker>
      </S.ImageSliderWrapper>
    </>
  );
};
