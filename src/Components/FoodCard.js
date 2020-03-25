import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import {hp,wp} from '../screens/signIn'
import {TRYText,TTText} from './customText'

const TestMeal=[
    {
        name:'Cheese Burger',
        topping:'Beef, Veggies & Chilli',
        img:require('../assets/images/meal1.png'),

    },
    {
        name:'Jollof Rice',
        topping:'Grilled Chicken, Veggies & Sauce',
        img:require('../assets/images/meal2.png')
    },
    {
        name:'Cheese Burger',
        topping:'Beef, Veggies & Chilli',
        img:require('../assets/images/meal1.png')
    },

]


export default class FoodCard extends Component {
  render() {
      const cart =  require('../assets/images/cart.png')
      const searchIcon =  require('../assets/images/searchIcon.png')
      const star =  require('../assets/images/star.png')
      const navigation=this.props.navigation;
     const{details} = this.props
    return (
      <View style={styles.container}>
            {/* {TestMeal.map((item,index)=>{
                return( */}
                    <TouchableOpacity style={styles.mealItem}>
                        <Image source={details.img} resizeMode='contain' style={styles.mealImage}/>
                        <View style={styles.bottomItems}>
                            <TTText style={styles.mealName}>{details.name}</TTText>
                            <TTText style={styles.toppings}>{details.topping}</TTText>
                            <View style={{flexDirection:'row',marginTop:hp(6)}}>
                                {
                                    <Stars
                                        star={star}
                                    />
                                }
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                    
                {/* )
            })} */}
            
        {/* </ScrollView> */}
      </View>
    );
  }
}

const Stars =(props)=>{
    return(
        <View style={{flexDirection:'row',marginTop:hp(6)}}>
        {
                [1,2,3,4,5].map((item,index)=>{
                    return(
                        <Image style={styles.star} resizeMode='contain' source={props.star}/>
                    )
                })
            }
        </View>
    )
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
    paddingHorizontal:wp(27),
    alignItems:'center'
    // paddingVertical:hp(20),
  },
});