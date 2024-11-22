import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Button, StyleSheet ,Text, Pressable} from 'react-native';
import { ScreenType } from '../../Routes';

const Home = (): React.JSX.Element=> {
    const navigation = useNavigation<NavigationProp<ScreenType>>();
    const route : any= useRoute();
    console.log(route, 'route');
  return (
    <View style={styles.container}>
        <Text style ={{fontSize: 40}}>First Home</Text>
        <Pressable onPress ={()=>navigation.goBack()}>
             <Text>Go Back</Text>
        </Pressable>
        <Text>{route?.params.data}</Text>
        <Text>{route?.params.age}</Text>
        <Text>{route?.params.country}</Text>
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
