import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTab } from '../components/BottomTab/BottomTab';
import type { MotionTabsConfig, TabRoute } from '../types';

const Tab = createBottomTabNavigator();

export function createMotionTabs({ tabs, style, options }: MotionTabsConfig) {
  return function MotionTabs() {
    const tabsConfig = tabs.reduce(
      (acc, tab) => {
        acc[tab.name] = {
          name: tab.name,
          icon: tab.icon || 'circle',
          iconType: tab.iconType || 'Ionicons',
        };
        return acc;
      },
      {} as Record<string, TabRoute>
    );

    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          ...options,
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={(props: any) => (
          <BottomTab {...props} theme={style} tabsConfig={tabsConfig} />
        )}
      >
        {tabs.map(({ name, component }) => (
          <Tab.Screen key={name} name={name} component={component} />
        ))}
      </Tab.Navigator>
    );
  };
}
