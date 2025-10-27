document.addEventListener('DOMContentLoaded', function() {
    const cards = Array.from(document.querySelectorAll('.portfolio-card'));
    const btn = document.getElementById('viewMoreBtn');
    const initialVisible = 6;

    if (!btn) return;

    // Hide cards after the first `initialVisible`
    cards.forEach((card, i) => {
        if (i >= initialVisible) card.classList.add('hidden');
    });

    // Hide button if there are <= initialVisible cards
    if (cards.length <= initialVisible) {
        btn.style.display = 'none';
        return;
    }

    btn.addEventListener('click', function () {
        const isCollapsed = cards.some((c, i) => i >= initialVisible && c.classList.contains('hidden'));

        if (isCollapsed) {
            // show remaining
            cards.forEach((card, i) => { if (i >= initialVisible) card.classList.remove('hidden'); });
            btn.textContent = 'View Less';
        } else {
            // hide remaining
            cards.forEach((card, i) => { if (i >= initialVisible) card.classList.add('hidden'); });
            btn.textContent = 'View More';
            // scroll back to portfolio top so user isn't left in the middle
            const section = document.getElementById('portfolio-loc');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});



