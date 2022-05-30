import { useEffect, useState } from "react";
import work from "../static/pictures/icon-work.svg";
import play from "../static/pictures/icon-play.svg";
import study from "../static/pictures/icon-study.svg";
import exercise from "../static/pictures/icon-exercise.svg";
import social from "../static/pictures/icon-social.svg";
import selfCare from "../static/pictures/icon-self-care.svg";
import points from "../static/pictures/icon-ellipsis.svg";

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
      <img src={getPicture(title)} alt="work icon" />
      <div className="card__wrapper">
        <div className="card__wrapper__upper">
          <h2 className="h2">{title}</h2>
          <img src={points} alt="ellipsis" />
        </div>
        <div className="card__wrapper__currentHours">{currentHours}hrs</div>
        <div className="card__wrapper__previousHours">
          {timeFrameText} - {previousHours}hrs
        </div>
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

const getPicture = (title) => {
  let picture;
  switch (title) {
    case "Work":
      picture = work;
      break;
    case "Play":
      picture = play;
      break;
    case "Study":
      picture = study;
      break;
    case "Exercise":
      picture = exercise;
      break;
    case "Social":
      picture = social;
      break;
    case "Self Care":
      picture = selfCare;
      break;
    default:
      picture = "error";
  }
  return picture;
};
export default Card;
