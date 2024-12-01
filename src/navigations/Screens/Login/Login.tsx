import { NavigationProp, useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Button, StyleSheet, Text, ActivityIndicator,Alert, KeyboardAvoidingView } from 'react-native';
import { ScreenType } from '../../Routes';
import { Pressable } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { TextInput } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const navigation = useNavigation<NavigationProp<ScreenType>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;
    const signIn = async () =>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            Alert.alert('check your email');
            }catch(error: any){
                console.log(error);
                Alert.alert('sign in failed: '+ error.message);
            }finally{
                setLoading(false);
            }
        }

        const signUp = async () =>{
            setLoading(true);
            try{
                const response = await createUserWithEmailAndPassword(auth,email, password);
                console.log(response);
                Alert.alert('check your Password');
                }catch(error: any){
                    console.log(error);
                    Alert.alert('sign in failed: '+ error.message);
                }finally{
                    setLoading(false);
                }
            }
            
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={() => navigation.navigate('Home', { data: 'Moloko', age: 25, country: 'South Africa' })}>
                <Text>Login</Text>
            </Pressable>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput style ={styles.input} placeholder='Email'
                    autoCapitalize='none' value = {email} 
                    onChangeText={(text) => setEmail(text)}>
                </TextInput>

                <TextInput style ={styles.input} placeholder='Password'
                    autoCapitalize='none' value = {password}
                    secureTextEntry = {true} 
                    onChangeText={(text) => setPassword(text)}>
                </TextInput>
                {loading? (
                <ActivityIndicator size = "large" color ="#000ff"/>
                ):( 
                    <>  
                    <Button title ="Login" onPress={() => signIn()}/>
                    <Button title ="Create account" onPress={() => signUp()}/>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
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


