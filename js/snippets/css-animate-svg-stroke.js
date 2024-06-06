export const cssAnimateSvgStroke = {
  name: 'Animate SVG stroke via CSS',
  cats: ['javascript', 'CSS', 'SVG'],
  language: 'html',
  snippet: `
<style>
  path {
    stroke-dasharray: 1279; /* we need to know the length of the stroke, check the js code below on how to get it*/
    stroke-dashoffset: 1279; /* we need to know the length of the stroke, check the js code below on how to get it*/
    animation: dash 3s linear infinite;
  }
  
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" stroke="#000000" fill="none">
  <path stroke-width="4" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
</svg>

<script>
  // find out the length of the path/stroke
  let path = document.querySelector('path');
  let length = path.getTotalLength(); // this will return 1279 in this case
</script>
`,
};
