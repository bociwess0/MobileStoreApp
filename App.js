import { StyleSheet, View } from 'react-native';
import FooterNavigation from './Layout/Footer';
import HeaderNavigation from './Layout/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.mainContentWrapper}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ 
              headerLeft: () => null,
              headerTitle: () => <HeaderNavigation />,
              headerStyle: {backgroundColor: "#0B003C"},
            }} 
            >
            <Stack.Screen 
              name="Products"
              component={Products}
            />
            <Stack.Screen 
              name="ProductDetails"
              component={ProductDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      <FooterNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#100156",
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "100%",
    width: "100%",
    marginTop: 40
  },
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
