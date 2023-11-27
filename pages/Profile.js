import { View, useWindowDimensions } from "react-native";
import HeaderNavigation from "../Layout/Header";
import LoginForm from "../components/Profile/LoginForm";
import RegisterForm from "../components/Profile/RegisterForm";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../components/Profile/ForgotPassword";
import { useSelector } from "react-redux";
import Dashboard from "../components/Profile/User/Dashboard";
import ProfileContent from "../components/Profile/ProfileContent";

const Stack = createStackNavigator();

function Profile() {

    const {width, height} = useWindowDimensions();

    const userLoggedIn = useSelector(state => state.profileActions.userLoggedIn);

    return(
        <View style={{backgroundColor: "#100156", paddingBottom: 20, height: height, width: width}}>
            <HeaderNavigation />
            { userLoggedIn && <ProfileContent />}
            { !userLoggedIn && 
                <Stack.Navigator 
                    screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                }}>
                    <Stack.Screen name="Login" component={LoginForm} />
                    <Stack.Screen name="Register" component={RegisterForm} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
            </Stack.Navigator>}
        </View>
    )
}

export default Profile;