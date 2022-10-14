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
    src: images.nations,
    alt: 'Imagem do site jogo das nações',
    title: 'Jogo das nações',
    description:
      'Este projeto é uma page responsiva feita em react.js com o intuito de desenvolver um jogo de aposta onde é possível tentar adivinhar qual a nação do dia.',
    stack: 'React.js, React Redux e SCSS',
    libs: '',
    github: 'https://github.com/Lucal22/nations-game',
    website: 'https://nations-game.vercel.app/',
  },
  {
    src: images.blog,
    alt: 'Imagem do site Lucal Thoughts',
    title: 'Blog pessoal',
    description:
      'Projeto desenvolvido utilizando Typescript e Next.js que funciona como frontend de um blog',
    stack: 'Nexts.js, Typescript, Tailwind Css, GraphQL',
    libs: '',
    github: 'https://',
    website: '',
  },
];
export default projects;
