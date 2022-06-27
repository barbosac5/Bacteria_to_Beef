// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    var metafilter = metadata.filter(sampleObj => sampleObj.id === 940)[0];
    console.log(metafilter);
    // Create a variable that holds the first sample in the array.
    var firstSample = filteredSamples[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var firstfilter = metafilter[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var ids = firstSample.otu_ids;
    var labels = firstSample.otu_labels;
    var values  = firstSample.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var wfreqDefault = metafilter.sample;

    // Create the yticks for the bar chart.
    var yticks =  firstSample.otu_ids[9];

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [ {
      domain: { x: [0, 1], y: [0, 1] },
      value: washfreq,
      title: {text: "<br>Belly Button Washing Frequency</br> <br>Srubs Per Week"},
      type: "indicator",
      mode: "gague+number",
      gague: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1], color: 'rgb(248, 243, 236)' },
          { range: [1, 2], color: 'rgb(245, 242, 220)' },
          { range: [2, 3], color: 'rgb(235, 230, 202)' },
          { range: [3, 4], color: 'rgb(228, 232, 180)' },
          { range: [4, 5], color: 'rgb(215, 230, 170)' },
          { range: [5, 6], color: 'rgb(190, 220, 150)' },
          { range: [6, 7], color: 'rgb(150, 170, 145)' },
          { range: [7, 8], color: 'rgb(128, 162, 142)' },
          { range: [8, 9], color: 'rgb(133, 174, 141)' },
        ]
      }
    }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0} };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gague", gaugeData, gaugeLayout);
  });
}
