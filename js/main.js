if (window.innerWidth < 769) {
    document.addEventListener('DOMContentLoaded', () => {

        document.getElementById('pol-area').addEventListener('click', function () {
            document.getElementById('sidebar').style.top = '0';
        });
        document.getElementById('closeSidebar').addEventListener('click', function () {
            document.getElementById('sidebar').style.top = '-100%';
        });

    })
}
document.addEventListener('DOMContentLoaded', () => {
    const polHouse = document.querySelectorAll('.js-polygon');
    polHouse.forEach((e) => {
        e.addEventListener('click', () => {
            document.getElementById('sidebar').style.right = '0';
            document.querySelector('.area-info').style.display = "none";
        })
    })
    document.getElementById('pol-area').addEventListener('click', function () {
        document.getElementById('sidebar').style.right = '0';
        document.getElementById('pol-area').classList.add('area-active');
    });
    document.getElementById('closeSidebar').addEventListener('click', function () {
        document.getElementById('sidebar').style.right = '-100%';
        document.querySelectorAll('[data-part]').forEach(function (part) {
            part.style.display = 'none';
        });
        house.forEach(function (polygon) {
            polygon.style.display = 'inline';
        });
    });
    document.getElementById('loop_map-show').addEventListener('click', function () {
        const mainMap = document.getElementById('main_map');
        const loopMap = document.getElementById('loop-map');
        mainMap.style.display = 'none';
        loopMap.style.height = '100%';
    });
    const contMain = document.querySelector('.container')
    contMain.scrollBy(400,0);

    document.body.addEventListener('click', function(event) {
        if (event.target.tagName !== 'polygon') {
            document.querySelectorAll('[data-part]').forEach(function (part) {
                part.style.display = 'none';
            });
            document.getElementById('pol-area').classList.remove('area-active');
            house.forEach(function (polygon) {
                polygon.style.display = 'inline';
                polygon.style.zIndex = '';
                polygon.style.fill = '';
                polygon.style.stroke = '';
            });
            document.getElementById('sidebar').style.right = '-100%';
        }
    });
});

