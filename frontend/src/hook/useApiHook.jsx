import { useDispatch } from "react-redux";

import axios from "axios";
import { changeLoader } from "../redux/slice/loaderSlice";
import toast from "react-hot-toast";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useApiHook = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const api = async ({
    loaderName = "",
    needLoader = false,
    showToast = false,
    endPoint = "",
    data,
    params = {},
    method = "GET",
    headers = {},
  }) => {
    try {
      if (needLoader) {
        dispatch(changeLoader({ name: loaderName }));
      }

      const response = await apiInstance({
        method,
        url: endPoint,
        data,
        params,
        headers: {
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      });

      if (showToast) {
        toast.success(response?.data?.message, {
          style: {
            textAlign: "center",
          },
        });
      }
      return { ...response.data, success: true };
    } catch (error) {
      if (showToast) {
        toast.error(error?.response?.data?.message, {
          style: {
            textAlign: "center",
          },
        });
      }
      return { ...(error?.response?.data || {}), success: false };
    } finally {
      if (needLoader) {
        dispatch(changeLoader({ name: loaderName }));
      }
    }
  };
  return {
    api,
  };
};

export default useApiHook;
