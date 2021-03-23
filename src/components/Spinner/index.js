import React from 'react';
import styled from 'styled-components';

const SpinnerLoading = styled.div`
  border: ${({ theme }) => ` 2px solid ${theme.spinner}`};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: ${({ theme }) => theme.text};
  top: 40%;
  left: 50%;
  transform: translate(50%, 50%);
  position: fixed;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  
`;

export const Spinner = () => {
  return <SpinnerLoading></SpinnerLoading>;
};
