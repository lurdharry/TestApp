import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import {hp,wp} from './signIn'
import  {TTText,TRYText} from '../Components/customText'

import FoodCard from '../Components/FoodCard'

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
const RecommendedMeal=[
    {
        img:require('../assets/images/reco1.png')
    },
    {
        img:require('../assets/images/reco2.png')
    },
    {
        img:require('../assets/images/reco1.png')
    },
    {
        img:require('../assets/images/reco2.png')
    }
]

export default class Home extends Component {
    state={
        searchValue:''
    }
  render() {
      const cart =  require('../assets/images/cart.png')
      const searchIcon =  require('../assets/images/searchIcon.png')
      const star =  require('../assets/images/star.png')
      const navigation=this.props.navigation;

    return (
      <View style={styles.container}>
        {/* <ScrollView> */}
        {/* start of cart Icon */}
        <TouchableOpacity onPress={()=>navigation.navigate('MyOrders')} style={styles.cartContainer}>
            <View/>
            <Image source={cart} resizeMode='contain' style={styles.cart}/>

        </TouchableOpacity>
        {/* end of cart icon */}
        <TRYText style={styles.name}>Hello, John</TRYText>
        <TTText style={styles.info}>Select your meal for the day</TTText>
        {/* start of search box */}
        <View style={styles.searchBox}>
            <Image source={searchIcon} style={styles.searchIcon} resizeMode='contain' />
            <TextInput
                placeholder='search for meals, dishes'
                placeholderTextColor='rgba(74, 74, 74, 0.521798)'
                style={styles.searchInput}
                value={this.state.searchValue}
                onChangeText={(text)=>this.setState({searchValue:text})}
            
            />

        </View>
        {/* end of search box */}
        <ScrollView showsVerticalScrollIndicator={false}
            Style={{height:hp(300)}}
        >
            {
                TestMeal.map((item,index)=>{
                    return(
                        <FoodCard
                            details={item}
                        />
                    )
                })
            }
            {/* start of recommemned */}
        <View >
        <View style={styles.recView}>
                <TRYText style={styles.recoText}>Recommended</TRYText>
                <TouchableOpacity>
                    <TTText style={styles.viewall}>View all</TTText>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                {
                    RecommendedMeal.map((item,index)=>{
                        return(
                            <View style={{marginVertical:hp(13),marginRight:wp(12)}}>
                                <Image style={styles.recoImage}   resizeMode='contain' source={item.img}/>
                            </View>
               )
              })
            }


             </ScrollView>
        </View>
        {/* end of recommended */}
            
        </ScrollView>


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
    viewall:{
        color: '#4A4A4A',
        fontSize:hp(14),
        fontWeight:'normal'
    },
    recoText:{
        color: '#4A4A4A',
        fontSize:hp(14),
        fontWeight:'bold'
    },
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
        fontFamily:'TTNorms',
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
        fontWeight:'normal',
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
    paddingVertical:hp(20),
  },
});