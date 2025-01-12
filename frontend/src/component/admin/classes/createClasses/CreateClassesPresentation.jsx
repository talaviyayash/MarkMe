import { Stack } from "@mui/material";
import MUIModal from "../../../../shared/MUIModal";

const CreateClassesPresentation = ({ classesModal, toggleModal }) => {
  return (
    <>
      <MUIModal open={classesModal} onClose={toggleModal}>
        <Stack>Create Classes</Stack>
      </MUIModal>
    </>
  );
};

export default CreateClassesPresentation;
