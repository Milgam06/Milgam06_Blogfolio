import { MainSection, StepSection, IntroduceSection, TechStackSection } from '@/components';
import { useLogin } from '@/hooks';
import { Stack } from '@mantine/core';
import { useCallback } from 'react';
import { useDidMount } from 'rooks';

export const MainPage: React.FC = () => {
  const { handleValidateUser } = useLogin();

  const getSessionData = useCallback(() => {
    const sessionData = sessionStorage.getItem(`firebase:authUser:${import.meta.env.VITE_FIREBASE_API_KEY}:[DEFAULT]`);
    if (!sessionData) {
      return;
    }
    const loginData = JSON.parse(sessionData);
    return loginData.uid;
  }, []);

  useDidMount(() => {
    try {
      const loginSession = getSessionData();
      if (loginSession) {
        handleValidateUser(loginSession);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack>
      <MainSection />
      <IntroduceSection />
      <TechStackSection />
      <StepSection />
    </Stack>
  );
};
