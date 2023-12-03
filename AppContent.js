import { StyleSheet, View } from 'react-native';
import FooterNavigation from './Layout/Footer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './pages/ProductDetails';
import { fetchProducts, fetchUsers } from './components/HttpRequests/httpRequests';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { importProcuctsFromDatabase } from './redux/productsSlice';
import { importUsers } from './redux/profileSlice';
import LoadingOverlay from './Layout/LoadingOverlay';

const Stack = createNativeStackNavigator();

function AppContent() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.profileActions.users);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    async function getProducts() {
      setIsLoading(true);
      const productsArray = await fetchProducts();
      dispatch(importProcuctsFromDatabase({products: productsArray}))
      setIsLoading(false);
    }

    async function getUsers() {
      const usersArray = await fetchUsers();
      dispatch(importUsers({users: usersArray}))
    }
    if(!users || users.length === 0) getUsers();
    getProducts();

  }, [])

  if(isLoading) {
    return <LoadingOverlay />
  }

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