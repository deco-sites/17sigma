
import { useEffect,useState } from 'preact/hooks';

export interface Props {
  idElement: string;
}

export default function HiddenOnScroll({ idElement }: Props) {

  const [scrollTop, setScrollTop ]  = useState(window.scrollY);

  const handlerScroll = (event:EventInit) => {
    
    const currentScrollTop = window.scrollY;
    const element = document.getElementById(idElement);
    
    if(element)
    {
      if(currentScrollTop > scrollTop )
      {
        element.classList.add('-translate-y-[100%]')
      }
      else
      {
        element.classList.remove('-translate-y-[100%]')
      }
    }
    setScrollTop(currentScrollTop)
  }

  useEffect(()=> {
 
    document.addEventListener("scroll",handlerScroll,{passive:true});

    return(()=> {
      
      document.removeEventListener("scroll",handlerScroll);
    })

  },[scrollTop])

  return <> </>;
}
