import React from "react";
import { Input } from "components";
const { TextArea } = Input;
const App = () => {
  return (
    <div>
      <TextArea
        placeholder="text me"
        resize="horizontal"
        allowClear={true}
        onResize={() => {
          console.log("changing");
        }}
      />
    </div>
  );
};

export default App;
