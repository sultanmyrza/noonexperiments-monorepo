# Issue: EAS CLI keeps asking for Apple Team ID despite environment variables being set in eas.json

## Summary

`eas build --local --platform ios` continues to prompt for Apple Team ID selection even when the required environment variables (`EXPO_APPLE_TEAM_TYPE` and `EXPO_APPLE_TEAM_ID`) are properly configured in `eas.json`.

## Expected Behavior

When running `eas build --local --platform ios`, the CLI should automatically use the Apple Team ID and Team Type from the environment variables without prompting for manual selection.

## Actual Behavior

The CLI prompts for Apple Team ID and Team Type selection on every local build, ignoring the configured environment variables in `eas.json`.

**Note**: When setting the environment variables directly in the command (e.g., `EXPO_APPLE_TEAM_ID=B9A7V7HR98 eas build --local --platform ios`), the CLI works as expected and does not prompt for manual selection. This confirms that the issue is specifically with environment variable resolution from `eas.json`.

## Visual Comparison

| Environment Variables in `eas.json` | Environment Variables in Command |
|-------------------------------------|-----------------------------------|
| <img width="1608" height="1044" alt="set env via eas.json" src="https://github.com/user-attachments/assets/5f55f4cf-c5a8-48f8-9c51-35f692921efa" /> | <img width="1512" height="982" alt="set env in command" src="https://github.com/user-attachments/assets/38386ace-697f-476a-9a1a-27481fa9bdda" /> |
| ❌ CLI prompts for manual selection | ✅ CLI works automatically |

## Environment Configuration

I have configured the following environment variables in my `eas.json`:

```json
{
  "cli": {
    "version": ">= 16.19.1",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "env": {
        "EXPO_APPLE_TEAM_TYPE": "COMPANY_OR_ORGANIZATION",
        "EXPO_APPLE_TEAM_ID": "B9A7V7HR98"
      }
    },
    "preview": {
      "distribution": "internal",
      "env": {
        "EXPO_APPLE_TEAM_TYPE": "COMPANY_OR_ORGANIZATION",
        "EXPO_APPLE_TEAM_ID": "B9A7V7HR98"
      }
    },
    "production": {
      "autoIncrement": true,
      "env": {
        "EXPO_APPLE_TEAM_TYPE": "COMPANY_OR_ORGANIZATION",
        "EXPO_APPLE_TEAM_ID": "B9A7V7HR98"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

## Technical Analysis

After analyzing the relevant source code:

- [`resolveAppleTeamAsync`](https://github.com/expo/eas-cli/blob/95155681db4ed7666bf7b5a7c5f9873625ac9b17/packages/eas-cli/src/credentials/ios/appstore/resolveCredentials.ts#L171-L184)
- [`getAppleTeamTypeFromEnvironmentOrOptionsAsync`](https://github.com/expo/eas-cli/blob/95155681db4ed7666bf7b5a7c5f9873625ac9b17/packages/eas-cli/src/credentials/ios/appstore/resolveCredentials.ts#L146-L168)

The environment variables should be properly resolved, but the CLI is not recognizing them during local builds e.g `eas build --local`.

## Impact

This issue impacts developer productivity as it requires manual intervention for every local build, defeating the purpose of automated credential management.

## Steps to Reproduce

1. Configure `EXPO_APPLE_TEAM_TYPE` and `EXPO_APPLE_TEAM_ID` in `eas.json` as shown above
2. Run `eas build --local --platform ios`
3. Observe that the CLI still prompts for Apple Team ID selection

## Expected Resolution

The CLI should automatically detect and use the environment variables from `eas.json` without requiring manual selection.