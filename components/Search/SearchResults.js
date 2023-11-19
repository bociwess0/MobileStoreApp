import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchItem from "./SearchItem";

function SearchResults(props) {

    return(
        <View style={styles.productsWrapper} >
            {/* <Text>dwadwawda</Text> */}
            <FlatList 
                data={props.products}
                renderItem={(product) => {
                        return(
                            <SearchItem
                                item = {product}
                            />
                        )
                    }
                }
                keyExtractor={item => item.id}
                style={styles.productsWrapper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchResultsContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "red"
    },
    productsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 5,
    },
});

export default SearchResults;  