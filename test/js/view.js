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
        var shapeOne;
        
        /*
         * API : draw.rect(width, height, color, strokeColor, strokeStyle, xOffset, yOffset, shape)
         */
        shapeOne = draw.rect(40, 40, '#CCC', null, null, 0, 0);
        
        /*
         * for the purpose of visually developing the test, place shapes
         * where we'll be able to see any offset graphics added to them.
         */
        shapeOne.x = 10;
        view.addChild(shapeOne);
        
        (shapeOne.width).should.be.exactly(40);
        
        draw.rect(10, 40, '#999', null, null, -10, 20, shapeOne);
        (shapeOne.width).should.be.exactly(50);
        (shapeOne.height).should.be.exactly(60);
        (shapeOne.xOffset).should.be.exactly(-10);
        
        draw.rect(10, 10, '#444', null, null, 10, 40, shapeOne);
        
        // API : draw.circle(radius, color, strokeColor, strokeStyle, xOffset, yOffset, onShape)
        var shapeTwo;
        shapeTwo = draw.circle(40, '#CCC');
        shapeTwo.x = shapeTwo.y = 80;
        view.addChild(shapeTwo);
        
        (shapeTwo.width).should.be.exactly(80);
        (shapeTwo.height).should.be.exactly(80);
        
        draw.circle(40, '#444', null, null, 40, 40, shapeTwo);
        (shapeTwo.width).should.be.exactly(120);
        (shapeTwo.height).should.be.exactly(120);
        
        var shapeThree = draw.circle(20, '#CCC');
        shapeThree.x = shapeThree.y = 200;
        view.addChild(shapeThree);
        
        (shapeThree.width).should.be.exactly(40);
        (shapeThree.height).should.be.exactly(40);
        
        draw.circle(20, '#444', null, null, -20, -20, shapeThree);
        (shapeThree.width).should.be.exactly(60);
        (shapeThree.height).should.be.exactly(60);
        
        var shapeFour = draw.rect(40, 40, '#CCC', null, null, 0, 0);
        shapeFour.x = 80, shapeFour.y = 220;
        view.addChild(shapeFour);
        
        // breaks down here :{
        // draw circle onto rectangular shape //
        draw.circle(40, '0x999', null, null, 20, 20, shapeFour);
        
        
        console.log('all tests are cool!');
    };

    p.update = function () {
    };


    /*
     * Expose our View Class on our index object, so the View can be instantiated in our app.
     */
    window.index.View = View;
}(window));