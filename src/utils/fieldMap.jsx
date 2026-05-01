import TextField from "../components/fields/TextField";
import SelectField from "../components/fields/SelectField";
import CheckboxField from "../components/fields/CheckboxField";
import TextAreaField from "../components/fields/TextAreaField";
import RadioField from "../components/fields/RadioField";
import ImageUploadField from "../components/fields/ImageUploadField";
import VideoUploadField from "../components/fields/VideoUploadField";

const fieldComponents = {
  text: TextField,
  email: TextField,
  password: TextField,
  select: SelectField,
  checkbox: CheckboxField,
  textarea: TextAreaField,
  radio: RadioField,
  image: ImageUploadField,
  video: VideoUploadField,
};

export const renderField = (field, props) => {
  const Component = fieldComponents[field.type];

  if (!Component) {
    console.warn(`Unsupported field type: ${field.type}`);
    return null;
  }

  return <Component key={field.name} field={field} {...props} />;
};
