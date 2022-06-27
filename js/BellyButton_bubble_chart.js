// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
    var firstSample = filteredSamples[0]

    var ids = firstSample.otu_ids;
    var labels = firstSample.otu_labels;
    var values = firstSample.sample_values;
    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      {
        x: ids, 
        y: values, 
        text: labels, 
        mode: "markers",
        marker: {
          color: ids,
          size: values 
        }
      }
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      xaxis: { title: "OTU ID" },
      margin: { t: 0 },
      hovermode: "closest"
      };
  

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  });
}
