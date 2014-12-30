/**
 * draw.js : a wrapper of the CreateJS Graphic API to reduce boiler-plate.
 * version: 1.2
 */
(function (window) {

    window.opspark = window.opspark || {}
    
    var draw = {
        line: function (x, y, strokeColor, strokeStyle, xOffset, yOffset, shape) {
            xOffset = (xOffset) ? xOffset : 0;
            yOffset = (yOffset) ? yOffset : 0;
            shape = (shape) ? shape : new createjs.Shape();
            shape.graphics
                .setStrokeStyle(strokeStyle)
                .beginStroke(strokeColor)
                .moveTo(xOffset, yOffset)
                .lineTo(x, y);
            return shape;
        },

        rect: function (width, height, color, strokeColor, strokeStyle, xOffset, yOffset, shape) { 
        	xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (width) ? width : 0;
        	height = (height) ? height : 0;
        	shape = (shape) ? shape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawRect(xOffset, yOffset, width, height);
        	shape.setBounds(xOffset, yOffset, width, height);
        	shape.bounds = shape.getBounds();
        	shape.width = width;
        	shape.height = height;
        	shape.xOffset = xOffset;
        	shape.yOffset = yOffset;
	        return shape;
    	},

    	roundRect: function (width, height, radius, color, strokeColor, strokeStyle, xOffset, yOffset, shape) {
    		xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (width) ? width : 0;
        	height = (height) ? height : 0;
        	shape = (shape) ? shape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawRoundRect(xOffset, yOffset, width, height, radius);
        	shape.setBounds(xOffset, yOffset, width, height);
        	shape.bounds = shape.getBounds();
        	shape.width = width;
        	shape.height = height;
        	shape.radius = radius;
        	shape.xOffset = xOffset;
        	shape.yOffset = yOffset;
	        return shape;
    	},

    	circle: function (radius, color, strokeColor, strokeStyle, xOffset, yOffset, shape) { 
        	xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (radius * 2) + xOffset;
        	height = (radius * 2) + yOffset;
        	shape = (shape) ? shape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawCircle(xOffset, yOffset, radius);
        	shape.setBounds(xOffset, yOffset, width, height);
        	shape.bounds = shape.getBounds();
        	shape.width = width;
        	shape.height = height;
        	shape.radius = radius;
        	shape.xOffset = xOffset;
        	shape.yOffset = yOffset;
	        return shape;
    	},

        drawEllipse: function (width, height, color, strokeColor, strokeStyle, xOffset, yOffset, shape) {
            xOffset = (xOffset) ? xOffset : 0;
            yOffset = (yOffset) ? yOffset : 0;
            width = (radius * 2) + xOffset;
            height = (radius * 2) + yOffset;
            shape = (shape) ? shape : new createjs.Shape();
            shape.graphics
                .setStrokeStyle(strokeStyle)
                .beginStroke(strokeColor)
                .beginFill(color)
                .drawEllipse(xOffset, yOffset, width, height);
            shape.setBounds(xOffset, yOffset, width, height);
            shape.bounds = shape.getBounds();
            shape.width = width;
            shape.height = height;
            shape.xOffset = xOffset;
            shape.yOffset = yOffset;
            return shape;
        },

    	polyStar: function (radius, sides, pointSize, angle, color, strokeColor, strokeStyle, xOffset, yOffset, shape) {
    		xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (radius * 2) + xOffset;
        	height = (radius * 2) + yOffset;
        	shape = (shape) ? shape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawPolyStar(xOffset, yOffset, radius, sides, pointSize || 0, angle);
        	shape.setBounds(xOffset, yOffset, width, height);
        	shape.bounds = shape.getBounds();
        	shape.width = width;
        	shape.height = height;
        	shape.radius = radius;
        	shape.xOffset = xOffset;
        	shape.yOffset = yOffset;
	        return shape;
    	} 
    }
    
	window.opspark.draw = draw;

}(window));