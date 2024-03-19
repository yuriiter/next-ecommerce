import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import { useRanger } from "react-ranger";

type RangeSliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (newValue: number) => void;
};

const RangeSlider = ({ min, max, value, onChange }: RangeSliderProps) => {
  const [bufferValue, setBufferValue] = useState(value);

  useEffect(() => {
    setBufferValue(value);
  }, [value]);

  const rangerOnChange = (values: number[]) => {
    setBufferValue(values[0]);
    onChange(values[0]);
  };

  const { getTrackProps, handles, segments } = useRanger({
    min,
    max,
    stepSize: 1,
    values: [bufferValue],
    onChange: rangerOnChange,
  });

  const handle = handles[0];
  const { active: isHandleActive, value: handleValue } = handle;

  return (
    <>
      <div
        {...getTrackProps({
          className: cn([
            "range-slider",
            isHandleActive && "range-slider--dragging",
          ]),
        })}
      >
        {segments.map(({ getSegmentProps }, i) => (
          <div
            {...getSegmentProps()}
            key={i}
            className={cn([
              "range-slider__line",
              i === 0
                ? "range-slider__line--left"
                : "range-slider__line--right",
            ])}
          ></div>
        ))}
        {handles.map(({ getHandleProps }, i) => (
          <button
            {...getHandleProps({
              className: cn(["range-slider__thumb"]),
              style: {},
            })}
            key={i}
          />
        ))}
      </div>
      <span className="sidebar__range-value">
        Max. ${handleValue.toFixed(2)}
      </span>
    </>
  );
};

export default RangeSlider;
