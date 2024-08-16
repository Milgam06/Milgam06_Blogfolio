import { useState } from "react";

import {
  MainSection,
  StepSection,
  HighlightSection,
  IntroduceSection,
} from "@/components";
import { StoryProps, useStoryStore } from "@/hooks";
import { useEffect } from "react";

export const MainPage: React.FC = () => {
  const [highlightStories, setHighlightStories] = useState<StoryProps[]>([]);
  const { getHighlightStories } = useStoryStore();
  useEffect(() => {
    const fetchHighlightStories = async () => {
      const storedHighlightStories = await getHighlightStories();

      if (storedHighlightStories) {
        setHighlightStories(storedHighlightStories);
      }
    };
    fetchHighlightStories();
    console.log("fetchHighlightStories", highlightStories);
  }, []);

  return (
    <>
      <MainSection />
      <IntroduceSection />
      <StepSection />
      {highlightStories
        ? highlightStories.map((stories, i) => (
            <HighlightSection
              key={i}
              title={stories.title}
              content={stories.content}
              filesUrl={stories.filesUrl}
            />
          ))
        : null}
    </>
  );
};
