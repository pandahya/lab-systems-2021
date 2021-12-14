let illo = new Zdog.Illustration({
    element: '#plant',
    // dragRotate: true,
});

let leaves = new Zdog.Group({
    addTo: illo,
    rotate: {x: Zdog.TAU*1.9}
});

let can = new Zdog.Cylinder({
    addTo: illo,
    diameter: 100,
    length: 100,
    stroke: false,
    color: "cornflowerblue",
    backface: 'grey',
    rotate: {x: Zdog.TAU*1.65},
});
let box = new Zdog.Box({
    addTo: illo,
    width: 25,
    height: 25,
    depth: 25,
    leftFace: false,
    rightFace: false,
    topFace: false,
    bottomFace: false,
    rearFace: false,
    translate: {z: -30, y: 25},
    rotate: {x: Zdog.TAU*1.65},
});
let leaf = new Zdog.Cone({
    addTo: leaves,
    diameter: 30,
    length: 50,
    stroke: false,
    color: '#84DE02',
    // backface: '#C25',
    translate: {z: 0, x:0, y: -50},
    rotate: {x: Zdog.TAU/4},
});

leaf.copy({
    translate: {z: 20, x:20, y: -50}
});
leaf.copy({
    translate: {z: 20, x:-20, y: -50}
});
leaf.copy({
    translate: {z: -20, x:-20, y: -50}
});
leaf.copy({
    translate: {z: -20, x:20, y: -50}
});
leaf.copy({
    translate: {z: 10, x:10, y: -50}
})
leaf.copy({
    translate: {z: -10, x:10, y: -50}
});
leaf.copy({
    translate: {z: 10, x:-10, y: -50}
});
leaf.copy({
    translate: {z: -10, x:-10, y: -50}
});
leaf.copy({
    translate: {z: -30, x:0, y: -50}
});
leaf.copy({
    translate: {z: 0, x:-30, y: -50}
});
leaf.copy({
    translate: {z: 30, x:0, y: -50}
});
leaf.copy({
    translate: {z: 0, x:30, y: -50}
});

function animate() {
    illo.rotate. y += 0.01;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}
animate();