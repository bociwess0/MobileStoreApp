import { View, StyleSheet } from "react-native";
import ProductImageSlider from "../components/ProductDetails/ProductImageSlider";
import ProductDetailInfo from "../components/ProductDetails/ProductDetailInfo";
import { useRoute } from "@react-navigation/native";

function ProductDetails(props) {

    const route = useRoute();

    return(
        <View style={styles.productDetailWrapper}>
            <ProductImageSlider item={route.params.selectedItem} />
            <ProductDetailInfo item={route.params.selectedItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    productDetailWrapper: {
        display: "flex",
        flexDirection: "column"
    }
})

export default ProductDetails;