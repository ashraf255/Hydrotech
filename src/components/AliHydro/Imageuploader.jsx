// import { useEffect, useRef, useState } from "react";
// import BackBtn from "../Shared file/BackBtn";

// export default function imageUploader() {
//   const [image, setImage] = useState({});
//   const [imageName, setImageName] = useState("");
//   const [uploadingProgress, setUploadingProgress] = useState(50);
//   // const [imageUploadingState, setImageUploadingState] = useState(false);

//   const fileInputRef = useRef();

//   function imageUploadHandler(event, type) {
//     event.preventDefault();

//     if (type === "drag") {
//       setImage(event.dataTransfer.files[0]);
//     } else if (type === "input") {
//       setImage(event.target.files[0]);
//     }
//   }

//   useEffect(() => {
//     const name = image?.name
//       ? image.name.split(".")[0]
//       : "Browse File to Upload!";

//     setImageName(name.length >= 25 ? name.substring(0, 25) + "..." : name);
//   }, [image]);

//   return (
//     <>
//       <BackBtn></BackBtn>
//       <article
//         className="w-full min-h-screen flex items-center justify-center p-4"
//         style={{
//           backgroundImage: `url("https://i.ibb.co/VxQfNQg/diseasebackground.jpg")`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           height: "450px",
//         }}
//       >
//         <div className="wrapper">
//           <header>Upload your plant image</header>
//           <form
//             action="#"
//             onClick={function (event) {
//               event.preventDefault();
//               fileInputRef.current.click();
//             }}
//             onDrop={(event) => imageUploadHandler(event, "drag")}
//             onDragOver={function (event) {
//               event.preventDefault();
//             }}
//           >
//             <i className="fas fa-cloud-upload-alt"></i>
//             <p className="capitalize">{imageName}</p>
//           </form>

//           {/* If Images ia available or inserted */}
//           {image?.name && (
//             <div>
//               {/* Uploading state */}
//               <section className="progress-area">
//                 <ul>
//                   <li className="row">
//                     <i className="fas fa-file-alt"></i>
//                     <div className="content-i">
//                       <div className="details">
//                         <span className="name capitalize flex w-full gap-2 justify-between">
//                           <span>{imageName}</span>
//                           <span className="text-red-400">Uploading...</span>
//                         </span>
//                         <span className="percent"> </span>
//                       </div>
//                       <div className="progress-bar">
//                         <div
//                           className="progress"
//                           style={{ width: uploadingProgress + "%" }}
//                         ></div>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </section>

//               {/* Upload Succeed state */}
//               <section className="uploaded-area">
//                 <ul>
//                   <li className="row">
//                     <div className="content-i upload">
//                       <i className="fas fa-file-alt"></i>
//                       <div className="details">
//                         <span className="name capitalize">
//                           <span>{imageName}</span>
//                           <span className="text-cyan-500 pl-2">Uploaded.</span>
//                         </span>
//                         <span className="size"> </span>
//                       </div>
//                     </div>
//                     <i className="fas fa-check"></i>
//                   </li>
//                 </ul>
//               </section>

//               {/* uploading Images */}
//               <section className="mt-1.5 mb-3">
//                 <div className="p-1 rounded-xl border-2 border-dashed border-[#6990f2] w-full">
//                   <img
//                     src={URL.createObjectURL(image)}
//                     alt={image.name}
//                     className="w-full h-full rounded-md"
//                   />
//                 </div>
//               </section>
//             </div>
//           )}

//           <section className="w-full mt-1">
//             <button
//               className="w-full bg-[#6990f24d] text-[#6990f2] hover:text-slate-100 hover:tracking-wider font-bold uppercase hover:bg-[#6990f2] py-2 text-center text-xl rounded-md duration-500"
//               type="submit"
//               role="button"
//               // onClick={handleSubmit}
//             >
//               submit
//             </button>
//           </section>
//         </div>

//         <input
//           ref={fileInputRef}
//           type="file"
//           onChange={(event) => imageUploadHandler(event, "input")}
//           hidden
//         />
//       </article>
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";
import BackBtn from "../Shared file/BackBtn";

const ImageUploader = () => {
  const [image, setImage] = useState({});
  const [imageName, setImageName] = useState("");
  const [uploadingProgress, setUploadingProgress] = useState(50);
  const [showImageSection, setShowImageSection] = useState(false);
  const [imagePathName, setImagePathName] = useState("");

  const fileInputRef = useRef();

  const imageUploadHandler = (event, type) => {
    event.preventDefault();
    if (!image) return;

    if (type === "drag") {
      setImage(event.dataTransfer.files[0]);
    } else if (type === "input") {
      setImage(event.target.files[0]);
    }
  };

  useEffect(() => {
    const name = image?.name
      ? image.name.split(".")[0]
      : "Browse File to Upload!";

    setImageName(name.length >= 25 ? name.substring(0, 25) + "..." : name);
  }, [image]);

  const handleSubmit = () => {
    if (!image) return;
    setUploadingProgress(50);
    modalRef.current.click();

    setTimeout(() => {
      setShowImageSection(true);
      setImagePathName(
        image?.name ? image.name.split(".")[0] : "please enter your plant image"
      );
    }, 1500); // 2000 milliseconds (2 seconds) delay
  };
  const modalRef = useRef(null);

  return (
    <>
      <BackBtn />

      <article
        className="w-full min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/VxQfNQg/diseasebackground.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="wrapper">
          <header>Upload your plant image</header>

          <form
            action="#"
            onClick={(event) => {
              event.preventDefault();
              if (!image) return;

              fileInputRef.current.click();
            }}
            onDrop={(event) => imageUploadHandler(event, "drag")}
            onDragOver={(event) => {
              if (!image) return;
              event.preventDefault();
            }}
          >
            <i className="fas fa-cloud-upload-alt"></i>
            <p className="capitalize">Enter your plant image</p>
          </form>

          {showImageSection && (
            <div>
              <section className="progress-area">
                <ul>
                  <li className="row">
                    <i className="fas fa-file-alt"></i>
                    <div className="content-i">
                      <div className="details">
                        <span className="name capitalize flex w-full gap-2 justify-between">
                          <span>Your Plant image </span>
                          <span className="text-red-400">Uploading...</span>
                        </span>
                        <span className="percent"> </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ width: uploadingProgress + "%" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="uploaded-area">
                <ul>
                  <li className="row">
                    <div className="content-i upload">
                      <i className="fas fa-file-alt"></i>
                      <div className="details">
                        <span className="name capitalize">
                          <span> Detecting your plant image</span>
                          <span className="text-cyan-500 pl-2">Uploaded.</span>
                        </span>
                        <span className="size"> </span>
                      </div>
                    </div>
                    <i className="fas fa-check"></i>
                  </li>
                </ul>
              </section>

              <section className="mt-1.5 mb-3">
                <div className="p-1 rounded-xl border-2 border-dashed border-[#6990f2] w-full">
                  <img
                    src={image.name && URL.createObjectURL(image)}
                    alt={image.name}
                    className="w-full h-full rounded-md"
                  />
                </div>
              </section>
            </div>
          )}

          <section className="w-full mt-1">
            <button
              className="w-full bg-[#6990f24d] text-black hover:text-slate-100 hover:tracking-wider font-bold uppercase hover:bg-[#6990f2] py-2 text-center text-xl rounded-md duration-500"
              type="submit"
              role="button"
              onClick={handleSubmit}
            >
              submit
            </button>

            {imagePathName && (
              <p className="mt-2 text-black text-center">
                Plant diasese detected it is:{" "}
                {/* <u>
                  <b> {imagePathName}</b>
                </u> */}
              </p>
            )}
          </section>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          onChange={(event) => imageUploadHandler(event, "input")}
          hidden
        />
      </article>

      <div>
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn hidden" ref={modalRef}>
          Open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            {/* Image */}
            <div className="p-1 rounded-xl border-2 border-dashed border-[#6990f2] w-full">
              <img
                src={image.name && URL.createObjectURL(image)}
                alt={image.name}
                className="w-full h-full rounded-md"
              />
            </div>

            {/* Plant disease information */}
            <h3 className="text-xl font-light capitalize text-gray-500 text-center">
              Your plant disease detected, and the disease is
            </h3>

            {/* Disease name */}
            <p className="py-4 text-center text-green-500">
              <u>
                <b> {imagePathName}</b>
              </u>
            </p>

            {/* Modal action */}
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
