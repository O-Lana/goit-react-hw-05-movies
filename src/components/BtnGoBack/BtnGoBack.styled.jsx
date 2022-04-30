import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBackBtn = styled(Link)`
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;
    
    :hover,
    :focus {
    color: #ffffff;
    background-color: var(--accent-color);
    border: 1px solid transparent;
    }
`;

