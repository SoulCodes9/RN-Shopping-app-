import React,{Component} from 'react';
import {View, Text,ScrollView} from 'react-native';
import HomeCategory from '../views/components/HomeCategory';

class Home extends Component{
    render(){
        return(
            <View style = {{flex: 1}}>
                <ScrollView>
                    <HomeCategory imageUri = {require("../../assets/women_fashion.jpg")}
                    titleFirst = "Womens Fashion"
                    subTitle = "Summer Specials"
                    {...this.props}
                    />
                    <HomeCategory imageUri = {require("../../assets/men_fashion.jpeg")}
                    titleFirst = "Mens Fashion"
                    subTitle = "Latest Trends"
                    {...this.props}
                    />
                    <HomeCategory imageUri = {require("../../assets/kids_fashion.jpg")}
                    titleFirst = "Kids Fashion"
                    {...this.props}
                    />
                </ScrollView>
            </View>
        )
    }
}

export default Home;