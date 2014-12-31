/**
 * draw.js : Not optimally desgiend, but to assist in learning, a wrapper 
 * of the CreateJS Graphic API to reduce boiler-plate.  For CreateJS Graphic 
 * API not wrapped by this version, use the Graphic API directly.
 * 
 * See: http://www.createjs.com/Docs/EaselJS/classes/Graphics.html
 * 
 * Version: 1.2
 * 
 * Dependencies: easeljs-0.7.1
 */
(function (window) {

    window.opspark = window.opspark || {};
    
    function sortNumbersAscending(a, b) { return a - b; }
    
    var draw = {
        setBoundsOn: function (shape, width, height, xOffset, yOffset, radius, onShape) {
            if (onShape) {
        	    // first figure out the points of extremity //
        	    var xStartPoint = [onShape.xOffset, xOffset].sort(sortNumbersAscending)[0];
        	    var xEndPoint = [onShape.xOffset + onShape.width, xOffset + width].sort(sortNumbersAscending)[1];
        	    
        	    var yStartPoint = [onShape.yOffset, yOffset].sort(sortNumbersAscending)[0];
        	    var yEndPoint = [onShape.yOffset + onShape.height, yOffset + height].sort(sortNumbersAscending)[1];
        	    
        	    var xs = 0;
                var ys = 0;
                
                /*
                 * for the width calculation, we don't care about the y value 
                 * of the points of comparison, and vice versa for height.
                 */
                xs = xEndPoint - xStartPoint;
                xs = xs * xs;
                width = Math.sqrt(xs + ys);
        	    
                xs = 0;
                ys = yEndPoint - yStartPoint;
                ys = ys * ys;
        	    height = Math.sqrt(xs + ys);
        	    
        	    xOffset = xStartPoint, yOffset = yStartPoint;
        	    
        	    // TODO: Hmm, haven't checked this is right or even valid on 
        	    // compound shapes, regardless, we are not taking into account offset, so, fix it or drop it //
        	    if (radius) { radius += onShape.radius; }
        	}
            
            shape.setBounds(xOffset, yOffset, width, height);
        	shape.bounds = shape.getBounds();
        	shape.width = shape.bounds.width;
        	shape.height = shape.bounds.height;
        	shape.xOffset = xOffset;
        	shape.yOffset = yOffset;
        	if (radius) {shape.radius = radius; }
        	console.log(width);
        	console.log(height);
	        return shape;
        },
        
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
        
        rect: function (width, height, color, strokeColor, strokeStyle, xOffset, yOffset, onShape) { 
        	xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (width) ? width : 0;
        	height = (height) ? height : 0;
        	
        	var shape = (onShape) ? onShape : new createjs.Shape();
        	
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawRect(xOffset, yOffset, width, height);
        	
        	return draw.setBoundsOn(shape, width, height, xOffset, yOffset, null, onShape);
        },
        
        roundRect: function (width, height, radius, color, strokeColor, strokeStyle, xOffset, yOffset, onShape) {
    		xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (width) ? width : 0;
        	height = (height) ? height : 0;
        	var shape = (onShape) ? onShape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawRoundRect(xOffset, yOffset, width, height, radius);
	        return draw.setBoundsOn(shape, width, height, xOffset, yOffset, radius, onShape);
    	},
    	
    	roundRectComplex: function (width, 
    	                            height, 
    	                            radiusTopLeft, 
    	                            radiusTopRight, 
    	                            radiusBottomRight, 
    	                            radiusBottomLeft, 
    	                            color, 
    	                            strokeColor, 
    	                            strokeStyle, 
    	                            xOffset, 
    	                            yOffset, 
    	                            onShape) {
    	    xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	width = (width) ? width : 0;
        	height = (height) ? height : 0;
        	var shape = (onShape) ? onShape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawRoundRectComplex(xOffset, yOffset, width, height, radiusTopLeft, radiusTopRight, radiusBottomRight, radiusBottomLeft);
	        draw.setBoundsOn(shape, width, height, xOffset, yOffset, null, onShape);
	        shape.radiusTopLeft = radiusTopLeft;
	        shape.radiusTopRight = radiusTopRight;
	        shape.radiusBottomRight = radiusBottomRight;
	        shape.radiusBottomLeft = radiusBottomLeft;
            return shape;
    	},

    	circle: function (radius, color, strokeColor, strokeStyle, xOffset, yOffset, onShape) { 
        	xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	var width = (radius * 2);
        	var height = (radius * 2);
        	var shape = (onShape) ? onShape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawCircle(xOffset, yOffset, radius);
        	
        	return draw.setBoundsOn(shape, width, height, xOffset, yOffset, radius, onShape);
    	},

        drawEllipse: function (width, height, color, strokeColor, strokeStyle, xOffset, yOffset, onShape) {
            xOffset = (xOffset) ? xOffset : 0;
            yOffset = (yOffset) ? yOffset : 0;
            var shape = (onShape) ? onShape : new createjs.Shape();
            shape.graphics
                .setStrokeStyle(strokeStyle)
                .beginStroke(strokeColor)
                .beginFill(color)
                .drawEllipse(xOffset, yOffset, width, height);
            return draw.setBoundsOn(shape, width, height, xOffset, yOffset, null, onShape);
        },

    	polyStar: function (radius, sides, pointSize, angle, color, strokeColor, strokeStyle, xOffset, yOffset, onShape) {
    		xOffset = (xOffset) ? xOffset : 0;
        	yOffset = (yOffset) ? yOffset : 0;
        	var width = (radius * 2);
        	var height = (radius * 2);
        	var shape = (onShape) ? onShape : new createjs.Shape();
        	shape.graphics
        		.setStrokeStyle(strokeStyle)
        		.beginStroke(strokeColor)
        		.beginFill(color)
        		.drawPolyStar(xOffset, yOffset, radius, sides, pointSize || 0, angle);
        	return draw.setBoundsOn(shape, width, height, xOffset, yOffset, radius, onShape);
    	} 
    };
    
	window.opspark.draw = draw;

}(window));