import { NavigationProp, useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { ScreenType } from '../../Routes';
import { Pressable } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { TextInput } from 'react-native';

const Login = () => {
    const navigation = useNavigation<NavigationProp<ScreenType>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Home', { data: 'Moloko', age: 25, country: 'South Africa' })}>
                <Text>Login</Text>
                <TextInput style ={styles.input}></TextInput>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',  // Ensures the button is centered
    },
    input:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});

export default Login;
