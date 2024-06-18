import React, { useRef, useEffect } from "react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Baseline,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  TextQuote,
  Underline,
  Undo2,
} from "lucide-react";

interface MyComponentProps {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      tags: string;
    }>
  >;
}

const Questionditor: React.FC<MyComponentProps> = ({ setFormData }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const format = (command: any, value?: any) => {
    document.execCommand(command, false, value);
  };

  const handleInput = () => {
    if (editorRef.current) {
      setFormData((prev) => ({
        ...prev,
        description: editorRef.current!.innerHTML,
      }));
    }
  };

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      editor.addEventListener("input", handleInput);
    }
    return () => {
      if (editor) {
        editor.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="toolbar rounded-lg flex flex-wrap space-x-2 bg-[#afedd4] p-4 items-center">
        <select
          onChange={(e) => format("formatBlock", e.target.value)}
          className="btn bg-[#afedd4] focus:outline-none"
        >
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="p">Normal</option>
        </select>
        <select
          onChange={(e) => format("fontName", e.target.value)}
          className="btn bg-[#afedd4] focus:outline-none"
        >
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <select
          onChange={(e) => format("fontSize", e.target.value)}
          className="btn bg-[#afedd4] focus:outline-none"
        >
          <option>Size</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        <input
          type="color"
          onChange={(e) => format("foreColor", e.target.value)}
          className="btn bg-[#afedd4] focus:outline-none"
          title="Text Color"
        />
        <button
          onClick={() => format("bold")}
          className="btn text-xl font-semibold"
        >
          B
        </button>
        <button onClick={() => format("italic")} className="btn">
          <Italic className="h-5" />
        </button>
        <button onClick={() => format("underline")} className="btn">
          <Underline className="h-5" />
        </button>
        <button onClick={() => format("strikeThrough")} className="btn">
          <Strikethrough className="h-5" />
        </button>
        <button
          onClick={() => format("subscript")}
          className="btn font-semibold"
        >
          X<sub>2</sub>
        </button>
        <button
          onClick={() => format("superscript")}
          className="btn font-semibold"
        >
          X<sup>2</sup>
        </button>
        <button
          onClick={() => format("insertOrderedList")}
          className="btn font-semibold"
        >
          <ListOrdered />
        </button>
        <button
          onClick={() => format("insertUnorderedList")}
          className="btn font-semibold"
        >
          <List />
        </button>
        <button
          onClick={() => format("createLink", prompt("Enter the URL"))}
          className="btn"
        >
          <Link2 />
        </button>
        <button
          onClick={() => format("insertImage", prompt("Enter the image URL"))}
          className="btn"
        >
          <ImagePlus />
        </button>
        <button onClick={() => format("insertEmoji", "😊")} className="btn">
          😊
        </button>
        <button onClick={() => format("insertHorizontalRule")} className="btn">
          <TextQuote />
        </button>
        <button onClick={() => format("justifyLeft")} className="btn">
          <AlignLeft />
        </button>
        <button onClick={() => format("justifyCenter")} className="btn">
          <AlignCenter />
        </button>
        <button onClick={() => format("justifyRight")} className="btn">
          <AlignRight />
        </button>
        <button onClick={() => format("justifyFull")} className="btn">
          <AlignJustify />
        </button>
        <button onClick={() => document.execCommand("undo")} className="btn">
          <Undo2 />
        </button>
        <button onClick={() => document.execCommand("redo")} className="btn">
          <Redo2 />
        </button>
      </div>
      <div
        ref={editorRef}
        id="editor"
        contentEditable="true"
        className="border p-4 min-h-[300px] rounded-lg focus:outline-none"
      ></div>
    </div>
  );
};

export default Questionditor;
