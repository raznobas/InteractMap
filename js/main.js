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
    });
    document.getElementById('closeSidebar').addEventListener('click', function () {
        document.getElementById('sidebar').style.right = '-100%';
    });
    document.getElementById('loop_map-show').addEventListener('click', function () {
        const mainMap = document.getElementById('main_map');
        const loopMap = document.getElementById('loop-map');
        mainMap.style.display = 'none';
        loopMap.style.height = '100%';
    });
    const contMain = document.querySelector('.container')
    contMain.scrollBy(400,0);
});

