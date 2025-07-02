import React from 'react';
import loadable from '@loadable/component';
const Header = loadable(() => import('../outlines/Header'));

const MainLayout = () => {};

export default React.memo(MainLayout);
