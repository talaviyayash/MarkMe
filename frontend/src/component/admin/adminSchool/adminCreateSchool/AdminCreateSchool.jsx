/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../../redux/slice/modalSlice";
import AdminCreateSchoolPresentation from "./AdminCreateSchoolPresentation";

const AdminCreateSchool = () => {
  const dispatch = useDispatch();
  const createSchoolModal = useSelector((state) => state?.modal?.createSchool);
  const toggleModal = () => dispatch(changeModal({ name: "createSchool" }));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <AdminCreateSchoolPresentation
      {...{
        createSchoolModal,
        toggleModal,
        control,
        errors,
        handleSubmit,
        onSubmit,
      }}
    />
  );
};

export default AdminCreateSchool;
