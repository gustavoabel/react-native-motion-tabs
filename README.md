# 🎨 React Native Motion Tabs

A lightweight, highly customizable bottom tabs navigator for React Native that brings life to your navigation with smooth, fluid animations. Built on top of React Navigation, it combines elegant transitions, rich icon support, and an intuitive API to create beautiful tab bars that enhance user experience.

Perfect for apps that want to:

- Create engaging navigation experiences
- Stand out with unique tab bar designs
- Maintain native performance while adding rich animations
- Implement custom navigation patterns quickly

Powered by React Native Reanimated, it provides butter-smooth animations while maintaining 60 FPS. The library seamlessly integrates with React Navigation's ecosystem while adding a layer of motion and interactivity that makes your app feel more dynamic and responsive.

![Demo](demo.gif)

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

function HomeScreen() {
  return <View style={{flex: 1}} />;
}

const Tabs = createMotionTabs({
  tabs: [
    {
      name: 'Home',
      component: HomeScreen,
      icon: 'home',
      iconType: 'Ionicons'
    },
    {
      name: 'Profile',
      component: ProfileScreen,
      icon: 'person',
      iconType: 'Ionicons'
    }
  ],
  style: {
    activeColor: '#FFFFFF',
    inactiveColor: '#000000',
    backgroundColor: '#FF0000'
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
```

## Customization

### theme options

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
