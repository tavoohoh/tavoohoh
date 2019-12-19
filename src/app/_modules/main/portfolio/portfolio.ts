import { Project, PortfolioLayout } from '@app/_models';

export const portfolio: Project[] = [
  {
    title: 'Centro Cultural Chacao',
    category: 'Culture and Arts',
    image: {
      url: './assets/portfolio/2016-01-Centro-Cultural-Chacao/cover_1.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2016, 1),
    framework: 'Wordpress',
    technologies: [
      'Photoshop',
      'Illustrator',
      'HTML',
      'CSS',
      'responsive support'
    ],
    body: `Website with cultural content, information about concerts, art exhibitions, dance, workshops, blog,news and
      events calendar.`
  },
  {
    title: 'Dinbog app',
    category: 'Social Network',
    image: {
      url: './assets/portfolio/2017-06-Dinbog-App/cover_1.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2017, 6),
    framework: 'Ionic 3',
    technologies: [
      'HTML',
      'SCSS',
      'Typescript',
      'Cordova plugins',
      'Django 1.8 Rest-Framework'
    ],
    body: `Social platform that allows artists to show their portfolio through multimedia content,
    apply for castings and participate in special events.`,
    link: [
      {
        name: 'App Store',
        url: 'https://apps.apple.com/us/app/dinbog/id1289437869',
        isApp: true
      },
      {
        name: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.ionicDinBog.myapp&hl=en#details-reviews',
        isApp: true
      }
    ]
  },
  {
    title: 'Yeipii',
    category: 'Payment gateway',
    image: {
      url: './assets/portfolio/2017-07-Yeipii/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2017, 7),
    framework: 'Angular JS',
    technologies: [
      'HTML',
      'Javascript',
      'CSS',
      'Responsive support'
    ],
    body: `Platform that allows you to manage money,
    add and withdraw it, make transfers to other accounts within the platform, make commercial payments.`,
    link: [
      {
        name: 'yeipii.com',
        url: 'https://yeipii.com'
      }
    ]
  },
  {
    title: 'Turpial Development',
    category: 'Software factory',
    image: {
      url: './assets/portfolio/2018-03-Turpial-Dev/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 3),
    framework: 'Jekyll',
    technologies: [
      'HTML',
      'SCSS',
      'Javascript',
      'Jquery',
      'Markdown',
      'Liquid',
      'animation support',
      'responsive support',
      'dynamic content'
    ],
    body: `Official website of the company Turpial Development.
    It has several sections: services, portfolio, team, jobs, contact, philosophy and blog.`,
    link: [
      {
        name: 'turpialdev.com',
        url: 'https://turpialdev.com'
      }
    ]
  },
  {
    title: 'Exeter',
    category: 'Hotel administration',
    image: {
      url: './assets/portfolio/2018-06-Exeter/cover_1.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 6),
    framework: 'Angular 6',
    technologies: [
      'HTML',
      'SCSS',
      'Typescript',
      'Django Rest Framework',
      'Python',
      'responsive support'
    ],
    body: 'Tool to manage hotels restaurants with inventory, costs, menu and ingredients management',
    link: null
  },
  {
    title: 'Gridout',
    category: 'Framework',
    image: {
      url: './assets/portfolio/2018-09-Gridout/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 9),
    framework: 'static HTML',
    technologies: [
      'CSS grid',
      'HTML',
      'CSS',
      'Javascript'
    ],
    body: `CSS grid framework for HTML frontend. With layout classes like grid, columns, buttons, fonts, alignment and
      more`,
    link: [
      {
        name: 'gridout.tavoohoh.com',
        url: 'https://gridout.tavoohoh.com'
      }
    ]
  },
  {
    title: 'Gian Faraone',
    category: 'Music',
    image: {
      url: './assets/portfolio/2018-10-Gian-Faraone/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2016, 1),
    framework: 'Wordpress',
    technologies: [
      'Photoshop',
      'Illustrator',
      'HTML',
      'CSS',
      'responsive support'
    ],
    body: 'Official Gian Faraone website, featuring his music, portfolio, blog, events and news',
    link: [
      {
        name: 'gianfaraone.com',
        url: 'https://gianfaraone.com'
      }
    ]
  },
  {
    title: 'Dear Sinatra',
    category: 'Music',
    image: {
      url: './assets/portfolio/2018-11-Dear-Sinatra/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 11),
    framework: 'Angular 7',
    technologies: [
      'Photoshop',
      'Illustrator',
      'HTML',
      'SCSS',
      'Typescript',
      'responsive support'
    ],
    body: 'Official Dear Sinatra web page, featuring  its music and social network links',
    link: [
      {
        name: 'dearsinatra.com',
        url: 'https://dearsinatra.com'
      }
    ]
  },
  {
    title: 'Espacio',
    category: 'Web administration',
    image: {
      url: './assets/portfolio/2018-12-Espacio/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 12),
    framework: 'Django 2',
    technologies: [
      'Django templates',
      'Django Rest-Framework',
      'Python',
      'HTML',
      'Javascript',
      'Jquery',
      'responsive support',
      'email support.'
    ],
    body: 'Administration tool for e-commerce, blogs, portfolios and small business',
    link: [
      {
        name: 'espacio.me',
        url: 'https://espacio.me'
      }
    ]
  },
  {
    title: 'Finapp',
    category: 'Financial Administration',
    image: {
      url: './assets/portfolio/2018-12-Finapp/cover_1.png',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 12),
    framework: 'Flutter',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Real Time Database'
    ],
    body: 'Financial administration tool'
  },
  {
    title: 'Sinpote',
    category: 'E-Commerce',
    image: {
      url: './assets/portfolio/2019-02-Sinpote/cover_1.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2019, 2),
    framework: 'Anuglar',
    technologies: [
      'HTML',
      'SCSS',
      'Typescript',
      'Django Rest Api'
    ],
    body: 'Business e-commerce featuring its products, services, cart, checkout and order management too',
    link: [
      {
        name: 'sinpote.com',
        url: 'https://sinpote.com'
      }
    ]
  },
  {
    title: 'Pago en tienda',
    category: 'Business administration',
    image: {
      url: '',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2019, 9),
    framework: 'Angular 8',
    technologies: [
      'HTML',
      'SCSS',
      'Typescript',
      'Node',
      'Firebase',
      'Docker'
    ],
    body: 'Manage your bussines with Rappi Pay',
    link: [
      {
        name: 'tienda.rappipay.com',
        url: 'https://tienda.rappipay.com'
      }
    ]
  }
];
