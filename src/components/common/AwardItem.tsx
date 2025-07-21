import React from "react";

interface AwardItemProps {
  emoji: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}

const AwardItem: React.FC<AwardItemProps> = ({
  emoji,
  title,
  subtitle,
  onClick,
}) => (
  <div
    className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between cursor-pointer"
    onClick={onClick}
  >
    <span className="text-3xl mr-4">{emoji}</span>
    <div className="flex flex-col flex-grow">
      <p className="font-semibold text-lg text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
    <span className="text-xl text-gray-400">›</span>
  </div>
);

export default AwardItem;
