import {useEffect} from 'preact/hooks'
import AOS from "npm:aos@next";

import type { ComponentChildren } from "preact";

type TestProps = {
  children?: ComponentChildren;
};


export default function Teste({children}: TestProps) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  
console.log(AOS)
  return (
   <div >

<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
<h3 className="text-[1.3125rem] text-landing-primary mb-2"  data-aos="fade-up">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4"  data-aos="fade-up">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
   </div>
  )
}

