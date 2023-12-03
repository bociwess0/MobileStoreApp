import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import ProfileImageContent from "../Tabs/Dashboard/ProfileImageContent";
import { useSelector } from "react-redux";
import ProfileTabItem from "../Tabs/ProfileTabItem";

function Dashboard() {

    const {width, height} = useWindowDimensions();

    const loggedUser = useSelector(state => state.profileActions.loggedUser.user);

    return (
        <View style={[styles.dashboardWrapper, {width: width, height: height}]}>
            <ProfileImageContent firstName={loggedUser.firstName} lastName={loggedUser.lastName}/>
            <ProfileTabItem image={require("../../../assets/Profile/edit.png")} name = {"Edit Profile"} logout={false} navigateTo={"EditProfile"}/>
            <ProfileTabItem image={require("../../../assets/Profile/profile-favorites.png")} name = {"Favorites"} logout={false} navigateTo={"Favorites"}/>
            {/* <ProfileTabItem image={require("../../../assets/Profile/order-history.png")} name = {"Order History"} logout={false} navigateTo={"OrderHistory"} /> */}
            <ProfileTabItem image={require("../../../assets/Profile/logout.png")} name = {"Logout"} logout={true} />
        </View>
    )
    
}

const styles = StyleSheet.create({
    dashboardWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: "#100156"
    }
})

export default Dashboard;