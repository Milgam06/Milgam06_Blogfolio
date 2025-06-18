import { ReactNode } from 'react';
import {
  SiCloudflare,
  SiCloudflareHex,
  SiDocker,
  SiDockerHex,
  SiEslint,
  SiEslintHex,
  SiExpress,
  SiExpressHex,
  SiFastapi,
  SiFastapiHex,
  SiFigma,
  SiFigmaHex,
  SiFirebase,
  SiFirebaseHex,
  SiFontawesome,
  SiFontawesomeHex,
  SiFramer,
  SiFramerHex,
  SiGithub,
  SiGithubcopilot,
  SiGithubcopilotHex,
  SiGithubHex,
  SiGoogleanalytics,
  SiGoogleanalyticsHex,
  SiGraphql,
  SiGraphqlHex,
  SiJavascript,
  SiJavascriptHex,
  SiMantine,
  SiMantineHex,
  SiMysql,
  SiMysqlHex,
  SiNestjs,
  SiNestjsHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiNotionHex,
  SiOpenai,
  SiOpenaiHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPrettier,
  SiPrettierHex,
  SiPrisma,
  SiPrismaHex,
  SiPython,
  SiPythonHex,
  SiReact,
  SiReactHex,
  SiStorybook,
  SiStorybookHex,
  SiStyledcomponents,
  SiStyledcomponentsHex,
  SiSupabase,
  SiSupabaseHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiVercelHex,
  SiVite,
  SiViteHex,
} from '@icons-pack/react-simple-icons';

import { INTRODUCE_SECTION_WHOAMI } from './introduce';

const { techStack } = INTRODUCE_SECTION_WHOAMI;

const { language, frontend, backend, database, query, tool, style } = techStack;

type IIconKey =
  | (typeof language)[number]
  | (typeof frontend)[number]
  | (typeof backend)[number]
  | (typeof database)[number]
  | (typeof query)[number]
  | (typeof tool)[number]
  | (typeof style)[number];

type IIconTable = {
  [key in IIconKey]: {
    icon: ReactNode;
    defaultColor?: string;
  };
};

export const IconTable: IIconTable = {
  Typescript: {
    icon: <SiTypescript size={60} color={SiTypescriptHex} />,
    defaultColor: SiTypescriptHex,
  },
  Javascript: {
    icon: <SiJavascript size={60} color={SiJavascriptHex} />,
    defaultColor: SiJavascriptHex,
  },
  Python: {
    icon: <SiPython size={60} color={SiPythonHex} />,
    defaultColor: SiPythonHex,
  },

  React: {
    icon: <SiReact size={60} color={SiReactHex} />,
    defaultColor: SiReactHex,
  },

  ReactNative: {
    icon: <SiReact size={60} color={SiReactHex} />,
    defaultColor: SiReactHex,
  },
  NextJS: {
    icon: <SiNextdotjs size={60} color={SiNextdotjsHex} />,
    defaultColor: SiNextdotjsHex,
  },
  Vite: {
    icon: <SiVite size={60} color={SiViteHex} />,
    defaultColor: SiViteHex,
  },
  NodeJS: {
    icon: <SiNodedotjs size={60} color={SiNodedotjsHex} />,
    defaultColor: SiNodedotjsHex,
  },
  NestJS: {
    icon: <SiNestjs size={60} color={SiNestjsHex} />,
    defaultColor: SiNestjsHex,
  },
  Express: {
    icon: <SiExpress size={60} color={SiExpressHex} />,
    defaultColor: SiExpressHex,
  },
  FastAPI: {
    icon: <SiFastapi size={60} color={SiFastapiHex} />,
    defaultColor: SiFastapiHex,
  },
  PostgreSQL: {
    icon: <SiPostgresql size={60} color={SiPostgresqlHex} />,
    defaultColor: SiPostgresqlHex,
  },
  MySQL: {
    icon: <SiMysql size={60} color={SiMysqlHex} />,
    defaultColor: SiMysqlHex,
  },
  Supabase: {
    icon: <SiSupabase size={60} color={SiSupabaseHex} />,
    defaultColor: SiSupabaseHex,
  },
  GraphQL: {
    icon: <SiGraphql size={60} color={SiGraphqlHex} />,
    defaultColor: SiGraphqlHex,
  },
  RestApi: {
    icon: 'RestApi',
  },
  Mantine: {
    icon: <SiMantine size={60} color={SiMantineHex} />,
    defaultColor: SiMantineHex,
  },
  StyledComponents: {
    icon: <SiStyledcomponents size={60} color={SiStyledcomponentsHex} />,
    defaultColor: SiStyledcomponentsHex,
  },
  FramerMotion: {
    icon: <SiFramer size={60} color={SiFramerHex} />,
    defaultColor: SiFramerHex,
  },
  Reanimated: {
    icon: 'Reanimated',
  },
  Fontawesome: {
    icon: <SiFontawesome size={60} color={SiFontawesomeHex} />,
    defaultColor: SiFontawesomeHex,
  },
  Notion: {
    icon: <SiNotion size={60} color={SiNotionHex} />,
    defaultColor: SiNotionHex,
  },
  GitHub: {
    icon: <SiGithub size={60} color={SiGithubHex} />,
    defaultColor: SiGithubHex,
  },
  OpenAI: {
    icon: <SiOpenai size={60} color={SiOpenaiHex} />,
    defaultColor: SiOpenaiHex,
  },
  Docker: {
    icon: <SiDocker size={60} color={SiDockerHex} />,
    defaultColor: SiDockerHex,
  },
  AWS: {
    icon: 'AWS',
  },
  Oracle: {
    icon: 'Oracle',
  },
  Prisma: {
    icon: <SiPrisma size={60} color={SiPrismaHex} />,
    defaultColor: SiPrismaHex,
  },
  Firebase: {
    icon: <SiFirebase size={60} color={SiFirebaseHex} />,
    defaultColor: SiFirebaseHex,
  },
  GoogleAnalytics: {
    icon: <SiGoogleanalytics size={60} color={SiGoogleanalyticsHex} />,
    defaultColor: SiGoogleanalyticsHex,
  },
  Storybook: {
    icon: <SiStorybook size={60} color={SiStorybookHex} />,
    defaultColor: SiStorybookHex,
  },
  Figma: {
    icon: <SiFigma size={60} color={SiFigmaHex} />,
    defaultColor: SiFigmaHex,
  },
  Postman: {
    icon: <SiPostman size={60} color={SiPostmanHex} />,
    defaultColor: SiPostmanHex,
  },
  Cloudflare: {
    icon: <SiCloudflare size={60} color={SiCloudflareHex} />,
    defaultColor: SiCloudflareHex,
  },
  Copilot: {
    icon: <SiGithubcopilot size={60} color={SiGithubcopilotHex} />,
    defaultColor: SiGithubcopilotHex,
  },
  Vercel: {
    icon: <SiVercel size={60} color={SiVercelHex} />,
    defaultColor: SiVercelHex,
  },
  ESLint: {
    icon: <SiEslint size={60} color={SiEslintHex} />,
    defaultColor: SiEslintHex,
  },
  Prettier: {
    icon: <SiPrettier size={60} color={SiPrettierHex} />,
    defaultColor: SiPrettierHex,
  },
};
