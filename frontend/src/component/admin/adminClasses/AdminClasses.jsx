import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../redux/slice/modalSlice";
import AdminCreateClasses from "./adminCreateClasses/AdminCreateClasses";

const AdminClasses = () => {
  const dispatch = useDispatch();
  const classesModal = useSelector((state) => state?.modal?.createClasses);
  const toggleModal = () => dispatch(changeModal({ name: "createClasses" }));
  return (
    <>
      <Box
        sx={{
          margin: "20px 10px",
        }}
      >
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={toggleModal}
        >
          Create Classes
        </Button>
        {classesModal && <AdminCreateClasses />}
      </Box>
    </>
  );
};

export default AdminClasses;
