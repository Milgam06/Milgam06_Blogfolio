import { useCallback, useMemo } from 'react';
import { MotionProps } from 'framer-motion';
import { Stack, Divider } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';

import { BaseLayout, Text, TiltingCard } from '@/components';
import { WhoamiSquareImg } from '@/assets';
import { MAIN_SECTION_ROLE_SEQUENCE } from '@/constant';

export const MainSection: React.FC = () => {
  const handleClickLinkedIn = useCallback(() => {
    const linkedInUrl = 'https://www.linkedin.com/in/%EC%97%AC%EC%A4%80-%EB%B0%95-104377303/';
    window.open(linkedInUrl, '_blank');
  }, []);

  const handleClickEmail = useCallback(() => {
    const emailUrl = 'mailto:milgamfruit@gmail.com';
    window.open(emailUrl, '_blank');
  }, []);

  const handleClickPhone = useCallback(() => {
    const phoneUrl = 'tel:010-8838-1914';
    window.open(phoneUrl, '_blank');
  }, []);

  const fadeInAnimation: MotionProps = useMemo(() => {
    const animation: MotionProps = {
      initial: {
        opacity: 0,
        scale: 0.9,
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: 'easeOut',
          delay: 0.4,
        },
      },
    };
    return animation;
  }, []);
  return (
    <>
      <BaseLayout isFullWith={true} justify="center" align="center">
        <Stack w="100%" justify="center" align="center" gap="xl" pt={40}>
          <Stack justify="center" align="flex-start" gap="lg" px="xl" py="md">
            <Stack
              justify="center"
              align="center"
              gap="xl"
              styles={{
                root: {
                  flexDirection: 'row',
                },
              }}>
              <Text size={10} weight={700} animationProps={fadeInAnimation}>
                Hi, I'm
              </Text>
              <TiltingCard cardImgSrc={WhoamiSquareImg} animationProps={fadeInAnimation} />
              <Text size={10} weight={700} animationProps={fadeInAnimation}>
                Yeojun!
              </Text>
            </Stack>
            <TypeAnimation
              sequence={MAIN_SECTION_ROLE_SEQUENCE}
              repeat={Infinity}
              preRenderFirstString
              speed={20}
              deletionSpeed={50}
              style={{
                fontSize: '5rem',
                fontWeight: 100,
                color: '#4AF626',
              }}
            />
          </Stack>
          <Divider w="100%" size="sm" color="#000" />
          <Stack w="100%" justify="center" align="flex-start" gap="lg" px={80} py="xl">
            <Stack
              justify="center"
              align="center"
              gap="lg"
              onClick={handleClickLinkedIn}
              styles={{
                root: {
                  flexDirection: 'row',
                  cursor: 'pointer',
                },
              }}>
              <FontAwesomeIcon size="3x" icon={faLinkedin} color="#7e7e7e" />
              <Text size={2.8} weight={700} color="#7e7e7e">
                박여준
              </Text>
            </Stack>
            <Stack
              justify="center"
              align="center"
              gap="lg"
              onClick={handleClickEmail}
              styles={{
                root: {
                  flexDirection: 'row',
                  cursor: 'pointer',
                },
              }}>
              <FontAwesomeIcon size="3x" icon={faAt} color="#7e7e7e" />
              <Text size={2.8} weight={600} color="#7e7e7e">
                Milgamfruit
              </Text>
            </Stack>
            <Stack
              justify="center"
              align="center"
              gap="lg"
              onClick={handleClickPhone}
              styles={{
                root: {
                  flexDirection: 'row',
                  cursor: 'pointer',
                },
              }}>
              <FontAwesomeIcon size="3x" icon={faPhone} color="#7e7e7e" />
              <Text size={2.8} weight={600} color="#7e7e7e">
                010-8838-1914
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </BaseLayout>
    </>
  );
};
