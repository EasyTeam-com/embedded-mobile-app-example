import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/hooks/useThemeColor";
import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

type Props = {
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function ComponentButton({
  name,
  description,
  icon,
  onPress,
}: Props) {
  const { width } = useWindowDimensions();
  const buttonWidth = width / 2 - 24;

  const color = "#ff3f60";

  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#303131" },
    "background"
  );
  return (
    <ThemedView
      style={[{ backgroundColor, maxWidth: buttonWidth }, styles.button]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        <View style={styles.titleContainer}>
          <Ionicons name={icon} size={32} color={color} />
          <ThemedText
            style={{ flex: 1, wordWrap: "wrap" }}
            type="defaultSemiBold"
          >
            {name}
          </ThemedText>
        </View>
        <ThemedText type="subtitle">{description}</ThemedText>
      </Pressable>
    </ThemedView>
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
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
      },
      android: {
        borderWidth: 1,
        borderColor: "#c1c2c2",
      },
    }),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    flex: 1,
    marginBottom: 5,
  },
});
