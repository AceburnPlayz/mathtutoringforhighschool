document.addEventListener("DOMContentLoaded", () => {
    // Highlight active tab
    const current = location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.tab-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === current);
    });

    // Search
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-btn');
    let results = document.getElementById('search-results');
    if (!results) {
        results = document.createElement('div');
        results.id = 'search-results';
        document.querySelector('main').after(results);
    }

    const search = () => {
        const term = input.value.trim().toLowerCase();
        results.innerHTML = '';
        if (!term) return;

        const elements = document.querySelectorAll('main p, main li, main h1, main h2, main h3, main .card, main .math-example');
        let found = 0;

        elements.forEach(el => {
            if (el.textContent.toLowerCase().includes(term)) {
                found++;
                const clone = el.cloneNode(true);
                clone.innerHTML = clone.innerHTML.replace(
                    new RegExp(term, 'gi'),
                    m => `<mark>${m}</mark>`
                );
                const div = document.createElement('div');
                div.className = 'result-item';
                div.appendChild(clone);
                results.appendChild(div);
            }
        });

        if (!found) {
            results.innerHTML = '<p class="no-results">No search results found.</p>';
        }
    };

    btn.addEventListener('click', search);
    input.addEventListener('keypress', e => e.key === 'Enter' && search());
});