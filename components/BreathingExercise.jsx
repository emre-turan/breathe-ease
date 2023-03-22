import React, { useState, useEffect } from "react";

const BreathingExercise = ({ technique }) => {
  const [count, setCount] = useState(-1);
  const [action, setAction] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (isRunning) {
      if (countdown === null) {
        setCountdown(3);
      } else if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }

      const incrementCounter = () => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;

          if (technique === "4-7-8") {
            const step = newCount % 19;

            if (step >= 0 && step < 4) {
              setAction("Inhale");
            } else if (step >= 4 && step < 11) {
              setAction("Hold Your Breathe");
            } else {
              setAction("Exhale");
            }
          } else if (technique === "4-4-4") {
            const step = newCount % 16;

            if (step >= 0 && step < 4) {
              setAction("Inhale");
            } else if (step >= 4 && step < 8) {
              setAction("Hold");
            } else if (step >= 8 && step < 12) {
              setAction("Exhale");
            } else {
              setAction("Hold");
            }
          }

          return newCount;
        });
      };

      const timer = setInterval(incrementCounter, 1000);
      return () => clearInterval(timer);
    } else {
      setCount(-1);
      setAction("");
      setCountdown(null);
    }
  }, [isRunning, countdown, technique]);

  const displayCounter = () => {
    if (countdown === null) {
      return "";
    } else if (countdown > 0) {
      return countdown;
    }

    if (technique === "4-7-8") {
      const step = count % 19;
      if (step === -1) {
        return "";
      } else if (step >= 0 && step < 4) {
        return step + 1;
      } else if (step >= 4 && step < 11) {
        return step - 3;
      } else {
        return step - 10;
      }
    } else if (technique === "4-4-4") {
      const step = count % 16;
      if (step === -1) {
        return "";
      } else if (step >= 0 && step < 4) {
        return step + 1;
      } else if (step >= 4 && step < 8) {
        return step - 3;
      } else if (step >= 8 && step < 12) {
        return step - 7;
      } else {
        return step - 11;
      }
    }
  };


  return (
    <div className="m-5">
      <h1 className="text-4xl">{action}</h1>
      <h2 className="text-8xl">{displayCounter()}</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default BreathingExercise;