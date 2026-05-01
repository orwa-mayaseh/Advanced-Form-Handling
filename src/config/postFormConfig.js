export const postFormConfig = {
  id: "post",
  title: "Create Post",
  fields: [
    {
      type: "text",
      name: "title",
      label: "Post Title",
      placeholder: "Enter post title",
      required: true,
    },

    {
      type: "textarea",
      name: "content",
      label: "Content",
      placeholder: "Write your post...",
      required: true,
    },

    {
      type: "radio",
      name: "category",
      label: "Category",
      required: true,
      options: [
        { label: "Tech", value: "tech" },
        { label: "Design", value: "design" },
        { label: "Marketing", value: "marketing" },
      ],
    },

    {
      type: "select",
      name: "author",
      label: "Author",
      required: true,
      options: [
        { label: "Orwa", value: "orwa" },
        { label: "Admin", value: "admin" },
      ],
    },

    {
      type: "checkbox",
      name: "isPublished",
      label: "Publish immediately",
    },

    {
      type: "image",
      name: "image",
      label: "Upload Image",
      accept: "image/*",
    },

    {
      type: "video",
      name: "video",
      label: "Upload Video",
      accept: "video/*",
    },
  ],

  submit: {
    text: "Create Post",
  },
};
