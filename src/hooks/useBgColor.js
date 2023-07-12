import { useEffect, useState } from "react";

function useBgColor() {
  const colors = [
    "bg-blue",
    "bg-red",
    "bg-olive",
    "bg-brown",
    "bg-purple",
    "bg-teal",
    "bg-green",
    "bg-medium-purple",
    "bg-gray",
  ];

  const [bgColors, setBgColors] = useState([]);

  const handleBoxClick = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    setBgColors(array);
  };

  useEffect(() => {
    setBgColors(colors);
  }, []);

  return { colors, bgColors, handleBoxClick };
}

export default useBgColor;
