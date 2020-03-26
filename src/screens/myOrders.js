import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import {hp,wp} from './signIn'
import {toMoney} from '../../App'
import  {TTText,TRYText} from '../Components/customText'



const deleteIcon =require('../assets/images/delete.png')

const CartData=[
    {
        name:'Cheese Burger',
        topping:'Beef, Veggies & Chilli',
        img:require('../assets/images/reco1.png'),
        price:2000

    },
    {
        name:'Large Pizza',
        topping:'Extra Cheese & Toppings',
        img:require('../assets/images/reco2.png'),
        price:2070
    },
    {
        name:'Grilled Turkey',
        topping:'Sauce and Pepper',
        img:require('../assets/images/reco1.png'),
        price:3500
    },
    {
        name:'Peppersoup',
        topping:'Beef & Mutton',
        img:require('../assets/images/reco2.png'),
        price:3500
    },

]

export default class MyOrders extends Component {
  render() {

    const img =require('../assets/images/reco1.png')

    return (
      <View style={styles.container}>
          <TRYText style={styles.topText}>My Orders</TRYText>
          <Text style={styles.instruc}>Welcome to your cart, preview items below.</Text>
          <View  >
                {
                    CartData.map((item,index)=>{
                        return(
                            <CartItem
                                details={item}
                                key={index}
                                deleteIcon={deleteIcon}
                            />
                        )
                    })
                }
          </View>
          {/* start of total */}
          <View style={styles.totalView}>
              <TTText style={styles.price}>Total:</TTText>
              <TTText style={styles.totalAmount}>NGN 20,000</TTText>

          </View>
          {/* end of total */}
          {/* start of checkout button */}
          <TouchableOpacity style={styles.loginButton}>
              <TTText style={styles.buttonText} >CHECKOUT</TTText>
          </TouchableOpacity>
          {/* end of checkout */}

        <View style={styles.bottomBox}/>
      </View>
    );
  }
}
const CartItem=(props)=>{
    const{name,topping,price,img}=props.details
    return(
        <View style={styles.cartItems}>
        <View style={{flexDirection:'row'}}>
            <Image style={styles.cartImage} resizeMode='contain' source={img}/>
            <View style={{marginLeft:wp(15),alignSelf:'center'}}>
                <TTText style={styles.itemName}>{name}</TTText>
                <TTText style={styles.itemToppings}>{topping}</TTText>
            </View>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
        <TTText style={styles.price}>NGN {toMoney(price)}</TTText>
            <TouchableOpacity style={styles.deleteButton}>
                <Image style={styles.deleteIcon} resizeMode='contain' source={deleteIcon}/>
            </TouchableOpacity>
        </View>

        

    </View>

    )
}
const styles = StyleSheet.create({
    price:{
        color:"#4A4A4A",
        fontSize:hp(12),
        fontWeight:'500',
        letterSpacing:wp(-0.24),
        lineHeight:hp(14)
    },
    buttonText:{
        color:'#fff',
        fontSize:hp(14),
        fontWeight:'500',
      },
      loginButton:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E25F38',
        alignSelf:'center',
        borderRadius:hp(9),
        marginTop:hp(30),
        marginBottom:hp(20),
        width:wp(300),
        height:(50/300)*wp(300),
      },
    totalAmount:{
        fontSize:hp(23),
        lineHeight:hp(27),
        color:'#4A4A4A',
        letterSpacing:wp(-0.46),
        fontWeight:'bold'
    },
    totalView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:hp(30)
    },
    cartImage:{
        width:wp(39),
        height:(43/39)*wp(39)
    },
    deleteIcon:{
        width:wp(11),
        height:(14/11)*wp(11)
    },
    deleteButton:{
        width:wp(30),
        height:wp(30),
        borderRadius:wp(15),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F9E1DA',
        marginLeft:wp(28)
    },
    itemToppings:{
        color:'#4A4A4A',
        fontSize:hp(12),
    },
    itemName:{
        color:'#4A4A4A',
        fontSize:hp(14),
        fontWeight:'bold'
    },
    cartItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:hp(30)
    },
    instruc:{
        color:'#4A4A4A',
        fontSize:hp(14),
        marginTop:hp(8),
        marginBottom:hp(25)
    },
    topText:{
        color:'#4A4A4A',
        letterSpacing:wp(-0.52),
        marginTop:hp(100),
        fontSize:hp(26),
        fontWeight:'bold'
    },
  bottomBox:{
    width:wp(375),
    // alignSelf:'flex-end',
    position:'absolute',
    bottom:0,
    height:(50/375)*wp(375),
    backgroundColor:'#FDF3F1',
    marginTop:hp(20)
  },
  container: {
    
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal:wp(34),
    // paddingVertical:hp(20),
  },
});