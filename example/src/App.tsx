import { View } from 'react-native';

import { UnistylesRegistry } from 'react-native-unistyles';
import { defaultTheme, createMotionTabs } from 'react-native-motion-tabs';
import { NavigationContainer } from '@react-navigation/native';

UnistylesRegistry.addThemes({ light: defaultTheme });
UnistylesRegistry.addConfig({ initialTheme: undefined });

function ExampleScreen() {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{ flex: 1, backgroundColor: 'white' }} />;
}

const Tabs = createMotionTabs({
  tabs: [
    {
      name: 'Home',
      component: ExampleScreen,
      icon: 'home',
      iconType: 'Ionicons',
    },
    {
      name: 'Search',
      component: ExampleScreen,
      icon: 'search',
      iconType: 'Ionicons',
    },
    {
      name: 'Favorites',
      component: ExampleScreen,
      icon: 'heart',
      iconType: 'Ionicons',
    },
    {
      name: 'Profile',
      component: ExampleScreen,
      icon: 'person',
      iconType: 'Ionicons',
    },
  ],
  style: {
    activeButton: '#EF7E06',
    activeText: '#FFFFFF',
    inactiveText: '#000000',
    backgroundColor: '#FFFFFF',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
