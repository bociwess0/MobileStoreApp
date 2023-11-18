import { Animated, FlatList, StyleSheet, View } from "react-native";
import SliderItem from "./Slider/SliderItem";
import { useRef, useState } from "react";
import Pagination from "./Slider/Pagination";

function ProductImageSlider(props) {

    const images = [
        {
            id: 1,
            src: require("../../assets/Products/iphone-15.jpg")
        },
        {
            id: 2,
            src: require("../../assets/Products/iphone-15-2.jpg")
        },
        {
            id: 3,
            src: require("../../assets/Products/iphone-15-3.jpg")
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null)
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current




    return(
        <View style={styles.imageSliderWrapper}>
            <FlatList 
                data={images} 
                renderItem={(image) => {
                        return(
                            <SliderItem
                                image = {image.item.src}
                            />
                        )
                    }
                }
                keyExtractor={image => image.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}

                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                    useNativeDriver: false
                })}
                scrollEventThrottle={32}
                
                onViewableItemsChanged={viewableItemsChanged}
                ref={slideRef}
            />
            <Pagination slides={images} scrollX={scrollX} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageSliderWrapper: {
        width: "100%",
        height: "42%",        
    }
})

export default ProductImageSlider;