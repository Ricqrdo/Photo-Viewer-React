import React from "react";

const PageSwitch = (props) => {
  return (
    <div className="pages-switch py-3 d-flex justify-content-center">
      <button
        onClick={props.lastPage}
        className="btn mr-1 text-white"
        style={{ backgroundColor: "#ff5833" }}
      >
        Last
      </button>
      <button
        onClick={props.nextPage}
        className="btn ml-1 text-white"
        style={{ backgroundColor: "#ff5833" }}
      >
        Next
      </button>
    </div>
  );
};

export default PageSwitch;
