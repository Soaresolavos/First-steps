const dadosTaa = [
    {eqpt: 'TAA OKI 1502', chm: 34, closed: 25},
    {eqpt: 'TAA DIEBOLD', chm: 30, closed: 15},
    {eqpt: 'TAA RECICLADOR', chm: 20, closed: 15},
    {eqpt: 'TAA WINCOR', chm: 12, closed: 12},
    {eqpt: 'TAA ITAUTEC 2009', chm: 25, closed: 23},
    {eqpt: 'TAA PERTO', chm: 48, closed: 39}
    
];

const xScale = d3
.scaleBand()
.domain(dadosTaa.map((dataPoint) => dataPoint.eqpt))
.rangeRound([0, 640])
.padding(0.1);

const yScale = d3.scaleLinear().domain([0, 50]).range([480, 0]);

const container = d3.select('svg')
    .classed('container', true);
    

const bars = container
.selectAll('.bar')
.data(dadosTaa)
.enter()
.append('rect')
.classed('bar', true)
.attr('width', xScale.bandwidth())
.attr('height', (data) => 640 - yScale(data.chm))
.attr('x', data => xScale(data.eqpt))    
.attr('y', data => yScale(data.chm));    