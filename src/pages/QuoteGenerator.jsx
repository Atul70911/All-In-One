import React, { useEffect, useState } from "react";
import "../style/QuoteGenerator.css";

const QuoteGenerator = ({ setPage }) => {
  const [data, setData] = useState({});

  const getQuote = async () => {
    const Base_url = import.meta.env.VITE_QUOTES_API;
    const QuoteKey = import.meta.env.VITE_QUOTES_API_KEY;

    const res = await fetch(Base_url, {
      headers: { "X-Api-Key": QuoteKey },
    });

    const data = await res.json();
    return data;
  };

  useEffect(() => {
    (async () => {
      const data = await getQuote();
      setData(data[0]);
    })();
  }, []);

  return (
    <div className="qgApp">
      <h1 className="qgTitle">Quote Of The Day..!!</h1>

      <div className="qgCard">
        <h2 className="qgQuote">“{data.quote}”</h2>
        <h3 className="qgAuthor">— {data.author}</h3>
      </div>

      <button className="qgNextBtn" onClick={() => setPage("QrCode")}>
        Next
      </button>
    </div>
  );
};

export default QuoteGenerator;
