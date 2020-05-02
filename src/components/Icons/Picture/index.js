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
      d="M856.4,772.5c0.4-0.4,0.7-0.9,1.1-1.4c0.2-0.2,0.3-0.4,0.4-0.6c0.3-0.5,0.7-1,1-1.4c0.1-0.1,0.2-0.3,0.3-0.4
		c0.4-0.6,0.7-1.2,1-1.8c0.1-0.1,0.2-0.3,0.2-0.4c0.3-0.6,0.6-1.3,0.9-2c0,0,0,0,0,0c0.3-0.7,0.6-1.4,0.8-2.1c0-0.1,0.1-0.2,0.1-0.4
		c0.2-0.7,0.5-1.5,0.6-2.2c0-0.1,0-0.1,0-0.2c0.2-0.7,0.3-1.4,0.4-2.2c0-0.1,0-0.2,0.1-0.4c0.1-0.7,0.2-1.5,0.3-2.2
		c0-0.2,0-0.3,0-0.5c0.1-0.8,0.1-1.5,0.1-2.3c0,0,0,0,0,0l0.2-480c0-8.5-3.4-16.6-9.4-22.6c-6-6-14.1-9.4-22.6-9.4H191.9
		c-17.7,0-32,14.3-32,32v480c0,0,0,0,0,0c0,0.7,0,1.4,0.1,2.1c0,0.2,0,0.4,0,0.6c0.1,0.6,0.1,1.3,0.2,1.9c0,0.1,0,0.1,0,0.2
		c0.1,0.7,0.2,1.4,0.4,2.1c0,0.1,0.1,0.2,0.1,0.4c0.1,0.6,0.3,1.3,0.5,1.9c0,0.1,0,0.1,0,0.2c0.2,0.7,0.4,1.4,0.7,2
		c0,0.1,0.1,0.2,0.1,0.2c0.2,0.6,0.5,1.2,0.8,1.8c0,0.1,0.1,0.2,0.1,0.3c0.3,0.6,0.6,1.2,0.9,1.8c0.1,0.2,0.2,0.3,0.3,0.5
		c0.2,0.4,0.5,0.9,0.8,1.3c0.1,0.2,0.2,0.4,0.4,0.6c0.3,0.5,0.7,1,1,1.5c0.2,0.2,0.4,0.5,0.5,0.7c0.2,0.3,0.4,0.5,0.7,0.8
		c0.2,0.3,0.4,0.5,0.7,0.8c0.4,0.4,0.7,0.8,1.1,1.2c0.3,0.3,0.5,0.5,0.8,0.8c0.2,0.2,0.4,0.4,0.6,0.6c0.3,0.2,0.6,0.5,0.8,0.7
		c0.4,0.3,0.8,0.7,1.2,1c0.3,0.2,0.6,0.4,0.9,0.6c0.3,0.2,0.5,0.4,0.8,0.6c0.3,0.2,0.5,0.4,0.8,0.5c0.5,0.3,1,0.6,1.5,0.9
		c0.2,0.1,0.5,0.2,0.7,0.4c0.4,0.2,0.8,0.4,1.2,0.6c0.2,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0.1c0.6,0.2,1.2,0.5,1.8,0.7
		c0.2,0.1,0.5,0.2,0.7,0.2c0.4,0.1,0.8,0.3,1.3,0.4c0.3,0.1,0.5,0.2,0.8,0.2c0.6,0.1,1.1,0.3,1.7,0.4c0.3,0.1,0.7,0.1,1,0.2
		c0.3,0,0.6,0.1,0.8,0.1c0.4,0.1,0.8,0.1,1.2,0.1c0,0,0.1,0,0.1,0c1,0.1,1.9,0.1,2.9,0.2c0.1,0,0.2,0,0.3,0h0.7c0.1,0,0.1,0,0.2,0
		h315.4c1.2,0.1,2.5,0.2,3.7,0.2c1.2,0,2.5-0.1,3.7-0.2H831c0.1,0,0.3,0,0.4,0h0.4c0.2,0,0.5,0,0.7,0c0.5,0,1.2,0,1.7-0.1
		c0.4,0,0.8-0.1,1.2-0.1c0.3,0,0.7-0.1,1-0.1c0.6-0.1,1.3-0.2,1.9-0.3c0.2-0.1,0.5-0.1,0.7-0.2c0.6-0.1,1.1-0.3,1.7-0.4
		c0.1,0,0.3-0.1,0.4-0.1c0,0,0.1,0,0.1,0c0.7-0.2,1.3-0.4,2-0.7c0.2-0.1,0.4-0.2,0.7-0.3c0.6-0.3,1.2-0.5,1.8-0.8
		c0.2-0.1,0.5-0.2,0.7-0.4c0.4-0.2,0.8-0.5,1.3-0.7c0.3-0.2,0.6-0.4,1-0.6c0.4-0.3,0.8-0.5,1.2-0.8c0.3-0.2,0.6-0.4,0.8-0.6
		c0.4-0.3,0.8-0.6,1.2-0.9c0.3-0.3,0.6-0.5,0.9-0.8c0.3-0.2,0.6-0.5,0.8-0.7c0.3-0.3,0.6-0.5,0.8-0.8c0.4-0.4,0.7-0.8,1.1-1.2
		C856,773,856.2,772.7,856.4,772.5z M223.9,326.4c0-12.4,10.1-22.5,22.5-22.5h531.2c12.4,0,22.5,10.1,22.5,22.5l-0.1,302.9
		c0,5.6-7.2,7.8-10.4,3.2l-93.8-138.3c-6-8.9-16-14.1-26.7-14c-10.7,0.1-20.6,5.5-26.5,14.4l-124.7,190c-6.4,9.8-20,11.5-28.7,3.7
		L370.6,581c-6.1-5.5-13.8-8.3-21.5-8.3c-7.9,0-15.7,2.9-21.9,8.6l-94.2,88.2c-3.5,3.3-9.2,0.8-9.2-4V326.4z M746.7,719.9H594.6
		c-10,0-16-11.1-10.5-19.5L657.8,588c5.7-8.7,18.3-8.7,24.1-0.2l75.6,111.5C763.5,708.1,757.3,719.9,746.7,719.9z M407.9,719.9
		H294.2c-7.6,0-11.3-9.3-5.7-14.5l47.8-44.7c7.5-7,19.1-7.1,26.8-0.2l50.3,45.6C418.7,710.9,415.2,719.9,407.9,719.9z"
    />
    <path
      fill={props.fill || "#333333"}
      d="M406.6,517.4c53,0,96-43,96-96c0-53-43-96-96-96c-53,0-96,43-96,96C310.6,474.4,353.5,517.4,406.6,517.4z M406.6,389.4
		c17.7,0,32,14.4,32,32c0,17.7-14.3,32-32,32c-17.6,0-32-14.3-32-32C374.6,403.7,388.9,389.4,406.6,389.4z"
    />
  </svg>
);

export default icon;