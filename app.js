/**
 * Starter code
 * Create N swatches
 * Each swatch has code for when it starts and each frame after
 */

window.addEventListener("load", function () {
  console.log("LOADED");
  let swatchHolderEl = document.getElementById("swatch-holder");

  // Function to add an element to a parent element
  // for my own convenience
  function createElement(type, classList, parentEl, innerHTML) {
    let el = document.createElement(type);
    el.classList.add(classList);
    parentEl.appendChild(el);
    // Add inner HTML
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  // Create all of the swatches here
  animations.forEach((animation) => {
    if (animation.isActive) {
      // Add a new div to hold the swatch
      let swatchEl = createElement("div", "swatch", swatchHolderEl);

      // Create a P5 canvas element, JS-style
      // https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
      const s = (p) => {
        p.setup = function () {
          p.createCanvas(SWATCH_SIZE, SWATCH_SIZE);
          p.colorMode(p.HSL, 360, 100, 100);
          p.ellipseMode(p.CENTER_RADIUS);
          animation.setup(p);
        };

        p.draw = function () {
          let t = p.millis() * 0.001;
          animation.draw(p, t);
        };
      };

      let myp5 = new p5(s, swatchEl);

      // Add the label underneath
      // Add a new div to hold the label
      let labelEl = createElement("div", "label", swatchEl);

      // Add a new h2 tag to hold the title
      let titleEl = createElement("h2", "title", labelEl, animation.title);

      // Add a new p to hold the description
      let descEl = createElement(
        "p",
        "description",
        labelEl,
        animation.description
      );
      let rotation = (Math.random() - 0.5) * 10;
      swatchEl.style.transform = `rotate(${rotation}deg)`;
    }
  });
});
