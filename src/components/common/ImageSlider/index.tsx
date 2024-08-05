import Tiker from "framer-motion-ticker";

import * as S from "./styled";

export interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <>
      <S.ImageSliderWrapper>
        <Tiker duration={20} isPlaying={false}>
          {images.map((image, i) => (
            <S.ImageSliderContentWrapper key={i} src={image} />
          ))}
        </Tiker>
      </S.ImageSliderWrapper>
    </>
  );
};
