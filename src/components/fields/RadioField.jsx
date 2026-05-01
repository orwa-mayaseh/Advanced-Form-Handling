const RadioField = ({ field, value, onChange, error }) => {
  return (
    <div className="mb-5">
      {/* Label */}
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Options */}
      <div className="space-y-2">
        {field.options?.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={field.name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(field.name, option.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />

            <span className="text-gray-700 text-sm">{option.label}</span>
          </label>
        ))}
      </div>

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default RadioField;
