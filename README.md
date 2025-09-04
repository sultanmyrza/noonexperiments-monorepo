# Post Message Communication Demo

A React Native Expo app demonstrating two-way post message communication between React Native and WebView.

## Features

- ✅ Two-way post message communication
- ✅ Light/Dark mode support
- ✅ Works on iOS and Android
- ✅ Real-time message display

## Video Previews

### iOS Demo

https://github.com/user-attachments/assets/b5665f7a-d32b-47ed-8e13-9eca00a0dfb2

### Android Demo  

https://github.com/user-attachments/assets/c022d3a5-74fb-4982-b291-cec933914d2a

## Setup

### 1. Install Dependencies

```bash
# Install React Native app dependencies
cd cool-app
yarn install

# Install web app dependencies
cd ../cool-web
yarn install
```

### 2. Start the Web App

```bash
cd cool-web
yarn dev
```

Vite will show a network URL like `http://192.168.1.100:5173`

### 3. Configure Environment

Create `.env.local` in the `cool-app` directory:

```bash
cd cool-app
echo "EXPO_PUBLIC_WEB_VIEW_URL=http://192.168.1.100:5173" > .env.local
```

Replace `http://192.168.1.100:5173` with the actual network URL from Vite.

### 4. Start the React Native App

```bash
cd cool-app
yarn start
```

### 5. Run on Device

1. Scan the QR code with your camera (iOS) or Expo Go app (Android)
2. The app will load with the WebView showing the web interface
3. Test the post message communication by tapping buttons on both sides

## How It Works

- **React Native side**: Sends messages to WebView and displays received messages
- **WebView side**: Sends messages to React Native and displays received messages
- **Communication**: Uses `postMessage` API for bidirectional communication
- **Theming**: Automatic light/dark mode support using system preferences

## Project Structure

```
cool-app/          # React Native Expo app
├── app/(tabs)/    # Main app screens
├── components/    # Themed components (ThemedButton, ThemedText, etc.)
└── .env.local     # Environment configuration

cool-web/          # Web app for WebView
└── index.html     # Single file web app with post message functionality
```