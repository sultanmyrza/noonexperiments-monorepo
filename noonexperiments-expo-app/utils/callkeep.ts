import * as Notifications from "expo-notifications";

export function displayIncomingCall(uuid: string, handle: string, callerName: string) {
  console.log("📞 Display incoming call:", uuid, handle, callerName);

  // TODO: setup and invoke CallKeep.displayIncomingCall(uuid, handle, callerName);
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Icoming Call",
      body: `${uuid}, ${handle}, ${callerName}`,
    },
    trigger: null,
  });
}
