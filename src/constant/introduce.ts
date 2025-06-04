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

export interface WhoamiType {
  nick: string;
  name: string;
  birth: string;
  role: string;
  nationality: string;
  email: string;
  github: string;
  description: string;
  techstack: ITechStack;
  login: string;
}

export const INTRODUCE_SECTION_WHOAMI: WhoamiType = {
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
  description:
    '안녕하세요, 저는 프론트엔드와 백엔드를 모두 다룰 수 있는 풀스택 개발자입니다. 다양한 기술 스택을 활용하여 웹 애플리케이션을 개발하고 있습니다.',
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
