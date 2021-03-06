import React from "react";

const icon = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 32}
    height={props.size || 32}
  >
    <path
      fill={props.fill || "#333333"}
      d="M512,97C282.8,97,97,282.8,97,512s185.8,415,415,415s415-185.8,415-415S741.2,97,512,97z M760.2,263.8
	C826.5,330.1,863,418.3,863,512c0,82.2-28,160-79.5,222.5L289,240.9c62.7-51.8,140.7-79.9,223-79.9
	C605.8,161,693.9,197.5,760.2,263.8z M263.8,760.2C197.5,693.9,161,605.8,161,512c0-83.7,29.1-162.9,82.5-226.1l495.1,494.2
	C675.3,833.8,595.9,863,512,863C418.2,863,330.1,826.5,263.8,760.2z"
    />
  </svg>
);

export default icon;
