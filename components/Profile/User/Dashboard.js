import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import ProfileImageContent from "../Tabs/Dashboard/ProfileImageContent";

const Stack = createStackNavigator();

function Dashboard() {

    const {width, height} = useWindowDimensions();

    return (
        <View style={[styles.dashboardWrapper, {width: width, height: height}]}>
            <ProfileImageContent />
            {/* <Stack.Navigator 
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                >
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator> */}
        </View>
    )
    
}

const styles = StyleSheet.create({
    dashboardWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
    }
})

export default Dashboard;