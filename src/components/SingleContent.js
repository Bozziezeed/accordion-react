import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const SingleContent = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  let callIcon = <></>;
  if (showContent === false) {
    callIcon = <AiFillCaretDown />;
  } else {
    callIcon = <AiFillCaretUp />;
  }

  return (
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowContent(!showContent)}>
          {/* {showContent ? <AiFillCaretUp /> : <AiFillCaretDown />} */}
          {callIcon}
        </button>
      </header>
      {showContent && <p>{description}</p>}
    </article>
  );
};
export default SingleContent;
