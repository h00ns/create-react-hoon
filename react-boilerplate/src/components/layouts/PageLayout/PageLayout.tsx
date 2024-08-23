import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export function PageLayout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
