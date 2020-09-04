import {
    MessageBus,
    EntityManager,
    WebGLSystem,
    PointerSystem,
    Game,
    IMessageBus,
    Entity,
    Camera,
    Transform,
    Vector,
    Primitive,
    PrimitiveSystem,
    InterpolationSystem,
    MotionSystem,
    Material,
    Polygon,
    Color
} from "jamjar";

const OBJ_COUNT = 40;
const MAX_SCALE = 5;
const MIN_SCALE = 1;
const MAX_DIMENSIONS = 3;
const MIN_DIMENSIONS = 1;
const MIN_X = -80;
const MAX_X = 80;
const MIN_Y = -45;
const MAX_Y = 45;
const MAX_POINTS = 40;
const MIN_POINTS = 4;


class EllipseApproximation extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "ellipse-approximation");
    }

    OnStart(): void {
        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        for (let i = 0; i < OBJ_COUNT; i++) {
            const xDimension = randomBetweenInts(MIN_DIMENSIONS, MAX_DIMENSIONS);
            const yDimension = randomBetweenInts(MIN_DIMENSIONS, MAX_DIMENSIONS);
            // Create entities
            const nearest = new Entity(this.messageBus);
            nearest.Add(new Transform(
                new Vector(randomBetweenInts(MIN_X, MAX_X), randomBetweenInts(MIN_Y, MAX_Y)),
                new Vector(randomBetweenInts(MIN_SCALE, MAX_SCALE), randomBetweenInts(MIN_SCALE, MAX_SCALE))
            ));
            nearest.Add(new Primitive(
                new Material({
                    color: new Color(Math.random(), Math.random(), Math.random())
                }),
                1,
                Polygon.EllipseEstimation(
                    randomBetweenInts(MIN_POINTS, MAX_POINTS),
                    new Vector(xDimension, yDimension),
                    undefined,
                    true
                )
            ));
        }
    }
}

function randomBetweenInts(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}

const messageBus = new MessageBus();

new EntityManager(messageBus);

new WebGLSystem(messageBus, gl);
new PointerSystem(messageBus, canvas);
new PrimitiveSystem(messageBus);
new InterpolationSystem(messageBus);
new MotionSystem(messageBus);

new EllipseApproximation(messageBus).Start();
