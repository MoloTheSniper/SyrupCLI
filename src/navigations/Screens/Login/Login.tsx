import * as React from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
        <Text>Login</Text>
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

export default Login;
