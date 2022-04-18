import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home.js';




const Account=({navigation})=>{
    return (
        <View style = {styles.container} >
                <Text style = {styles.PageHeader}>TRENDZ</Text>
                <Text style = {styles.PageSubHeader}> Online Store</Text>
                <Button  title='Login' onPress={()=>{navigation.navigate('Home')}} />
                <Button  title='Register' onPress={()=>{navigation.navigate('Registration')}} />
                <Image style = {styles.AccImage} source={require('../../assets/login/login.jpg')}  />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    AccImage: {
        height:600,
        width: null
    },
    PageHeader: {
        fontWeight: 'bold',
        fontSize: 70,
        textAlign: 'center',
        color: 'orange'
    },
    PageSubHeader: {
        textAlign: 'center',
        fontSize: 25,
        paddingBottom: 20
    },
})

export default Account;