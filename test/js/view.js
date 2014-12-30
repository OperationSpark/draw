(function (window) {

    window.index = window.index || {};
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

     */
    p.initialize = function () {
        should(draw.rect);
    }

    p.update = function () {
    }


    /*
     * Expose our View Class on our index object, so the View can be instantiated in our app.
     */
    window.index.View = View;
}(window));