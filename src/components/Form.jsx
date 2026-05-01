import { useReducer, useEffect } from "react";
import { renderField } from "../utils/fieldMap";
import { validateForm } from "../utils/validationEngine";

// 🧠 Build initial state dynamically
const buildInitialState = (fields) => {
  const state = {};

  fields.forEach((field) => {
    switch (field.type) {
      case "checkbox":
        state[field.name] = field.defaultValue || false;
        break;

      case "image":
      case "video":
        state[field.name] = null;
        break;

      default:
        state[field.name] = field.defaultValue || "";
    }
  });

  return state;
};

// 🧠 Reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "SET_ALL":
      return action.payload;

    case "RESET":
      return action.payload;

    default:
      return state;
  }
};

const Form = ({ config, onChange }) => {
  const initialState = buildInitialState(config.fields);

  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useReducer((s, a) => ({ ...s, ...a }), {});

  // 🟢 1. Load Draft from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(config.id);

    if (saved) {
      dispatch({
        type: "SET_ALL",
        payload: JSON.parse(saved),
      });
    }
  }, [config.id]);

  // 🟢 2. Autosave Draft + sync with Preview
  useEffect(() => {
    localStorage.setItem(config.id, JSON.stringify(formState));

    // Live Preview sync (App → PreviewPanel)
    onChange?.(formState);
  }, [formState]);

  // 🧠 Universal change handler
  const handleChange = (name, value) => {
    dispatch({
      type: "CHANGE_FIELD",
      name,
      value,
    });
  };

  // 🚀 Submit Simulation
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Validate
    const validationErrors = validateForm(config.fields, formState);
    setErrors(validationErrors);

    const hasErrors = Object.keys(validationErrors).length > 0;
    if (hasErrors) return;

    // 2️⃣ Success Simulation
    console.log("🚀 FORM SUBMITTED SUCCESSFULLY");
    console.log("DATA:", formState);

    // 3️⃣ Clear Draft
    localStorage.removeItem(config.id);

    // (optional) reset UI
    dispatch({ type: "RESET", payload: initialState });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Title */}
      <h2 className="text-2xl font-bold">{config.title}</h2>

      {/* Fields */}
      {config.fields.map((field) =>
        renderField(field, {
          value: formState[field.name],
          onChange: handleChange,
          error: errors[field.name],
        }),
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        {config.submit?.text || "Submit"}
      </button>
    </form>
  );
};

export default Form;
