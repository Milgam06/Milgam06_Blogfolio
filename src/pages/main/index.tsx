import { useState, useEffect } from 'react';

import { MainSection, StepSection, IntroduceSection, TechStackSection } from '@/components';
import { StoryProps, useStoryStore, useLogin } from '@/hooks';
import { Stack } from '@mantine/core';

export const MainPage: React.FC = () => {
  const [highlightStories, setHighlightStories] = useState<StoryProps[]>([]);
  const { handleValidateUser } = useLogin();
  const { getHighlightStories } = useStoryStore();
  const getSessionData = () => {
    const sessionData = sessionStorage.getItem(`firebase:authUser:${import.meta.env.VITE_FIREBASE_API_KEY}:[DEFAULT]`);
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
    <Stack>
      <MainSection />
      <IntroduceSection />
      <TechStackSection />
      <StepSection />
    </Stack>
  );
};
