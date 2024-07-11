import { MainContainer, Label } from "./TableHeader.styles.jsx";

const TableHeader = ({ label, customStyles }) => {
  return (
    <MainContainer customStyles={customStyles}>
      <Label>{label}</Label>
    </MainContainer>
  );
};

export default TableHeader;
