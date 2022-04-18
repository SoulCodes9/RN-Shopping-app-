import React,{Component,} from 'react';
import { createStore } from 'redux';
import {cartReducer} from './components/reducers/cartReducer.js';
import {connect, useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Text, Button, Image, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from "@expo/vector-icons/Ionicons";
import {DRESSES, SHOES} from './Category';
import { purchase } from "./components/reducers/actions"

const Cart = ({navigation}) =>{

    const data = useSelector(state => state)

    const dispatch = useDispatch();

        return(
            <View style = {styles.container}>
            <div>
            {data.addedItems.map((dress, index ) => <ProductStyle dress={dress} key={index} />
            )}
            </div>
            <View style= {{justifySelf: 'flex-end', marginBottom: 70, bottom: 0, position: 'absolute', lineHeight: '1.3px'}}>
            <Text style = {{fontWeight: 'bold', fontSize: 20}}>Shipping:  $6</Text>
            <Text style = {{fontWeight: 'bold', fontSize: 20}}>Total:  ${data.total}</Text>
            </View>


            <View style={{width: wp("40%"), backgroundColor:"orange",height:40, borderRadius: 2,padding: 5, color:"white", justifySelf: 'flex-end', bottom: 0, position:'absolute'}}>
                                    <TouchableOpacity onPress={() => {
                                        dispatch(purchase())
                                        navigation.navigate('Home')
                                        }} style={{flex: 1, flexDirection:"row", alignItems:"center"}}>
                                        <View style={{flex:1, paddingLeft: 15}}>
                                        <Icon name="md-cart" size={20} color="white"/>
                                        </View>
                                        <View style={{flex: 2}}>
                                        <Text style={{fontSize: 16,color:"white"}}>Place your order</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
            </View>
        )
}

const ProductStyle = (props) => {
    const product = props.dress;
    const [value, onChangeText] = React.useState('qty');
        return (
        <div style = {{width: '100%', height: 130, flex: 1,  flexDirection: 'row',  backgroundColor: 'white', paddingBottom: 30}}>
        <img src = {product.detailImageUri} style = {{width: 80, height: 95, padding: 10}}/>
        <TextInput style = {{height: 25, width:30, borderColor: 'orange', borderWidth:2, placeholderTextColor: 'gray', alignItems: 'center'}} onChangeText = {text => onChangeText(text)} placeholder = 'qty'/>
        <div> 
        <Text style = {{fontSize: 21, fontWeight: 'bold', color: 'orange', paddingRight: 15}}>{product.detailName}</Text>
            <Text style = {{justifySelf: 'flex-end', fontWeight: 'bold', fontSize: 20, }}>${product.detailPriceOne}</Text>
            </div>

        </div>    
    )
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

})

export default Cart;