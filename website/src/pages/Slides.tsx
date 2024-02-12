import React from "react";
import { useParams } from "react-router-dom";

function Slides() {
  const { week } = useParams();
  return (
    <>
      {week === undefined ? (
        <></>
      ) : parseInt(week.split("week")[1]) > 0 &&
        parseInt(week.split("week")[1]) <= 1 ? (
        <iframe
          src={`/6443/${week}/index.html`}
          className="w-full h-full"
        ></iframe>
      ) : (
        <>No idor for you</>
      )}
    </>
  );
}

export default Slides;
