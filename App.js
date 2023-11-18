import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppContent from './AppContent';

export default function App() {

  return (
    <View style={styles.appContainer}>
      <Provider store={store}>
        <AppContent />
      </Provider>
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
