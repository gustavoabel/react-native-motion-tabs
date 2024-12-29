import type { ComponentType } from 'react';

import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export type TabConfig = {
  name: string;
  component: ComponentType<any>;
  icon: string;
  iconType: string;
};

export type StyleConfig = {
  activeText?: string;
  inactiveText?: string;
  activeButton?: string;
  backgroundColor?: string;
  shadowColor?: string;
  tabBarHeight?: number;
  marginHorizontal?: number;
};

export const defaultTheme: StyleConfig = {
  activeText: '#FFFFFF',
  inactiveText: '#000000',
  activeButton: '#FFFFFF',
  backgroundColor: '#FFFFFF',
  shadowColor: '#000000',
  tabBarHeight: 60,
  marginHorizontal: 40,
};

export type MotionTabsConfig = {
  tabs: TabConfig[];
  style?: StyleConfig;
  options?: BottomTabNavigationOptions;
};

export type TabRoute = {
  name: string;
  icon?: string;
  iconType?: string;
};

export type BottomTabButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  route: TabRoute;
  theme: StyleConfig;
  label: string;
};
