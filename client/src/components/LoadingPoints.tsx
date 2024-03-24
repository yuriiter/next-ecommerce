import { Fragment, useEffect, useState } from "react";

type LoadingPointsProps = {
  animationSpeed?: number;
};

export const LoadingPoints = ({
  animationSpeed = 2000,
}: LoadingPointsProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((current) => (current + 1) % 3),
      animationSpeed / 3
    );
    return () => clearInterval(interval);
  }, [animationSpeed]);

  const points = [];

  for (let i = 0; i < counter; i++) {
    points.push(<Fragment key={i}>.</Fragment>);
  }

  return <>{points}</>;
};
