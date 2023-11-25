import { View, useWindowDimensions } from "react-native";
import HeaderNavigation from "../Layout/Header";
import LoginForm from "../components/Profile/LoginForm";

function Profile() {

    const {width, height} = useWindowDimensions();

    return(
        <View style={{backgroundColor: "#100156", paddingBottom: 20, height: height, width: width}}>
            <HeaderNavigation />
            <LoginForm />
        </View>
    )
}

export default Profile;