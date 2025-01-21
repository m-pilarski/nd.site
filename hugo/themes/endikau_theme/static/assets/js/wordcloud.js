function draw_cloud(width, height) {
    // List of words
    var myWords = [
        "Digital", "Daten", "Digitalisierung", "datengetrieben", "Social",
        "Unternehmen", "Firm", "Data Analytics", "Development", "KMU",
        "Transfer", "Entscheidungen", "Technologien", "Zukunft", "Technisch",
        "Entwicklung", "Virtual", "Verantwortung", "StartUp", "User",
        "Innovationen", "Management", "Information", "Research", "Internet",
        "large", "Diversität", "Ökonomisch", "Augmented", "Reality",
        "Media", "Herausforderung", "Konsumenten", "Gesellschaft", "Customer",
        "Policy", "Big Data", "DeepDive", "Business", "Transformation",
        "Wandel", "Compliance", "Learning", "Institutionell", "Gesellschaftlich",
        "Geschäftsmodell", "Unternehmensgründung", "Textmining", "Customer Centricity",
        "Realtime", "Paradigm", "Culture", "Effective", "Firmenebene",
        "Rahmenbedingungen", "E-Heatlh", "Politik", "Society", "Massive",
        "Systems", "Capacity", "Applications", "Infrastructure", "Exabytes",
        "AI", "Machine Learning", "Data Science", "Kommunikation", "NLP",

        "Digital", "Daten", "Digitalisierung", "datengetrieben", "Social",
        "Unternehmen", "Firm", "Data Analytics", "Development", "KMU",
        "Transfer", "Entscheidungen", "Technologien", "Zukunft", "Technisch",
        "Entwicklung", "Virtual", "Verantwortung", "StartUp", "User",
        "Innovationen", "Management", "Information", "Research", "Internet",
        "large", "Diversität", "Ökonomisch", "Augmented", "Reality",
        "Media", "Herausforderung", "Konsumenten", "Gesellschaft", "Customer",
        "Policy", "Big Data", "DeepDive", "Business", "Transformation",
        "Wandel", "Compliance", "Learning", "Institutionell", "Gesellschaftlich",
        "Geschäftsmodell", "Unternehmensgründung", "Textmining", "Customer Centricity",
        "Realtime", "Paradigm", "Culture", "Effective", "Firmenebene",
        "Rahmenbedingungen", "E-Heatlh", "Politik", "Society", "Massive",
        "Systems", "Capacity", "Applications", "Infrastructure", "Exabytes",
        "AI", "Machine Learning", "Data Science", "Kommunikation", "NLP",

        "Digital", "Daten", "Digitalisierung", "datengetrieben", "Social",
        "Unternehmen", "Firm", "Data Analytics", "Development", "KMU",
        "Transfer", "Entscheidungen", "Technologien", "Zukunft", "Technisch",
        "Entwicklung", "Virtual", "Verantwortung", "StartUp", "User",
        "Innovationen", "Management", "Information", "Research", "Internet",
        "large", "Diversität", "Ökonomisch", "Augmented", "Reality",
        "Media", "Herausforderung", "Konsumenten", "Gesellschaft", "Customer",
        "Policy", "Big Data", "DeepDive", "Business", "Transformation",
        "Wandel", "Compliance", "Learning", "Institutionell", "Gesellschaftlich",
        "Geschäftsmodell", "Unternehmensgründung", "Textmining", "Customer Centricity",
        "Realtime", "Paradigm", "Culture", "Effective", "Firmenebene",
        "Rahmenbedingungen", "E-Heatlh", "Politik", "Society", "Massive",
        "Systems", "Capacity", "Applications", "Infrastructure", "Exabytes",
        "AI", "Machine Learning", "Data Science", "Kommunikation", "NLP",
    ];    

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
        .words(myWords.map(function(d) { return { text: d, size: 12 + Math.random() * 48 }; }))
        .padding(5)
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
            .style("fill", "#837591")
            .style("font-family", "'Source Serif 4'") 
            .style("font-weight", "700") 
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}

// Run on page load
window.onload = function () {
    const containerWidth = document.getElementById("chart").clientWidth; // Get container width
    const containerHeight = document.getElementById("chart").clientHeight; // Fixed height
    draw_cloud(containerWidth, containerHeight);
};

// Optional: Redraw on window resize
window.onresize = function () {
    const containerWidth = document.getElementById("chart").clientWidth; // Get container width
    const containerHeight = document.getElementById("chart").clientHeight; // Fixed height
    draw_cloud(containerWidth, containerHeight);
};