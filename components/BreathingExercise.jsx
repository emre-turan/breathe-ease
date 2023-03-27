import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

const AnimatedCircle = () => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    const { innerWidth: width } = window;
    setCircleSize(width / 2);
  }, []);

  const { innerWidth: width } = window;
  const move = useRef(0);

  const { x } = useSpring({
    from: { x: 0 },
    to: async (next) => {
      while (1) {
        await next({ x: 1, config: config.slow });
        await next({ x: 2, config: config.slow });
        await next({ x: 0, config: { duration: 0 } });
      }
    },
  });

  const rotation = x.to((x) => `${x * 180}deg`);
  const translate = x.to([0, 1, 2], [0, circleSize / 6, 0]);

  return (
    <div style={{ position: "relative" }}>
      {[...Array(8)].map((_, item) => (
        <animated.div
          key={item}
          style={{
            position: "absolute",
            opacity: 0.15,
            backgroundColor: "#d600d3",
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
            transform: `rotateZ(${rotation.interpolate(
              (r) => item * 45 + parseInt(r)
            )}deg) translate(${translate}px, ${translate}px)`,
          }}
        />
      ))}
    </div>
  );
};

// Your existing BreathingExercise component code...

import styles from "@/styles/BreathingExercise.module.css";

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
    <div className="min-h-[50vh] w-full sm:w-3/4 md:w-2/3 flex flex-col items-center justify-center bg-gradient-to-r from-cyan-200 via-teal-200 to-cyan-200 p-6 rounded-lg shadow-md mb-6">
      <div className="flex-grow flex flex-col items-center justify-center">
        {!isRunning && (
          <div className={styles.breatheContainer}>
            <div className={styles.breatheAnimation}></div>
          </div>
        )}
        <h1 className="text-4xl text-cyan-800 mb-9">{action}</h1>
        <h2 className="text-8xl text-teal-900 mb-4">{displayCounter()}</h2>
      </div>
      <button
        className="w-full sm:w-3/4 md:w-3/4 lg:w-2/3  bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded mb-4 text-lg sm:text-base"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default BreathingExercise;
