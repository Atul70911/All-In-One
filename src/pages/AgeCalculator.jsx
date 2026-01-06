import React, { useState } from "react";
import "../style/AgeCalculator.css";

export default function AgeCalculator({ setPage }) {
  const [DOB, setDOB] = useState("");
  const [diffYears, setDiffYears] = useState(0);
  const [diffMonths, setDiffMonths] = useState(0);
  const [diffDays, setDiffDays] = useState(0);
  function daysInMonth(year, monthIndex) {
    // monthIndex: 0 = Jan ... 11 = Dec
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  function getAgeYMD(dobStr) {
    const dob = new Date(dobStr);
    const today = new Date();

    // If DOB is in the future, return zeros (or handle as error)
    if (dob > today) return { years: 0, months: 0, days: 0 };

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Borrow days from previous month if needed
    if (days < 0) {
      months -= 1;
      const prevMonthIndex = (today.getMonth() - 1 + 12) % 12;
      const prevMonthYear =
        prevMonthIndex === 11 ? today.getFullYear() - 1 : today.getFullYear();
      days += daysInMonth(prevMonthYear, prevMonthIndex);
    }

    // Borrow months from previous year if needed
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }

  const handleClick = () => {
    if (!DOB) return;

    const { years, months, days } = getAgeYMD(DOB);
    setDiffYears(years);
    setDiffMonths(months);
    setDiffDays(days);

    setDiffDays(days);
    setDiffMonths(months);
    setDiffYears(years);
  };

  return (
    <div className="ageApp">
      <h1 className="ageTitle">Age Calculator</h1>

      <div className="ageControls">
        <input
          className="ageInput"
          type="date"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
        <button className="ageBtnPrimary" type="button" onClick={handleClick}>
          Calculate
        </button>
      </div>

      <div className="ageResult">
        <p className="ageResultText">
          Your age is: <span className="ageNumber">{diffYears}</span> years,{" "}
          <span className="ageNumber">{diffMonths}</span> months,{" "}
          <span className="ageNumber">{diffDays}</span> days
        </p>
      </div>

      <button
        className="ageBtnSecondary"
        type="button"
        onClick={() => setPage("QuoteGenerator")}
      >
        Next
      </button>
    </div>
  );
}
