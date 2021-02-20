import styled from 'styled-components';

export const Button = styled.button `
  display: inline-block;
  padding: 5px 10px;
  background-color: dodgerblue;
  border-radius: 25%/50%;
  border: none;
  font-size: .8rem;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.25);

  &:focus {
    outline: none;
  }
`