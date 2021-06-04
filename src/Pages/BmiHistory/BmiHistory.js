import React from "react";
import "./BmiHistory.css";

const BmiHistory = () => {
  const history = JSON.parse(localStorage.getItem("data"));
  const result = "Ölçüm yapılmamış.";

  return (
    <div>
      {history.height === "" && history.kg === "" && history.bmi === "" && <h1>{result}</h1>}
      {history.height !== "" && history.kg !== "" && history.bmi !== "" &&  (
        <div>
          <h1>Son Kaydedilen Ölçüm</h1>
          <h2>Boy : {history.height}</h2>
          <h2>Kilo : {history.kg}</h2>
          <h2>Vücut Kitle İndeksi : {history.bmi}</h2>
        </div>
      )}
    </div>
  );
};

export default BmiHistory;
