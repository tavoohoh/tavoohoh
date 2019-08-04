import { Project } from '@app/_models';

export const projects: Project[] = [
  {
    title: 'Centro Cultural Chacao',
    category: 'Culture and Arts',
    layout: 'cover',
    color: [
      '#000000',
      '#ffffff',
      '#2680c6'
    ],
    images: [
      '/assets/portfolio/2016-01-Centro-Cultural-Chacao/cover_1.jpg'
    ],
    date: new Date(2016, 1),
    framework: 'Wordpress',
    technologies: 'Photoshop, Illustrator, HTML, CSS, responsive support.',
    body: 'Website with cultural content, information about concerts, art exhibitions, dance, workshops, blog, news and events calendar.',
    link: [
      'centroculturalchacao.com',
      'https://centroculturalchacao.com'
    ]
  },
  {
    title: 'Dear Sinatra',
    category: 'Music',
    layout: 'contain',
    color: [
      '#000000',
      '#ffffff',
      '#646f6f'
    ],
    images: [
      '/assets/portfolio/2016-10-Dear-Sinatra/cover_1.jpg'
    ],
    date: new Date(2016, 10),
    framework: 'static HTML.',
    technologies: 'Photoshop, HTML, CSS, Javascript, responsive support, YouTube Api support.',
    body: 'Promotional music site to feature artist’s music, links to social network and contact information',
    link: [
      'dearsinatra.com',
      'https://dearsinatra.com'
    ]
  },
  {
    title: 'Skat by 20/20',
    category: 'Administration',
    layout: 'two_top',
    color: [
      '#000000',
      '#000000',
      '#76d8e1'
    ],
    images: [
      '/assets/portfolio/2017-03-Skat/cover_1.jpg',
      '/assets/portfolio/2017-03-Skat/cover_2.jpg'
    ],
    date: new Date(2017, 3),
    framework: 'Django 1.8',
    technologies: 'Photoshop, HTML, CSS, Javascript, Jquery, Bootstrap 3, Core UI, Python,responsive support.',
    body: 'Administration system for medical offices, with inventory module, patients, appointments and payment.',
    link: null
  },
  {
    title: 'Dinbog app',
    category: 'Social Network',
    layout: 'two_side',
    color: [
      '#000000',
      '#ffffff',
      '#2680c6'
    ],
    images: [
      '/assets/portfolio/2017-06-Dinbog-App/cover_1.jpg',
      '/assets/portfolio/2017-06-Dinbog-App/cover_2.jpg'
    ],
    date: new Date(2017, 6),
    framework: 'Ionic 3',
    technologies: 'HTML, SCSS, Typescript, Cordova plugins,Django 1.8 Rest-Framework.',
    body: `Social platform that allows artists to show their portfolio through multimedia content,
    apply for castings and participate in special events.`,
    link: [
      'Available in the App Storeand Play Store'
    ]
  },
  {
    title: 'Yeipii',
    category: 'Payment gateway',
    layout: 'two_top',
    color: [
      '#000000',
      '#000000',
      '#d6e2e1'
    ],
    images: [
      '/assets/portfolio/2017-07-Yeipii/cover_1.png',
      '/assets/portfolio/2017-07-Yeipii/cover_2.png'
    ],
    date: new Date(2017, 7),
    framework: 'Angular JS',
    technologies: 'HTML, Javascript, CSS, Responsive support.',
    body: `Platform that allows you to manage money,
    add and withdraw it, make transfers to other accounts within the platform, make commercial payments.`,
    link: [
      'yeipii.com',
      'https://yeipii.com'
    ]
  },
  {
    title: 'Steam Energy',
    category: 'Administration',
    layout: 'cover',
    color: [
      '#000000',
      '#ffffff',
      '#2680c6'
    ],
    images: [
      '/assets/portfolio/2017-10-Steam-Energy/cover_1.jpg'
    ],
    date: new Date(2017, 10),
    framework: 'Angular 4 and Django Rest Framework',
    technologies: 'HTML, CSS, Typescript, Canvas, Bootstrap 4, Python, HTML to PDF support, responsive support',
    body: `Platform that allows you to manage money, add and withdraw it, make transfers to other accounts within the platform,
    make commercial payments.Administration tool for industrial systems that produce steam for different purposes.`,
    link: null
  },
  {
    title: 'Pablo Canelones',
    category: 'Photography',
    layout: 'two_top_over',
    color: [
      '#ffffff',
      '#ffffff',
      '#646f6f'
    ],
    images: [
      '/assets/portfolio/2018-03-Pablo-Canelones/cover_1.jpg',
      '/assets/portfolio/2018-03-Pablo-Canelones/cover_2.jpg'
    ],
    date: new Date(2018, 3),
    framework: 'Wordpress',
    technologies: 'Photoshop, Illustrator, HTML, CSS, Responsive support',
    body: 'Photographer portfolio, with about and contact pages',
    link: [
      'pablocanephotography.com',
      'https://pablocanephotography.com'
    ]
  },
  {
    title: 'Turpial Development',
    category: 'Software factory',
    layout: 'two_top_over',
    color: [
      '#000000',
      '#ffffff',
      '#2680c6'
    ],
    images: [
      '/assets/portfolio/2018-03-Turpial-Dev/cover_1.png',
      '/assets/portfolio/2018-03-Turpial-Dev/cover_2.png'
    ],
    date: new Date(2018, 3),
    framework: 'Jekyll',
    technologies: 'HTML, SCSS, Javascript, Jquery, Markdown, Liquid, animation support, responsive support, dynamic content',
    body: `Official website of the company Turpial Development.
    It has several sections: services, portfolio, team, jobs, contact, philosophy and blog.`,
    link: [
      'turpialdev.com',
      'https://turpialdev.com'
    ]
  },
  {
    title: 'Exeter',
    category: 'Hotel administration',
    layout: 'two_top',
    color: [
      '#ffffff',
      '#ffffff',
      '#3a3c42'
    ],
    images: [
      '/assets/portfolio/2018-06-Exeter/cover_1.jpg',
      '/assets/portfolio/2018-06-Exeter/cover_2.jpg'
    ],
    date: new Date(2018, 6),
    framework: 'Angular 6',
    technologies: 'HTML, SCSS, Typescript, Django Rest Framework, Python, responsive support',
    body: 'Tool to manage hotels restaurants with inventory, costs, menu and ingredients management',
    link: null
  },
  {
    title: 'El Farolito',
    category: 'Food',
    layout: 'contain',
    color: [
      '#000000',
      '#000000',
      '#d6e2e1'
    ],
    images: [
      '/assets/portfolio/2018-09-El-Farolito/cover_1.png'
    ],
    date: new Date(2018, 9),
    framework: 'static HTML',
    technologies: 'HTML, CSS, Javascript, Jquery, Firebase, Google Sheets API database, responsive support',
    body: 'Official portal to show and buy the dishes of the restaurant',
    link: [
      'elfarolitove.com',
      'https://elfarolitove.com'
    ]
  },
  {
    title: 'Gridout',
    category: 'Framework',
    layout: 'two_top',
    color: [
      '#ffffff',
      '#ffffff',
      '#2680c6'
    ],
    images: [
      '/assets/portfolio/2018-09-Gridout/cover_1.png',
      '/assets/portfolio/2018-09-Gridout/cover_2.png'
    ],
    date: new Date(2018, 9),
    framework: 'static HTML',
    technologies: 'CSS grid, HTML, CSS, Javascript',
    body: 'CSS grid framework for HTML frontend. With layout classes like grid, columns, buttons, fonts, alignment and more',
    link: [
      'gridout.tavoohoh.com',
      'https://gridout.tavoohoh.com'
    ]
  },
  {
    title: 'Gian Faraone',
    category: 'Music',
    layout: 'contain',
    color: [
      '#000000',
      '#000000',
      '#d6e2e1'
    ],
    images: [
      '/assets/portfolio/2018-10-Gian-Faraone/cover_1.png'
    ],
    date: new Date(2016, 1),
    framework: 'Wordpress',
    technologies: 'Photoshop, Illustrator, HTML, CSS, responsive support',
    body: 'Official Gian Faraone website, featuring his music, portfolio, blog, events and news',
    link: [
      'gianfaraone.com',
      'https://gianfaraone.com'
    ]
  },
  {
    title: 'Dear Sinatra',
    category: 'Music',
    layout: 'contain',
    color: [
      '#000000',
      '#000000',
      '#646f6f'
    ],
    images: [
      '/assets/portfolio/2018-11-Dear-Sinatra/cover_1.png'
    ],
    date: new Date(2018, 11),
    framework: 'Angular 7',
    technologies: 'Photoshop, Illustrator, HTML, SCSS, Typescript, responsive support',
    body: 'Official Dear Sinatra web page, featuring  its music and social network links',
    link: [
      'dearsinatra.com',
      'https://dearsinatra.com'
    ]
  },
  {
    title: 'Espacio',
    category: 'Web administration',
    layout: 'contain',
    color: [
      '#000000',
      '#ffffff',
      '#2680c6'
    ],
    images: [
      '/assets/portfolio/2018-12-Espacio/cover_1.png'
    ],
    date: new Date(2018, 12),
    framework: 'Django 2',
    technologies: 'Django templates, Django Rest-Framework, Python, HTML, Javascript, Jquery, responsive support, email support.',
    body: 'Administration tool for e-commerce, blogs, portfolios and small business',
    link: [
      'espacio.me',
      'https://espacio.me'
    ]
  },
  {
    title: 'Finapp',
    category: 'Financial Administration',
    layout: 'contain',
    color: [
      '#ffffff',
      '#000000',
      '#8da5a8'
    ],
    images: [
      '/assets/portfolio/2018-12-Finapp/cover_1.png'
    ],
    date: new Date(2018, 12),
    framework: 'Flutter',
    technologies: 'HTML, CSS, Javascript, Jquery, Firebase, Google Sheets API database, responsive support',
    body: 'Financial administration tool',
    link: null
  },
  {
    title: 'Sinpote',
    category: 'E-Commerce',
    layout: 'contain',
    color: [
      '#ffffff',
      '#ffffff',
      '#3a3c42'
    ],
    images: [
      '/assets/portfolio/2019-02-Sinpote/cover_1.jpg'
    ],
    date: new Date(2019, 2),
    framework: 'Flutter',
    technologies: 'HTML, SCSS, Typescript, responsive, Interceptors, responsive support',
    body: 'Business e-commerce featuring its products, services, cart, checkout and order management too',
    link: [
      'sinpote.com',
      'https://sinpote.com'
    ]
  },
];
