import { StyleSheet, View } from 'react-native';
import Products from '../pages/Products';


function MainContent() {
    return(
        <Products />
    )
}

const styles = StyleSheet.create({
    mainContentWrapper: {
      flex: 1,

    },
});

export default MainContent;