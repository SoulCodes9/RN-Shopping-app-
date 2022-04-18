import React,{Component} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';
import Home from './Home';

const Registration = ({navigation}) => {
    const [value, onChangeText] = React.useState({
        name: '',
        email: '',
        password: ''
    }) ;
    return(
        <View style = {{margin: 40}}>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 2, paddingLeft: 5 }}
        onChangeText={text => onChangeText(text)}
        placeholder = 'Your name'  />

        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 2, paddingLeft: 5, marginTop: 8}}
        onChangeText={text => onChangeText(text)}
        placeholder = 'Email Address' />

        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 2, paddingLeft: 5, marginTop: 8, marginBottom: 20}}
        onChangeText={text => onChangeText(text)}
        placeholder = 'Password'  />

        <Image style = {{height: 500, width: null}} source={require('../../assets/login/login.jpg')}  />
        <Button  title='Complete Registration' onPress={()=>{navigation.navigate('Home')}} />
        </View>
    )
}


export default Registration;