import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useApiHook from "../hook/useApiHook";
import FullscreenLoader from "../shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../redux/slice/appSlice";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const [loader, setLoader] = useState(true);
  const { api } = useApiHook();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state?.app?.userProfile);

  useEffect(() => {
    if (token) {
      const getUserData = async () => {
        const response = await api({
          endPoint: "/user",
          method: "GET",
        });
        if (response?.success) {
          dispatch(addProfile(response?.data));
        } else {
          localStorage.clear();
          navigate("/signin");
        }
        setLoader(false);
      };
      getUserData();
    } else {
      navigate("/signin");
    }
  }, []);

  if (loader) {
    return <FullscreenLoader />;
  }

  return token && userProfile ? <Outlet /> : <Navigate to="dashboard" />;
};

export default ProtectedRoute;
