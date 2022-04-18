import React,{Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 50,
        marginLeft: 25,
        position: 'absolute',
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 25,
        paddingBottom: 35,
    },
    logoImg: {
        width: 75,
        height: 75,
        marginRight: 70,
        
    },
    textNormal: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingRight: 55,
        color: '#BF0040'
    },
    textSecondary: {
        fontSize: 16,
        paddingTop: 3,
        paddingRight: 55,
        paddingBottom: 30,
        color: 'grey'
    }
})
class Shipping extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.headerText}>The following shipping partners are used: -</Text>
                <Image style = {styles.logoImg} source={require('../../assets/logo/logo_1.jpg')} {...this.props} />
                <Text style = {styles.textNormal}>DHL</Text>
                <Text style = {styles.textSecondary}>No additional costs</Text>
                <Image style = {styles.logoImg} source={require('../../assets/logo/logo_2.jpg')} {...this.props} />
                <Text style = {styles.textNormal}>UPS</Text>
                <Text style = {styles.textSecondary}>No additional costs</Text>
                <Image style = {styles.logoImg} source={require('../../assets/logo/logo_3.png')} {...this.props} />
                <Text style = {styles.textNormal}>FEDEX EXPRESS</Text>
                <Text style = {styles.textSecondary}>Additional $12.99 </Text>
            </View>
        )
    }
}


export default Shipping;