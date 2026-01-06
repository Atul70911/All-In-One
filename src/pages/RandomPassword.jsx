import React, { useState } from "react";
import { Files } from "lucide-react";
import "../style/RandomPassword.css";

const length = 12;
const allCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allSmall = "abcdefghijklmnopqrstuvwxyz";
const allNum = "0123456789";
const allSpecial = "!#$%&()*:;<=>?@[]|}~";
const charAll =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*:;<=>?@[]|}~";

const RandomPassword = ({ setPage }) => {
  const [password, setPassword] = useState("");

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      alert("Copied!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handlePasswordGen = () => {
    let temp = "";
    temp += allCaps[Math.floor(Math.random() * allCaps.length)];
    temp += allSmall[Math.floor(Math.random() * allSmall.length)];
    temp += allNum[Math.floor(Math.random() * allNum.length)];
    temp += allSpecial[Math.floor(Math.random() * allSpecial.length)];

    while (length > temp.length) {
      temp += charAll[Math.floor(Math.random() * charAll.length)];
    }

    setPassword(temp);
  };

  return (
    <div className="rp">
      <div className="rpCard">
        <h1 className="rpTitle">Generate a Random Password</h1>
        <p className="rpSubtitle">Click generate, then copy using the icon.</p>

        <div className="rpRow">
          <input
            className="rpInput"
            value={password}
            type="text"
            placeholder="Password"
            readOnly
          />
          <button className="rpIconBtn" type="button" onClick={handleCopy} aria-label="Copy password">
            <Files className="rpIcon" />
          </button>
        </div>

        <button className="rpPrimaryBtn" type="button" onClick={handlePasswordGen}>
          Generate Password
        </button>

        <button className="rpSecondaryBtn" type="button" onClick={() => setPage("")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RandomPassword;
