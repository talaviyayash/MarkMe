import { Stack } from "@mui/material";
import MUIModal from "../../../../shared/MUIModal";

const AdminCreateClassesPresentation = ({ classesModal, toggleModal }) => {
  return (
    <>
      <MUIModal open={classesModal} onClose={toggleModal}>
        <Stack>Create Classes</Stack>
      </MUIModal>
    </>
  );
};

export default AdminCreateClassesPresentation;
