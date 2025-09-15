import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

const ICON_SIZE = 130;
export function HeaderImage() {
  const iconColor = useThemeColor({ light: "#313232", dark: "#e0e0e0" }, "text");
  return (
    <View style={styles.container}>
      <Ionicons
        name="person"
        size={ICON_SIZE}
        color="#ff3f60"
        style={[styles.offsetVertical, { marginLeft: -30 }]}
      />
      <Ionicons
        name="person"
        size={ICON_SIZE + 20}
        color={iconColor}
        style={[styles.offsetVertical, styles.offsetHorizontal, styles.zIndex]}
      />
      <Ionicons
        name="person"
        size={ICON_SIZE}
        color="#ff3f60"
        style={[styles.offsetVertical, styles.offsetHorizontal]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: "100%",
  },
  offsetHeader: {
    marginLeft: -35,
  },
  offsetVertical: {
    marginBottom: -18,
  },
  offsetHorizontal: {
    marginLeft: -60,
  },
  zIndex: {
    zIndex: 1,
  },
});
