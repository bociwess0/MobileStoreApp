import { StyleSheet, View } from 'react-native';
import Logo from '../components/Header/Logo';
import PageInfo from '../components/Header/PageInfo';


function HeaderNavigation() {
    return(
        <View style={styles.headerWrapper}>
            <PageInfo />
            <Logo />
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: "#0B003C",
        borderBottomColor: "#33363D",
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
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

export default HeaderNavigation;
