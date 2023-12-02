import { StyleSheet, View } from 'react-native';
import FooterNavigation from './Layout/Footer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './pages/ProductDetails';
import { fetchProducts, fetchUsers } from './components/HttpRequests/httpRequests';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { importProcuctsFromDatabase } from './redux/productsSlice';
import { importUsers } from './redux/profileSlice';

const Stack = createNativeStackNavigator();

function AppContent() {

  const dispatch = useDispatch();

  useEffect(() => {

    async function getProducts() {
      const productsArray = await fetchProducts();
      dispatch(importProcuctsFromDatabase({products: productsArray}))
    }

    async function getUsers() {
      const usersArray = await fetchUsers();
      dispatch(importUsers({users: usersArray}))
    }

    getUsers();
    getProducts();

  }, [])

  return(
      <>
          
          <View style={styles.mainContentWrapper}>
                  <NavigationContainer >
                  <Stack.Navigator  screenOptions={{
                      headerShown: false,
                      tabBarShowLabel: false,
                      animation: "slide_from_right"
                    }}
                  >
                      <Stack.Screen 
                      name="Products"
                      component={FooterNavigation}
                      />
                      <Stack.Screen 
                      name="ProductDetails"
                      component={ProductDetails}
                      
                      />
                  </Stack.Navigator>
                  </NavigationContainer>
              </View>
          
      </>
  )
}

const styles = StyleSheet.create({
    mainContentWrapper: {
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "#100156"
    },
    headerStyle: {
      padding: 0,
      backgroundColor: '#f4511e'
    }
});

export default AppContent;