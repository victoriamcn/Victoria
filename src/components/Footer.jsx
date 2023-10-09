
const Footer = () => {
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
    <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
    </aside> 
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/victoriamcn" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span className="social">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/victoria-mcnorrill/" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="social">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/victoriamcnorrill/" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="social">Instagram</span>
          </a>
          <a href="https://open.spotify.com/user/torilizabeth95" target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-spotify"></i>
            </span>
            <span className="social">Spotify</span>
          </a>
    </nav>
    </footer>
}

export default Footer;