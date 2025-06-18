export enum ETechStack {
  LANGUAGE = 'language',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  MIDDLEWARE = 'middleware',
  DATABASE = 'database',
  QUERY = 'query',
  STYLE = 'style',
  TOOL = 'tool',
}

export type ITechStackLanguage = 'Typescript' | 'Javascript' | 'Python';
export type ITechStackFrontend = 'React' | 'ReactNative' | 'NextJS' | 'Vite';
export type ITechStackBackend = 'NodeJS' | 'NestJS' | 'Express' | 'FastAPI';
export type ITechStackMiddleware = 'Axios' | 'Zustand' | 'Recoil' | 'ReactQuery' | 'Prisma' | 'ESLint' | 'Prettier';
export type ITechStackDatabase = 'PostgreSQL' | 'MySQL' | 'Supabase';
export type ITechStackQuery = 'GraphQL' | 'RestApi';
export type ITechStackStyle = 'Mantine' | 'StyledComponents' | 'FramerMotion' | 'Reanimated' | 'Fontawesome';
export type ITechStackTool =
  | 'Notion'
  | 'GitHub'
  | 'OpenAI'
  | 'Docker'
  | 'AWS'
  | 'Oracle'
  | 'Firebase'
  | 'GoogleAnalytics'
  | 'Storybook'
  | 'Figma'
  | 'Postman'
  | 'Cloudflare'
  | 'Copilot'
  | 'Vercel';

interface ITechStack {
  [ETechStack.LANGUAGE]: ITechStackLanguage[];
  [ETechStack.FRONTEND]: ITechStackFrontend[];
  [ETechStack.BACKEND]: ITechStackBackend[];
  [ETechStack.MIDDLEWARE]: ITechStackMiddleware[];
  [ETechStack.DATABASE]: ITechStackDatabase[];
  [ETechStack.QUERY]: ITechStackQuery[];
  [ETechStack.TOOL]: ITechStackTool[];
  [ETechStack.STYLE]: ITechStackStyle[];
}
export interface IAboutMeType {
  title: string[];
  descriptions: string[];
}

export interface IWhoamiType {
  nick: string;
  name: string;
  birth: string;
  role: string;
  nationality: string;
  email: string;
  github: string;
  aboutMe: IAboutMeType;
  techStack: ITechStack;
  login: string;
}

export const INTRODUCE_SECTION_WHOAMI: IWhoamiType = {
  nick: 'Milgam',
  birth: '2006.8.6 ~ ',
  name: 'YEOJUN',
  role: 'FullStack Developer',
  nationality: 'Korean',
  email: 'milgamfruit@gmail.com',
  github: 'https://github.com/milgam06',
  techStack: {
    language: ['Typescript', 'Javascript', 'Python'],
    frontend: ['React', 'ReactNative', 'NextJS', 'Vite'],
    backend: ['NodeJS', 'NestJS', 'Express', 'FastAPI'],
    middleware: ['Axios', 'Zustand', 'Recoil', 'ReactQuery', 'Prisma', 'ESLint', 'Prettier'],
    database: ['PostgreSQL', 'MySQL', 'Supabase'],
    query: ['GraphQL', 'RestApi'],
    style: ['Mantine', 'StyledComponents', 'FramerMotion', 'Reanimated', 'Fontawesome'],
    tool: [
      'Notion',
      'GitHub',
      'OpenAI',
      'Docker',
      'AWS',
      'Oracle',

      'Firebase',
      'GoogleAnalytics',
      'Storybook',
      'Figma',
      'Postman',
      'Cloudflare',
      'Copilot',
      'Vercel',
    ],
  },
  aboutMe: {
    title: ['FULL-STACK 개발자 박여준 입니다!'],
    descriptions: [
      '효율적이고 확장 가능한 서비스를 지향합니다!',
      '신선한 아이디어라면, 어디서든 도전합니다!',
      '개발을 통해 세상을 더 나은 곳으로 만들고 싶습니다.',
      '항상 배우고 성장하는 것을 즐깁니다.',
    ],
  },
  login: '/me',
};

export const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/milgam06';

const SEQUENCE_DELAY_TIME = 2000;

export const MAIN_SECTION_ROLE_SEQUENCE = [
  'Software Engineer',
  SEQUENCE_DELAY_TIME,
  'Frontend Developer',
  SEQUENCE_DELAY_TIME,
  'Backend Developer',
  SEQUENCE_DELAY_TIME,
  'Full Stack Developer',
  SEQUENCE_DELAY_TIME,
];
