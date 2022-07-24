import React from "react";

import Mobile1 from "../components/images/mobile1.png";
import Mobile2 from "../components/images/mobile2.png";
import Mobile3 from "../components/images/mobile3.png";
import Mobile4 from "../components/images/mobile4.png";
import { Button } from "@mui/material";
const Mobile = () => {
  return (
    <>
      <center>
        {" "}
        <Button>
          {" "}
          <h1>PLease Use Desktop</h1>
        </Button>
      </center>
      <img
        style={{ width: "100%", height: "auto" }}
        src={Mobile1}
        alt="ktupe"
      />
      <img
        style={{ width: "100%", height: "auto" }}
        src={Mobile2}
        alt="ktupe"
      />{" "}
      <img
        style={{ width: "100%", height: "auto" }}
        src={Mobile3}
        alt="ktupe"
      />{" "}
      <img
        style={{ width: "100%", height: "auto" }}
        src={Mobile4}
        alt="ktupe"
      />
    </>
  );
};
export default Mobile;
