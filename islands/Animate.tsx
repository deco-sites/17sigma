import { useEffect, useState } from "preact/hooks";

export default function Animate() {
  const [animatedItens, setAnimatedItens] = useState<NodeListOf<Element>>();

  const offsetLimit = 0.9;
  const hightScreen = window.innerHeight;

  const activeTransformY = (element: Element) => {
    element.classList.add("active-scroll");
  };

  const removeTransformY = (element: Element) => {
    element.classList.remove("active-scroll");
  };

  const animate = (elements?: NodeListOf<Element>) => {
    const anima = animatedItens || elements;

    if (anima) {
      anima.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        const itemIsVisible = (itemTop - hightScreen * offsetLimit) < 0;

        if (itemIsVisible) {
          activeTransformY(item);
        }

        if (itemTop > hightScreen) {
          removeTransformY(item);
        }
      });
    }
  };

  const onScrollanimate = () => {
    animate();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const animateElements = document.querySelectorAll(".animate-on-scroll");

      animate(animateElements);

      if (!animatedItens) {
        setAnimatedItens(document.querySelectorAll(".animate-on-scroll"));
      }
      clearTimeout(timeout);
    }, 500);

    document.addEventListener("scroll", onScrollanimate, { passive: true });

    return (() => {
      document.removeEventListener("scroll", onScrollanimate);
      clearTimeout(timeout);
    });
  }, [animatedItens]);

  return <div className="fixed opacity-0"></div>;
}
