import Joi from "joi";

const signUpValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.empty": "Name is required.",
      "string.pattern.base": "Name can only contain alphabets and spaces.",
      "string.min": "Name must be at least 3 characters long.",
      "string.max": "Name must not exceed 30 characters.",
    }),

  email: Joi.string()
    .email({ tlds: { allow: true } })
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Please provide a valid email address.",
    }),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.min": "Password must be at least 8 characters long.",
      "string.max": "Password must not exceed 30 characters.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).",
    }),
  role: Joi.string().optional(),
});

const signInValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: true } })
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Please provide a valid email address.",
    }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
  }),
});

export { signUpValidationSchema, signInValidationSchema };
