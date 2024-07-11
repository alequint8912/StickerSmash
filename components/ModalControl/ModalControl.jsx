import { useState } from "react";
import {
  InputLabel,
  MainContainer,
  TextInput,
  TextInputContainer,
} from "./ModalControl.styles";
import { memo } from "react";

const ModalControl = ({
  variant,
  label1,
  label2,
  label3,
  customStyles,
  onSelect,
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const handleVisible = () => {
    onSelect();
    //setVisible(!visible);
  };
  const handleValue = (text) => {
    setValue(text);
  };

  return (
    <>
      <MainContainer variant={variant} customStyles={customStyles}>
        <InputLabel variant={variant}>{label1}</InputLabel>
        <TextInputContainer>
          {label2 ? <InputLabel variant={variant}>{label2}</InputLabel> : null}
          <TextInput
            value={value}
            handleValue={handleValue}
            visible={visible}
            handleVisible={handleVisible}
            variant={variant}
            customStyle={{}}
          />
          {label3 ? <InputLabel variant={variant}>{label3}</InputLabel> : null}
        </TextInputContainer>
      </MainContainer>
    </>
  );
};
const areEqual = (prevProps, nextProps) => true;
export default memo(ModalControl);
