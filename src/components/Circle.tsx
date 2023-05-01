import * as d3 from "d3";
import { createSignal, createUniqueId, onMount } from "solid-js";
import Box from "./Box";

const Circle = () => {
  const id = createUniqueId()


  onMount(() => {
    var svg = d3.select(`#${id}`).append("svg").attr("width", 50).attr("height", 50);


    svg.append("circle")
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 24)
    .attr("stroke", "black")
    .attr("fill", "#69a3b2")
  });



  return <Box id={id}/>
};

export default Circle;
