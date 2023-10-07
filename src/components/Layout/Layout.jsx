import Sidebar from 'components/Sidebar/Sidebar';
import { LayoutContainer } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutContainer>
      <header>
        <nav>
          <Sidebar />
        </nav>
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
