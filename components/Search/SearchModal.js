import { Modal, Pressable, StyleSheet, TextInput, View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { hideSearch } from "../../redux/searchSlice";
import SearchResults from "./SearchResults";
import { useReducer, useState } from "react";
import { allProducts } from "../ProductList/AllProducts";

function SearchModal() {

    const dispatch = useDispatch();
    let searchVisible = useSelector(state => state.searchActions.searchActive);

    function closeSearchHandler() {
        dispatch(hideSearch());
    }

    function searchInputHandler(enteredText) {
        setSearchInput(enteredText);
        searchDispatch({type: 'filterSearchProducts', payload: { text: enteredText}});
    }

    function searchReducer(state, action) {
        if(action.type === 'filterSearchProducts') {
            let resultProducts = [];
            let enteredText = action.payload.text.toLowerCase();
            resultProducts = allProducts.filter((product) => (product.title.toLowerCase().includes(enteredText) || product.brand.toLowerCase().includes(enteredText)));
            return resultProducts;
        }
    }

    const [searchInput, setSearchInput] = useState('');
    const [state, searchDispatch] = useReducer(searchReducer, [])

    return(
        <View style={styles.searchContainer} >
                <View style={styles.inputAndCloseWrapper}>
                    <TextInput style={{color: "#ffffff"}} placeholder="Search product..." placeholderTextColor="#e2e2e2" onChangeText={searchInputHandler}/>
                </View>
                <SearchResults products = {state} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: "#100156"
    },
    inputAndCloseWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: "#0B003C",
    },
    closeButton: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: 40
    }
})

export default SearchModal;