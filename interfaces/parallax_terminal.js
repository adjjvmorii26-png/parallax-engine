const {run:h}=require("../horizon_gate/gate_projection.js");
const {run:f}=require("../foreshortening_loom/loom_distort.js");
const {run:v}=require("../vanishing_basilica/basilica_perspective.js");
const {run:o}=require("../orthographic_crucible/crucible_flatten.js");
const {run:p}=require("../perspective_reef/reef_growth.js");
async function main(){console.log("Parallax Engine…\n");console.log("Horizon:",h(0));console.log("Foreshorten:",f(0));console.log("Vanish:",v(0));console.log("Ortho:",o(0));console.log("Perspective:",p(0));}
if(require.main===module)main();
