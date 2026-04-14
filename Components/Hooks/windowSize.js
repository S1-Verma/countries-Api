import { useEffect, useState } from "react";



// ab is function ko hum kahi bhi import karke use kar sakte he 
// to yahi ek hook he hook ise hi kehete he basically ye ek fuction he jo ki kuch value return karta he and hum ise use kar sakte he kahi bhi 
// yad rakho best practice ye he ki hum hum hooks me use word ka use karte he 

export default function useWindowSize() {
   const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    window.addEventListener('resize', ()=> {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    })
  }, []);

  return size  
}
