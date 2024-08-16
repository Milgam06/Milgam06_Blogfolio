import { useState } from "react";
import { useColor } from "color-thief-react";

import { SectionLayout, Text } from "@/components";
import { useFadeInScroll, StoryProps } from "@/hooks";

import * as S from "./styled";
import { useEffect } from "react";

/**
 * @param title: highlight section title
 * @param content: highlight section content
 * @param filesUrl: highlight section image url
 */
export const HighlightSection: React.FC<StoryProps> = ({
  title,
  content,
  filesUrl,
}) => {
  const [basicColor, setBasicColor] = useState<string>("#fefefe ");
  const { fadeInScroll } = useFadeInScroll();
  const thumbnailImg = filesUrl[1];

  const { data, loading } = useColor(thumbnailImg, "hex");
  useEffect(() => {
    console.log(data, "data");
    if (!loading && data !== undefined) {
      setBasicColor(data);
    }
    console.log(basicColor, "basicColor");
  }, [data]);

  return (
    <>
      <SectionLayout fullScreen={true}>
        {!loading ? (
          <S.HighlightSectionContainer backgroundColor={basicColor}>
            <S.HighlightSectionContentContainer
              {...fadeInScroll({ delay: 0.06 })}
            >
              <S.HighlightSectionImageBanner>
                {filesUrl.slice(0, 4).map((img, i) => (
                  <S.HighlightSectionImage
                    key={i}
                    src={img}
                    alt={`${title}'s images`}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 1 }}
                  />
                ))}
              </S.HighlightSectionImageBanner>
              <S.HighlightSectionTextContainer>
                <Text size={4} weight={700} color="#fefefe">
                  {title}
                </Text>
                <Text size={1.8} weight={300} color="#fefefe">
                  {content}
                </Text>
              </S.HighlightSectionTextContainer>
            </S.HighlightSectionContentContainer>
          </S.HighlightSectionContainer>
        ) : (
          <></>
        )}
      </SectionLayout>
    </>
  );
};
