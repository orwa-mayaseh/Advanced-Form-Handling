const CheckboxField = ({ field, value, onChange, error }) => {
  return (
    <div className="mb-5">
      <label className="flex items-center gap-3 cursor-pointer">
        {/* Checkbox */}
        <input
          type="checkbox"
          name={field.name}
          checked={!!value}
          onChange={(e) => onChange(field.name, e.target.checked)}
          className={`
            w-5 h-5 rounded border
            transition-all duration-200
            accent-blue-500

            ${error ? "border-red-500" : "border-gray-300"}
          `}
        />

        {/* Label */}
        <span className="text-sm text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CheckboxField;
