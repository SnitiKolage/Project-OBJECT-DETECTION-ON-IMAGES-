img = "";
objects = [];
statuss = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:DetectingObjects";
}

function modelLoaded() {
    console.log("modelLoaded");
    statuss = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results)
    objects = results;

}

function draw() {
    image(img, 0, 0, 640, 420);
    if (statuss != "")
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status:object Detected";
            fill(255, 0, 0)
            percent=floor(object[i].confidence*100)
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);

        }
}