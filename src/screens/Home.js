import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import {hp,wp} from './signIn'
export default class Home extends Component {

  render() {
      const cart =  require('../assets/images/cart.png')
    return (
      <View style={styles.container}>
        {/* start of cart Icon */}
        <TouchableOpacity style={styles.cartContainer}>
            <View/>
            <Image source={cart} resizeMode='contain' style={styles.cart}/>

        </TouchableOpacity>
        {/* end of cart icon */}
        <Text style={styles.name}>Hello, John</Text>
        <Text style={styles.info}>Select your meal for the day</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    info:{
        color:'#4A4A4A',
        fontSize:hp(26),
        fontWeight:'bold',
        marginBottom:hp(8)
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
    paddingHorizontal:wp(27),
    paddingTop:hp(20)
  },
});