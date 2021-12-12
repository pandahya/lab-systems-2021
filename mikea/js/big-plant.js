let illo = new Zdog.Illustration({
    element: '#plant_lg',
    dragRotate: true,
});
let canLg = new Zdog.Cylinder({
    addTo: illo,
    diameter: 200,
    length: 200,
    stroke: false,
    color: "cornflowerblue",
    backface: 'grey',
    rotate: {x: Zdog.TAU*1.65},
})
let leaves = new Zdog.Group({
    addTo: illo,
    rotate: {x: Zdog.TAU*1.9},
})
let leafY = -100;
let leaf = new Zdog.Cone({
    addTo: leaves,
    diameter: 60,
    length: 100,
    stroke: false,
    color: '#84DE02',
    // backface: '#C25',
    translate: {z: 0, x:0, y:leafY},
    rotate: {x: Zdog.TAU/4},
});
leaf.copy({
    translate: {z: 40, x:40, y: leafY}
});
leaf.copy({
    translate: {z: 40, x:-40, y: leafY}
});
leaf.copy({
    translate: {z: -40, x:-40, y: leafY}
});
leaf.copy({
    translate: {z: -40, x:40, y: leafY}
});
leaf.copy({
    translate: {z: 20, x:20, y: leafY}
})
leaf.copy({
    translate: {z: -20, x:20, y: leafY}
});
leaf.copy({
    translate: {z: 20, x:-20, y: leafY}
});
leaf.copy({
    translate: {z: -20, x:-20, y: leafY}
});
leaf.copy({
    translate: {z: -60, x:0, y: leafY}
});
leaf.copy({
    translate: {z: 0, x:-60, y: leafY}
});
leaf.copy({
    translate: {z: 60, x:0, y: leafY}
});
leaf.copy({
    translate: {z: 0, x:60, y: leafY}
});

function animate() {
    // illo.rotate. y += 0.03;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}
animate();