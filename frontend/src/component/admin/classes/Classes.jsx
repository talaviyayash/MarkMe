import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CreateClasses from "./createClasses/CreateClasses";
import { changeModal } from "../../../redux/slice/modalSlice";

const Classes = () => {
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
        {classesModal && <CreateClasses />}
      </Box>
    </>
  );
};

export default Classes;
