import { Tab, Tabs } from '@blueprintjs/core';
import styled from 'styled-components';

export const StyledTab = Tab;

export const StyledTabs = styled(Tabs)`
  width: 100%;
  .bp3-tab-indicator-wrapper {
    display: none;
  }
  .bp3-tab-list {
    justify-content: ${props => (props.left ? 'left;' : ' center;')};
  }
  .bp3-tab[aria-selected='true'],
  .bp3-tab:not([aria-disabled='true']):hover {
    color: ${props => props.theme.colors.green};
  }
  .bp3-tab {
    color: ${props => props.theme.colors.gtrey};
  }
`;
