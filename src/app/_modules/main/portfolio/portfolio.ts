import { Project, PortfolioLayout } from '@app/_models';

export const portfolio: Project[] = [
  {
    title: 'Centro Cultural Chacao',
    category: 'Culture and Arts',
    image: {
      url: './assets/portfolio/centro-cultural-chacao/cover.jpg',
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
      url: './assets/portfolio/dinbog-app/cover.jpg',
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
    references: [
      {
        text: 'App Store',
        url: 'https://apps.apple.com/us/app/dinbog/id1289437869',
        isApp: true
      },
      {
        text: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.ionicDinBog.myapp&hl=en#details-reviews',
        isApp: true
      }
    ]
  },
  {
    title: 'Yeipii',
    category: 'Payment gateway',
    image: {
      url: './assets/portfolio/yeipii/cover.jpg',
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
    references: [
      {
        text: 'yeipii.com',
        url: 'https://yeipii.com'
      }
    ]
  },
  {
    title: 'Turpial Development',
    category: 'Software factory',
    image: {
      url: './assets/portfolio/turpial-development/cover.jpg',
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
    references: [
      {
        text: 'turpialdev.com',
        url: 'https://turpialdev.com'
      }
    ]
  },
  {
    title: 'Exeter',
    category: 'Hotel administration',
    image: {
      url: './assets/portfolio/exeter/cover.jpg',
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
    references: null
  },
  {
    title: 'Gian Faraone',
    category: 'Music',
    image: {
      url: './assets/portfolio/gian-faraone/cover.jpg',
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
    references: [
      {
        text: 'gianfaraone.com',
        url: 'https://gianfaraone.com'
      }
    ]
  },
  {
    title: 'Dear Sinatra',
    category: 'Music',
    image: {
      url: './assets/portfolio/dear-sinatra/cover.jpg',
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
    references: [
      {
        text: 'dearsinatra.com',
        url: 'https://dearsinatra.com'
      }
    ]
  },
  {
    title: 'Espacio',
    category: 'Web administration',
    image: {
      url: './assets/portfolio/espacio/cover.jpg',
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
    references: [
      {
        text: 'espacio.me',
        url: 'https://espacio.me'
      }
    ]
  },
  {
    title: 'Finapp',
    category: 'Financial Administration',
    image: {
      url: './assets/portfolio/finapp/cover.jpg',
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
      url: './assets/portfolio/sinpote/cover.jpg',
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
    references: [
      {
        text: 'sinpote.com',
        url: 'https://sinpote.com'
      }
    ]
  },
  {
    title: 'Pago en tienda',
    category: 'Business administration',
    image: {
      url: './assets/portfolio/pago-en-tienda/cover.jpg',
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
    references: [
      {
        text: 'tienda.rappipay.com',
        url: 'https://tienda.rappipay.com'
      }
    ]
  },
  {
    title: 'The Grill Company',
    category: 'Business administration',
    image: {
      url: './assets/portfolio/the-grillcompany/cover.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2019, 9),
    framework: 'Angular 8',
    technologies: [
      'HTML',
      'SCSS',
      'Typescript',
      'Django Rest Framework',
      'Python',
      'Firebase',
      'responsive support'
    ],
    body: 'Tool to manage The Grill Company restaurants with inventory, costs, menu and customer management ',
  }
];
