import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../redux/slice/modalSlice";
import AdminCreateSchool from "./adminCreateSchool/AdminCreateSchool";

const AdminSchool = () => {
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
        {createSchoolModal && <AdminCreateSchool />}
      </Box>
    </>
  );
};

export default AdminSchool;
