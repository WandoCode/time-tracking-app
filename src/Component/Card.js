import { useState, useEffect } from "react";

function Card(props) {
  const [title, setTitle] = useState("");
  const [currentHours, setCurrentHours] = useState("");
  const [previousHours, setPreviousHours] = useState("");
  const [timeFrameText, setTimeFrameText] = useState("");
  const timeFrame = props.timeFrame;
  const data = props.dataCard;

  useEffect(() => {
    setTitle(data.title);
    setCurrentHours(data.timeframes[timeFrame].current);
    setPreviousHours(data.timeframes[timeFrame].previous);
    setTimeFrameText(getTtimeframeText(timeFrame));
  }, [timeFrame]);

  return (
    <div className="card">
      <h2 className=".h2">{title}</h2>
      <div className="currentHours">{currentHours}hrs</div>
      <div className="previousHours">
        {timeFrameText} - {previousHours}hrs
      </div>
    </div>
  );
}

const getTtimeframeText = (timeframe) => {
  let timeframText = "";
  switch (timeframe) {
    case "daily":
      timeframText = "Yesterday";
      break;
    case "weekly":
      timeframText = "Last week";
      break;
    case "monthly":
      timeframText = "Last month";
      break;
    default:
      timeframText = "Timeframe unknown";
  }

  return timeframText;
};

export default Card;
