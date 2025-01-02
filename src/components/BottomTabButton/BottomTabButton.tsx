import { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import type { TabRoute, StyleConfig } from '../../types';
import { stylesheet } from './styles';

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  route: TabRoute;
  theme: StyleConfig;
  label: string;
};

export const BottomTabButton = ({
  onPress,
  onLongPress,
  isFocused,
  route,
  theme,
  label,
}: Props) => {
  const scale = useSharedValue(0);

  const getIcon = () => {
    switch (route.iconType) {
      case 'Entypo':
        return (
          <Entypo
            name={route.icon || 'home'}
            size={24}
            color={isFocused ? theme.activeText : theme.inactiveText}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons
            name={route.icon || 'home'}
            size={24}
            color={isFocused ? theme.activeText : theme.inactiveText}
          />
        );
      default:
        return (
          <Ionicons
            name={route.icon || 'home'}
            size={24}
            color={isFocused ? theme.activeText : theme.inactiveText}
          />
        );
    }
  };

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);
    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const buttonStyle = StyleSheet.flatten([stylesheet.button]);

  const textStyle = StyleSheet.flatten([
    stylesheet.text,
    { color: isFocused ? theme.activeText : theme.inactiveText },
  ]);

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={buttonStyle}>
      <Animated.View style={animatedIconStyle}>{getIcon()}</Animated.View>

      <Animated.Text style={[animatedTextStyle, textStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};
