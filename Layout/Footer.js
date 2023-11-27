import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import SearchModal from '../components/Search/SearchModal';
import { Image } from 'react-native';
import ProductDetails from '../pages/ProductDetails';
import FooterItem from '../components/Footer/FooterItem';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

function FooterNavigation() {
    return (
        <Tab.Navigator screenOptions={{
          headerShown: false, 
          tabBarStyle: {backgroundColor: "#0B003C", height: 100},
          tabBarHideOnKeyboard: true
        }}>
          <Tab.Screen name="ProductsPage" component={Products} options={{
            tabBarIcon: ({ focused }) => (
              <FooterItem image={require("../assets/home.png")} focused={focused} text={"Products"} />
            ),
            tabBarLabel: () => {return null},
        }}/>
          <Tab.Screen name="Search" component={SearchModal} options={{
            tabBarIcon: ({ focused }) => (
              <FooterItem image={require("../assets/search.png")} focused={focused} text={"Search"} />
            ),
            tabBarLabel: () => {return null}
        }} />
          <Tab.Screen name="Cart" component={Cart} options={{
            tabBarIcon: ({ focused }) => (
              <FooterItem image={require("../assets/cart.png")} focused={focused} text={"Cart"} />
            ),
            tabBarLabel: () => {return null}
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({ focused }) => (
              <FooterItem image={require("../assets/profile.png")} focused={focused} text={"Profile"} />
            ),
            tabBarLabel: () => {return null}
        }}/>
          <Tab.Screen name="ProductDetails" component={ProductDetails}  options={{
              tabBarItemStyle: { display: "none"},
          }}/>
          
          

        </Tab.Navigator>
      );
}

export default FooterNavigation;