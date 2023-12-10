import { StyleSheet, Text, View } from "react-native";
import StoreItem from "./StoreItem";

function AvailabilityInStores(props) {

    return(
        <View style={styles.storesWrapper}>
            <Text style={{fontSize: 20, color: "#fff"}}>Availability In Stores</Text>
            {props.stores && props.stores.map((store) => {
                return <StoreItem store={store} key={Math.random()} />
            })}
            {!props.stores && <Text style={{fontSize: 14, color: "#afb0ae", marginTop: 10, fontStyle: "italic"}}>This product is not available in stores at the moment.</Text>}
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