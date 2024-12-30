![🎨 react-native-motion-tabs](https://github.com/user-attachments/assets/34281713-08f3-4b82-ad10-9dcef10c9890)

#### A lightweight, highly customizable bottom tabs navigator for React Native that brings life to your navigation with smooth, fluid animations. Built on top of React Navigation, it combines elegant transitions, rich icon support, and an intuitive API to create beautiful tab bars that enhance user experience.

Perfect for apps that want to:

- Create engaging navigation experiences
- Stand out with unique tab bar designs
- Maintain native performance while adding rich animations
- Implement custom navigation patterns quickly

Powered by React Native Reanimated, it provides butter-smooth animations while maintaining 60 FPS. The library seamlessly integrates with React Navigation's ecosystem while adding a layer of motion and interactivity that makes your app feel more dynamic and responsive.

## Features

- Pre-configured smooth animations
- Customizable styles and colors
- Built-in icon support
- TypeScript support
- Works with React Navigation

## Installation

```bash
yarn add react-native-motion-tabs

# Peer dependencies
yarn add @react-navigation/native @react-navigation/bottom-tabs react-native-reanimated react-native-vector-icons react-native-screens react-native-safe-area-context
```

## Usage

```typescript
import { createMotionTabs } from 'react-native-motion-tabs';
import { NavigationContainer } from '@react-navigation/native';

function ExampleScreen() {
  return <View style={{flex: 1}} />;
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
```

## Theme options

```typescript
type TabTheme = {
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
  shadowColor?: string;
  tabBarHeight?: number;
  marginHorizontal?: number;
};
```

## Icon Support

- Ionicons
- MaterialIcons
- Entypo

## Contributing

See our [Contributing Guide](CONTRIBUTING.md)

## Support

If this library helped you, consider:

- ⭐️ Star on GitHub
- 💖 [Sponsor Development](https://github.com/sponsors/filipirafael)
- 🐛 Report issues
- 🤝 Submit PRs

## License

MIT © [Filipi Rafael](https://github.com/filipirafael)

---

Made with ❤️ by [@filipirafael](https://x.com/filipiRafael3)
