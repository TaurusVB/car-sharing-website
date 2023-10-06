import { LayoutContainer } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutContainer
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
