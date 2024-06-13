import React, {useRef} from 'react';
export default function Page() {
    const homeRef = useRef(null);
    const IntroductionRef = useRef(null);
    const projectRef = useRef(null);
    const stackRef = useRef(null);
  
    const scrollToRef = (ref) =>{
      if(ref&& ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior:'smooth'
        })
      }
    }
  }