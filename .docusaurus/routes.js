import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '643'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c0a'),
    routes: [
      {
        path: '/docs/conclusion',
        component: ComponentCreator('/docs/conclusion', '187'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data',
        component: ComponentCreator('/docs/data', '501'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nft',
        component: ComponentCreator('/docs/nft', 'b41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/protocol',
        component: ComponentCreator('/docs/protocol', 'bd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7ab'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
