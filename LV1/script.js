const svg = d3.select("#olympic-logo");

const colors = ["#0085C7", "#000000", "#EF3340", "#FFD100", "#009F3D"]; // Olimpijske boje

// Definiraj centar krugova i njihov radijus
const centerX = 150;
const centerY = 150;
const radius = 60;

// Kreiraj krugove
for (let i = 0; i < 5; i++) {
  const angle = (i * Math.PI * 2) / 5; // Podijeli krug na 5 dijelova
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  
  svg.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", 30)
    .attr("fill", colors[i])
    .attr("stroke", "#000")
    .attr("stroke-width", 2);
}
