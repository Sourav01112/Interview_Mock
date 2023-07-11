// import React, { useEffect, useState } from "react";
// import { Uploader } from "uploader";
// const uploader = Uploader({ apiKey: "public_12a1yQe7EU4qyxqmR6KgZdUsrb35" });

// const uploaderOptions = {
//   multi: true,
//   // Comment out this line & use 'onUpdate' instead of
//   // 'onComplete' to have the dropzone close after upload.
//   showFinishButton: true,

//   styles: {
//     colors: {
//       primary: "#377dff",
//     },
//   },
// };

// const uploadOpen = uploader.open({ maxFileCount: 1 }).then(
//   (files) => {
//     const fileUrls = files.map((x) => x.fileUrl).join("\n");
//     const success =
//       fileUrls.length === 0
//         ? "No file selected."
//         : `File uploaded:\n\n${fileUrls}`;
//     alert(success);
//     console.log(fileUrls);
//     localStorage.setItem("url", fileUrls);
//   },
//   (error) => {
//     alert(error);
//   }
// );

// export const Upload = () => {
//   const [files, setFiles] = useState([]);

//   return (
//     <div>
//       <h1>Upload</h1>
//       <button onClick={() => uploadOpen()}>Upload</button>
//     </div>
//   );
// };

import React, { CSSProperties } from "react";

import { useCSVReader } from "react-papaparse";

const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed {rgb(189, 189, 189)`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  file: {
    background: "linear-gradient(to bottom, #EEE, #DDD)",
    borderRadius: 20,
    display: "flex",
    height: 120,
    width: 120,
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  },
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },

  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
  },
};

export const Upload = () => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        localStorage.setItem("csvData", JSON.stringify(results));
        console.log("---------------------------");
        console.log(results);
        console.log("---------------------------");
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
        <>
          <div style={styles.csvReader}>
            <button type="button" {...getRootProps()} style={styles.browseFile}>
              Upload
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  );
};
