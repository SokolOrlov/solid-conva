import * as d3 from "d3";
import { createSignal, createUniqueId, onMount } from "solid-js";

const Circle = () => {
  const id = createUniqueId()
  const [top, setTop] = createSignal(0);
  const [left, setLeft] = createSignal(0);
  const [isDown, serIsDown] = createSignal(false);

  onMount(() => {
    var svg = d3.select(`#${id}`).append("svg").attr("width", 50).attr("height", 50);

    // Add the path using this helper function
    svg.append("circle")
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 24)
    .attr("stroke", "black")
    .attr("fill", "#69a3b2")
    // .on('onmousedown', ()=>serIsDown(true))
    // .on('onmouseup', ()=>serIsDown(false));
  });

  const mouseDown = (e: any) => {
    // console.log("down");
    serIsDown(true);
  };
  const mouseup = () => {
    // console.log("up");
    serIsDown(false);
  };
  const mousemove = (e: any) => {
    if (isDown()) {
    //   console.log("move", e);
      setTop(e.clientY-25);
      setLeft(e.clientX-25);
    }
  };

  return <div id={id} 
    onmousemove={mousemove} 
    onmousedown={mouseDown} 
    onmouseup={mouseup} 
    style={{ width: "50px", height: "50px", position: "absolute", top: `${top()}px`, left: `${left()}px` }}></div>;
};

export default Circle;
