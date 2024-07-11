import { MainContainer } from "./WorksheetSection.styles";
import { memo } from "react";

const WorksheetSection = ({ id, selectedSections, children, customStyles }) => {
  //   console.log(`Rendering WorksheetSection ${id}`);
  if (selectedSections?.includes(id) || !selectedSections?.length)
    return (
      <MainContainer customStyles={customStyles}>{children}</MainContainer>
    );

  return null;
};

// const areEqual = (prevProps, nextProps) => {
//   const equals =
//     prevProps.id === nextProps.id &&
//     prevProps.selectedSections.join() === nextProps.selectedSections.join();
//prevProps.customStyles === nextProps.customStyles &&
//prevProps.children === nextProps.children;

//     console.log(`${prevProps.id} - ${prevProps.id === nextProps.id}`);
//   console.log(
//     `${prevProps.selectedSections.join(",")} - ${
//       prevProps.selectedSections === nextProps.selectedSections
//     }`
//   );
//   console.log(
//     `${prevProps.customStyles} - ${
//       prevProps.customStyles === nextProps.customStyles
//     }`
//   );
//   console.log(
//     `${prevProps.children} - ${prevProps.children === nextProps.children}`
//   );
//   console.log(equals);
//   return equals;
// };

export default memo(WorksheetSection);
