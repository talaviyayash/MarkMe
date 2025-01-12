import { Box, Button } from "@mui/material";
import { changeModal } from "../../../redux/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import CreateSchool from "./createSchool/CreateSchool";

const School = () => {
  const dispatch = useDispatch();
  const createSchoolModal = useSelector((state) => state?.modal?.createSchool);
  const toggleModal = () => dispatch(changeModal({ name: "createSchool" }));
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
          Create School
        </Button>
        {createSchoolModal && <CreateSchool />}
      </Box>
    </>
  );
};

export default School;
