import { Flex, Image, SegmentedControl } from '@mantine/core';
import { memo, useCallback, useMemo, useState } from 'react';
import { useContentTypeStore, IContentType } from '@/store';

import { useDidUpdate } from '@mantine/hooks';
import { LogoText_SuperSmall } from '@/assets';

type IContentTypeItemProps = {
  label: string;
  value: IContentType;
};

export const Header: React.FC = memo(() => {
  const [segmentItem, setSegmentItem] = useState<IContentType>('BLOG');

  const { setContentType } = useContentTypeStore();

  const ContentTypeItems: IContentTypeItemProps[] = useMemo(() => {
    const items: IContentTypeItemProps[] = [
      { label: '블로그', value: 'BLOG' },
      { label: '포트폴리오', value: 'PORTFOLIO' },
    ];
    return items;
  }, []);

  const handleSwitchContentType = useCallback((value: string) => {
    const currentContentType = value as IContentType;
    setSegmentItem(currentContentType);
  }, []);

  useDidUpdate(() => {
    setContentType({ contentType: segmentItem });
  }, [segmentItem]);

  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      pos="absolute"
      p={0}
      top={0}
      bg="#ffffff"
      styles={{
        root: {
          zIndex: 100,
        },
      }}>
      <Flex w={1200} justify="space-between" align="center" px="xl" py="xs">
        <Image src={LogoText_SuperSmall} p={0} />
        <SegmentedControl
          itemType="custom"
          value={segmentItem}
          onChange={handleSwitchContentType}
          data={ContentTypeItems}
          p={6}
          radius={12}
          color="#FF8C42"
          bg="#FCFCFC"
          styles={{
            root: {
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
            },
            label: {
              fontSize: 18,
              padding: '8px 14px',
            },
            indicator: {
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
            innerLabel: {
              fontWeight: 900,
            },
          }}
        />
      </Flex>
    </Flex>
  );
});
