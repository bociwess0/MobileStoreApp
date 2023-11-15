import { StyleSheet, View } from 'react-native';
import MainContent from './Layout/MainContent';
import FooterNavigation from './Layout/Footer';
import HeaderNavigation from './Layout/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <MainContent />
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.mainContentWrapper}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home"
              component={HomeScreen}
              options={{ 
                headerTitle: () => <HeaderNavigation />,
                headerStyle: {backgroundColor: "#0B003C"},
              }} 
              
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
