export enum ETechStack {
  LANGUAGE = 'language',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  QUERY = 'query',
  TOOL = 'tool',
  STYLE = 'style',
}

interface ITechStack {
  [ETechStack.LANGUAGE]: string[];
  [ETechStack.FRONTEND]: string[];
  [ETechStack.BACKEND]: string[];
  [ETechStack.DATABASE]: string[];
  [ETechStack.QUERY]: string[];
  [ETechStack.TOOL]: string[];
  [ETechStack.STYLE]: string[];
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
  techstack: ITechStack;
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
  techstack: {
    language: ['typescript', 'javascript', 'python'],
    frontend: ['react', 'react-native', 'next-js', 'vite'],
    backend: ['nodejs', 'nestjs'],
    database: ['postgresql', 'mysql', 'supabase'],
    query: ['graphql', 'rest-api'],
    style: ['mantine', 'styled-components', 'framer-motion', 'reanimated'],
    tool: [
      'notion',
      'github',
      'openai',
      'docker',
      'aws',
      'oracle',
      'prisma',
      'firebase',
      'google-analytics',
      'storybook',
      'figma',
      'postman',
      'cloudflare',
      'github-copilot',
      'vercel',
      'eslint',
      'prettier',
      'adobe-premiere',
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
