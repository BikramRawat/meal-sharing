import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <p>
        This is not the page that you are looking for!
        <br />
        <p>Click Home to goto HomePage 😉</p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
