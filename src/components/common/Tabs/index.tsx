import { memo, ReactNode, useMemo } from 'react';
import { Tabs as MantineTabs, TabsProps, TabsListProps, TabsPanelProps, TabsTabProps } from '@mantine/core';

export interface ITabsItemProps {
  tabsValue: string;
  tabsLabel?: string;
  tabsItem: ReactNode;
}

interface ITabsProps {
  defaultValue: string;
  tabsItems: ITabsItemProps[];
  inverted?: boolean;
  listGrow?: TabsListProps['grow'];
  justify?: TabsListProps['justify'];
  orientation?: TabsProps['orientation'];
  placement?: TabsProps['placement'];
  tabsStyles?: TabsProps['styles'];
  tabsPanelStyles?: TabsPanelProps['styles'];
  tabsListStyles?: TabsListProps['styles'];
  tabsTabStyles?: TabsTabProps['styles'];
  onChange?: TabsProps['onChange'];
}

export const Tabs: React.FC<ITabsProps> = memo(
  ({
    defaultValue,
    tabsItems,
    inverted,
    listGrow,
    justify,
    orientation,
    placement,
    tabsStyles,
    tabsPanelStyles,
    tabsListStyles,
    tabsTabStyles,
    onChange,
  }) => {
    const tabsPanel = useMemo(() => {
      return (
        <>
          {tabsItems.map((item) => (
            <MantineTabs.Panel key={item.tabsValue} value={item.tabsValue} p="xs" styles={tabsPanelStyles}>
              {item.tabsItem}
            </MantineTabs.Panel>
          ))}
        </>
      );
    }, [tabsItems, tabsPanelStyles]);

    const tabsTab = useMemo(() => {
      return (
        <>
          <MantineTabs.List grow={listGrow} justify={justify} styles={tabsListStyles}>
            {tabsItems.map((item) => {
              const hasTabsLabel = item.tabsLabel;
              const label = hasTabsLabel ? item.tabsLabel : item.tabsValue;
              return (
                <MantineTabs.Tab key={item.tabsValue} value={item.tabsValue} styles={tabsTabStyles}>
                  {label}
                </MantineTabs.Tab>
              );
            })}
          </MantineTabs.List>
        </>
      );
    }, [justify, listGrow, tabsItems, tabsListStyles, tabsTabStyles]);

    return (
      <MantineTabs
        defaultValue={defaultValue}
        inverted={inverted}
        orientation={orientation}
        placement={placement}
        styles={tabsStyles}
        onChange={onChange}>
        {inverted ? (
          <>
            {tabsPanel}
            {tabsTab}
          </>
        ) : (
          <>
            {tabsTab}
            {tabsPanel}
          </>
        )}
      </MantineTabs>
    );
  }
);
