import Circle from "./components/Circle";
import * as d3 from "d3";

function App() {
  const makeLine = () => {
    // create data
    var data = [
      { x: 0, y: 20 },
      { x: 150, y: 150 },
      { x: 300, y: 100 },
      { x: 450, y: 20 },
      { x: 600, y: 130 },
    ];
    // var data = [0,1]

    // create svg element:
    var svg = d3
      .select("#conva")
      .append("svg")
      .attr("width", 800)
      .attr("height", 200)
      .on("click", function (e, d) {
        d3.select(this).style("fill", "orange");
      });
    // prepare a helper function
    var lineFunc = d3
      .line<{ x: number; y: number }>()
      .x(function (d) {
        return d.x;
      })
      .y(function (d) {
        return d.y;
      });

    // Add the path using this helper function
    svg.append("path").attr("d", lineFunc(data)).attr("stroke", "black").attr("fill", "none");
  };
  console.log("App render");

  return (
    <div style={{ display: "flex" }}>
      <div id="conva"  style={{ width: "80%", height: "100vh", position:"relative" }}>
        <Circle/>  
        <Circle/>  
      </div>
      <div style={{ width: "20%", height: "100vh", background: "antiquewhite" }}>
        <button onclick={makeLine}>make line</button>
      </div>
    </div>
  );
}

export default App;
