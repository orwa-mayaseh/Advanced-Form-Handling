import { useEffect } from "react";

const ImageUploadField = ({ field, value, onChange, error }) => {
  // تنظيف الـ object URL لتجنب memory leak
  useEffect(() => {
    return () => {
      if (value?.preview) {
        URL.revokeObjectURL(value.preview);
      }
    };
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    onChange(field.name, {
      file,
      preview,
    });
  };

  return (
    <div className="mb-5">
      {/* Label */}
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input */}
      <input
        type="file"
        accept={field.accept || "image/*"}
        onChange={handleFileChange}
        className={`
          w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-medium
          file:bg-blue-50 file:text-blue-600
          hover:file:bg-blue-100
        `}
      />

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ImageUploadField;
