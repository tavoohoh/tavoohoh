import { MetaTag, PageName } from './_models';


export const MetaTags: { [key: string]: MetaTag } = {
  [PageName.HOME]: {
    title: 'Gustavo Santamaría - Home',
    description: 'Graphic designer and full stack developer. Angular, Django and Node.'
  },
  [PageName.ABOUT_ME]: {
    title: 'Gustavo Santamaría - About me',
    description: 'Angular, React, Vue, Single SPA, Ionic, Flutter, Node, Django for web, mobile, tv, among other platforms'
  },
  [PageName.PORTFOLIO]: {
    title: 'Gustavo Santamaría - Portfolio',
    description: 'Web development and mobile projects using the best technological solutions'
  },
  [PageName.LIBRARIES]: {
    title: 'Gustavo Santamaría - Libraries',
    description: 'Technological solutions that I share with the world'
  }
};
