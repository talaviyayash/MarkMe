/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../../redux/slice/modalSlice";
import CreateSchoolPresentation from "./CreateSchoolPresentation";
import { useForm } from "react-hook-form";

const CreateSchool = () => {
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
    <CreateSchoolPresentation
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

export default CreateSchool;
