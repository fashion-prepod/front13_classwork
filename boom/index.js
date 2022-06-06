const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const onClick = () => {
    const img = document.createElement('img');
    // img.src = Math.random() > 0.77 ? './img/pupsik.gif' : './img/boom.gif';
    document.body.append(img);
    
    one.disabled = true;
    two.disabled = true;
    three.disabled = true;
};
console.dir(one);
one.addEventListener('click', onClick);
two.addEventListener('click', onClick);
three.addEventListener('click', onClick);