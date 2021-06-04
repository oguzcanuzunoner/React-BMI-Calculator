import React, { useState, useEffect } from "react";
import "./Calculator.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [data,setData] = useState({height : "", kg : "", bmi : ""})


  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  const calculateBMI = () => {
    let cal = Number((10000 * (data.kg / (data.height * data.height))).toFixed(2));
    setData({...data,bmi : cal})

  };
  return (
    <div className={"container"}>
      <Input
        type="text"
        value={data.height}
        placeholder="Boyunuzu Giriniz."
        onChange={e => setData({...data, height: e.target.value})}
      ></Input>
      <Input
        type="text"
        value={data.kg}
        placeholder="Kilonuzu Giriniz."
        onChange={e => setData({...data, kg: e.target.value})}
      ></Input>
      <Button click={calculateBMI} buttonName="Calculate" />
      {data.bmi !== "" && (
        <h2 style={{ color: "black" }}>Vücut Kitle İndeksiniz : {data.bmi}</h2>
      )}
      {data.bmi !== "" && data.bmi < 18.5 && (
        <Link to="/dietList/zayif">Diyet Listeniz İçin Tıklayınız</Link>
      )}
      {data.bmi !== "" && data.bmi >= 18.5 && data.bmi < 24.9 && (
        <Link to="/dietList/normal">Diyet Listeniz İçin Tıklayınız</Link>
      )}
      {data.bmi !== "" && data.bmi >= 25 && data.bmi < 29.9 && (
        <Link to="/dietList/kilolu">Diyet Listeniz İçin Tıklayınız</Link>
      )}
      {data.bmi !== "" && data.bmi >= 30 && data.bmi < 34.9 && (
        <Link to="/dietList/obez">Diyet Listeniz İçin Tıklayınız</Link>
      )}
      {data.bmi !== "" && data.bmi >= 35 && (
        <Link to="/dietList/morbidobez">Diyet Listeniz İçin Tıklayınız</Link>
      )}
    </div>
  );
};
export default Calculator;
