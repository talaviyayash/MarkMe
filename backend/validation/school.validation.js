import Joi from "joi";

const createSchoolValidation = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "School name cannot be empty",
    "any.required": "School name is required",
  }),
  principalEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .required()
    .messages({
      "string.email": "Invalid email format",
      "string.empty": "Principal Email cannot be empty",
      "any.required": "Principal Email is required",
    }),
  address: Joi.object({
    street: Joi.string().trim().required().messages({
      "string.empty": "Street cannot be empty",
      "any.required": "Street is required",
    }),
    city: Joi.string().trim().required().messages({
      "string.empty": "City cannot be empty",
      "any.required": "City is required",
    }),
    state: Joi.string().trim().required().messages({
      "string.empty": "State cannot be empty",
      "any.required": "State is required",
    }),
    zipCode: Joi.string().trim().required().messages({
      "string.empty": "Zip Code cannot be empty",
      "any.required": "Zip Code is required",
    }),
  })
    .required()
    .messages({
      "any.required": "Address is required",
    }),
});

export { createSchoolValidation };
