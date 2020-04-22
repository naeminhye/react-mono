import React, { useState } from "react";
import Button from "../Button";
import styles from "./Uploader.module.scss";
import Icons from "../Icons";
import moment from "moment";

const humanFileSize = (bytes, si) => {
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  var units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + " " + units[u];
};

const Uploader = (props) => {
  const { multiple, ...others } = props;

  const [fileList, setFileList] = useState([]);

  return (
    <div className={styles["mono__uploader"]}>
      <div className={styles["mono__uploader--drag"]}>
        <Icons.Upload size={64} />
        <input
          type="file"
          id="uploader__input"
          // accept="true"
          multiple={multiple}
          className={styles["mono__uploader--input"]}
          onChange={(e) => {
            setFileList([...fileList, ...e.target.files]);
            console.log("files", e.target.files);
          }}
          {...others}
        />
        <div className={styles["mono__uploader--drag-hint"]}>
          Drag & drop files or folders here or
          <label htmlFor="uploader__input"> browse file</label>.
        </div>
      </div>
      <div className={styles["mono__uploader--file-list"]}>
        {fileList.map((file, index) => (
          <div className={styles["mono__uploader--file-item"]} key={index}>
            <div className={styles["mono__uploader--file-type"]}>
              {(file.type.includes("image") && (
                <Icons.ImageFile size={32} fill="#0a3961" />
              )) ||
                (file.type === "application/pdf" && (
                  <Icons.PdfFile size={32} fill="#0a3961" />
                )) ||
                (file.type === "application/zip" && (
                  <Icons.ZipFile size={32} fill="#0a3961" />
                )) ||
                ((file.type === "application/zip" ||
                  file.type === "application/x-rar-compressed" ||
                  file.type === "application/x-7z-compressed" ||
                  file.type === "application/x-tar") && (
                  <Icons.ZipFile size={32} fill="#0a3961" />
                )) ||
                ((file.type === "application/vnd.ms-excel" ||
                  file.type ===
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") && (
                  <Icons.ExcelFile size={32} fill="#0a3961" />
                )) ||
                ((file.type === "application/msword" ||
                  file.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document") && (
                  <Icons.WordFile size={32} fill="#0a3961" />
                )) ||
                ((file.type === "application/vnd.ms-powerpoint" ||
                  file.type ===
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation") && (
                  <Icons.PowerPointFile size={32} fill="#0a3961" />
                )) ||
                (file.type === "text/plain" && (
                  <Icons.TextFile size={32} fill="#0a3961" />
                )) || <Icons.UnknownFile size={32} fill="#0a3961" />}
            </div>
            <div className={styles["left-content"]}>
              <div className={styles["file-name"]}>{file.name}</div>
              <div className={styles["extra-info"]}>
                <div>{moment(file.lastModifiedDate).fromNow()}</div>
                <div>{humanFileSize(file.size, true)}</div>
              </div>
            </div>
            <div className={styles["right-content"]}>
              <Button size="icon">
                <Icons.Download size={24} />
              </Button>
              <Button
                type="danger"
                size="icon"
                onClick={() => {
                  // remove file by index
                  let _fileList = [...fileList];
                  _fileList.splice(index, 1);
                  setFileList(_fileList);
                }}
              >
                <Icons.TrashBin size={24} fill="#FFF" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uploader;
