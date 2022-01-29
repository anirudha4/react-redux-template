import { colors, fonts, styles } from "@themes";
import styled from "styled-components";

export const Container = styled.div`
    max-width: ${styles.maxWidth};
    margin: 0 auto;
    padding: 0 10px;
`;
export const Title = styled.p`
    font-weight: ${fonts.weights.bold};
    font-size: ${fonts.xxl};
    color: ${props => props.color ? props.color : colors.text};
`;

export const Button = styled.button`
    padding: 1em 2em;
    background-color: ${colors.primary};
    border: none;
    outline: none;
    border-radius: ${styles.borderRadius};
    color: ${colors.white};
    font-weight: ${fonts.weights.bold};
    cursor: pointer;
    &:disabled {
        background-color: ${colors.backgroundDark};
        color: ${colors.text};
    }
`;