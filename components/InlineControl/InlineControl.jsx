import {
  Label,
  MainContainer,
  TextInput,
  LabelContainer,
} from "./InlineControl.styles";
import { useState } from "react";

function InlineControl({ width, customStyle, label1, label2, label3 }) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleValue = (text) => {
    setValue(text);
  };

  return (
    <MainContainer width={width} customStyle={customStyle}>
      <LabelContainer width={"40%"}>
        <Label>{label1}</Label>
        <Label>{label2}</Label>
      </LabelContainer>
      <TextInput
        value={value}
        handleValue={handleValue}
        visible={visible}
        handleVisible={handleVisible}
        //variant={variant}
        customStyle={{ container: { flex: 1 } }}
      />
      <LabelContainer>
        <Label>{label3}</Label>
      </LabelContainer>
    </MainContainer>
  );
}

export default InlineControl;
