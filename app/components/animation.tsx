'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


// Ensure that gsap is properly registered with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SplitType = require('split-type').default;

      // Add Animation Function
      const addAnimation = (): void => {
        const skewElements: NodeListOf<Element> = document.querySelectorAll(".skew-up");

        skewElements.forEach((element: Element) => {
          const textInstance: HTMLElement = element as HTMLElement;

          const textSplit = new SplitType(textInstance, {
            types: "lines, words",
            lineClass: "word-line"
          });

          const line: HTMLElement = textInstance.querySelector(".word-line") as HTMLElement;
          const word: HTMLElement = line.querySelector(".word") as HTMLElement;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: textInstance,
              start: "top 85%",
              end: "top 85%",
            //   onComplete: (): void => {
            //     textInstance.classList.remove("skew-up");
            //   }
            onLeave: () => {
                // Your logic when the trigger leaves the start point
                // This might include completing the animation or other actions
                textInstance.classList.remove("skew-up");
              }
            }
          });

          tl.set(textInstance, { opacity: 1 }).from(word, {
            y: "100%",
            skewX: "-6",
            duration: 2,
            stagger: 0.03,
            ease: "expo.out"
          });
        });
      };

      addAnimation();

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 992) {
          addAnimation();
        }
      });
    }
  }, []);

  return (
    <div className="skew-up">
      {text}
    </div>
  );
};

export default AnimatedText;
