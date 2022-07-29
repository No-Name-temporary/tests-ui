import React, { useEffect } from 'react';
import * as d3 from 'd3';

function LineChart({ testRuns }) {
  const createGraph = async () => {
    const data = [];
    testRuns.forEach((run) => {
      const runDataForChart = {
        date: new Date(run.completedAt),
        value: run.responseTime,
      };
      data.push(runDataForChart);
    });
    console.log(data);

    // set the dimensions and margins of the graph
    const margin = {
      top: 20, right: 20, bottom: 50, left: 70,
    };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    const svg = d3.select('#chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},     ${margin.top})`);

    // Add X axis and Y axis
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    x.domain(d3.extent(data, (d) => d.date));
    y.domain([0, d3.max(data, (d) => d.value)]);
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));
    svg.append('g')
      .call(d3.axisLeft(y));

    // // add the Line
    // const valueLine = d3.line()
    //   .x((d) => x(d.date))
    //   .y((d) => y(d.value));
    // svg.append('path')
    //   .data([data])
    //   .attr('class', 'line')
    //   .attr('fill', 'none')
    //   .attr('stroke', 'steelblue')
    //   .attr('stroke-width', 1.5)
    //   .attr('d', valueLine);
  };

  useEffect(() => {
    createGraph();
  });

  return (
    <div id="chart" />
  );
}

export default LineChart;
