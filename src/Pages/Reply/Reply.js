import React from "react";
import Zayif from "../../components/DietList/Zayif/Zayif";
import Normal from "../../components/DietList/Normal/Normal";
import Kilolu from "../../components/DietList/Kilolu/Kilolu";
import Obez from "../../components/DietList/Obez/Obez";
import MorbidObez from "../../components/DietList/MorbidObez/MorbidObez";

const Reply = (props) => {
  const URL_REPLY = props.match.params.rep;
  return (
    <div>
      {URL_REPLY === "zayif" && <Zayif/>}
      {URL_REPLY === "normal" && <Normal/>}
      {URL_REPLY === "kilolu" && <Kilolu/>}
      {URL_REPLY === "obez" && <Obez/>}
      {URL_REPLY === "morbidobez" && <MorbidObez/>}
    </div>
  );
  }

export default Reply;
