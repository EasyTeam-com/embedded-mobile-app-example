import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useRef } from 'react';

type Props = {
  name: string;
  description: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function ComponentCardButton({
  name,
  description,
  onPress,
  style,
}: Props) {
  const { width } = useWindowDimensions();
  const buttonWidth = width / 2 - 24;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const backgroundColor = '#fff';

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View
      style={[{ backgroundColor, maxWidth: buttonWidth }, styles.button, style]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={{ opacity: opacityAnim }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    flex: 1,
    gap: 4,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
      },
      android: {
        borderWidth: 1,
        borderColor: '#c1c2c2',
      },
    }),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});
