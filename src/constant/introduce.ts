export interface WhoamiType {
  nick: string;
  name: string;
  birth: string;
  role: string;
  nationality: string;
  email: string;
  github: string;
  login: string;
}

export const INTRODUCE_SECTION_WHOAMI: WhoamiType = {
  nick: 'Milgam',
  birth: '2006.8.6 ~ ',
  name: 'YEOJUN',
  role: 'Frontend Developer',
  nationality: 'Korean',
  email: 'milgamfruit@gmail.com',
  github: 'https://github.com/milgam06',
  login: '/me',
};

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
