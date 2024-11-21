import * as React from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';

const Home = (): React.JSX.Element=> {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  // Ensures the button is centered
  },
});

export default Home;
