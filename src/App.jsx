import Form from "./components/Form";
import PreviewPanel from "./components/PreviewPanel";

import { postFormConfig } from "./config/postFormConfig";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-6">
        
        {/* Form */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <Form config={postFormConfig} onChange={setFormData} />
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <PreviewPanel data={formData} />
        </div>

      </div>
    </div>
  );
}

export default App;