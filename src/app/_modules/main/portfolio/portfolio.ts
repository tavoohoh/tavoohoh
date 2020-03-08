import { Project, PortfolioLayout } from '@app/_models';

export const Portfolio: Project[] = [
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
    body: `Website with cultural content, information about concerts, art exhibitions, dance, workshops, blog, news and
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
    body: `Platform that allows you to manage money, add and withdraw it, make transfers to other accounts within the
    platform, make commercial payments...`,
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
      'Animations',
      'responsive support',
      'Gitlab Pages'
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
    title: 'IsHotel',
    category: 'Hotel administration',
    image: {
      url: './assets/portfolio/exeter/cover.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2018, 6),
    framework: 'Angular 6',
    technologies: [
      'Photoshop',
      'Illustrator',
      'HTML',
      'Typescript',
      'SCSS',
      'Python',
      'responsive support',
      'Django Rest Framework',
      'Firebase hosting'
    ],
    body: 'Tool to manage hotels restaurants with inventory, costs, menu and ingredients management.',
    references: null
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
      'responsive support',
      'Firebase hosting'
    ],
    body: 'Official Dear Sinatra web page, featuring its music and social network links.',
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
      'HTML',
      'Python',
      'Django',
      'Django templates',
      'Django Rest-Framework',
      'CPanel',
      'MySQL',
      'CSS',
      'Javascript',
      'Jquery',
      'responsive support'
    ],
    body: 'Administration tool for e-commerce, blogs, portfolios and small business.',
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
      'Photoshop',
      'Dart',
      'Firebase Real Time Database',
      'Firebase authentication'
    ],
    body: 'Financial administration tool.'
  },
  {
    title: 'Sinpote',
    category: 'E-Commerce',
    image: {
      url: './assets/portfolio/sinpote/cover.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2019, 2),
    framework: 'Anuglar 7',
    technologies: [
      'Photoshop',
      'Illustrator',
      'HTML',
      'SCSS',
      'Typescript',
      'Firebase hosting',
      'MySQL',
      'Django Rest Api'
    ],
    body: 'Business e-commerce featuring its products, services, cart, checkout and administrative site',
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
      'CI Pipelines',
      'Docker',
      'Firabase notifications',
      'Node',
      'PostgreSQL',
      'Custom libraries',
      'Docker'
    ],
    body: 'Manage business with Rappi Pay.',
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
      'Photoshop',
      'Illustrator',
      'HTML',
      'SCSS',
      'Typescript',
      'Django Rest Framework',
      'Python',
      'Firebase hosting',
      'responsive support'
    ],
    body: 'The Grill Company restaurant managing tool for inventory, cashier, checkout and customer management.',
  },
  {
    title: 'Gian Faraone',
    category: 'Music',
    image: {
      url: './assets/portfolio/gian-faraone/cover.jpg',
      layout: PortfolioLayout.horizontal
    },
    date: new Date(2019, 11),
    framework: 'Angular 8',
    technologies: [
      'Photoshop',
      'Illustrator',
      'HTML',
      'Typescript',
      'SASS',
      'responsive support',
      'Firebase functions',
      'Firebase firestore'
    ],
    body: 'Official Gian Faraone website, featuring his music, portfolio, blog, events, news and more',
    references: [
      {
        text: 'gianfaraone.com',
        url: 'https://gianfaraone.com'
      }
    ]
  },
];
