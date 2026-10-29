import { useState } from 'react'
import './App.css'

const serviceGroups = [
  {
    name: 'Strategy',
    number: '01',
    services: [
      'AI readiness assessment',
      'AI strategy and roadmap',
      'Opportunity identification and prioritisation',
      'ROI modelling and business cases',
      'Process analysis and optimisation',
      'Innovation workshops and executive briefings',
    ],
  },
  {
    name: 'Data',
    number: '02',
    services: [
      'Data maturity and governance review',
      'Data quality improvement',
      'Data architecture and integration',
      'Migration and master data management',
      'Privacy and security controls',
      'Knowledge management and retrieval systems',
    ],
  },
  {
    name: 'Technology',
    number: '03',
    services: [
      'Generative AI and LLM solution design',
      'Microsoft 365 Copilot deployment',
      'Azure AI architecture and implementation',
      'Machine learning and predictive analytics',
      'Natural language processing and computer vision',
      'Intelligent automation and RPA',
      'Custom model development and operations',
    ],
  },
  {
    name: 'Governance',
    number: '04',
    services: [
      'Responsible AI framework and policies',
      'AI risk and impact assessment',
      'Regulatory, GDPR and privacy support',
      'Ethics, bias and fairness review',
      'Model explainability and transparency',
      'Security and cyber resilience',
    ],
  },
  {
    name: 'People',
    number: '05',
    services: [
      'Stakeholder engagement and change programmes',
      'AI literacy and role-based training',
      'Workforce upskilling',
      'User adoption and communication plans',
      'AI centre of excellence design',
    ],
  },
  {
    name: 'Delivery',
    number: '06',
    services: [
      'Proof of concept and pilot delivery',
      'Agile AI programme management',
      'Enterprise system integration',
      'Benefits realisation and performance tracking',
      'Ongoing support and optimisation',
      'Managed AI services',
    ],
  },
]

const sectors = [
  { name: 'Education', code: 'EDU', detail: 'EdTech, learning systems and institutional transformation' },
  { name: 'Public sector', code: 'PUB', detail: 'Digital public services, policy and accountable AI' },
  { name: 'Healthcare', code: 'HLT', detail: 'Clinical operations, information and care pathways' },
  { name: 'Finance', code: 'FIN', detail: 'Trusted automation, insight and risk management' },
  { name: 'Manufacturing', code: 'MFG', detail: 'Predictive operations and intelligent workflows' },
  { name: 'Retail & logistics', code: 'RTL', detail: 'Connected operations, planning and customer experience' },
]

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Mark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? ' brand--light' : ''}`} href="#home" aria-label="Wei AI Men home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-name">wei ai men<span className="brand-period">.</span></span>
    </a>
  )
}

function App() {
  const [activeGroup, setActiveGroup] = useState('Strategy')
  const [menuOpen, setMenuOpen] = useState(false)
  const selectedGroup = serviceGroups.find((group) => group.name === activeGroup) ?? serviceGroups[0]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Mark />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            <span className={`menu-icon${menuOpen ? ' menu-icon--open' : ''}`} aria-hidden="true"><i /><i /></span>
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`} aria-label="Main navigation">
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
            <a href="#sectors" onClick={closeMenu}>Who we help</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <ArrowIcon diagonal /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner page-container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> AI that moves your organisation forward</p>
              <h1>Make AI work<br />for <em>the real world.</em></h1>
              <p className="hero-description">
                From first question to lasting impact, we help you turn AI ambition into responsible, measurable progress.
              </p>
              <div className="hero-actions">
                <a className="button button--lime" href="#contact">Find your next move <ArrowIcon /></a>
                <a className="text-link" href="#approach">See how we work <span className="down-arrow" aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-note">
                <span className="note-line" />
                <p>Strategy. Data. Technology. People.<br /><span>Connected from day one.</span></p>
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustration of connected AI strategy, data, technology and people">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-crosshair crosshair-one" />
              <div className="visual-crosshair crosshair-two" />
              <div className="visual-core">
                <span className="core-spark" aria-hidden="true">✳</span>
                <span>Human<br />intent</span>
              </div>
              <div className="orbit-node node-strategy"><span className="node-glyph">↗</span><span>Strategy</span></div>
              <div className="orbit-node node-data"><span className="node-glyph">◉</span><span>Data</span></div>
              <div className="orbit-node node-tech"><span className="node-glyph">⌘</span><span>Technology</span></div>
              <div className="orbit-node node-people"><span className="node-glyph">✳</span><span>People</span></div>
              <div className="visual-caption"><span className="caption-pulse" /> SYSTEMS THINKING / HUMAN OUTCOMES</div>
              <div className="visual-index">WAM—01</div>
            </div>
          </div>
          <div className="hero-bottom page-container">
            <span>INDEPENDENT THINKING. PRACTICAL DELIVERY.</span>
            <a href="#approach">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="intro-section section-pad" id="approach">
          <div className="page-container intro-layout">
            <div className="section-label"><span>01</span> / THE BIGGER PICTURE</div>
            <div className="intro-content">
              <h2>AI is not the strategy.<br /><span>Better outcomes are.</span></h2>
              <div className="intro-bottom">
                <p className="intro-lede">
                  The organisations getting lasting value from AI do more than pick a tool. They connect the right opportunities to trusted data, thoughtful governance and confident people.
                </p>
                <p className="intro-support">
                  We bring those pieces together—so your AI works inside the systems you already rely on, solves problems that matter and grows with your organisation.
                </p>
              </div>
              <div className="pillars-line">
                <span>STRATEGY</span><i /><span>DATA</span><i /><span>TECHNOLOGY</span><i /><span>PEOPLE</span>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities-section section-pad" id="capabilities">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <div className="section-label section-label--light"><span>02</span> / WHAT WE BRING</div>
                <h2>One partner.<br /><em>End-to-end thinking.</em></h2>
              </div>
              <p>Clear direction, dependable foundations and the hands-on expertise to make AI work in practice.</p>
            </div>
            <div className="capability-layout">
              <div className="capability-tabs" role="tablist" aria-label="Consulting capabilities">
                {serviceGroups.map((group) => (
                  <button
                    className={`capability-tab${activeGroup === group.name ? ' capability-tab--active' : ''}`}
                    id={`tab-${group.name.toLowerCase()}`}
                    key={group.name}
                    type="button"
                    role="tab"
                    aria-selected={activeGroup === group.name}
                    aria-controls="capability-panel"
                    onClick={() => setActiveGroup(group.name)}
                  >
                    <span className="tab-number">{group.number}</span>
                    <span>{group.name}</span>
                    <ArrowIcon diagonal />
                  </button>
                ))}
                <div className="tab-note">Explore the capabilities<br />that move you forward.</div>
              </div>
              <div
                className="capability-panel"
                role="tabpanel"
                id="capability-panel"
                aria-labelledby={`tab-${selectedGroup.name.toLowerCase()}`}
                key={selectedGroup.name}
              >
                <div className="panel-kicker">CAPABILITY / {selectedGroup.number}</div>
                <h3>{selectedGroup.name}<span>.</span></h3>
                <p className="panel-intro">
                  {selectedGroup.name === 'Strategy' && 'Find the right problems to solve, build the case for change and create a roadmap grounded in business value.'}
                  {selectedGroup.name === 'Data' && 'Make your data dependable, connected and ready to support safe, useful AI across your organisation.'}
                  {selectedGroup.name === 'Technology' && 'Design and deliver the right-fit AI—from generative experiences to predictive systems and intelligent automation.'}
                  {selectedGroup.name === 'Governance' && 'Build trust into AI with practical guardrails, meaningful oversight and risk controls from the start.'}
                  {selectedGroup.name === 'People' && 'Give leaders and teams the understanding, confidence and support to make new ways of working stick.'}
                  {selectedGroup.name === 'Delivery' && 'Move from a focused pilot to integrated, supported solutions with benefits you can track.'}
                </p>
                <ul className="service-list">
                  {selectedGroup.services.map((service) => <li key={service}><span className="service-check" aria-hidden="true">↗</span>{service}</li>)}
                </ul>
                <a className="panel-link" href="#contact">Discuss {selectedGroup.name.toLowerCase()} <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="systems-section section-pad">
          <div className="page-container systems-layout">
            <div className="section-label"><span>03</span> / BUILT FOR COMPLEXITY</div>
            <div className="systems-content">
              <p className="eyebrow eyebrow--dark">NO MORE ISLANDS OF INNOVATION</p>
              <h2>AI belongs in your<br /><em>real-world systems.</em></h2>
              <p className="systems-lede">
                We connect AI to the data, platforms and workflows your teams already use—rather than adding another standalone pilot that never makes it into everyday work.
              </p>
              <div className="systems-board" aria-label="Examples of connected enterprise platforms">
                <div className="system-card system-card--main">
                  <span className="system-card-label">YOUR ORGANISATION</span>
                  <strong>People. Process. Purpose.</strong>
                  <span className="system-card-detail">One connected operating environment</span>
                </div>
                <div className="system-connector connector-top" />
                <div className="system-connector connector-left" />
                <div className="system-connector connector-right" />
                <div className="system-chip chip-one"><span className="chip-dot" /> EMIS / HMIS / MIS</div>
                <div className="system-chip chip-two"><span className="chip-dot" /> Microsoft 365 + Copilot</div>
                <div className="system-chip chip-three"><span className="chip-dot" /> Azure AI + enterprise data</div>
                <div className="system-chip chip-four"><span className="chip-dot" /> EdTech + public services</div>
                <span className="board-tag">CONNECTED BY DESIGN</span>
              </div>
              <div className="systems-caption">
                <span>01 — INTEROPERABILITY</span>
                <span>02 — GOVERNANCE BY DESIGN</span>
                <span>03 — ADOPTION THAT LASTS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sectors-section section-pad" id="sectors">
          <div className="page-container">
            <div className="sectors-top">
              <div>
                <div className="section-label"><span>04</span> / WHERE WE MAKE A DIFFERENCE</div>
                <h2>Context changes<br /><em>everything.</em></h2>
              </div>
              <p>Good AI understands the world it enters. We shape our approach around your sector, your people and the systems you depend on.</p>
            </div>
            <div className="sector-grid">
              {sectors.map((sector, index) => (
                <article className="sector-card" key={sector.code}>
                  <span className="sector-index">0{index + 1} / {sector.code}</span>
                  <h3>{sector.name}</h3>
                  <p>{sector.detail}</p>
                  <span className="sector-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
                </article>
              ))}
            </div>
            <div className="sector-special">
              <span className="special-mark" aria-hidden="true">✳</span>
              <p><strong>Deeply relevant to education and the public sector.</strong> From digital transformation and EdTech to EMIS, HMIS and MIS platforms, we understand the importance of interoperability, privacy, accountability and the people behind every service.</p>
            </div>
          </div>
        </section>

        <section className="outcomes-section section-pad">
          <div className="page-container outcomes-layout">
            <div className="section-label section-label--light"><span>05</span> / MEASURE WHAT MATTERS</div>
            <div className="outcomes-content">
              <h2>Good intentions<br />need <em>good evidence.</em></h2>
              <p className="outcomes-lede">We define success before delivery begins—then track it against a real baseline, not a vanity metric.</p>
              <div className="outcomes-grid">
                <div><span className="outcome-number">01</span><h3>Start with a baseline</h3><p>Understand current effort, cost, service quality and user experience.</p></div>
                <div><span className="outcome-number">02</span><h3>Set useful measures</h3><p>Agree the outcomes, adoption signals and risk thresholds that matter.</p></div>
                <div><span className="outcome-number">03</span><h3>Learn and improve</h3><p>Review evidence through pilots and live use, then adapt with confidence.</p></div>
              </div>
              <span className="outcomes-footnote">MEASURABLE VALUE, WITHOUT THE MADE-UP CASE STUDIES.</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-container contact-layout">
            <div className="section-label"><span>06</span> / YOUR NEXT MOVE</div>
            <div className="contact-content">
              <p className="eyebrow eyebrow--dark">A GOOD PLACE TO START</p>
              <h2>Bring us the<br /><em>complicated bit.</em></h2>
              <p className="contact-lede">A big ambition. A messy process. A pilot that needs a path to production. Let’s find the opportunity worth acting on—and what it will take to get there.</p>
              <a className="button button--green" href="mailto:hello@weiaimen.com?subject=Let%27s%20talk%20about%20AI">Let’s talk about AI <ArrowIcon diagonal /></a>
              <span className="contact-note">No hard sell. Just a useful first conversation.</span>
            </div>
            <div className="contact-aside" aria-hidden="true">
              <span className="aside-circle circle-one" />
              <span className="aside-circle circle-two" />
              <span className="aside-circle circle-three" />
              <span className="aside-star">✳</span>
              <span className="aside-label">THE FUTURE IS<br />A HUMAN PROJECT.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-main">
          <div className="footer-brand">
            <Mark light />
            <p>Thoughtful AI.<br />Meaningful progress.</p>
          </div>
          <div className="footer-links">
            <div><span>EXPLORE</span><a href="#approach">Our approach</a><a href="#capabilities">Capabilities</a><a href="#sectors">Who we help</a></div>
            <div><span>GET IN TOUCH</span><a href="mailto:hello@weiaimen.com">hello@weiaimen.com</a><a href="#contact">Start a conversation <ArrowIcon diagonal /></a></div>
          </div>
          <a className="back-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
        </div>
        <div className="page-container footer-bottom">
          <span>© {new Date().getFullYear()} WEI AI MEN</span>
          <span>AI WITH INTENTION. IMPACT WITH INTEGRITY.</span>
          <span>BUILT FOR WHAT'S NEXT.</span>
        </div>
      </footer>
    </>
  )
}

export default App
