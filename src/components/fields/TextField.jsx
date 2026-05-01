const TextField = ({ field, value, onChange, error }) => {
  return (
    <div className="mb-5">
      {/* Label */}
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input */}
      <input
        type={field.type || "text"}
        name={field.name}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        placeholder={field.placeholder || ""}
        className={`
          w-full px-4 py-2 rounded-xl border
          outline-none transition-all duration-200
          bg-white text-gray-800

          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          }
        `}
      />

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
