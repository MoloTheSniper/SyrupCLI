import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { ScreenType } from '../../Routes';
import { Pressable } from 'react-native';

const Login = () => {
    const navigation = useNavigation<NavigationProp<ScreenType>>();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Home', { data: 'Moloko', age: 25, country: 'South Africa' })}>
                <Text>Login</Text>
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

export default Login;
