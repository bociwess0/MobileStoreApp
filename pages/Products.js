import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductList/ProductItem";


const products = [
    {
        id: 1,
        title: "Iphone 15",
        brand: "Apple",
        price: 895,
        colors: ["red"],
        images: [
            require("../assets/Products/iphone-15.jpg"),
            require("../assets/Products/iphone-15-2.jpg"),
            require("../assets/Products/iphone-15-3.jpg")
        ]

    }, 
    {
        id: 2,
        title: "Galaxy S23",
        brand: "Samsung",
        price: 895,
        colors: ["black", "white"],
        images: [
            require("../assets/Products/galaxy-s23.jpg"),
            require("../assets/Products/galaxy-s23-2.png"),
            require("../assets/Products/galaxy-s23-3.png")
        ]
    }, 
    {
        id: 3,
        title: "Xiaomi 14 Pro",
        brand: "Xiaomi",
        price: 1000,
        colors: ["green"],
        images: [
            require("../assets/Products/xiaomi-14-pro.jpg"),
            require("../assets/Products/xiaomi-14-pro-2.jpg"),
            require("../assets/Products/xiaomi-14-pro-3.png")
        ]
    }, 
    {
        id: 4,
        title: "Mate 60 Pro",
        brand: "Huawei",
        price: 990,
        colors: ["gray"],
        images: [
            require("../assets/Products/huawei-mate-60-pro.jpg"),
            require("../assets/Products/huawei-mate-60-pro-2.png"),
            require("../assets/Products/huawei-mate-60-pro-3.png"),
        ]
    }, 
]


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