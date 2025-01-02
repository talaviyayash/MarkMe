import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const StyledContainer = styled(Stack)(() => ({
  height: "calc( 100vh - 64px)",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledFormContainer = styled(Stack)(() => ({
  gap: 5,
  width: "100%",
  alignItems: "center",
  padding: 20,
  "& .MuiTextField-root": { maxWidth: 500, width: "100%", marginBottom: 0 },
}));

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <Typography variant="h4">Sign Up</Typography>
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
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("phoneNumber", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
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
          Sign Up
        </Button>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SignUp;
