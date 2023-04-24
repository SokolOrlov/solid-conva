import { createSignal } from "solid-js"

const Counter = ()=>{
  const [count, setCount] = createSignal(0)

  return(
    <button onclick={()=>setCount(count()+2)}>
      {count()}
    </button>
  )
}

export default Counter;