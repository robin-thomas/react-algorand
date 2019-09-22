import React, { useState } from "react";

import { MDBInput } from "mdbreact";

import { DataConsumer } from "./DataProvider";

const Input = props => {
  const [text, setText] = useState(props.value ? props.value : "");

  return (
    <DataConsumer>
      {ctx => (
        <MDBInput
          type="text"
          value={text}
          hint={props.hint}
          label={props.label}
          onChange={e => setText(e.target.value)}
          disabled={ctx.disabled}
          size={props.size ? props.size : "sm"}
          icon={props.icon}
        />
      )}
    </DataConsumer>
  );
};

export default Input;
