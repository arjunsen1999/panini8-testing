import React, { useState, useCallback, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Ensure CSS is imported for styling
import "katex/dist/katex.min.css";

// TypeScript types for props
interface MarkupInputProps {
  id: string;
  register?: Function;
  setValue: Function;
  watch: Function;
  placeholderText?: string;
  defaultVal?: string;
  errors: any;
  setError?: Function;
  textCounter?: boolean;
  clearErrors?: Function;
  initialData?: string;
  handlecharacterCount?: any;
}

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p className="py-2 text-sm italic">Loading...</p>,
});

const Markup: React.FC<MarkupInputProps> = ({
  id,
  setValue,
  watch,
  placeholderText = "",
  errors,
  setError,
  initialData,
  clearErrors,
  textCounter = false,
  handlecharacterCount,
}) => {
  const maxLength = 320;
  const [editorValue, setEditorValue] = useState(initialData || "");
  const [characterCount, setCharacterCount] = useState<number>(0);

  useEffect(() => {
    if (initialData) {
      const plainTextContent = initialData.replace(/<[^>]*>/g, "");
      const count = plainTextContent.length;

      setEditorValue(initialData);
      setCharacterCount(count);
    }
  }, [initialData]);

  // Modules for ReactQuill configuration
  // const modules = useMemo(
  //   () => ({
  //     toolbar: {
  //       container: [
  //         ["bold", "italic", "underline", "strike"],
  //         [{ list: "ordered" }, { list: "bullet" }],
  //         [{ size: ['small', false, 'large', 'huge'] }],
  //       ],
  //     },
  //     clipboard: {
  //       matchVisual: false,
  //     },
  //   }),
  //   []
  // );

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ],
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const handleLimit = (count: number) => {
    if (handlecharacterCount && setError) {
      handlecharacterCount((prevData: any) => ({
        ...prevData,
        [id]: { length: count },
      }));

      if (count > maxLength) {
        setError(id, {
          type: "custom",
          message: `${id} can't be longer than ${maxLength} characters`,
        });
      } else {
        clearErrors && clearErrors(id);
      }
    }
  };

  const handleChange = (content: string) => {
    console.log("content", content);
    const plainTextContent = content.replace(/<[^>]*>/g, "");
    const count = plainTextContent.length;

    setCharacterCount(count);
    setEditorValue(content);
    setValue(id, content);

    if (textCounter) {
      handleLimit(count);
    }
  };

  return (
    <div className="">
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={(content) => {
          handleChange(content);
        }}
        modules={modules}
        placeholder={placeholderText}
        className="h-full w-full max-w-2xl text-sm  border-none"
      />
      {textCounter && (
        <p className="px-1 my-2 text-xs font-normal text-medium-gray">
          {characterCount} of {maxLength} characters used
        </p>
      )}

      {errors[id] && <p className="text-red-500">{errors[id].message}</p>}
    </div>
  );
};

export default Markup;
