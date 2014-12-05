function setPlaneOrthographicRectangle(planeMesh, rect) {
	planeMesh.position.x = rect.x + rect.width * .5;
	planeMesh.position.y = rect.y + rect.height * .5;
	planeMesh.scale.x = rect.width;
	planeMesh.scale.y = rect.height;
}

module.exports = setPlaneOrthographicRectangle;