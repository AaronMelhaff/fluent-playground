import { Button, DoorArrowLeftIcon } from "@fluentui/react-northstar";
import * as React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Example: FC = () => (
  <div className="Home">
    <h1>Example Component</h1>
    <p>This is an example component for the playground to render.</p>

    <Button as={Link} to="/" text>
      <DoorArrowLeftIcon />
      &nbsp;&nbsp; Return home
    </Button>
  </div>
);

export default Example;
