import styled, { css } from 'styled-components';

const required = css`
    &::after {
        content: '*';
        color: #db3d44;
    }
`;

const Label = styled.label`
    display: inline-block;
    margin-bottom: .5rem;

    ${props => props.required && required}
`;

export default Label;
