import { StyleSheet, View } from 'react-native';
import FooterNavigation from './Layout/Footer';
import HeaderNavigation from './Layout/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { useSelector } from 'react-redux';
import SearchModal from './components/Search/SearchModal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './pages/Cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppContent() {

    let searchOpen = useSelector(state => state.searchActions.searchActive);

    function Home() { // back on this after buliding the cart page
        return (
          <Tab.Navigator>
            <Tab.Screen name="ProductsPage" component={Products} />
            <Tab.Screen name="ProductDetails" component={SearchModal} />
          </Tab.Navigator>
        );
      }

    return(
        <>
            
            <View style={styles.mainContentWrapper}>
                    <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen 
                        name="Cart"
                        component={Cart}
                        options={{ 
                            headerTitle: () => <HeaderNavigation />,
                            headerLeft: ()=> {return null},
                            headerStyle: {backgroundColor: "#0B003C"},
                        }} 

                        />
                        <Stack.Screen 
                        name="ProductDetails"
                        component={ProductDetails}
                        options={{ 
                            headerTitle: () => <HeaderNavigation />,
                            headerLeft: ()=> {return null},
                            headerStyle: {backgroundColor: "#0B003C"},
                        }} 
                        
                        />
                    </Stack.Navigator>
                    {searchOpen && <SearchModal /> }
                    <FooterNavigation />
                    </NavigationContainer>
                </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    mainContentWrapper: {
      flex: 1,
      width: "100%",
      height: "100%"
    },
    headerStyle: {
      padding: 0,
      backgroundColor: '#f4511e'
    }
});

export default AppContent;