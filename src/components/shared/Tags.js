import styled from 'styled-components';

export const TagsContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  & > li {
    margin-right: 5px;
    &:not(:first-child) {
      margin-right: 0px;
    }
  }
`;

export const Tag = styled.li`
  background: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 3px 15px;
  font-size: 12px;
`;
