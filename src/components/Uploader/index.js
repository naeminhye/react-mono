import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";

const Uploader = props => {
  return (
    <div className="mono__uploader">
      <div className="mono__uploader--drag">
        <input type="file" id="uploader__input" className="mono__uploader--input" />
        <div className="mono__uploader--drag-hint">
          <label for="uploader__input"> Drag & drop files or folders here or browse file</label>
        </div>
      </div>
      {/*  className="mono__uploader__button" */}
      <input type="file" accept multiple style={{ display: "none" }}></input>
    </div>
  );
};

export default Uploader;
