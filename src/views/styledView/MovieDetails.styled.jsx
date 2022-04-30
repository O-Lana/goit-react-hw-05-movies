import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AdditionalInfoList = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid var(--text-color);

  ul {
    padding-left: 20px;
  }

  li:not(:last-child) {
    margin-bottom: 5px;
  }
  
  a:hover {
    color: var(--accent-color);
  }
`;

export const LinkItem = styled(NavLink)`
  font-size: 18px;
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: var(--accent-color);
  }
`;