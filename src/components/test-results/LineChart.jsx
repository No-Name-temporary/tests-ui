import React, {
  useEffect,
} from 'react';
import * as d3 from 'd3';
import { formatDateLong } from '../../utils/helpers';

function LineChart({ widthPixels, testRuns }) {
  const regionToColor = (regionDisplayName) => ({
    'N. Virginia': 'rgb(18,31,146)',
    Ohio: 'rgb(18,31,146)',
    'N. California': 'rgb(18,31,146)',
    Oregon: 'rgb(18,31,146)',
    Montreal: 'rgb(255,0,0)',
    'São Paulo': 'rgb(0,155,58)',
    Stockholm: 'rgb(0,106,167)',
    Paris: 'rgb(0,35,149)',
    London: 'rgb(200,16,46)',
    Dublin: 'rgb(22,155,98)',
    Frankfurt: 'rgb(255,206,0)',
    Milan: 'rgb(0,146,70)',
    Bahrain: 'rgb(206,17,38)',
    'Cape Town': 'rgb(237,41,57)',
    Singapore: 'rgb(237,41,57)',
    Tokyo: 'rgb(188,0,45)',
    Osaka: 'rgb(188,0,45)',
    'Hong Kong': 'rgb(222,41,16)',
    Sydney: 'rgb(1,33,105)',
    Jakarta: 'rgb(255,0,0)',
    Seoul: 'rgb(0,71,160)',
    Mumbai: 'rgb(255,153,51)',
  }[regionDisplayName]);

  function createGraph(data, {
    x,
    y,
    z,
    labelFxn,
    marginTop = 20,
    marginRight = 30,
    marginBottom = 30,
    marginLeft = 40,
    width = 640,
    height = 400,
    color,
    strokeWidth = 1.5,
    mixBlendMode = 'multiply',
  } = {}) {
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);
    const L = d3.map(data, labelFxn);
    const O = d3.map(data, (d) => d);
    const defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);
    const xRange = [marginLeft, width - marginRight];
    const yRange = [height - marginBottom, marginTop];

    const xDomain = d3.extent(X);
    const yDomain = [0, d3.max(Y, (d) => (typeof d === 'string' ? +d : d))];
    let zDomain = Z;
    zDomain = new d3.InternSet(zDomain);

    // Omit any data without a z value
    const I = d3.range(X.length).filter((i) => zDomain.has(Z[i]));

    // Construct scales and axes
    const xScale = d3.scaleTime(xDomain, xRange).nice();
    const yScale = d3.scaleLinear(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 60);

    // Construct a line generator
    const line = d3.line()
      .defined((i) => D[i])
      .curve(d3.curveLinear)
      .x((i) => xScale(X[i]))
      .y((i) => yScale(Y[i]));

    const svg = d3.select('#chart').append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .style('-webkit-tap-highlight-color', 'transparent')
      .on('pointerenter', pointerentered)
      .on('pointermove', pointermoved)
      .on('pointerleave', pointerleft)
      .on('touchstart', (event) => event.preventDefault());

    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('.tick line').clone()
        .attr('x2', width - marginLeft - marginRight)
        .attr('stroke-opacity', 0.1))
      .call((g) => g.append('text')
        .attr('x', -marginLeft)
        .attr('y', 10)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start'));

    const path = svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', typeof color === 'string' ? color : null)
      .attr('stroke-width', strokeWidth)
      .selectAll('path')
      .data(d3.group(I, (i) => Z[i]))
      .join('path')
      .style('mix-blend-mode', mixBlendMode)
      .attr('stroke', typeof color === 'function' ? ([z]) => color(z) : null)
      .attr('d', ([, I]) => line(I));

    const dot = svg.append('g')
      .attr('display', 'none');

    dot.append('circle')
      .attr('r', 2.5);

    dot.append('text')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 13)
      .attr('text-anchor', 'middle')
      .attr('y', -8);

    function pointermoved(event) {
      const [xm, ym] = d3.pointer(event);
      const i = d3.least(I, (i) => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
      path.style('stroke', ([z]) => (Z[i] === z ? null : '#ddd')).filter(([z]) => Z[i] === z).raise();
      dot.attr('transform', `translate(${xScale(X[i])},${yScale(Y[i])})`);
      if (L) dot.select('text').text(L[i]);
      svg.property('value', O[i]).dispatch('input', { bubbles: true });
    }

    function pointerentered() {
      path.style('mix-blend-mode', null).style('stroke', '#ddd');
      dot.attr('display', null);
    }

    function pointerleft() {
      path.style('mix-blend-mode', mixBlendMode).style('stroke', null);
      dot.attr('display', 'none');
      svg.node().value = null;
      svg.dispatch('input', { bubbles: true });
    }
  }

  useEffect(() => {
    createGraph(testRuns, {
      x: (d) => Date.parse(d.completedAt),
      y: (d) => d.responseTime,
      z: (d) => d.regionDisplayName,
      labelFxn: (d) => `${d.regionDisplayName} | ${d.responseTime} ms | ${formatDateLong(d.completedAt)}`,
      width: widthPixels || 1200,
      height: 500,
      color: regionToColor,
    });
  });

  if (testRuns.length > 0) {
    return (
      <>
        <p className="text-sm">↑ (ms)</p>
        <div id="chart" className="pb-20" />
      </>
    );
  }
}

export default LineChart;
