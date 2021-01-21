import React from "react";
import format from "date-fns/format";

import { Link } from "src/store/types";

import "./styles.scss";

type Props = {
  message: Link,
  showTimeStamp: boolean,
};

function Snippet({ message, showTimeStamp }: Props) {
  return (
    <div>
      <div className="rcw-snippet">
        <h5 className="rcw-snippet-title">{message.title}</h5>
        <div className="rcw-snippet-details">
          <a href={message.link} target={message.target} className="rcw-link">
            {message.link}
          </a>
        </div>
      </div>
      {showTimeStamp && (
        <span className="rcw-timestamp">
          <p className="d-inline-block font-weight-bold">
            {format(message.timestamp, "hh:mm")}
          </p>
          <p className="d-inline-block">{format(message.timestamp, " - yyyy/MM/dd")}</p>
        </span>
      )}
    </div>
  );
}

export default Snippet;
