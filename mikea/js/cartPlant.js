let illo = [];
let col;
for(let i=0; i<plantNum; i++){
    col = sessionStorage.getItem(`plant${i + 1}`);
    illo[i] = new Zdog.Illustration({
        element: '#plant'+i,
        dragRotate: true,
    });
    
    let leaves = new Zdog.Group({
        addTo: illo[i],
        rotate: {x: Zdog.TAU*1.9}
    });
    
    let can = new Zdog.Cylinder({
        addTo: illo[i],
        diameter: 100,
        length: 100,
        stroke: false,
        color: col,
        backface: 'grey',
        rotate: {x: Zdog.TAU*1.65},
    });
    let box = new Zdog.Box({
        addTo: illo[i],
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
        illo[i].rotate. y += 0.03;
        illo[i].updateRenderGraph();
        requestAnimationFrame( animate );
    }
    animate();
}