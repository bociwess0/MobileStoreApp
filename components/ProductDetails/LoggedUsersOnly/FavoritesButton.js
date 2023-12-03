import { Image, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../redux/profileSlice";
import { useState } from "react";
import { useEffect } from "react";
import { addToFavoritesDB, deleteFromFavoritesDB } from "../../HttpRequests/httpRequests";

function FavoritesButton(props) {

    const dispatch = useDispatch();

    const favoriteProducts = useSelector(state => state.profileActions.favoriteProducts);
    const loggedUser = useSelector(state => state.profileActions.loggedUser);

    async function handleFavoritesButton() {

        const foundObject = favoriteProducts.find((item) => item.id === props.product.id);

        if (!foundObject) {
            let productKey = await addToFavoritesDB(loggedUser.id, props.product);
            dispatch(addToFavorites({product: {
                ...props.product,
                productKey: productKey
            }}));
        } else {

            const foundProduct = favoriteProducts.find((product) => product.id === props.product.id);
            if(foundProduct) {
                await deleteFromFavoritesDB(loggedUser.id, foundProduct.productKey);
                dispatch(removeFromFavorites({item: props.product}));
            }
        }
    }

    const iconSrc = useSelector((state) => {
        const foundObject = state.profileActions.favoriteProducts.find(
          (item) => item.id === props.product.id
        );
    
        return foundObject
          ? require("../../../assets/Products/favorites-active.png")
          : require("../../../assets/Products/favorites_icon.png");
    });
    
    return(
        <View>
            <Pressable onPress={handleFavoritesButton} >
                <Image style={{width: 30, height: 30}} source={iconSrc} />
            </Pressable>
        </View>
    )
}

export default FavoritesButton;