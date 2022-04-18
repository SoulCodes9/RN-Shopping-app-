import React,{Component} from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const{width}=Dimensions.get("window");

class HomeCategory extends Component{

    constructor(props){
        super(props);

        this.state={
            height: 200
        }
    }
    render(){

        const {imageUri,titleFirst,titleSecond,subTitle}= this.props;
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={()=>
                        this.props.navigation.navigate("Category" )} >       
                    <ImageBackground source={imageUri}
                    style={{
                        flex: 1,
                        resizeMode:"contain",
                        width: width,
                        height: this.state.height,
                        paddingLeft: wp("10%")
                    }}>
                        <View style={{ flex: 2,justifyContent:"flex-end", paddingBottom:hp("5%")}}>
                            <Text style={{fontSize: 30, fontWeight:"500"}}>{titleFirst}</Text>
                            <Text style={{fontSize: 30, fontWeight:"500"}}>{titleSecond}</Text>
                            <Text style={{fontSize: 18, fontWeight:"500", color: "#FF007F"}}>{subTitle}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeCategory;