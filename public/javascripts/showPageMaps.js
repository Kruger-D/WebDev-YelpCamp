mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
	container: "map", // container ID
	// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
	style: "mapbox://styles/mapbox/streets-v11", // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9, // starting zoom
});

map.on("style.load", () => {
	map.setFog({}); // Set the default atmosphere style
});
