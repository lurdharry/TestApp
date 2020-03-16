import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from '../screens/signIn.js'
import SignUp from '../screens/signUp.js'
import Home from '../screens/Home.js'
import MyOrders from '../screens/myOrders'


export default AuthNav = createAppContainer(
    createStackNavigator({
      SignIn: { screen: SignIn, navigationOptions: { headerShown: false } },
      SignUp: { screen: SignUp, navigationOptions: { headerShown: false } },     
      Home: { screen: Home, navigationOptions: { headerShown: false } },
      MyOrders: { screen: MyOrders, navigationOptions: { headerShown: false } },



      },
      {
        initialRouteName:'SignIn'
    }
));

 