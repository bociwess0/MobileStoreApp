import { View, ActivityIndicator, StyleSheet } from 'react-native';


function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#100156",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});