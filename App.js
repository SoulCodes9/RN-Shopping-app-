import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from "@expo/vector-icons/Ionicons";
import Home from './src/views/Home.js';
import Category from './src/views/Category.js';
import Shipping from './src/views/Shipping.js';
import Account from './src/views/Account.js';
import Detail from './src/views/Detail.js';
import Cart from './src/views/Cart.js';
import Registration from './src/views/Registration.js';
import Terms from './src/views/Terms';
const HomeStack = createStackNavigator();
const HomeDrawerNavigator = createDrawerNavigator();
let stack = createStackNavigator();
import {cartReducer} from "./src/views/components/reducers/cartReducer"
import { createStore}  from "redux";
import { Provider } from "react-redux";



export default function App() {

  const store = createStore(cartReducer)

  return (
    <Provider store={store}>
    <NavigationContainer>
          <HomeDrawNavigatorScreen></HomeDrawNavigatorScreen>
          <stack.Screen name = 'Home' component = {Home} />
          <stack.Screen name = 'Registration' component = {Registration}/>
          <stack.Screen name = 'Cart' component={Cart} />
          <stack.Screen name = 'Terms' component={Terms} />
    </NavigationContainer>
    </Provider>
  );
}

function HomeStackScreen() {
  return(
    <HomeStack.Navigator initialRouteName = 'Home'>
          <HomeStack.Screen name = "Home" component = {Home} 
        options = {
          ({navigation}) => ({
            headerTitle: "Home",
            headerTitleStyle: {
              color: "white"
            },
            headerStyle:{
              backgroundColor: "orange"
            },
            headerLeft:()=>(
              <Icon name = "md-menu" size = {30} color = "white" style={{paddingLeft: 10}}
              onPress={() => navigation.openDrawer()}>
              </Icon>
            ),
            headerRight:()=>(
              <Text style = {{color: "white", fontSize: 20, paddingRight: 15}}>TRENDZ</Text>
            )
          })
        }
            /><HomeStack.Screen name="Category" component={Category}
            options ={
              ({navigation}) => ({
                headerTitle: "Category",
                headerTitleStyle:{
                  color:"white"
                },
                headerStyle:{
                  backgroundColor:"orange"
                },
                headerLeft:()=>(
                 <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}
                 onPress={()=> navigation.openDrawer()}
                 ></Icon>
                ),
                headerRight:() =>(
                  <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
                )
              })
            }
          />
          <HomeStack.Screen name="Detail" component={Detail}
            options ={
              ({navigation}) => ({
                headerTitle: "Detail",
                headerTitleStyle:{
                  color:"white"
                },
                headerStyle:{
                  backgroundColor:"orange"
                },
                headerLeft:()=>(
                 <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}} onPress={()=> navigation.openDrawer()}></Icon>
                ),
                headerRight:() =>(
                  <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
                )
              })
            }
          />
          <HomeStack.Screen name="Shipping" component={Shipping}
            options ={
              ({navigation}) => ({
                headerTitle: "Shipping",
                headerTitleStyle:{
                  color:"white"
                },
                headerStyle:{
                  backgroundColor:"orange"
                },
                headerLeft:()=>(
                 <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
                ),
                headerRight:() =>(
                  <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
                )
              })
            }
          />
        </HomeStack.Navigator>
      );
    }
function ShippingStackScreen(){
  return(
    <HomeStack.Navigator initialRouteName="Shipping">
      <HomeStack.Screen name="Home" component={Home}
        options ={
          ({navigation}) => ({
            headerTitle: "Home",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
            <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}
            onPress={()=> navigation.openDrawer()}
            ></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Category" component={Category}
        options ={
          ({navigation}) => ({
            headerTitle: "Category",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
              <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Detail" component={Detail}
        options ={
          ({navigation}) => ({
            headerTitle: "Detail",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Shipping" component={Shipping}
        options ={
          ({navigation}) => ({
            headerTitle: "Shipping",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
    </HomeStack.Navigator>
  );
}
function AccountStackScreen(){
  return(
    <HomeStack.Navigator initialRouteName="Account">
      <HomeStack.Screen name="Account" component={Account}
        options ={
          ({navigation}) => ({
            headerTitle: "Login",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
            <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}
            onPress={()=> navigation.openDrawer()}
            ></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Category" component={Category}
        options ={
          ({navigation}) => ({
            headerTitle: "Category",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
              <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Detail" component={Detail}
        options ={
          ({navigation}) => ({
            headerTitle: "Detail",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Shipping" component={Shipping}
        options ={
          ({navigation}) => ({
            headerTitle: "Shipping",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
    </HomeStack.Navigator>
  );
}
function RegistrationStackScreen(){
  return(
    <HomeStack.Navigator initialRouteName="Registration">
      <HomeStack.Screen name="Registration" component={Registration}
        options ={
          ({navigation}) => ({
            headerTitle: "Register",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
            <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}
            onPress={()=> navigation.openDrawer()}
            ></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Category" component={Category}
        options ={
          ({navigation}) => ({
            headerTitle: "Category",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
              <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Detail" component={Detail}
        options ={
          ({navigation}) => ({
            headerTitle: "Detail",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Shipping" component={Shipping}
        options ={
          ({navigation}) => ({
            headerTitle: "Shipping",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
    </HomeStack.Navigator>
  );
}
function CartStackScreen(){
  return(
    <HomeStack.Navigator initialRouteName="Cart">
      <HomeStack.Screen name="Cart" component={Cart}
        options ={
          ({navigation}) => ({
            headerTitle: "Cart",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
            <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}
            onPress={()=> navigation.openDrawer()}
            ></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Category" component={Category}
        options ={
          ({navigation}) => ({
            headerTitle: "Category",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
              <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Detail" component={Detail}
        options ={
          ({navigation}) => ({
            headerTitle: "Detail",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Shipping" component={Shipping}
        options ={
          ({navigation}) => ({
            headerTitle: "Shipping",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
    </HomeStack.Navigator>
  );
}
function TermsStackScreen(){
  return(
    <HomeStack.Navigator initialRouteName="Terms">
      <HomeStack.Screen name="Terms" component={Terms}
        options ={
          ({navigation}) => ({
            headerTitle: "Terms & Conditions",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
            <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}
            onPress={()=> navigation.openDrawer()}
            ></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Category" component={Category}
        options ={
          ({navigation}) => ({
            headerTitle: "Category",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
              <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Detail" component={Detail}
        options ={
          ({navigation}) => ({
            headerTitle: "Detail",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
      <HomeStack.Screen name="Shipping" component={Shipping}
        options ={
          ({navigation}) => ({
            headerTitle: "Shipping",
            headerTitleStyle:{
              color:"white"
            },
            headerStyle:{
              backgroundColor:"orange"
            },
            headerLeft:()=>(
             <Icon name="md-menu" size={30} color="white" style={{paddingLeft:10}}  onPress={()=> navigation.openDrawer()}></Icon>
            ),
            headerRight:() =>(
              <Text style={{color:"white",fontSize: 20,paddingRight:15}}>TRENDZ</Text>
            )
          })
        }
      />
    </HomeStack.Navigator>
  );
}
function HomeDrawNavigatorScreen(){
  return(
    <HomeDrawerNavigator.Navigator drawerContentOptions={{activeTintColor: "orange",itemStyle:{marginVertical: 5, borderColor:"orange", borderWidth: 1}}}>
      <HomeDrawerNavigator.Screen name="Home" component={HomeStackScreen} />
      <HomeDrawerNavigator.Screen name="Account" component={AccountStackScreen}/>
      <HomeDrawerNavigator.Screen name="Shipping" component={ShippingStackScreen} />
      <HomeDrawerNavigator.Screen name="Registration" component={RegistrationStackScreen} />
      <HomeDrawerNavigator.Screen name = "Cart" component={CartStackScreen} />
      <HomeDrawerNavigator.Screen name = "Terms & Conditions" component={TermsStackScreen} />
    </HomeDrawerNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
