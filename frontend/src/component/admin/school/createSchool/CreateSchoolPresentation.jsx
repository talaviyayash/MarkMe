import { Button, Grid2 as Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import MUIModal from "../../../../shared/MUIModal";

const CreateSchoolPresentation = ({
  createSchoolModal,
  toggleModal,
  control,
  errors,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <>
      <MUIModal
        open={createSchoolModal}
        onClose={toggleModal}
        sx={{ maxWidth: 600 }}
      >
        <Grid container spacing={2} direction="column">
          <Grid xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "School name is required",
                validate: (value) =>
                  value.trim() !== "" || "School name cannot be empty",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="School Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Controller
              name="principalEmail"
              control={control}
              rules={{
                required: "Principal Email is required",
                validate: {
                  notEmpty: (value) =>
                    value.trim() !== "" || "Principal Email cannot be empty",
                  isEmail: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Invalid email format",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Principal Email"
                  fullWidth
                  error={!!errors.principalEmail}
                  helperText={errors.principalEmail?.message}
                />
              )}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Controller
              name="address.street"
              control={control}
              rules={{
                required: "Street is required",
                validate: (value) =>
                  value.trim() !== "" || "Street cannot be empty",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Street"
                  fullWidth
                  error={!!errors.address?.street}
                  helperText={errors.address?.street?.message}
                />
              )}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Controller
              name="address.city"
              control={control}
              rules={{
                required: "City is required",
                validate: (value) =>
                  value.trim() !== "" || "City cannot be empty",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="City"
                  fullWidth
                  error={!!errors.address?.city}
                  helperText={errors.address?.city?.message}
                />
              )}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Controller
              name="address.state"
              control={control}
              rules={{
                required: "State is required",
                validate: (value) =>
                  value.trim() !== "" || "State cannot be empty",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="State"
                  fullWidth
                  error={!!errors.address?.state}
                  helperText={errors.address?.state?.message}
                />
              )}
            />
          </Grid>

          <Grid xs={12} sm={6}>
            <Controller
              name="address.zipCode"
              control={control}
              rules={{
                required: "Zip Code is required",
                validate: (value) =>
                  value.trim() !== "" || "Zip Code cannot be empty",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Zip Code"
                  fullWidth
                  error={!!errors.address?.zipCode}
                  helperText={errors.address?.zipCode?.message}
                />
              )}
            />
          </Grid>

          <Grid xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </MUIModal>
    </>
  );
};

export default CreateSchoolPresentation;
