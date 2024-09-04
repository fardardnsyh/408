import { useState, useRef } from "react";
import upload from "../../assets/images/upload.svg";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  // if (files) return (
  //   <div className="uploads">
  //     <ul>
  //       {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
  //     </ul>
  //     <div className="actions">
  //       <button onClick={() => setFiles(null)}>Cancel</button>
  //       <button onClick={handleUpload}>Upload</button>
  //     </div>
  //   </div>
  // )

  return (
    <>
      <section className="lg:mb-8 lg:p-1 w-[70%] flex md:w-[90%] bg-white rounded-xl border-[1px] shadow-lg shadow-[rgba(0,0,0,0.03)]">
        <div
          className="dropzone p-8 w-full h-full rounded-lg flex flex-col justify-center items-center border-dashed border-[2px] border-[rgba(0, 0, 0, 0.15)]"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {files ? (
            <img src={URL.createObjectURL.files} />
          ) : (
            <img
              onClick={() => inputRef.current.click()}
              className="cursor-pointer"
              src={upload}
            />
          )}

          <h1 className="text-[#414141] text-base pb-2 font-normal">
            Select a image or drag and drop here
          </h1>
          <h1 className="text-[#C3C3C3] text-xs pb-2 font-[300]">
            JPG, JPEG, PNG file size no more than 10MB
          </h1>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          {/* <button className="" onClick={() => inputRef.current.click()}>
      Select Files
    </button> */}
        </div>
      </section>
    </>
  );
};

export default DragDropFiles;
