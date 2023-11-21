import { StyleSheet, View, Text } from 'react-native';
import FooterItem from '../components/Footer/FooterItem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
const footerIcons = [
    {   
        id: 1,
        image: require("../assets/home.png"),
        text: "Home" 
    },
    {
        id: 2,
        image: require("../assets/search.png"),
        text: "Search" 
    },
    {
        id: 3,
        image: require("../assets/cart.png"),
        text: "Cart" 
    },
    {
        id: 4,
        image: require("../assets/profile.png"),
        text: "Profile" 
    },
]

const Tab = createBottomTabNavigator();

function FooterNavigation() {
    return(
        // <View style={styles.footerWrapper}>
        //     {footerIcons.map((icon) => 
        //         <FooterItem
        //             key = {icon.id}
        //             image = {icon.image}
        //             text = {icon.text}
        //             id = {icon.id}
        //         />
        //         )}
        // </View>
        <Tab.Navigator>
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    footerWrapper: {
        backgroundColor: "#0B003C",
        borderTopColor: "#33363D",
        width: "100%",
        height: 70,
        bottom: 40,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
});

export default FooterNavigation;