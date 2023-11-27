import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./User/Dashboard";
import EditProfile from "./User/EditProfile";
import Favorites from "./User/Favorites";
import OrderHistory from "./User/OrderHistory";
import { View, useWindowDimensions } from "react-native";

const Stack = createStackNavigator();

function ProfileContent() {

    const {width, height} = useWindowDimensions();

    return(
        <View style={{width: width, height: height}}>
            <Stack.Navigator 
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Favorites" component={Favorites} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
            </Stack.Navigator>
        </View>
    )
}

export default ProfileContent;