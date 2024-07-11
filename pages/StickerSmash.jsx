import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const StickerSmash = () => {
  const [selectedPhotoUri, setSelectedPhotoUri] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedPhotoUri(null);
    setPickedEmoji(null);
  };

  const onAddSticker = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onSaveImageAsync = () => {};

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      const { uri } = result.assets?.[0] ?? {};
      if (uri) {
        setSelectedPhotoUri(uri);
        setShowAppOptions(true);
      }
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <ImageViewer photoUri={selectedPhotoUri} />
        {pickedEmoji ? (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        ) : null}
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              theme="primary"
              label="Choose a photo"
              onPress={pickImageAsync}
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
        <EmojiPicker isVisible={isModalOpen} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default StickerSmash;
