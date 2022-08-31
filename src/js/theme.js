let t = document.querySelector('.toggle');

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            t.classList.add('night');
        }
        else {
            document.querySelector('html').classList.remove('dark');
        }
    } catch (err) {
        console.log(err);
    }
}

addDarkClassToHTML();

document.querySelector('.toggle-overlay').addEventListener('click', function (event) {

    if (t.classList.contains('night') && localStorage.getItem('theme') === 'dark') {
        t.classList.remove('night');
        t.classList.add('day');

        document.querySelector('html').classList.remove('dark');
        localStorage.removeItem('theme');
    } else {
        t.classList.add('night');
        t.classList.remove('day');
        document.querySelector('html').classList.add('dark');
        localStorage.setItem('theme', 'dark')

    }
    addDarkClassToHTML()
})
