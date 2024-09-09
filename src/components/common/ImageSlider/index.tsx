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
            <S.ImageSliderContentWrapper
              key={i}
              src={image}
              alt="이미지가 불러와지지 못했어요ㅠㅠ"
            />
          ))}
        </Tiker>
      </S.ImageSliderWrapper>
    </>
  );
};
