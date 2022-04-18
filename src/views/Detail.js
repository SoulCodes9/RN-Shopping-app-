import React,{Component} from 'react';
import {addToCart} from '../views/components/reducers/actions';
import {View, Text,Image,ScrollView, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, Provider } from "react-redux";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Icon from "@expo/vector-icons/Ionicons";

const {width}=Dimensions.get("window");

const Detail= (props) => {
 const dispatch = useDispatch();

 const {id, detailName,detailImageUri,detailPriceOne,detailPriceTwo}= props.route.params;

        return(
            <View style={{flex: 1,backgroundColor:"white"}}>
                <ScrollView>
                    <View style={{ width: width, height: hp("65%")}}>
                    <Image source={detailImageUri}
                    style={{
                        flex: 1,
                        resizeMode:'center'}}></Image>
                        
                    </View>
                    <View style={{padding: 10}}>
                            <Text style={{fontSize: 28,fontWeight:"bold"}}>{detailName}</Text>
                            <View style={{flexDirection: "row", justifyContent:"space-between",marginTop: 10}}>
                            <View style={{flexDirectio:"row", alignItems:"flex-end"}}>
                                <Text style={{fontSize: 20, fontWeight: "bold"}}>${detailPriceOne}</Text>
                                <Text style={{fontSize: 20, fontWeight: "bold",color:'orange', textDecorationLine:"line-through"}}>{detailPriceTwo}</Text>
                            </View>
                                <View style={{width: wp("45%"), backgroundColor:"orange",height:40, borderRadius: 2,padding: 5, color:"white"}}>
                                    <TouchableOpacity onPress={() => {
                                        dispatch(addToCart(props.route.params))
                                        props.navigation.navigate('Home')
                                        }} style={{flex: 1, flexDirection:"row", alignItems:"center"}}  >
                                        <View style={{flex:1, paddingLeft: 15}}>
                                        <Icon name="md-cart" size={20} color="white"/>
                                        </View>
                                        <View style={{flex: 2}}>
                                        <Text style={{fontSize: 16,color:"white"}}>Add to Cart</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, borderBottomWidth: 1, borderBottomColor:"grey",marginTop: 5,marginBottom:5}}></View>
                    <View style={{flex:1,padding: 10}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold',color:"black"}}>Description</Text>
                        <Text style={{fontSize: 14, lineHeight:20}}>Lorem ipsumsd fdsdaifidsf foasuf sdafjsdlf opewf dofuad ofusaf dsfjslfjslafj
                            adfjhsafisfosdf a dfoiydsffyd asdofydsfds
                        </Text>
                    </View>

                    <View style={{flex: 1, flexDirection:"row", justifyContent:"space-between", padding: 5}}>

                        <View style={{flex:1}}>
                            <Text style={{fontSize: 18, fontWeight:"bold", color:"black", marginBottom: 5}}>Available Colors</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={{backgroundColor:"black", width: wp("4.5%"),height: wp("4.5%"), marginRight: 15}}></View>
                                <View style={{backgroundColor:"yellow", width: wp("4.5%"),height: wp("4.5%"), marginRight: 15}}></View>
                                <View style={{backgroundColor:"blue", width: wp("4.5%"),height: wp("4.5%"), marginRight: 15}}></View>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontSize: 18, fontWeight:"bold", color:"black", marginBottom: 5}}>Available Sizes</Text>
                            <Text style={{fontSize: 16, fontWeight:"bold"}}>S, M, L, XL</Text>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        )
}
       

export default Detail;