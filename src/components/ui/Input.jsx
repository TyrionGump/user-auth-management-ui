import { forwardRef } from 'react';
import { styled } from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
