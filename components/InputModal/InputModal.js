import React from "react";
import { InputContainer, TextInput } from "./InputModal.styles";
import { KeyboardAvoidingView, Modal, View } from "react-native";
// import Modal from "../Modal/Modal";

const InputModal = ({
  visible,
  closeModal,
  value,
  handleChange,
  multiline = false,
}) => {
  return (
    <Modal
      animationType="fade"
      //transparent={true}

      visible={visible}
      style={{ backgroundColor: "red" }}
    >
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#bcbcbc88" }}
        onPress={closeModal}
      >
        {/* <Modal visible={visible} closeModal={closeModal}> */}
        <KeyboardAvoidingView
          style={{ flex: 1, width: "100%" }}
          behavior="padding"
        >
          <InputContainer
            onPress={() => {
              closeModal();
            }}
          >
            <TextInput
              multiline={multiline}
              value={value}
              onChangeText={handleChange}
            />
          </InputContainer>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default InputModal;
