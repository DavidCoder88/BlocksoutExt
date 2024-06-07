import { useRouter } from 'next/router';
import React from 'react';

import type { Props } from './types';

import AppErrorBoundary from 'ui/shared/AppError/AppErrorBoundary';
import HeaderAlert from 'ui/snippets/header/HeaderAlert';
import HeaderMobile from 'ui/snippets/header/HeaderMobile';

import * as Layout from './components';

const LayoutHome = ({ children }: Props) => {
  const route = useRouter();
  return (
    <Layout.Container>
      <Layout.TopRowAl/>
      { route.query.mode === 'sidebar' && <HeaderMobile hideSearchBar/> }
      <Layout.MainArea>
        { route.query.mode === 'sidebar' && <Layout.SideBar/> }
        <Layout.MainColumn
          paddingX={{ base: 0, lg: 0 }}
          paddingTop={{ base: 0, lg: 0 }}
        >
          <HeaderAlert/>
          <AppErrorBoundary>
            { children }
          </AppErrorBoundary>
        </Layout.MainColumn>
      </Layout.MainArea>
      { /* <Layout.FooterAl/> */ }
    </Layout.Container>
  );
};

export default LayoutHome;
