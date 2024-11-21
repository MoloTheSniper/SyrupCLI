import * as React from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/navigations/Routes';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style ={{flex: 1}}>
      <Routes/>
    </SafeAreaView>
  );
};

export default App;
