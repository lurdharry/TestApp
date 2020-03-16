import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import {hp,wp} from './signIn'

const CartItem=[
    {
        name:'Cheese Burger',
        topping:'Beef, Veggies & Chilli',
        img:require('../assets/images/meal1.png'),
        price:2000

    },
    {
        name:'Jollof Rice',
        topping:'Grilled Chicken, Veggies & Sauce',
        img:require('../assets/images/meal2.png'),
        price:2070
    },
    {
        name:'Cheese Burger',
        topping:'Beef, Veggies & Chilli',
        img:require('../assets/images/meal1.png'),
        price:3500
    },
    {
        name:'Cheese Burger',
        topping:'Beef, Veggies & Chilli',
        img:require('../assets/images/meal1.png'),
        price:3500
    },

]

export default class MyOrders extends Component {
  render() {


    return (
      <View style={styles.container}>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    recoImage:{
        width:wp(63),
        height:wp(63)
    },
    recView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    star:{
        width:wp(11),
        height:wp(11)
    },
    toppings:{
        color:'#4A4A4A',
        fontSize:hp(12)
    },
    mealName:{
        color:'#4A4A4A',
        fontSize:hp(14)
    },
    bottomItems:{
        marginLeft:wp(22),
        marginTop:hp(8)
    },
    mealImage:{
        width:wp(308),
        height:(113/308)*wp(308)
    },
    mealItem:{
        height:(192/308)*wp(308),
        width:wp(308),
        borderRadius:hp(9),
        marginBottom:hp(25)
    },
    searchInput:{
        width:wp(250),
        marginLeft:wp(10)
        
    },
    searchIcon:{
        width:wp(15),
        height:wp(15)
    },
    searchBox:{
        width:wp(307),
        height:(41/307)*wp(307),
        backgroundColor:'#F6F6F6',
        borderRadius:hp(9),
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:wp(16),
        marginBottom:hp(25)
    },
    info:{
        color:'#4A4A4A',
        fontSize:hp(14),
        fontWeight:'bold',
        marginBottom:hp(24)
    },
    name:{
        color:'#4A4A4A',
        fontSize:hp(26),
        fontWeight:'bold',
        marginBottom:hp(8)
    },
    cart:{
        width:wp(20),
        height:(18.5/20)*wp(18.5),
        // alignSelf:'flex-end'
    },
    cartContainer:{
        // position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
  container: {
    
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal:wp(34),
    // paddingVertical:hp(20),
  },
});