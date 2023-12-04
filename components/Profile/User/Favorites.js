import { FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import FavoriteProductItem from "../Tabs/Favorites/FavoriteProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToFavorites, removeFromFavorites } from "../../../redux/profileSlice";
import PopupModal from "../../Modals/Popup";
import { deleteFromFavoritesDB, fetchFavorites } from "../../HttpRequests/httpRequests";
import { useEffect } from "react";
import LoadingOverlay from "../../../Layout/LoadingOverlay";


function Favorites() {

    const dispatch = useDispatch();

    const {width, height} = useWindowDimensions();
    const loggedUser = useSelector(state => state.profileActions.loggedUser);
    const favoriteProducts = useSelector(state => state.profileActions.favoriteProducts);
    const [isModalVisible, setIsModalVisible] = useState(false);
    let modalMessage = "Are you sure you want to remove this product?";

    const [isLoading, setIsLoading] = useState(false);

    const [targetItem, setTargetItem] = useState({});
    

    useEffect(() => {
        async function getFavorites() {
            const fetchedFavorites = await fetchFavorites(loggedUser.id);
            if(fetchedFavorites.length > 0) {
                setIsLoading(true);
                for(const product of fetchedFavorites) {
                    dispatch(addToFavorites({product: product}));
                }
                setIsLoading(false);
            }
        }
        if(favoriteProducts.length === 0) getFavorites();
    }, [])


    function handleModal(item) {
        setIsModalVisible(!isModalVisible);
        setTargetItem(item);
    }

    async function removeFromFavoritesHandler() {
        await deleteFromFavoritesDB(loggedUser.id, targetItem.productKey);
        dispatch(removeFromFavorites({item: targetItem}));
    }

    if(isLoading) {
        return <LoadingOverlay />
    }

    return(
        <View style={{backgroundColor: "#100156", padding: 15, width: width, height: height - 120}} >
            <Text style={{fontSize: 16, color: "#fff", marginBottom: 20}}>Hi {loggedUser.firstName}, these are your favorite products: </Text>
            <FlatList 
                data={favoriteProducts}
                renderItem={(product) => {
                        return(
                            <FavoriteProductItem
                                item = {product}
                                onRemoveProduct={handleModal}
                            />
                        )
                    }
                }
                keyExtractor={item => item.id}
                style={[styles.productsWrapper, {height: "100%"}]}
            />
            <PopupModal 
                isModalVisible={isModalVisible}
                onCloseModal={handleModal}
                products={favoriteProducts} 
                message={modalMessage} 
                modalAction={removeFromFavoritesHandler}
            />
      </View>

    )
}

const styles = StyleSheet.create({
    productsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        paddingBottom: 20,
        width: "100%",
    },
});

export default Favorites;