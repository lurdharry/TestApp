import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from '../screens/signIn.js'
import SignUp from '../screens/signUp.js'


export default AuthNav = createAppContainer(
    createStackNavigator({
      SignIn: { screen: SignIn, navigationOptions: { headerShown: false } },
      SignUp: { screen: SignUp, navigationOptions: { headerShown: false } },

      },
      {
        initialRouteName:'SignIn'
    }
));

 