import { MainSection, StepSection, IntroduceSection, TechStackSection, Text } from '@/components';
import { useLogin } from '@/hooks';
import { useContentTypeStore } from '@/store';
import { Stack } from '@mantine/core';
import { useCallback, useMemo } from 'react';
import { useDidMount } from 'rooks';

export const MainPage: React.FC = () => {
  const { contentType } = useContentTypeStore();
  const { handleValidateUser } = useLogin();

  const { isContentTypeBlog, isContentTypePortfolio } = useMemo(() => {
    const isContentTypeBlog = contentType === 'BLOG';
    const isContentTypePortfolio = contentType === 'PORTFOLIO';
    return { isContentTypeBlog, isContentTypePortfolio };
  }, [contentType]);

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
    <>
      {isContentTypeBlog && (
        <Stack w="100%" h="100%" justify="center" align="center">
          <Text size={10} weight={900}>
            Sorry, It's not ready
          </Text>
        </Stack>
      )}
      {isContentTypePortfolio && (
        <Stack>
          <MainSection />
          <IntroduceSection />
          <TechStackSection />
          <StepSection />
        </Stack>
      )}
    </>
  );
};
