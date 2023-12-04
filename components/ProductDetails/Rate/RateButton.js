import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { calculateAvgRating, rateProduct } from "../../../redux/productsSlice";
import { updateProduct } from "../../HttpRequests/httpRequests";

function RateButton(props) {
    
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.profileActions.loggedUser);
    const products = useSelector(state => state.productsActions.products);
    let productsNew = products;

    useEffect(() => {
        productsNew = products;
    }, [products]);

    

    const handleRating = (value) => {

        dispatch(rateProduct({productKey: props.productKey, rating: value}));
        
        const foundProduct = (products.find((product) => product.productKey === props.productKey)).product;

        const updatedProduct = {
            productKey: props.productKey,
            product: {
                ...props.product,
                ratings: (foundProduct.ratings) ? [...foundProduct.ratings, value] : [value]
            }
        }

        updateProduct(updatedProduct.productKey, updatedProduct.product);
    }

    return(
        <SelectDropdown 
                data={[1,2,3,4,5]}
                defaultButtonText="Rate product"
                buttonStyle={{backgroundColor: "rgba(180, 35, 108, 0.5)", borderColor: "rgba(180, 35, 108, 1)", borderWidth: 1, borderRadius: 20, maxHeight: 30, maxWidth: 110}}
                buttonTextStyle={{fontSize: 13 ,color: "#fff"}}
                onSelect={(selectedItem, index) => {
                    handleRating(selectedItem)
                }}

        />
    )
}

const styles = StyleSheet.create({
    RateButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 30,
        backgroundColor: "rgba(180, 35, 108, 0.5)",
        width: 110,
        borderColor: "rgba(180, 35, 108, 1)",
        borderWidth: 1
    },

});

export default RateButton;