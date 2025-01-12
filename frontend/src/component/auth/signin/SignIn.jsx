import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useApiHook from "../../../hook/useApiHook";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Stack)(() => ({
  height: "calc( 100vh - 64px)",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: 1200,
  minHeight: "100%",
}));

const StyledFormContainer = styled(Stack)(() => ({
  gap: 5,
  width: "100%",
  alignItems: "center",
  padding: 20,
  "& .MuiTextField-root": { maxWidth: 500, width: "100%", marginBottom: 0 },
}));

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const { api } = useApiHook();

  // Handle form submission
  const onSubmit = async (data) => {
    const response = await api({
      endPoint: "/auth/singin",
      method: "POST",
      needLoader: true,
      showToast: true,
      loaderName: "signin",
      data,
    });
    if (response?.success) {
      localStorage.setItem("token", response?.data?.token);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledFormContainer>
          <Typography variant="h4"> Sign In</Typography>

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            variant="contained"
            sx={{ maxWidth: 500, width: "100%", height: 40, marginTop: "10px" }}
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default SignIn;
