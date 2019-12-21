import { PortfolioLayout, Project } from '@app/_models';

export const Library: Project[] = [
  {
    title: 'Gridout',
    category: 'Framework',
    image: {
      url: './assets/library/gridout/cover.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 9),
    technologies: [
      'CSS grid',
      'HTML',
      'CSS'
    ],
    body: `CSS grid framework for HTML frontend. With layout classes like grid, columns, buttons, fonts, alignment and
    more.`,
    references: [
      {
        text: 'Demo',
        url: 'https://gridout.tavoohoh.com'
      }
    ]
  },
  {
    title: 'Gs Player',
    category: 'Audio player',
    image: {
      url: './assets/library/gs-player/cover.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2019, 11),
    technologies: [
      'Angular ^8',
      'Typescript'
    ],
    body: `Simple music player user interface that easily adapts to any website interface.`,
    references: [
      {
        text: 'Demo',
        url: 'https://gs-player-demo.web.app/'
      },
      {
        text: 'NPM',
        url: 'https://www.npmjs.com/package/gs-player'
      },
      {
        text: 'Documentation',
        url: 'https://github.com/tavoohoh/gs-player/blob/master/README.md'
      }
    ]
  }
];
