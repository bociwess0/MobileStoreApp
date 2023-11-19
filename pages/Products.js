import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductList/ProductItem";
import { allProducts } from "../components/ProductList/AllProducts";


const products = allProducts


function Products({navigation}) {
    return(
        <View style={{backgroundColor: "#100156"}} >
            <FlatList 
                data={products}
                renderItem={(product) => {
                        return(
                            <ProductItem
                                item = {product}
                                navigation = {navigation}
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
    productsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 10,
        width: "100%",
        height: "100%"
    },
});

export default Products;