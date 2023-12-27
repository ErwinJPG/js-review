// CREDITS
//https://stackoverflow.com/questions/64371523/matter-js-how-to-get-the-dimension-of-an-image-to-set-bodies-sizes
//

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.getElementById("main-div"),
    engine: engine,
    options: {
        wireframes: false,
        background: "transparent",
        width: window.innerWidth,
        height: window.innerHeight
    }
});

// create two boxes and a ground
var boxA = Bodies.circle(400, 200, 80, {
    render: {
        sprite : {
            texture: "images/sus.jpg",
            xScale: 0.21,
            yScale: 0.21
        }
    }
});
var ground = Bodies.rectangle(  window.innerWidth / 2,
                                window.innerHeight / 2, 
                                window.innerWidth, 
                                60, 
                                { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, ground]);

const mouse = Matter.Mouse.create(render.canvas);
const mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {visible: true}
  }
});
Matter.Composite.add(engine.world, mouseConstraint);
render.mouse = mouse;

// run the renderer
Render.run(render);
Render.background = "transparent"

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);