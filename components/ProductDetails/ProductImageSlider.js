import { Animated, FlatList, StyleSheet, View } from "react-native";
import SliderItem from "./Slider/SliderItem";
import { useRef, useState } from "react";
import Pagination from "./Slider/Pagination";

function ProductImageSlider(props) {
    
    const images = props.item.images;

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null)


    return(
        <View style={styles.imageSliderWrapper}>
            <FlatList 
                data={images} 
                renderItem={(image) => {
                        return(
                            <SliderItem
                                image = {image.item}
                            />
                        )
                    }
                }
                keyExtractor={image => image.item}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}

                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                    useNativeDriver: false
                })}
                scrollEventThrottle={32}
                
                ref={slideRef}
            />
            <Pagination key={Math.random()} slides={images} scrollX={scrollX} />
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