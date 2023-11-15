import { View, StyleSheet } from "react-native";
import ProductImageSlider from "../components/ProductDetails/ProductImageSlider";
import ProductDetailInfo from "../components/ProductDetails/ProductDetailInfo";

function ProductDetails(props) {
    return(
        <View style={styles.productDetailWrapper}>
            <ProductImageSlider />
            <ProductDetailInfo />
        </View>
    )
}

// background: linear-gradient(to top right, #8251F0, #F67E2E)

const styles = StyleSheet.create({
    productDetailWrapper: {
        display: "flex",
        flexDirection: "column"
    }
})

export default ProductDetails;