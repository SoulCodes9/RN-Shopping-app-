import React,{Component} from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ItemList extends Component{
    render(){
        const {imageUri,name,priceOne,priceTwo,onPress}=this.props
        return(
            <TouchableOpacity onPress={onPress}>
            <View style={{width: wp("44%"),marginTop: 10,marginHorizontal:10}}>
                <View style={{width: wp("44%"),height: wp("55%"), marginBottom: 10}}>
                    <Image source={imageUri} style={{flex: 2}}/>
                </View>
                <View>
                <Text style={{fontSize:18, color:'black',fontWeight:"bold"}}>{name}</Text>
                </View>
                <View style={{flexDirection:"row",paddingTop: 5, alignItems:'center'}}>
                    <Text style={{fontSize: 14, fontWeight:'bold'}}>${priceOne}</Text>
                    <Text style={{fontSize: 12, fontWeight:'bold',marginLeft: 10, textDecorationLine:'line-through'}}>{priceTwo}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

export default ItemList;