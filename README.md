# 📰 React Native News App

A modern, fast, and beautiful news aggregator application built with **React Native** and the newly upgraded **Expo SDK 55**. Stay up-to-date with the latest top headlines anytime, anywhere!

## ✨ Features
- **Live News Feed:** Fetches real-time top headlines from NewsAPI.
- **Modern UI/UX:** Clean, horizontal-card layout with perfectly cropped square thumbnails to maximize visibility on any screen size.
- **Interactive Animations:** Delightful spring-scale press animations built entirely with React Native's `Animated` library.
- **Cross-Platform:** Write once, run seamlessly on Android, iOS, and Web.
- **Up-to-Date:** Powered by the very latest Expo SDK 55 and modern React architectures.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- **Expo Go app** installed on your iOS or Android device

### Installation
1. Clone the repository and navigate into the project directory:
   ```bash
   cd news_app
   ```
2. Install the necessary dependencies cleanly (if you haven't already):
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npx expo start -c
   ```

### 📱 Viewing on your Device
* **Android:** Open the Expo Go app and choose "Scan QR Code". Scan the code from your terminal.
* **iOS:** Open your default iPhone Camera app and scan the QR code to instantly launch Expo Go.

### 🐛 Common Troubleshooting
If the app refuses to load on your phone (e.g., throwing a *"Something went wrong"* or *"java.io.exception"* error):
1. **Network Mismatch:** Ensure your PC and Phone are on the **exact same Wi-Fi network**.
2. **Windows Firewall:** If your Windows Network is set to "Public", it will block your phone from connecting to the server. Change your Wi-Fi settings to **Private**.
3. **The Ultimate Fix (Tunnel):** If your router is still blocking the connection, simply run the server by typing:
   ```bash
   npx expo start --tunnel
   ```
   *This securely routes the app over the internet directly to your device!*

## 🛠️ Built With love &
* [React Native](https://reactnative.dev/)
* [Expo Framework](https://expo.dev/)
* [NewsAPI.org](https://newsapi.org/)

---
*Developed with modern React hooks, clean architectural layout patterns, and robust dependency structures.*
