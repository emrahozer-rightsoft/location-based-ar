window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
    alert("this is new2");
};

function staticLoadPlaces() {
    return [
        {
            name: 'Test',
            location: {
                lat: 51.371675,
                lng: -0.201129,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        // model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');

        model.setAttribute('geometry','primitive: box')
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '10 10 10');
        model.setAttribute('color', '#4CC3D9');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}