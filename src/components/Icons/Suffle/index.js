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
      d="M800.2,448L800.2,448c17.7,0,32-14.3,32-32V224c0-16-11.8-29.3-27.1-31.6c-1-0.2-2.1-0.2-3.2-0.3c-0.3,0-0.7,0-1,0
	c-0.2,0-0.5,0-0.7,0h-192c-17.7,0-32,14.3-32,32v0c0,17.7,14.3,32,32,32h114.6L512,466.7L246.6,201.4c-12.5-12.5-32.8-12.5-45.3,0
	c-12.5,12.5-12.5,32.8,0,45.3L466.7,512L201.4,777.4c-12.5,12.5-12.5,32.8,0,45.3c6.2,6.2,14.4,9.4,22.6,9.4s16.4-3.1,22.6-9.4
	L512,557.3l210.5,210.5H608.1c-17.7,0-32,14.3-32,32v0c0,17.7,14.3,32,32,32h187.7c1.4,0.2,2.8,0.3,4.2,0.3c8.2,0,16.4-3.1,22.6-9.4
	c2.5-2.5,4.4-5.2,5.9-8.1c1.6-3,2.7-6.4,3.2-9.9c0.2-1.6,0.4-3.2,0.4-4.9v-192c0-17.7-14.3-32-32-32h0c-17.7,0-32,14.3-32,32v115.2
	L557.3,512l210.9-210.9V416C768.2,433.7,782.5,448,800.2,448z"
    />
  </svg>
);

export default icon;