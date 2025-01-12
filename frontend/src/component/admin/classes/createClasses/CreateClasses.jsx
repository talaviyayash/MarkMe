import { useDispatch, useSelector } from "react-redux";
import CreateClassesPresentation from "./CreateClassesPresentation";
import { changeModal } from "../../../../redux/slice/modalSlice";

const CreateClasses = () => {
  const dispatch = useDispatch();
  const classesModal = useSelector((state) => state?.modal?.createClasses);
  const toggleModal = () => dispatch(changeModal({ name: "createClasses" }));
  return (
    <CreateClassesPresentation
      {...{
        classesModal,
        toggleModal,
      }}
    />
  );
};

export default CreateClasses;
