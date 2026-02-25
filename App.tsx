/**
 * FeatureWise – Root app component (production-grade).
 *
 * Provider order (outer → inner):
 * 1. ErrorBoundary – catches JS errors, shows fallback UI
 * 2. Redux Provider – global state
 * 3. GestureHandlerRootView – required for React Navigation gestures (swipe-back, etc.)
 * 4. SafeAreaProvider – safe area insets for notches/nav bars
 * 5. AppBootstrap – rehydrates auth from secure storage, then renders app
 * 6. RootNavigator (StatusBar handled in your wrapper container)
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { AppBootstrap, ErrorBoundary } from './src/components';
import { RootNavigator } from './src/routes/RootNavigator';
import { store } from './src/store/index';

const App: React.FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppBootstrap>
            <RootNavigator />
          </AppBootstrap>
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  </GestureHandlerRootView>
);

export default App;
