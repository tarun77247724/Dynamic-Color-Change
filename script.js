(function () {
  const btn = document.getElementById("changeBtn");
  const colorValueEl = document.getElementById("colorValue");

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomColor() {
    // return hex color
    const r = randomInt(0, 255);
    const g = randomInt(0, 255);
    const b = randomInt(0, 255);
    const hex =
      "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
    return { hex, rgb: `rgb(${r}, ${g}, ${b})` };
  }

  function setBackground(color) {
    document.documentElement.style.setProperty("--bg", color.hex);
    // update text color for contrast
    const [r, g, b] = color.rgb.match(/\d+/g).map(Number);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const textColor = luminance > 0.6 ? "#000" : "#fff";
    document.body.style.color = textColor;
    colorValueEl.textContent = `${color.hex} (${color.rgb})`;
  }

  btn.addEventListener("click", () => {
    const c = randomColor();
    setBackground(c);
  });

  // initialize
  setBackground({ hex: "#ffffff", rgb: "rgb(255, 255, 255)" });
})();
