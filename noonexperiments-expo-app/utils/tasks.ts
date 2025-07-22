import { displayIncomingCall } from "@/utils/callkeep";
import { generateUUIDv4 } from "@/utils/random";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";

const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

// 👇 TASK MUST BE DEFINED AT MODULE SCOPE
TaskManager.defineTask(BACKGROUND_NOTIFICATION_TASK, async ({ data, error }) => {
  try {
    if (error) {
      console.error("❌ Notification Task Error:", error);
      return;
    }

    if (!data || typeof data !== "object") {
      console.warn("❗️No valid data received in task payload");
      return;
    }

    const payload = data as {
      data?: {
        body?: string;
        dataString?: string;
      };
    };

    const rawBody = payload.data?.body ?? payload.data?.dataString;

    if (!rawBody || typeof rawBody !== "string") {
      console.warn("⚠️ No body or dataString found in notification data");
      return;
    }

    // First parse: parse the entire raw string
    const parsed = JSON.parse(rawBody) as {
      _contentAvailable?: boolean;
      data?: {
        type?: string;
        callerName?: string;
        callerId?: string;
      };
    };

    if (parsed.data?.type === "incoming_call") {
      const callerName = parsed.data.callerName ?? "Unknown";
      const callerId = parsed.data.callerId ?? "unknown";
      const uuid = generateUUIDv4();

      console.log(`📞 Triggering CallKeep for ${callerName}`);
      displayIncomingCall(uuid, callerId, callerName);
    } else {
      console.warn("⚠️ Unknown or missing type in parsed data:", parsed);
    }
  } catch (err) {
    console.error("❌ Failed to process background notification:", err);
    console.warn(data);
  }
});

// 👇 REGISTER TASK AT MODULE SCOPE
Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK)
  .then(() => console.log("✅ Background notification task registered"))
  .catch((err) => console.warn("⚠️ Background task already registered or failed:", err));
