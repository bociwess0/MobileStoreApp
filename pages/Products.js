import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductList/ProductItem";


const products = [
    {
        id: 1,
        title: "Iphone 15",
        brand: "Apple",
        price: 895,
        colors: ["red"],
        image: require("../assets/Products/iphone-15.jpg")

    }, 
    {
        id: 2,
        title: "Galaxy S23",
        brand: "Samsung",
        price: 895,
        colors: ["black", "white"],
        image: require("../assets/Products/galaxy-s23.jpg")
    }, 
    {
        id: 3,
        title: "Xiaomi 14 Pro",
        brand: "Xiaomi",
        price: 1000,
        colors: ["green"],
        image: require("../assets/Products/xiaomi-14-pro.jpg")
    }, 
    {
        id: 4,
        title: "Mate 60 Pro",
        brand: "Huawei",
        price: 990,
        colors: ["gray"],
        image: require("../assets/Products/huawei-mate-60-pro.jpg")
    }, 
]


function Products() {
    return(
        <View style={{backgroundColor: "#100156"}} >
            <FlatList 
                data={products}
                renderItem={(product) => {
                        return(
                            <ProductItem
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