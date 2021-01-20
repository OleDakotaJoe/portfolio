export function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}
export function hexToRGB(hex) {
	var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
	return {
		r: parseInt(m[1], 16),
		g: parseInt(m[2], 16),
		b: parseInt(m[3], 16),
	};
}

export function distance(x1, y1, x2, y2) {
	const xDist = x2 - x1;
	const yDist = y2 - y1;

	return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

export function scaleCanvas(canvas, context, width, height) {
	// assume the device pixel ratio is 1 if the browser doesn't specify it
	const devicePixelRatio = window.devicePixelRatio || 1;

	// determine the 'backing store ratio' of the canvas context
	const backingStoreRatio =
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio ||
		1;

	// determine the actual ratio we want to draw at
	const ratio = devicePixelRatio / backingStoreRatio;

	if (devicePixelRatio !== backingStoreRatio) {
		// set the 'real' canvas size to the higher width/height
		canvas.width = width * ratio;
		canvas.height = height * ratio;

		// ...then scale it back down with CSS
		canvas.style.width = width + "px";
		canvas.style.height = height + "px";
	} else {
		// this is a normal 1:1 device; just scale it simply
		canvas.width = width;
		canvas.height = height;
		canvas.style.width = "";
		canvas.style.height = "";
	}

	// scale the drawing context so everything will work at the higher ratio
	context.scale(ratio, ratio);
}
