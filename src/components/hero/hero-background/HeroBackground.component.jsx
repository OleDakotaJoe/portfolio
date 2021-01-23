import React, { useRef, useEffect } from "react";
import {
	randomColor,
	randomIntFromRange,
	distance,
	hexToRGB,
	scaleCanvas,
} from "../../../utils/canvas.utils.js";

const HeroBackground = () => {
	const canvasRef = useRef(null);
	const ringColors = ["#f4d326", "#F56C00", "#14b6f4", "#ea80fc", "#c6242b"];
	const centerColor = ["#F56C00", "#f4d326", "#f4d326", "#f4d326"];
	const backgroundColor = "#191919";
	const backgroundFillColor = "#20202010";
	const mouse = {
		x: undefined,
		y: undefined,
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const c = canvas.getContext("2d");
		let dimensions = {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
		};

		// Event Listeners
		window.addEventListener("mousemove", (event) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = event.clientX - rect.left;
			mouse.y = event.clientY - rect.top;
		});

		window.addEventListener("touchstart", (event) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = event.touches[0].clientX - rect.left;
			mouse.y = event.touches[0].clientY - rect.top;
		});
		window.addEventListener("touchend", () => {
			mouse.x = undefined;
			mouse.y = undefined;
		});
		window.addEventListener("touchmove", (event) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = event.touches[0].clientX - rect.left;
			mouse.y = event.touches[0].clientY - rect.top;
		});

		window.addEventListener("resize", () => {
			let clientHeight = document.documentElement.clientHeight;
			let clientWidth = document.documentElement.clientWidth;
			if (
				dimensions.height !== clientHeight ||
				dimensions.width !== clientWidth
			) {
				dimensions = {
					height: clientHeight,
					width: clientWidth,
				};
				c.clearRect(0, 0, dimensions.width, dimensions.height);
				init();
			}
		});

		// Object
		class Particle {
			constructor(x, y, radius, color, degrees, axes, velocity) {
				this.x = x;
				this.y = y;
				this.xC = x;
				this.yC = y;
				this.radius = radius;
				this.initialRadius = radius;
				this.color = color;
				this.position = Math.random() * Math.PI * 2;
				this.initialVelocity = velocity.initial * 1.5;
				this.finalVelocity = velocity.final;
				this.mouseOverVelocity = velocity.initial * 1.3;
				this.currentVelocity = this.initialVelocity;
				this.minorAxis = axes.minor;
				this.majorAxis = axes.major;
				this.degrees = degrees;
				this.initializeCounter = 0;
				this.rgb = hexToRGB(this.color);
				this.finalColor = null;
				this.opacity = null;
			}

			draw() {
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				c.fillStyle = this.calculateRGBAColor();
				c.fill();
				c.closePath();
			}

			update() {
				this.handleMouseOver();
				this.createEllipticalMotion();
				this.draw();
			}

			setVelocity() {
				if (this.initializeCounter < 100) {
					this.currentVelocity = this.initialVelocity;
					this.initializeCounter++;
				} else {
					this.currentVelocity = this.finalVelocity;
				}
			}

			createEllipticalMotion() {
				this.position += this.currentVelocity / 100;
				this.x =
					this.xC +
					this.minorAxis * Math.cos(this.position) * Math.cos(this.degrees) -
					this.majorAxis * Math.sin(this.position) * Math.sin(this.degrees);
				this.y =
					this.yC +
					this.minorAxis * Math.cos(this.position) * Math.sin(this.degrees) +
					this.majorAxis * Math.sin(this.position) * Math.cos(this.degrees);
			}

			handleMouseOver() {
				let d = distance(this.x, this.y, mouse.x, mouse.y);
				if (d < 300) {
					this.currentVelocity = (this.mouseOverVelocity * 100) / d;
					this.opacity = 1;
					this.radius = this.initialRadius * 1.5;
				} else {
					this.setVelocity();
					this.opacity = 0.8;
					this.radius = this.initialRadius;
				}
			}

			calculateRGBAColor() {
				let rgb = this.rgb;
				return `rgba(${rgb.r},${rgb.g},${rgb.b},${this.opacity})`;
			}
		}

		function initCore(particles, scale) {
			for (let i = 0; i < 120; i++) {
				const coreConfig = {
					centerX: dimensions.width / 3,
					centerY: dimensions.height / 1.5,
					radius: 0.5 * scale,
					minorAxis: 5 * scale,
					degrees: randomIntFromRange(1, 1000) / 100,
					velocity: {
						initial: randomIntFromRange(15, 22) * 0.1,
						final: randomIntFromRange(8, 12) * 0.1,
					},
				};
				const coreAxes = {
					minor: coreConfig.minorAxis,
					major: coreConfig.minorAxis * 13,
				};
				particles.push(
					new Particle(
						coreConfig.centerX,
						coreConfig.centerY,
						coreConfig.radius,
						randomColor(centerColor),
						coreConfig.degrees,
						coreAxes,
						coreConfig.velocity
					)
				);
			}
		}

		function initRings(particles, scale) {
			for (let i = 0; i < 50; i++) {
				const ringConfig = {
					centerX: dimensions.width / 3,
					centerY: dimensions.height / 1.5,
					radius: randomIntFromRange(2, 3) * scale,
					minorAxis: randomIntFromRange(70, 370) * scale,
					degrees: (2 * Math.PI) / 3.2,
					velocity: {
						initial: 0.7,
						final: randomIntFromRange(3, 5) * 0.1,
					},
				};
				const ringAxes = {
					minor: ringConfig.minorAxis,
					major: ringConfig.minorAxis * 2,
				};

				particles.push(
					new Particle(
						ringConfig.centerX,
						ringConfig.centerY,
						ringConfig.radius,
						randomColor(ringColors),
						ringConfig.degrees,
						ringAxes,
						ringConfig.velocity
					)
				);
			}
		}

		function initBackground(color) {
			c.fillStyle = color;
			c.fillRect(0, 0, dimensions.width, dimensions.height);
		}

		// Implementation
		let particles;
		function init() {
			scaleCanvas(canvas, c, dimensions.width, dimensions.height);
			const scale =
				dimensions.width > 1800
					? dimensions.width / 1920
					: dimensions.width / 1000;
			initBackground(backgroundColor);
			particles = [];
			initCore(particles, scale);
			initRings(particles, scale);
		}
		// Animation Loop
		function animate() {
			initBackground(backgroundFillColor);
			requestAnimationFrame(animate);
			particles.forEach((particle) => {
				particle.update();
			});
		}
		init();
		animate();
	});

	return <canvas ref={canvasRef} />;
};

export default HeroBackground;
