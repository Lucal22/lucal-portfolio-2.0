import images from '../../assets/index';

const projects = [
  {
    src: images.portfolio,
    alt: 'Imagem da frontpage do portfolio',
    title: 'Portfolio desenvolvimento web',
    description:
      'Este projeto é uma page responsiva e mobile first, feita utilizando Typescript no Next.js com o intuito de apresentar alguns dos principais projetos desenvolvidos por mim durante meus estudos.',
    stack: 'Nexts.js, Typescript e Styled Component',
    libs: 'Framer motion, phorphor icons e react icons',
    github: 'https://github.com/Lucal22/lucal-portfolio-2.0',
    website: 'https://vercel.com/lucal22/portfolio-lucal',
  },
  {
    src: images.agenda,
    alt: 'Imagem da frontpage do projeto agenda',
    title: 'Agenda de contatos (CRUD)',
    description:
      'Este projeto é uma page responsiva e mobile first, feita utilizando React.js e backend feito em Node.js com o intuito de fazer um projeto com todas as funcionalidades do CRUD.',
    stack: 'React.js, Typescript, Node.js, Axios, Prisma e Styled Component',
    libs: 'React icons, react forms, yup e jwt',
    github: 'https://github.com/Lucal22/contact-frontend',
    website: 'https://agenda-m2t9nzti6-lucal22.vercel.app/',
  },
  {
    src: images.keeper,
    alt: 'Imagem do keeper app',
    title: 'Keeper app',
    description:
      'O objetivo deste projeto foi criar uma lista de tarefas utilizando reactjs. Foi feito no ambiente de desenvolvimento do site CodeSandbox seguindo o curso da Dr. Angela Yu chamado "The Complete 2022 Web Development Bootcamp".',
    stack: 'React.js e CSS',
    libs: 'Material UI',
    github: 'https://github.com/Lucal22/blog-strapi-api',
    website: 'https://codesandbox.io/s/github/Lucal22/Keeper-app',
  },
  {
    src: images.nations,
    alt: 'Imagem do site jogo das nações',
    title: 'Jogo das nações',
    description:
      'Este projeto é uma page responsiva feita em react.js com o intuito de desenvolver um jogo de aposta onde é possível tentar adivinhar qual a nação do dia.',
    stack: 'React.js, React Redux e SCSS',
    libs: 'Headlessui, Framer motion e Phosphor icons',
    github: 'https://github.com/Lucal22/nations-game',
    website: 'https://nations-game.vercel.app/',
  },
  {
    src: images.widget,
    alt: 'Imagem widget',
    title: 'Widget - NLW 8',
    description:
      'Um widget feito para envio de feedbacks utilizando typescript e nodejs, desenvolvido durante a semana NLW Return da Rocketseat.',
    stack:
      'Frontend(web): React.js, Typescript, Axios e Tailwind CSS. (Mobile): React Native, Styled Components. Backend: Node.js e Typescript  ',
    libs: 'Frontend: Headlessui, Axios, Phosphor icons. Backend: Express, CORS, Prisma, Nodemailer',
    github: 'https://github.com/Lucal22/blog-strapi-api',
    website: 'https://widget-project-nlw-8.vercel.app/',
  },
  {
    src: images.blog,
    alt: 'Imagem do site Lucal Thoughts',
    title: 'Blog pessoal - Frontend',
    description:
      'Projeto desenvolvido utilizando Typescript e Next.js que funciona como frontend de um blog.',
    stack: 'Nexts.js, Typescript, Tailwind Css, GraphQL',
    libs: 'Phosphor icons',
    github: 'https://github.com/Lucal22/lucal-thoughts',
    website: 'https://lucal-thoughts.vercel.app/',
  },
  {
    src: images.strapipage,
    alt: 'Imagem do strapi',
    title: 'Blog pessoal - Backend',
    description:
      'Backend feito utilizando strapi para ser consumido pelo frontend do blog.',
    stack: 'Strapi',
    libs: '',
    github: 'https://github.com/Lucal22/blog-strapi-api',
    website: '',
  },
];
export default projects;
