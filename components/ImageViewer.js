import { View, Image, StyleSheet } from "react-native";

const PlaceholderImage = require("../assets/images/background-image.png");

const ImageViewer = ({ photoUri }) => {
  console.log("URI: ", photoUri);
  return (
    <View style={styles.imageContainer}>
      <Image
        source={photoUri ? { uri: photoUri } : PlaceholderImage}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
