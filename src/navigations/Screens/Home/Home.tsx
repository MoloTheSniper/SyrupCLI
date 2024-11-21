import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Button, StyleSheet ,Text, Pressable} from 'react-native';
import { ScreenType } from '../../Routes';

const Home = (): React.JSX.Element=> {
    const navigation = useNavigation<NavigationProp<ScreenType>>();
  return (
    <View style={styles.container}>
        <Pressable onPress ={()=>navigation.navigate('Login')}>
             <Text style ={{fontSize: 40}}>First Home</Text>
        </Pressable>
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
