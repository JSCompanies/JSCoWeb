const portfolioItems = [
  {
    title: "Nonprofit Strategy + Compliance",
    type: "Governance systems",
    description:
      "IRS 1023 readiness, bylaws, board structure, budgets, grant narratives, and the practical documents that let mission work stand up straight.",
  },
  {
    title: "Design + Brand Systems",
    type: "Identity and language",
    description:
      "Logos, visual systems, campaign language, print pieces, digital layouts, and brand worlds for people and organizations with something to say.",
  },
  {
    title: "Photography + Visual Story",
    type: "Portrait and atmosphere",
    description:
      "Editorial portraits, founder imagery, atmospheric brand photography, and visual assets that make the person behind the work feel present.",
  },
];

const caseStudySignals = [
  "Identity",
  "Story",
  "Image",
  "Governance",
  "Programs",
  "Evidence",
];

const housePillars = [
  {
    name: "JaiSellers Consulting",
    line: "Governance, compliance, planning, grants, budgets, and executive infrastructure for mission-led organizations.",
  },
  {
    name: "JaiSellers Designs and Photography",
    line: "Brand systems, logos, campaign worlds, portraits, and visual assets with a clear point of view.",
  },
  {
    name: "Just Systems Initiatives",
    line: "Operational frameworks, civic projects, and practical systems that help good work become durable.",
  },
];

const blogPosts = [
  {
    title: "When A Mission Outgrows Its Informal Systems",
    kicker: "Briefing",
    excerpt:
      "The moment when charisma, urgency, and improvisation need a more durable operating shape.",
  },
  {
    title: "The Board As A Room, Not A Rubber Stamp",
    kicker: "Governance",
    excerpt:
      "A useful board creates the conditions for judgment, trust, candor, and real stewardship.",
  },
  {
    title: "Stability Is A Creative Advantage",
    kicker: "Practice",
    excerpt:
      "The right support makes leaders less alone, teams less scattered, and the work less fragile.",
  },
];

const principles = [
  "Useful governance, not ornamental governance.",
  "Programs with shape, proof, and a fundable story.",
  "Operations that create calm without dulling ambition.",
  "Executive support that protects attention and judgment.",
];

const advisoryScore = [
  {
    number: "01",
    verb: "Read",
    title: "See the hidden architecture",
    copy:
      "A close diagnostic of roles, pressure points, decision habits, board function, programs, language, and the places where momentum leaks.",
  },
  {
    number: "02",
    verb: "Frame",
    title: "Name the working shape",
    copy:
      "A clear model for what the organization is becoming: its rooms, rhythms, authority, program logic, and fundable story.",
  },
  {
    number: "03",
    verb: "Tune",
    title: "Build the operating cadence",
    copy:
      "Practical systems for meetings, documentation, planning, board work, follow-through, and leadership attention.",
  },
  {
    number: "04",
    verb: "Hold",
    title: "Support the next passage",
    copy:
      "Ongoing advisory presence for leaders carrying decisions that need judgment, steadiness, and a more elegant table.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top" aria-label="JaiSellers Companies">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="JaiSellers Companies home">
            <img src="/jsco-brand-mark.png" alt="" className="brand-logo" />
            <span>JaiSellers Companies</span>
          </a>
          <div className="nav-links">
            <a href="#philosophy">Approach</a>
            <a href="#work">Portfolio</a>
            <a href="#journal">Notes</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-card-frame">
          <img
            src="/jaisellers-hero-card.png"
            alt="JaiSellers Companies. Structure where Art can thrive. Joshua Sellers in profile."
            className="hero-card-image"
          />
        </div>
      </section>

      <section className="opening band" aria-label="JaiSellers Companies introduction">
        <div className="opening-inner">
          <div>
            <p className="eyebrow">JaiSellers Companies</p>
            <h2 className="brand-type-heading">
              <span>A private advisory house</span>
              <span>for uncommon work.</span>
            </h2>
          </div>
          <div className="opening-copy">
            <p>
              Governance design, program architecture, and executive support for
              mission-led organizations ready to become more durable without
              becoming ordinary. JSCo holds the unglamorous essentials and the
              expressive work in the same room, because that is where the magic
              stops being fragile.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#contact">
                Start the conversation
              </a>
              <a className="button secondary dark" href="#philosophy">
                Explore the practice
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="house band" id="house" aria-label="JaiSellers Companies house">
        <div className="house-inner">
          <div className="house-mark">
            <img src="/jsco-logo-full.png" alt="JSCo JaiSellers Companies logo" />
          </div>
          <div className="house-copy">
            <p className="eyebrow">The House</p>
            <h2>One company. Three rooms. One sharper standard.</h2>
            <div className="house-grid">
              {housePillars.map((pillar) => (
                <article className="house-card" key={pillar.name}>
                  <h3>{pillar.name}</h3>
                  <p>{pillar.line}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="score band" aria-label="Advisory score">
        <div className="score-inner">
          <div className="score-intro">
            <p className="eyebrow">The Advisory Score</p>
            <h2>
              <span>Four movements.</span>
              <span>One steadier institution.</span>
            </h2>
          </div>
          <div className="score-grid">
            {advisoryScore.map((item) => (
              <article className="score-card" key={item.number}>
                <div className="score-card-top">
                  <span>{item.number}</span>
                  <p>{item.verb}</p>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto band" id="philosophy">
        <div className="section-label">Approach</div>
        <div className="manifesto-grid">
          <div>
            <h2>A private advisory house for organizations at a threshold.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              JaiSellers Companies works with leaders carrying work that has
              become too important to depend on informal systems. The practice
              brings order to governance, compliance, grants, budgets, brand
              systems, photography, language, planning, and the executive
              decisions that determine whether momentum becomes institution.
            </p>
            <p>
              The work is precise, but not sterile. Strategic, but not generic.
              Built for nonprofits, cultural organizations, artist-led
              institutions, and mission-driven teams that need a more elegant
              way to hold complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="principles band" aria-label="Core principles">
        {principles.map((principle, index) => (
          <article className="principle" key={principle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{principle}</p>
          </article>
        ))}
      </section>

      <section className="method band" aria-label="How JaiSellers Companies works">
        <div className="method-inner">
          <div className="method-visual">
            <img
              src="/jaisellers-office.png"
              alt="Joshua Sellers seated in an office with planning documents and books"
            />
          </div>
          <div className="method-copy">
            <p className="eyebrow">Services</p>
            <h2>Quiet systems. Strong rooms. Better decisions.</h2>
            <div className="method-list">
              <div>
                <h3>Governance Design</h3>
                <p>
                  Board roles, decision rights, bylaws, committees, and
                  leadership practices that make responsibility easier to see.
                </p>
              </div>
              <div>
                <h3>Program Strategy</h3>
                <p>
                  Service models, initiative maps, outcomes, budgets, and a
                  narrative spine that lets funders and teams see the same work.
                </p>
              </div>
              <div>
                <h3>Executive Infrastructure</h3>
                <p>
                  Planning cycles, documentation, meeting systems, and follow-up
                  structures that give leaders more room to lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Case studies in identity, image, and nonprofit structure.</h2>
          <div className="case-study-strip" aria-label="Case study signals">
            {caseStudySignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
        <div className="card-grid">
          {portfolioItems.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <p>{item.type}</p>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="journal band" id="journal">
        <div className="section-heading">
          <p className="eyebrow">The Index</p>
          <h2>Briefings on leadership, structure, trust, and institutional imagination.</h2>
        </div>
        <div className="journal-list">
          {blogPosts.map((post) => (
            <article className="journal-card" key={post.title}>
              <p>{post.kicker}</p>
              <h3>{post.title}</h3>
              <span>{post.excerpt}</span>
              <a href="#contact" aria-label={`Discuss ${post.title}`}>
                Discuss this note
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about band">
        <div className="about-inner">
          <div className="about-image">
            <img
              src="/joshua-portrait-wide.png"
              alt="Joshua Sellers looking toward the camera in a studio portrait"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About JaiSellers Companies</p>
            <h2>For leaders who need discernment, design, and a steadier table.</h2>
            <p>
              The work is centered on nonprofit clients, especially leaders
              carrying cultural, creative, civic, or mission-driven complexity.
              The promise is not more noise. It is a cleaner way to see the
              organization, make the next decision, and carry the work forward.
            </p>
          </div>
        </div>
      </section>

      <section className="contact band" id="contact">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Begin</p>
            <h2>Bring the complicated thing. We will find the elegant shape.</h2>
          </div>
          <div className="contact-panel">
            <p>
              Best fit: nonprofit leaders, artist-led organizations, cultural
              programs, and mission-driven teams ready for structure that feels
              precise, human, and made for the work in front of them.
            </p>
            <a className="button primary" href="mailto:?subject=JaiSellers%20Companies%20Inquiry">
              Draft an inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
