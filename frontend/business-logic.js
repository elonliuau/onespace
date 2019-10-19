function generateObjectEntity(object) {
    const entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
        primitive: 'sphere',
        height: 1,
        width: 1
    });
    entityEl.setAttribute('position', `${object.location.x} ${object.location.y} ${object.location.z}`);

    return entityEl;
}

function renderScene() {
    const localStoredScene = localStorage.getItem('scene');

    if (localStoredScene) {
        const scene = JSON.parse(localStoredScene);

        if ('background' in scene) {
            const imgEl = document.querySelector('img#sky');
            imgEl.setAttribute('src', `${scene.background}`);
        }

        const sceneEl = document.querySelector('a-scene');
        scene.objects.forEach(object => sceneEl.appendChild(generateObjectEntity(object)));
    }
}

renderScene();

setInterval(function() {
    fetch('sample-response.json').then(
        response => response.json().then(newScene => {
            const localStoredScene = localStorage.getItem('scene');
            if (!localStoredScene || (localStoredScene && JSON.parse(localStoredScene).id != newScene.id)) {
                localStorage.setItem('scene', JSON.stringify(newScene));
                window.location.href = 'background' in newScene ? '../static.html' : '../webcam.html';
            }
        }
        )
    )
}, 10000);