import UserBoard from "./Component/UserBoard";
import Card from "./Component/Card";
import "./style/main.css";
import datas from "./static/data.json";
import { useState } from "react";

function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const getTimeFrame = (timeframe) => {
    setTimeFrame(timeframe);
  };

  const cardGenerator = (datas) => {
    let i = 0;
    return datas.map((data) => {
      i = i + 1;
      return <Card dataCard={data} timeFrame={timeFrame} key={i} />;
    });
  };

  return (
    <div className="container">
      <UserBoard sendTimeFrame={getTimeFrame} />
      <div className="cards">{cardGenerator(datas)}</div>
    </div>
  );
}

export default App;
