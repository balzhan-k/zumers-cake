import React from "react";
import { IconType } from "react-icons";

interface AwardItemProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  Icon?: IconType;
}

export default function AwardItem({

  title,
  subtitle,
  onClick,
  Icon,
}: AwardItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-4 p-4 border border-rose-100 rounded-lg shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow duration-300 ease-in-out"
    >
            {Icon && <Icon className="text-4xl text-rose-500" />}          
      <div>
        <p className="text-sm font-bold text-stone-800">{title}</p>
        <p className="text-stone-600 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
