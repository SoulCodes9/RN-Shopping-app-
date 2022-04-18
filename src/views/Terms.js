import {View, StyleSheet, Text, Button, Image, TextInput} from 'react-native';
import React,{Component,} from 'react';

class Terms extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.headerText}>General Terms</Text>
                <Text style = {styles.normalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </Text>
                <Text style = {styles.headerText}>Privacy Agreement</Text>
                <Text style = {styles.normalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Text style = {styles.headerText}>Personal Data</Text>
                <Text style = {styles.normalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        height: '100vh'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'orange',
        paddingBottom: 15
    },
    normalText: {
        fontWeight: '400',
        fontSize: 15,
        paddingBottom: 25
    }

})

export default Terms;