// تعديل ال validation ليكون ديناميكي 

const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Validation Rules Engine
const VALIDATION_RULES = {
  // التعديل هنا: التأكد من أن القيمة ليست null أو undefined تحديداً
  required: (value) =>
    value === undefined || value === null || value.toString().trim() === "",

  minLength: (value, param) =>
    value !== undefined && value !== null && value.toString().length < param,

  maxLength: (value, param) =>
    value !== undefined && value !== null && value.toString().length > param,

  pattern: (value, param) => {
    if (!value) return false;
    const regex = PATTERNS[param] || new RegExp(param);
    return !regex.test(value);
  },
};

// Default Error Messages Generator
const ERROR_MESSAGES = {
  required: (label) => `${label} is required`,
  minLength: (label, param) => `${label} must be at least ${param} characters`,
  maxLength: (label, param) => `${label} must be less than ${param} characters`,
  pattern: (label) => `Invalid ${label} format`,
};

// Validate Single Field
export const validateField = (field, value) => {
  const errors = [];
  const rules = field.validation || {};

  Object.keys(rules).forEach((ruleKey) => {
    const ruleParam = rules[ruleKey];
    const ruleFn = VALIDATION_RULES[ruleKey];

    if (!ruleFn) return;

    const isInvalid = ruleFn(value, ruleParam);

    if (isInvalid) {
      const getMessage = ERROR_MESSAGES[ruleKey];
      const message = getMessage
        ? getMessage(field.label, ruleParam)
        : `${field.label} is invalid`;

      errors.push(message);
    }
  });

  return errors;
};

// Validate Full Form
export const validateForm = (fields, formState) => {
  const errors = {};

  fields.forEach((field) => {
    const fieldErrors = validateField(field, formState[field.name]);

    if (fieldErrors.length > 0) {
      errors[field.name] = fieldErrors[0];
    }
  });

  return errors;
};
