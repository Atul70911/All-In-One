import React, { useState, useEffect } from "react";
import "../style/QrCode.css";

const QrCode = ({ setPage }) => {
  const [data, setData] = useState("");
  const [obj, setObj] = useState(null);

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    data
  )}`;

  const apiCall = async () => {
    const res = await fetch(url);
    return await res.blob();
  };

  const handleClick = async () => {
    const val = await apiCall();
    setObj(val);
  };

  const imgSrc = obj ? URL.createObjectURL(obj) : "";

  useEffect(() => {
    if (!imgSrc) return;
    return () => URL.revokeObjectURL(imgSrc);
  }, [imgSrc]);

  return (
    <div className="qrApp">
      <h1 className="qrTitle">QR-Code Generation</h1>

      <div className="qrControls">
        <input
          className="qrInput"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Text or Url"
        />

        <button className="qrBtnPrimary" onClick={handleClick}>
          Generate
        </button>
      </div>

      <div className="qrPreview">
        {imgSrc ? (
          <img className="qrImg" src={imgSrc} alt="Qr-Code" />
        ) : (
          <p className="qrHint">Enter text and click Generate.</p>
        )}
      </div>

      <button className="qrBtnSecondary" onClick={() => setPage("ImageSearchEngine")}>
        Next
      </button>
    </div>
  );
};

export default QrCode;
