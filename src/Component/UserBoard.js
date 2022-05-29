import { useState, useEffect } from "react";
import avatar from "../static/pictures/image-jeremy.png";

function UserBoard(props) {
  const [markChecked, setMarkChecked] = useState("weekly");

  const handleRadioInput = (e) => {
    const timeframe = e.target.value;
    props.sendTimeFrame(timeframe);
    setMarkChecked(timeframe);
  };

  return (
    <header className="userBoard">
      <div className="userBoard__user">
        <img src={avatar} alt="avatar" className="userBoard__user__img" />
        <div className="userBoard__user__title">
          <h3>Report for</h3>
          <h1 className="userBoard__user__title__name">Jeremy Robson</h1>
        </div>
      </div>
      <form action="" className="userBoard__form">
        <label
          htmlFor="daily"
          className={markChecked === "daily" ? "label label--active" : "label"}
        >
          Daily
          <input
            type="radio"
            name="timeframe"
            id="daily"
            value="daily"
            checked={markChecked === "daily"}
            onChange={handleRadioInput}
          />
        </label>
        <label
          htmlFor="weekly"
          className={markChecked === "weekly" ? "label label--active" : "label"}
        >
          Weekly
          <input
            type="radio"
            name="timeframe"
            id="weekly"
            value="weekly"
            checked={markChecked === "weekly"}
            onChange={handleRadioInput}
          />
        </label>
        <label
          htmlFor="monthly"
          className={
            markChecked === "monthly" ? "label label--active" : "label"
          }
        >
          Monthly
          <input
            type="radio"
            name="timeframe"
            id="monthly"
            value="monthly"
            checked={markChecked === "monthly"}
            onChange={handleRadioInput}
          />
        </label>
      </form>
    </header>
  );
}

export default UserBoard;
