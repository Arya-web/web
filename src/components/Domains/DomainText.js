import React from "react";

const DomainText = (props) => {
  const { title, body } = props.obj;
  console.log(title);
  console.log(body);
  return (
    <>
      <div className="soft_wing">
        <div className="soft_title">
          <span className="soft">{title}</span> Wing
        </div>
        <div className="soft_text">{body}</div>
      </div>
    </>
  );
};

export default DomainText;
