import { memo } from 'react';

import { TechStackBox } from '@/components/common';
import { BaseLayout } from '@/components/layouts';
import { IconTable, INTRODUCE_SECTION_WHOAMI } from '@/constant';

export const TechStackSection: React.FC = memo(() => {
  const { language, frontend, backend, style, query, database, tool } = INTRODUCE_SECTION_WHOAMI.techstack;

  return (
    <>
      <BaseLayout isFullWidth>
        {language.map((languageTechStack) => {
          return <TechStackBox key={languageTechStack} techStack={languageTechStack} />;
        })}
      </BaseLayout>
    </>
  );
});
