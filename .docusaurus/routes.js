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
    component: ComponentCreator('/docs', '25c'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
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
