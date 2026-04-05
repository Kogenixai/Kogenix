import React, { useState } from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

type Word = {
  text: string;
  value: number;
};

interface ReviewsWordCloudProps {
  words: Word[];
}

// Example review texts
const reviewTexts = [
  "I learned about Agents how MCP Server gets connected",
  "Hands-on session very useful",
  "Gained knowledge about Gen AI",
  "Core knowledge",
  "Deep explanation",
  "Very informative and useful",
  "Excellent",
  "Good session",
  "Hands-on session",
  "Overall session very useful",
  "Clear and research oriented sessions",
  "Practical Knowledge on GenAI and Agentic AI",
  "Improved more on AI and its usage",
  "Learned more advanced technology like RAG, MCP",
  "Learned about GenAi",
  "Transformer models",
  "All the sessions were completely handson",
];

const stopwords = ["the","and","to","of","a","in","is","we","for","on","with","it","this","very","so","can","be","i","us","our"];

// Count words excluding stopwords
const wordCounts = reviewTexts
  .join(" ")
  .toLowerCase()
  .split(/\s+/)
  .filter(word => !stopwords.includes(word))
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

// Transform to ReactWordcloud format
const words: Word[] = Object.keys(wordCounts).map(key => ({
  text: key,
  value: wordCounts[key],
}));

const options = {
  rotations: 3,
  rotationAngles: [-45, -15, 0, 15, 45],
  fontSizes: [16, 88] as [number, number],
  scale: "sqrt",
  colors: [
    "#a78bfa", "#60a5fa", "#34d399",
    "#fbbf24", "#f87171", "#fb923c",
    "#38bdf8", "#e879f9", "#4ade80",
  ],
  fontFamily: "'Space Grotesk', 'Arial Black', sans-serif",
  enableTooltip: true,
  deterministic: false,
  padding: 4,
  spiral: "archimedean",
};

export const ReviewsWordCloud: React.FC<ReviewsWordCloudProps> = () => {
  // Changing this key will force ReactWordcloud to rerender
  const [cloudKey, setCloudKey] = useState(0);

  const handleMouseEnter = () => {
    setCloudKey(prev => prev + 1); // increment key to reshuffle
  };

  return (
    <div
      style={{ width: "100%", height: 580, position: "relative" }}
      onMouseEnter={handleMouseEnter} // reshuffle on hover
    >
      <ReactWordcloud key={cloudKey} words={words} options={options} />
    </div>
  );
};
