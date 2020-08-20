import React from "react";
import { BsGrid } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";

const Title = ({ view, setView, handleView }) => {
  return (
    <div className="title">
      <h2>Latest Feed</h2>
      <div>
        {view ? (
          <>
            <VscMenu
              size="1.4em"
              style={{ marginRight: "15px", cursor: "pointer" }}
              onClick={handleView}
            />
            <BsGrid
              size="1.4em"
              color="#ff4e69"
              style={{ cursor: "pointer" }}
            />
          </>
        ) : (
          <>
            <VscMenu
              size="1.4em"
              color="#ff4e69"
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
            <BsGrid
              size="1.4em"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
        {/* <VscMenu size="1.4em" />
        <BsGrid size="1.4em" /> */}
      </div>
    </div>
  );
};

export default Title;
