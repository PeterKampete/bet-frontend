"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { StarProps } from "./types";

const Star = ({ selected, onSelect }: StarProps) => (
  <StarIcon
    className={twMerge(
      "xs:size-[24px]",
      selected ? "text-primaryYellow" : "text-gray-500"
    )}
    onClick={onSelect}
  />
);

const Rating = ({ rating }: { rating: number }) => {
  const [selected, setSelected] = useState(5);
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((n, i) => (
        <Star
          key={i}
          onSelect={() => setSelected(i + 1)}
          selected={i < selected}
        />
      ))}
    </div>
  );
};

export default Rating;
