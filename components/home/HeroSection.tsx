import { StyleSheet, Image, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// images import
import heroOne from "../../assets/images/hero-image-one.jpg";
import heroTwo from "../../assets/images/hero-image-two.jpg";
import heroThree from "../../assets/images/hero-image-three.jpg";
import heroFour from "../../assets/images/hero-image-four.jpg";

const images = [
  { id: 1, uri: Image.resolveAssetSource(heroOne).uri },
  { id: 2, uri: Image.resolveAssetSource(heroTwo).uri },
  { id: 3, uri: Image.resolveAssetSource(heroThree).uri },
  { id: 4, uri: Image.resolveAssetSource(heroFour).uri },
];

const HeroSection = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <GestureHandlerRootView>
      <Carousel
        loop
        width={windowWidth}
        // height={}
        autoPlay={false}
        data={images}
        scrollAnimationDuration={125}
        renderItem={({ item }) => (
          <Image
            style={{
              width: windowWidth,
              aspectRatio: 16 / 9,
              resizeMode: "cover",
            }}
            source={{ uri: item.uri }}
          />
        )}
      />
    </GestureHandlerRootView>
  );
};

export default HeroSection;

const styles = StyleSheet.create({});
