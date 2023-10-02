import { clamp } from "@/utils";
import React, { useState, useRef, useEffect, DragEvent } from "react";

type RangeSliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (newValue: number) => void;
};

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const onDrag = (e: DragEvent<HTMLDivElement>) => {
    const { current: slider } = sliderRef;
    if (!slider) return;

    const sliderRect = slider.getBoundingClientRect();
    const { left: sliderLeft, right: sliderRight } = sliderRect;
    const { clientX } = e;

    if (clientX === 0) return;
    onChange(
      clamp(
        min,
        max,
        ((clientX - sliderLeft) / (sliderRight - sliderLeft)) * (max - min) +
          min
      )
    );
  };

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`range-slider ${isDragging ? "range-slider--dragging" : ""}`}
      ref={sliderRef}
    >
      <div
        className="range-slider__line range-slider__line--left"
        style={{
          width: `${((value - min) / (max - min)) * 100}%`,
        }}
      />
      <div
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrag={onDrag}
        className="range-slider__thumb"
        style={{
          left: `${clamp(0, 1, (value - min) / (max - min)) * 100}%`,
        }}
      ></div>
      <div className="range-slider__line range-slider__line--right" />
    </div>
  );
};

export default RangeSlider;
