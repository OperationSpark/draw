Draw
===

A wrapper of the CreateJS Graphic API to reduce boiler-plate.

Supports:

    * drawing basic shapes.
    * calculation of width and height properties on Shape objects.
    * creating some shapes with randomized properties, size, alpha, (x, y) within an area, etc.
    * composite graphics, ie, continue to draw on the same Graphic object.

##Installation

You can either install using `bower` or manually download the `draw.js` file and `draw-x.x.x.js` include it in your index.html using a `<script>` tag.

###Bower

````
$ bower install --save opspark-draw
````

###index.html

Either way, ensure you first include `EaselJS` and `draw`  within the `<head>` tag of your `index.html` file, like so:

````html
<head>
    <script src="bower_components/EaselJS/lib/easeljs.min.js"></script>
    <script src="bower_components/opspark-draw/draw.js"></script>
</head>
````

###Availability

Once installed, draw is available at:

````javascript
const draw = window.opspark.draw;
````

##Usage

````javascript
const shape = draw.rect(40, 40, '#CCC', null, null, 0, 0);
shape.x = 10;
view.addChild(shape);

// using should.js //
(shape.width).should.be.exactly(40);

// continue to draw on the same Shape by passing it as the last arguement //
draw.rect(10, 40, '#999', null, null, -10, 20, shape);
(shape.width).should.be.exactly(50);
(shape.height).should.be.exactly(60);

// xOffset is now -10 as the x extremity of the composite shape //
(shape.xOffset).should.be.exactly(-10);

// yOffset is still 0 because 0 is still the y extremity of the composite shape //
(shape.yOffset).should.be.exactly(0);
````

##Version

Check the `bower.json` file for current version.  Note, as of yet, some Graphic API may not be wrapped.  Check the `draw-x.x.x.js` for current available API.

##Dependencies
Check the `bower.json` file for current list of dependencies.  Dependencies will be automatically downloaded if installing via bower.