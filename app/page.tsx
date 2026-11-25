export default function Home() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Roberta Menezes Psicologia, início">
          <span className="brand-symbol" aria-hidden="true">Ψ</span>
          <span className="brand-name">
            Roberta Menezes
            <span>Psicologia</span>
          </span>
        </a>

        <span className="header-status">
          <span className="status-dot" aria-hidden="true" />
          Site em desenvolvimento
        </span>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">Um novo capítulo começa por aqui</p>
            <h1 id="hero-title">Um espaço de cuidado está a caminho.</h1>
            <p className="hero-description">
              Estou preparando este espaço com carinho. Em breve, você encontrará
              por aqui informações sobre meu trabalho e formas de entrar em contato.
            </p>
            <a className="hero-link" href="https://wa.me/+559288435324">
              Entrar em contato <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="hero-note" aria-hidden="true">Escuta <span>·</span> Presença <span>·</span> Cuidado</p>
        </section>

        <section className="updates" id="novidades" aria-labelledby="updates-title">
          <div className="updates-content">
            <h2 id="updates-title">Em breve, mais por aqui.</h2>
            <p>Novas informações sobre o trabalho e os canais de contato serão publicadas nesta página.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Roberta Menezes <span className="footer-separator">·</span> Psicologia</span>
        <span>Um espaço em construção, com cuidado.</span>
      </footer>
    </div>
  );
}
