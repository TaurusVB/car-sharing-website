import Sidebar from 'components/Sidebar/Sidebar';
import { LayoutContainer } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from 'ui/Section';
import WrapperContainer from 'components/WrapperContainer/WrapperContainer';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Section>
        <WrapperContainer>
          <header>
            <nav>
              <Sidebar />
            </nav>
          </header>

          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </WrapperContainer>
      </Section>
    </LayoutContainer>
  );
};
