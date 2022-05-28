import { useState, useEffect } from "react";

function UserBoard(props) {
  const [markChecked, setMarkChecked] = useState("weekly");
  const handleRadioInput = (e) => {
    const timeframe = e.target.value;
    props.sendTimeFrame(timeframe);
    setMarkChecked(timeframe);
  };

  return (
    <header className="UserBoard">
      <form action="">
        <label htmlFor="daily">
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
        <label htmlFor="weekly">
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
        <label htmlFor="monthly">
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
