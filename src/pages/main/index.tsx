import { useState, useEffect } from "react";

import { firebaseConfig } from "@/apis";

import {
  MainSection,
  StepSection,
  HighlightSection,
  IntroduceSection,
} from "@/components";
import { StoryProps, useStoryStore, useLogin } from "@/hooks";

export const MainPage: React.FC = () => {
  const [highlightStories, setHighlightStories] = useState<StoryProps[]>([]);
  const { handleValidateUser } = useLogin();
  const { getHighlightStories } = useStoryStore();
  const getSessionData = () => {
    const sessionData = sessionStorage.getItem(
      `firebase:authUser:${import.meta.env.VITE_FIREBASE_API_KEY}:[DEFAULT]`
    );
    if (sessionData) {
      const loginData = JSON.parse(sessionData);
      return loginData.uid;
    }
    return;
  };
  useEffect(() => {
    const fetchHighlightStories = async () => {
      const storedHighlightStories = await getHighlightStories();

      if (storedHighlightStories) {
        setHighlightStories(storedHighlightStories);
      }
    };
    fetchHighlightStories();

    try {
      const loginSession = getSessionData();
      if (loginSession) {
        handleValidateUser(loginSession);
      }
    } catch (error) {
      console.error(error);
    }
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
              isFirst={i === 1 ? true : false}
            />
          ))
        : null}
    </>
  );
};
