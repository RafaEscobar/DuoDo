import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BottomTabIcon } from './BottomTabIcon';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CustomBottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {

  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const MARGIN = 16;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(TAB_WIDTH * state.index) }],
    };
  });

  return (
    <View
      style={[
        styles.tabBarContainer,
        { width: TAB_BAR_WIDTH, bottom: insets.bottom },
      ]}>
      <Animated.View
        style={[
          styles.slidingTabContainer,
          { width: TAB_WIDTH },
          translateAnimation,
        ]}>
        <View style={styles.slidingTab} />
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <View style={styles.contentContainer}>
              <BottomTabIcon route={route.name} isFocused={isFocused} navigation={navigation}  />
            </View>
          </Pressable>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 65,
    marginBottom: 5,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#131F24',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  slidingTab: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#F87171',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

