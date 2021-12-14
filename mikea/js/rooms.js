let plant = new Zdog.Illustration({
    element: "#plantPrev",
});
let leaves = new Zdog.Group({
    addTo: plant,
    rotate: {x: Zdog.TAU*1.9}
});

let planter = new Zdog.Cylinder({
    addTo: plant,
    diameter: 100,
    length: 100,
    stroke: false,
    color: "cornflowerblue",
    backface: 'grey',
    rotate: {x: Zdog.TAU*1.65},
});
let box = new Zdog.Box({
    addTo: plant,
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


let pot = new Zdog.Illustration({
    element: "#kitchPrev",
    rotate:{z: Zdog.TAU/7, x: Zdog.TAU*0.05},
});
let can = new Zdog.Cylinder({
    addTo: pot,
    diameter: 100,
    length: 50,
    stroke: false,
    color: "brown",
    backface: "black",
    frontFace: "gray",
})
let handle = new Zdog.Shape({
    addTo: pot,
    path:[
        {y:-95},
        {y: -60},
    ],
    stroke: 20,
    color: "gray",
});

let pillow = new Zdog.Illustration({
    element: "#bedPrev",
    // dragRotate: true,
    rotate:{z: Zdog.TAU*0.03},
});
let main = new Zdog.Rect({
    addTo: pillow,
    width: 80,
    height: 50,
    stroke: 60,
    fill: true,
    color: "navajowhite",
});
let corners = new Zdog.Shape({
    addTo: pillow,
    path:[
        {x:-60, y: 45},
        {x:60, y:-45},
        {move:{x:-60, y:-45}},
        {x:60, y: 45}
    ],
    stroke: 30,
    color: "navajowhite",
});

let toothbrush = new Zdog.Illustration({
    element: "#bathPrev",
    // dragRotate: true,
    rotate:{z: Zdog.TAU*0.2, x: Zdog.TAU*0.4},
    translate:{y:-20},
});
// let grip = new Zdog.Cylinder({
//     addTo: toothbrush,
//     diameter: 20,
//     length: 50,
//     stroke: true,
//     color: "navy",
//     backface: "grey",
//     translate:{x:-30},
// });
// new Zdog.Shape({
//     addTo: toothbrush,
//     path:[
//         {z:-80},
//         {z: -25},
//     ],
//     stroke: 10,
//     color: "grey",
//     translate:{x:-30},
// });
// new Zdog.Shape({
//     addTo: toothbrush,
//     path:[
//         {z:-80,y:10},
//         {z:-60,y:10,}
//     ],
//     stroke:10,
//     color: "aliceblue",
//     translate:{x:-30},
// })
new Zdog.Cylinder({
    addTo: toothbrush,
    diameter: 100,
    length: 90,
    stroke: false,
    color: "papayawhip",
    backface: "lightgrey",
});
let hole = new Zdog.Ellipse({
    addTo:toothbrush,
    diameter: 40,
    stroke: false,
    fill: true,
    translate:{z: -40},
});
hole.copy({
    translate:{z:40},
})
new Zdog.Rect({
    addTo: toothbrush,
    width: 90,
    height: 90,
    rotate:{y: Zdog.TAU/4},
    stroke: false,
    fill: true,
    color: "papayawhip",
    translate:{x: -50, y:-50}
});

let laptop = new Zdog.Illustration({
    element: "#offPrev",
    // dragRotate: true,
    translate: {y:-25},
    rotate:{x: Zdog.TAU/1.05, Y: Zdog.TAU*0.4}
});
let sc = new Zdog.Rect({
    addTo: laptop,
    width: 110,
    height: 80,
    stroke: 10,
    fill: true,
});
sc.copy({
    rotate:{x: Zdog.TAU*0.2},
    translate:{z:45, y:55},
});
new Zdog.Rect({
    addTo: laptop,
    width: 100,
    height: 70,
    stroke: false,
    fill: true,
    color: "lightgrey",
    translate: {z:5},
});

//https://codepen.io/farpixel/pen/gJqZmx
let toy = new Zdog.Illustration({
    element: "#kidPrev",
    dragRotate: true,
    zoom: 5,
});
new Zdog.Shape({
    addTo: toy,
    stroke: 12,
    color: "cornflowerblue",
});
const eye = {
    addTo: toy,
    stroke: 1,
    color: "#1d1d1f",
    translate: {
        x: 0,
        y: -.9,
        z: -5.8,
    },
};
new Zdog.Shape({
    ...eye,
    translate: {
        ...eye.translate,
        x: 2.5,
    },
});
new Zdog.Shape({
    ...eye,
    translate: {
        ...eye.translate,
        x: -2.5,
    },
});
new Zdog.Cone({
    addTo: toy,
    diameter: 2.5,
    length: 8,
    stroke: 1,
    color: "#ddd",
    translate: {
      y: -4,
      z: -5.1,
    },
     rotate: {
       x: -.7,
       y: Math.PI,
     },
});
new Zdog.Cone({
    addTo: toy,
    diameter: 9,
    length: 15,
    stroke: 4,
    color: "cornflowerblue",
    rotate: {
        x: -.265,
    },
    translate: {
        y: .1,
        z: 0.5,
    },
});
new Zdog.Ellipse({
    addTo: toy,
    diameter: 2.5,
    quarters: 2,
    stroke: .7,
    color: "#1d1d1f",
    rotate: {
        z: Math.PI / 2
    },
    translate: {
        x: 0,
        y: 1,
        z: -6,
    },
});
const frontFlipper = {
    addTo: toy,
    radius: 3,
    sides: 3,
    stroke: 1.5,
    color: "cornflowerblue",
    fill: true,
    translate: {
        x: 5.1,
        y: 5,
        z: 1,
    },
};
new Zdog.Polygon({
    ...frontFlipper,
    rotate: {
        ...frontFlipper.rotate,
        x: Math.PI / 2,
        y: -.7,
        z: Math.PI / 2,
    },
    translate: {
        ...frontFlipper.translate,
    },
});
new Zdog.Polygon({
    ...frontFlipper,
    rotate: {
        ...frontFlipper.rotate,
        x: -Math.PI / 2,
        y: -.7,
        z: -Math.PI / 2,
    },
    translate: {
        ...frontFlipper.translate,
        x: -1 * frontFlipper.translate.x,
    },
});
const backFlipper = {
    addTo: toy,
    radius: 4,
    sides: 3,
    stroke: 2,
    color: "cornflowerblue",
    fill: true,
    rotate: {
        x: Math.PI / 2,
        y: -.5,
        z: -2,
    },
    translate: {
        x: 3.6,
        y: 1.8,
        z: 13.5,
    },
};
new Zdog.Polygon({
    ...backFlipper,
    rotate: {
        ...backFlipper.rotate,
    },
    translate: {
        ...backFlipper.translate,
        x: -1 * backFlipper.translate.x,
    },
});
new Zdog.Polygon({
    ...backFlipper,
    rotate: {
        ...backFlipper.rotate,
        y: -1 * backFlipper.rotate.y,
    },
    translate: {
        ...backFlipper.translate,
    },
});
toy.rotate.y = Math.PI / 2;

function animate() {
    plant.rotate. y += 0.01;
    plant.updateRenderGraph();
    pot.rotate. y += 0.01;
    pot.updateRenderGraph();
    pillow.rotate. y+= 0.01;
    pillow.updateRenderGraph();
    toothbrush.rotate. y+= 0.01;
    toothbrush.updateRenderGraph();
    laptop.rotate. y+= 0.01;
    laptop.updateRenderGraph();
    toy.rotate. y+= 0.01;
    toy.updateRenderGraph();
    requestAnimationFrame( animate );
}
animate();