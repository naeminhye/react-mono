import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";

const Uploader = props => {
  return (
    <div className="mono__uploader">
      <div className="mono__uploader__drag">
        <Button>Upload a file</Button>
        <div className="mono__uploader__drag--hint">
          Drag & drop any images or documents that might be helpful in
          explaining your project brief here.
        </div>
      </div>
      {/*  className="mono__uploader__button" */}
      <input type="file" accept multiple style={{ display: "none" }}></input>
    </div>
  );
};

export default Uploader;
