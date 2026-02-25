# RN App Foundation

A React Native app foundation with a feature-based folder structure, Redux Toolkit, React Navigation, and shared UI components. Use this repo as a starting point for new apps or to share a common structure across projects.

## Tech Stack

- **React Native** 0.84 · **React** 19
- **TypeScript**
- **Redux Toolkit** + **React-Redux** for state
- **React Navigation** (native stack + bottom tabs)
- **react-native-gesture-handler** · **react-native-safe-area-context** · **react-native-screens**
- **react-native-encrypted-storage** for secure auth persistence
- **ESLint** · **Prettier** · **Jest**

## Prerequisites

- **Node.js** ≥ 22.11.0
- React Native dev environment ([React Native environment setup](https://reactnative.dev/docs/environment-setup))
- iOS: Xcode, CocoaPods  
- Android: Android Studio, JDK, Android SDK

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Vipul-Bhardwaj777/rn-app-foundation.git
cd rn-app-foundation

# Install dependencies
npm install

# (Optional) Link custom fonts
npm run link-fonts

# Start Metro
npm start
```

In another terminal:

```bash
# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios
```

## Scripts

| Script        | Description                          |
|---------------|--------------------------------------|
| `npm start`   | Start Metro bundler                  |
| `npm run android` | Run app on Android (active arch) |
| `npm run ios` | Run app on iOS simulator             |
| `npm run lint`| Run ESLint                           |
| `npm test`    | Run Jest tests                       |
| `npm run link-fonts` | Link assets in `src/assets/fonts/` |

## Project Structure

```
├── App.tsx                 # Root component (providers + RootNavigator)
├── index.ts                 # Entry point (registers app with AppRegistry)
├── app.json
├── react-native.config.js   # Font assets: src/assets/fonts/
└── src/
    ├── assets/fonts/        # Custom fonts (see README there)
    ├── components/          # Shared UI: Button, Input, Modal, Loader, Icon, ErrorBoundary, AppBootstrap
    ├── config/              # appConfig, env, featureFlags
    ├── constants/           # routes, storageKeys
    ├── features/            # Feature modules (screens, components, hooks, store, services, types)
    │   ├── auth/            # Login, Register, ForgotPassword
    │   ├── home/
    │   ├── explore/
    │   ├── hosts/
    │   ├── wallet/
    │   ├── profile/
    │   ├── settings/        # Settings, Notification, Privacy
    │   └── payments/        # Payment methods, history
    ├── hooks/               # useAppTheme, useOnlineStatus, usePaginatedQuery
    ├── routes/              # AuthStack, MainTabs, RootNavigator, linking
    ├── services/            # API client, interceptors, secureStorage
    ├── store/               # Redux store, authMiddleware
    ├── theme/               # colors, typography, spacing, shadows, responsiveSize
    └── utils/               # dateUtils, formatUtils, validationUtils, logger
```

## App Flow

- **AppBootstrap** loads auth from secure storage and rehydrates Redux before showing the main UI.
- **RootNavigator** switches between the auth stack (Login/Register/ForgotPassword) and the main tab navigator (Home, Explore, Hosts, Wallet, Profile).
- Auth state is persisted via **react-native-encrypted-storage** and synced with **authMiddleware**.

## Renaming the App

To use this foundation under a different name:

1. Update `name` and `displayName` in **app.json**.
2. Update `name` in **package.json**.
3. Set `appName` in **src/config/appConfig.ts**.
4. Replace any “FeatureWise” strings in UI or copy (e.g. home feed placeholders) with your app name.

## License

Private. Use according to your project’s terms.
