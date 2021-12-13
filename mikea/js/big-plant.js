let col = "cornflowerblue";
const colBlue = document.getElementById("plant_blue");
const colPink = document.getElementById("plant_pink");
const colCoral = document.getElementById("plant_coral");
const colYellow = document.getElementById("plant_yellow");
const colWhite = document.getElementById("plant_white");

colBlue.onclick = function(){
    col = "cornflowerblue";
    let canLg = new Zdog.Cylinder({
        addTo: illo,
        diameter: 200,
        length: 200,
        stroke: false,
        color: col,
        backface: 'grey',
        rotate: {x: Zdog.TAU*1.65},
    })
};
colPink.onclick = function(){
    col = "pink";
    let canLg = new Zdog.Cylinder({
        addTo: illo,
        diameter: 200,
        length: 200,
        stroke: false,
        color: col,
        backface: 'grey',
        rotate: {x: Zdog.TAU*1.65},
    })
};
colCoral.onclick = function(){
    col = "coral";
    let canLg = new Zdog.Cylinder({
        addTo: illo,
        diameter: 200,
        length: 200,
        stroke: false,
        color: col,
        backface: 'grey',
        rotate: {x: Zdog.TAU*1.65},
    })
};
colYellow.onclick = function(){
    col = "gold";
    let canLg = new Zdog.Cylinder({
        addTo: illo,
        diameter: 200,
        length: 200,
        stroke: false,
        color: col,
        backface: 'grey',
        rotate: {x: Zdog.TAU*1.65},
    })
};
colWhite.onclick = function(){
    col = "whitesmoke";
    let canLg = new Zdog.Cylinder({
        addTo: illo,
        diameter: 200,
        length: 200,
        stroke: false,
        color: col,
        backface: 'grey',
        rotate: {x: Zdog.TAU*1.65},
    })
};

let illo = new Zdog.Illustration({
    element: '#plant_lg',
    dragRotate: true,
});
let canLg = new Zdog.Cylinder({
    addTo: illo,
    diameter: 200,
    length: 200,
    stroke: false,
    color: col,
    backface: 'grey',
    rotate: {x: Zdog.TAU*1.65},
});
let box = new Zdog.Box({
    addTo: illo,
    width: 50,
    height: 50,
    depth: 50,
    leftFace: false,
    rightFace: false,
    topFace: false,
    bottomFace: false,
    rearFace: false,
    translate: {z: -60, y: 50},
    rotate: {x: Zdog.TAU*1.65},
});
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