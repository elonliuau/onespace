function generateObjectEntity(object) {
    const entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
        primitive: 'sphere',
        height: 1,
        width: 1
    });
    entityEl.setAttribute('material', {
        color: `${object.color}`
    });
    entityEl.setAttribute('position', `${object.location.x} ${object.location.y} ${object.location.z}`);
    entityEl.setAttribute('cursor-listener', '');

    return entityEl;
}

function createInteractions() {
    AFRAME.registerComponent('cursor-listener', {
        init: function () {
            this.el.addEventListener('mouseenter', function (evt) {
                const items = ["USA", "China", "Russia"];
                var item = items[Math.floor(Math.random()*items.length)];

                const dates = ["17/3/1958", "21/5/1965", "6/9/1978", "10/10/1999", "10/4/1998", "19/1/1960", "23/4/1961"];
                var date = dates[Math.floor(Math.random()*dates.length)];

                document.querySelector('a-camera a-text').setAttribute('value', `${item} \n${date}`);
            });
            this.el.addEventListener('mouseleave', function (evt) {
                document.querySelector('a-camera a-text').setAttribute('value', '');
            });
        }
    });
}

createInteractions();

function renderScene(scene) {
    if (scene) {
        if ('background' in scene) {
            const imgEl = document.querySelector('img#sky');
            imgEl.setAttribute('src', `${scene.background}`);
        }

        const sceneEl = document.querySelector('a-scene');
        scene.objects.forEach(object => sceneEl.appendChild(generateObjectEntity(object)));
    }
}



// function renderScene() {
//     const localStoredScene = localStorage.getItem('scene');
//
//     if (localStoredScene) {
//         const scene = JSON.parse(localStoredScene);
//
//         if ('background' in scene) {
//             const imgEl = document.querySelector('img#sky');
//             imgEl.setAttribute('src', `${scene.background}`);
//         }
//
//         const sceneEl = document.querySelector('a-scene');
//         scene.objects.forEach(object => sceneEl.appendChild(generateObjectEntity(object)));
//     }
// }

// renderScene();
// setInterval(function() {
//     fetch('webcam-response.json').then(
//         response => response.json().then(newScene => {
//             const localStoredScene = localStorage.getItem('scene');
//             if (!localStoredScene || (localStoredScene && JSON.parse(localStoredScene).id != newScene.id)) {
//                 localStorage.setItem('scene', JSON.stringify(newScene));
//                 window.location.href = 'background' in newScene ? '../st1atic.html' : '../webcam.html';
//             }
//         }
//         )
//     )
// }, 10000);