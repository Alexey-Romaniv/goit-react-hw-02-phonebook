import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  fonst-size: 28px;
  line-height: 1.3;
`;
export const Section = ({ children, title }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};
