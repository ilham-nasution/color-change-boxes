import Box from "./components/Box";
import useBgColor from "./hooks/useBgColor";

function App() {
  const { colors, bgColors, handleBoxClick } = useBgColor();

  return (
    <div className="grid grid-cols-2 md-grid-cols-3 gap">
      <Box
        onClick={() => handleBoxClick(colors)}
        className={`col-span-2 md-row-span-2 ${bgColors[0]}`}
      >
        1
      </Box>
      <Box
        onClick={() => handleBoxClick(colors)}
        className={`col-span-2 md-col-span-2 row-start-3 ${bgColors[1]}`}
      >
        2
      </Box>
      <Box onClick={() => handleBoxClick(colors)} className={`${bgColors[2]}`}>
        3
      </Box>
      <Box onClick={() => handleBoxClick(colors)} className={`${bgColors[3]}`}>
        4
      </Box>
      <Box onClick={() => handleBoxClick(colors)} className={`${bgColors[4]}`}>
        5
      </Box>
      <Box
        onClick={() => handleBoxClick(colors)}
        className={`row-start-6 md-col-start-1 md-row-start-4 md-row-end-6 ${bgColors[5]}`}
      >
        6
      </Box>
      <Box
        onClick={() => handleBoxClick(colors)}
        className={`col-span-2 row-start-4 md-col-start-2 md-row-start-3 md-row-end-6 ${bgColors[6]}`}
      >
        7
      </Box>
      <Box
        onClick={() => handleBoxClick(colors)}
        className={`md-col-start-3 md-row-start-3 md-row-end-5 ${bgColors[7]}`}
      >
        8
      </Box>
      <Box
        onClick={() => handleBoxClick(colors)}
        className={`md-col-start-3 ${bgColors[8]}`}
      >
        9
      </Box>
    </div>
  );
}

export default App;
