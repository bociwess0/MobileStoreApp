import { StyleSheet, Text, View } from "react-native";
import StoreItem from "./StoreItem";

function AvailabilityInStores(props) {

    console.log(props.stores.length);

    return(
        <View style={styles.storesWrapper}>
            <Text style={{fontSize: 20, color: "#fff"}}>Availability In Stores</Text>
            {props.stores.length > 0 && props.stores.map((store) => {
                return <StoreItem store={store} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    storesWrapper: {
        display: "flex",
        flexDirection: "column",
        marginTop: 20
    }
})

export default AvailabilityInStores;