// Inject header and footer
document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <header>
            <nav>
                <div class="logo">High School Math</div>
                <div class="tab-links">
                    <a href="home.html">Home</a>
                    <a href="algebra.html">Algebra</a>
                    <a href="geometry.html">Geometry</a>
                    <a href="precalculus.html">Precalculus</a>
                </div>
                <div class="search-box">
                    <input type="text" id="search-input" placeholder="Search this page">
                    <button id="search-btn">Search</button>
                </div>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer>
            <div class="footer-container">
                <div class="footer-column">
                    <h4>About Us</h4>
                    <p>Free high school math resource with interactive lessons.</p>
                </div>
                <div class="footer-column">
                    <h4>GitHub</h4>
                    <p>Open source. Contribute or view code.</p>
                    <a href="https://github.com/yourusername/math-site" class="social-btn" target="_blank">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});