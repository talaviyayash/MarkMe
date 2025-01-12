import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../../redux/slice/modalSlice";
import AdminCreateClassesPresentation from "./AdminCreateClassesPresentation";

const AdminCreateClasses = () => {
  const dispatch = useDispatch();
  const classesModal = useSelector((state) => state?.modal?.createClasses);
  const toggleModal = () => dispatch(changeModal({ name: "createClasses" }));
  return (
    <AdminCreateClassesPresentation
      {...{
        classesModal,
        toggleModal,
      }}
    />
  );
};

export default AdminCreateClasses;
