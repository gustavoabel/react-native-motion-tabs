import type { ComponentType } from 'react';

import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export type TabConfig = {
  name: string;
  component: ComponentType<any>;
  icon: string;
  iconType: string;
};

export type StyleConfig = {
  backgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  shadowColor?: string;
  tabBarHeight?: number;
  marginHorizontal?: number;
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

export type TabTheme = {
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
  shadowColor?: string;
  tabBarHeight?: number;
  marginHorizontal?: number;
};

export type BottomTabButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  route: TabRoute;
  theme: TabTheme;
  label: string;
};

export const defaultTheme: TabTheme = {
  activeColor: '#FFFFFF',
  inactiveColor: '#000000',
  backgroundColor: '#FFFFFF',
  shadowColor: '#000000',
  tabBarHeight: 60,
  marginHorizontal: 40,
};
