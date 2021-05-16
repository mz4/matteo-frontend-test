const getColor = (id) => {
  const colors = ["#0705bb", "#189c00", "#ffa500", "#ff0000", "#9400d3", "#8bcc8b", "#006400"];
  const color = colors[id] || "#000000";
  return color
}

export default getColor;