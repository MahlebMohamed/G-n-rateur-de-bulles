var result = 0;
const h1 = document.querySelector('h1');

function bubbleMaker() {
    const bubble = document.createElement('span');
    
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    
    const size = Math.random() * 200 + 100 + 'px';
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 + 50 + '%';
    bubble.style.left = Math.random() * 100 + '%';
    
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + '%');

    bubble.addEventListener('click', function() {
        bubble.remove();
        result += 1;
        h1.innerHTML = result;
    });

    setTimeout(() => {
        bubble.remove();
    }, 6000);
}

// setInterval(bubbleMaker, 500);
 