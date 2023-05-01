import { createSignal } from "solid-js";

type Props = {
  id: string;
};

const Box = ({ id }: Props) => {
  let div: HTMLDivElement;
  let isDown: boolean;
  var offset = [0, 0];
  const [top, setTop] = createSignal(0);
  const [left, setLeft] = createSignal(0);

  const mouseDown = (e: any) => {
    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    isDown = true;
  };
  const mouseup = () => {
    isDown = false;
  };
  const mousemove = (e: any) => {
    if (isDown) {
      setLeft(e.clientX + offset[0]);
      setTop(e.clientY + offset[1]);
    }
  };

  return (
    <div
      ref={div}
      onmousemove={mousemove}
      onmousedown={mouseDown}
      onmouseup={mouseup}
      id={id}
      style={{
        width: "50px",
        height: "50px",
        position: "absolute",
        top: `${top()}px`,
        left: `${left()}px`,
        border: "solid 1px",
      }}
    ></div>
  );
};

export default Box;
