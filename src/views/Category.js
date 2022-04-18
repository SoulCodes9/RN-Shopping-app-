import React,{Component} from 'react';
import {View, Text,ScrollView} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ItemList from '../views/components/ItemList.js';
export {DRESSES, SHOES};

export function convertData() {
    let newArr = [];

    DRESSES.map(c => {
        newArr.push(c)
    })
    SHOES.map(c => {
        newArr.push(c)
    })

    return newArr;
}

const CATEGORY=[
    "Dresses",
    "Shoes"
]

const DRESSES =[
    {
        id:1,
        imageUri: require("../../assets/dresses/dresses_1.jpg"),
        name: 'Festive Dress',
        priceOne: 320,
        priceTwo: "$400",
    },
    {
        id:2,
        imageUri: require("../../assets/dresses/dresses_2.jpg"),
        name: 'Festive Dress',
        priceOne: 320,
        priceTwo: "$400"
    },
    {
        id:3,
        imageUri: require("../../assets/dresses/dresses_3.jpg"),
        name: 'Black Dress',
        priceOne: 320,
        priceTwo: "$400"
    },
    {
        id:4,
        imageUri: require("../../assets/dresses/dresses_4.jpg"),
        name: 'Glitter Dress',
        priceOne: 320,
        priceTwo: "$400"
    }
]

const SHOES =[
    {
        id:1,
        imageUri: require("../../assets/shoes/shoes_1.jpg"),
        name: 'Helena',
        priceOne: 120,
        priceTwo: "$180"
    },
    {
        id:2,
        imageUri: require("../../assets/shoes/shoes_2.jpg"),
        name: 'High Heels',
        priceOne: 180
    },
    {
        id:3,
        imageUri: require("../../assets/shoes/shoes_3.jpg"),
        name: 'Mid Heels',
        priceOne: 115
    },
    {
        id:4,
        imageUri: require("../../assets/shoes/shoes_4.jpg"),
        name: 'Flats',
        priceOne: 50,
        priceTwo: "$80"
    },
]

class Category extends Component{

    constructor(props){
        super(props);

        this.state={
            currentIndex:0
        }
    }

    renderCategory=()=>{
        return CATEGORY.map((item,i)=>{
            return(
                
                <Text style={{fontSize: 18, paddingHorizontal: 10}} key={i}
                onPress={()=> this.setState({currentIndex: i})}

                style={{
                    fontSize: 18,
                    color: this.state.currentIndex==i ?"orange":"white",
                    paddingHorizontal: 10
                }}
                
                >{item}</Text>
            );
        });
    }

    renderItemList_Dresses=()=>{
        return DRESSES.map((item,i)=>{
            return(
                <ItemList 
                key={i}
                onPress ={()=> this.props.navigation.navigate("Detail",{
                    id:item.id,
                    detailName:item.name,
                    detailImageUri:item.imageUri,
                    detailPriceOne:item.priceOne,
                    detailPriceTwo: item.priceTwo
                })}
                imageUri={item.imageUri}
                name={item.name}
                priceOne={item.priceOne}
                priceTwo={item.priceTwo}
                />
            );
        });
    };

    renderItemList_Shoes=()=>{
        return SHOES.map((item,i)=>{
            return(
                <ItemList
                key={i}
                onPress ={()=> this.props.navigation.navigate("Detail",{
                    id:item.id,
                    detailName:item.name,
                    detailImageUri:item.imageUri,
                    detailPriceOne:item.priceOne,
                    detailPriceTwo: item.priceTwo
                })}
                imageUri={item.imageUri}
                name={item.name}
                priceOne={item.priceOne}
                priceTwo={item.priceTwo}
                />
            );
        });
    };

    renderItemList=()=>{
        console.log(this.state.currentIndex);
        if(this.state.currentIndex==0){
        return this.renderItemList_Dresses();
        }
        else if(this.state.currentIndex==1){
            return this.renderItemList_Shoes();
        }
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{height: heightPercentageToDP("8%"), backgroundColor:"grey", color:'black',flexDirection:'row',paddingTop: 10}}>
                    <ScrollView horizontal>
                    <View style={{flexDirection:'row', justifyContent:'space-around',alignContent:'center'}}>
                        {this.renderCategory()}
                        </View>
                    </ScrollView>
                </View>
                
                <ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    {this.renderItemList()}
                </ScrollView>
              
            </View>
        )
    }
}

export default Category;