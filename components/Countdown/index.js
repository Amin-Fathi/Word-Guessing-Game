import { useState, memo, useEffect } from "react";
import styles from "./Countdown.module.scss";
import Row from "react-bootstrap/Row";
import moment from "moment";

//component box timer
const TimerBox = memo(({ number, active, text }) => {
  return (
    <div className={`${styles.__timeBox} `}>
      <div className={`${styles.__numberCard} `}>
        <div className={`${styles.__numberContainer} `}>
          {Array.from(Array(number), (e, i) => {
            return (
              <div
                className={`${styles.__number}
                 ${active === i ? styles.__numberActive : ""} 
                ${active + 1 === i ? styles.__numberNext : ""} 
                ${active - 1 === i ? styles.__numberPreview : ""}`}
                key={"countDownNumber" + i + text}
              >
                {i}
              </div>
            );
          })}
        </div>
        <div className={`${styles.__text} `}>{text}</div>
      </div>
    </div>
  );
});

const Countdown = ({ endDate = "2021/10/14" }) => {
  const [hours, setHours] = useState(1);
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [days, setDays] = useState(1);
  const daysLong = 99,
    hoursLong = 24,
    minutesLong = 60,
    secondsLong = 60;

  const updateCountDown = () => {
    let end = moment(endDate);
    let startTime = moment();
    let duration = moment.duration(end.diff(startTime));
    const dS = duration.seconds();
    const dm = duration.minutes();
    const dh = duration.hours();
    const dd = duration.days();
    setSeconds(dS > 0 ? dS : 0);
    setMinutes(dm > 0 ? dm : 0);
    setHours(dh > 0 ? dh : 0);
    setDays(dd > 0 ? dd : 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateCountDown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={`${styles.Countdown}`}>
        <TimerBox number={daysLong} active={days} text={"روز"} />
        <TimerBox number={hoursLong} active={hours} text={"ساعت"} />
        <TimerBox number={minutesLong} active={minutes} text={"دقیقه"} />
        <TimerBox number={secondsLong} active={seconds} text={"ثانیه"} />
      </div>
    </>
  );
};

export default Countdown;
