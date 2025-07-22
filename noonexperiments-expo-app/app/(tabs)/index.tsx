import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { registerForPushNotificationsAsync } from "@/utils/notifications";
import { Image } from "expo-image";
import * as TaskManager from "expo-task-manager";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [registeredTasks, setRegisteredTasks] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token ?? ""))
      .catch((error: any) => setExpoPushToken(`${error}`));

    TaskManager.getRegisteredTasksAsync()
      .then((tasks) => setRegisteredTasks(JSON.stringify(tasks, null, 2)))
      .catch((error) => setRegisteredTasks(error));
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Expo Push Token</ThemedText>
        <ThemedText selectable numberOfLines={1}>
          {expoPushToken}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Registered Tasks</ThemedText>
        <ThemedText style={{ fontSize: 12 }}>{registeredTasks}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
