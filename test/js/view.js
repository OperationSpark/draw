(function (window) {

    window.index = window.index || {};
    var should = window.should;
    var draw = window.opspark.draw;

    /*
     * view : A variable that holds a reference to "this" within the context of the View object.
     */
    var view;

    function View() {
        view = this;
        view.Container_initialize();
        view.initialize();
    }

    var p = View.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;
    
    p.initialize = function () {
        testCompositeRect();
        testCompositeCirc();
        testCompositeIrreg();
        
        console.log('all tests are cool!');
    };
    
    function testCompositeRect() {
        console.log('testCompositeRect');
        /*
         * API : draw.rect(width, height, color, strokeColor, strokeStyle, xOffset, yOffset, shape)
         */
        
        var shape = draw.rect(40, 40, '#CCC', null, null, 0, 0);
        shape.x = 10;
        view.addChild(shape);
        
        (shape.width).should.be.exactly(40);
        
        draw.rect(10, 40, '#999', null, null, -10, 20, shape);
        (shape.width).should.be.exactly(50);
        (shape.height).should.be.exactly(60);
        
        // xOffset is now -10 as the x extremity of the composite shape //
        (shape.xOffset).should.be.exactly(-10);
        
        // yOffset is still 0 because 0 is still the y extremity of the composite shape //
        (shape.yOffset).should.be.exactly(0);
        
        draw.rect(10, 10, '#444', null, null, 10, 40, shape);
        
        // the last graphic drawn was withen the bounds of the shape, so the extremities haven't changed //
        (shape.width).should.be.exactly(50);
        (shape.height).should.be.exactly(60);
        (shape.xOffset).should.be.exactly(-10);
        (shape.yOffset).should.be.exactly(0);
    }
    
    function testCompositeCirc() {
        console.log('testCompositeCirc');
        /*
         * API : draw.circle(radius, color, strokeColor, strokeStyle, xOffset, yOffset, onShape)
         */
        
        var l = draw.rect(40, 1, '#999');
        l.y = 60;
        view.addChild(l);
        
        var shape = draw.circle(40, '#CCC');
        shape.x = 40, shape.y = 100;
        view.addChild(shape);
        
        (shape.width).should.be.exactly(80);
        (shape.height).should.be.exactly(80);
        
        draw.rect(1, 120, '#999', null, null, 0, -40, shape);
        
        // we draw inclusively on the x axis here, note xOffset is 39 //
        draw.rect(1, 120, '#999', null, null, 39, -40, shape); 
        
        (shape.width).should.be.exactly(80);
        (shape.height).should.be.exactly(120);
        
        draw.circle(40, '#444', null, null, 40, 40, shape);
        (shape.width).should.be.exactly(120);
        (shape.height).should.be.exactly(120);
    }
    
    function testCompositeIrreg() {
        console.log('testCompositeIrreg');
        
        var shape = draw.circle(20, '#CCC');
        shape.x = shape.y = 200;
        view.addChild(shape);
        
        (shape.width).should.be.exactly(40);
        (shape.height).should.be.exactly(40);
        
        draw.circle(20, '#444', null, null, -20, -20, shape);
        (shape.width).should.be.exactly(60);
        (shape.height).should.be.exactly(60);
        
        var shape = draw.rect(40, 40, '#CCC', null, null, 0, 40);
        shape.x = 20, shape.y = 220;
        view.addChild(shape);
        (shape.width).should.be.exactly(40);
        (shape.height).should.be.exactly(40);
        (shape.xOffset).should.be.exactly(0);
        (shape.yOffset).should.be.exactly(40);
        
        // draw circle onto rectangular shape //
        draw.circle(40, '#999', null, null, 20, 20, shape);
        (shape.width).should.be.exactly(80);
        (shape.height).should.be.exactly(100);
        (shape.xOffset).should.be.exactly(-20);
        (shape.yOffset).should.be.exactly(-20);
    }

    p.update = function () {
    };


    /*
     * Expose our View Class on our index object, so the View can be instantiated in our app.
     */
    window.index.View = View;
}(window));