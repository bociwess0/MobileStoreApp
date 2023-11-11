import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HeaderNavigation from './Layout/Header';
import MainContent from './Layout/MainContent';
import FooterNavigation from './Layout/Footer';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <HeaderNavigation />
      <MainContent />
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
});
