const PreviewPanel = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Live Preview</h2>

      {/* Title */}
      {data.title && <h3 className="text-lg font-bold mb-2">{data.title}</h3>}

      {/* Content */}
      {data.content && (
        <p className="text-gray-700 mb-3 whitespace-pre-line">{data.content}</p>
      )}

      {/* Category */}
      {data.category && (
        <p className="text-sm text-blue-600 mb-2">Category: {data.category}</p>
      )}

      {/* Author */}
      {data.author && (
        <p className="text-sm text-gray-500 mb-2">Author: {data.author}</p>
      )}

      {/* Published */}
      {data.isPublished && (
        <p className="text-green-600 font-medium mb-2">Published ✅</p>
      )}

      {/* Image */}
      {data.image?.preview && (
        <div className="mb-3">
          <img
            src={data.image.preview}
            alt="Preview"
            className="w-full rounded-xl"
          />
        </div>
      )}

      {/* Video */}
      {data.video?.preview && (
        <div className="mb-3">
          <video
            src={data.video.preview}
            controls
            className="w-full rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
