import { createSignal } from "solid-js";


const Test = ()=>{
let div: HTMLDivElement;
let down: boolean;
var offset = [0,0];

const [left, setLeft] = createSignal(0)
const [top, setTop] = createSignal(0)

const mousedown = (e: any)=>{
    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    down = true;
    
}

const mousemove = (e: any)=>{
    if(down){
        setLeft(e.clientX+ offset[0])
        setTop(e.clientY+ offset[1])
        // console.log("div offset", box.offsetLeft,box.offsetTop);
        // console.log("e offset", e.offsetX,e.offsetY);
        // console.log("e client",e.clientX,e.clientY);
    }

}

const mouseup = ()=>{
    down = false;
}


    return(
        <div ref={div} 
        onMouseDown={mousedown} 
        onMouseMove={mousemove}
        onMouseUp={mouseup} 
        style={{ left:`${left()}px`, top:`${top()}px`,
            position:"absolute", width:"150px", height:"150px", "background-color":"red"}}>

        </div>
    )
}

export default Test;