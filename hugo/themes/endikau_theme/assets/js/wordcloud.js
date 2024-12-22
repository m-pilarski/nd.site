function draw_cloud(width, height) {
    // List of words
    var myWords = ["Hello", "Everybody", "How", "Are", "You", "Today", "It", "Is", "A", "Lovely", "Day", "I", "Love", "Coding", "In", "My", "Van", "Mate"];

    // Clear the chart container to avoid duplicates
    d3.select("#chart").selectAll("*").remove();

    // Append the SVG object to the chart container
    var svg = d3.select("#chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Configure the cloud layout
    var layout = d3.layout.cloud()
        .size([width, height])
        .words(myWords.map(function(d) { return { text: d, size: 10 + Math.random() * 90 }; }))
        .padding(10)
        .rotate(() => {
            const values = [-90, 0, 0, 90];
            return values[Math.floor(Math.random() * values.length)];
        })
        .fontSize(d => d.size)
        .on("end", draw);

    layout.start();

    // Draw function to render the words
    function draw(words) {
        svg.selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            // .style("fill", (d, i) => d3.schemeCategory10[i % 10])
            .style("fill", "#e9ebe5")
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}

// Call the function with desired width and height

addEventListener("load", (event) => {
  draw_cloud(500, 500);
});
