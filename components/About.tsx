'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(target, suffix);
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-num">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-section" id="about">
      <div className="reveal" ref={revealRef}>
        <div className="section-label">Who I Am</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Crafting Systems That <span className="gradient-underline">Scale</span></h2>
            <p><span className="highlight">Java Backend Engineer</span> specializing in building <span className="highlight-pink">multi-tenant</span> and <span className="highlight-green">real-time systems</span> across healthcare, mobility, and enterprise SaaS — currently supporting <span className="highlight">72+ live client organizations</span>.</p>
            <p>At <span className="highlight">Annz Technology</span>, I design and develop backend systems end-to-end — from API architecture and database design to authentication and real-time communication. My work includes building <span className="highlight-pink">WebSocket-driven doctor-patient consultation systems</span>, GPS-based ride matching engines, and multi-tenant platforms with strict data isolation and RBAC.</p>
            <p>Previously at <span className="highlight-green">C-DAC</span>, I developed large-scale data ingestion pipelines using the Elastic Stack and Python, enabling real-time analytics and visualization for government-grade systems.</p>
            <div className="about-mission">
              <p>&ldquo;I focus on backend systems where scale, correctness, and system design matter — including multi-tenant architectures, state-driven workflows, and real-time distributed communication.&rdquo;</p>
            </div>
            <div className="interests">
              <h4>Technical Interests</h4>
              <div className="interest-tags">
                <span className="interest-tag">Distributed Systems</span>
                <span className="interest-tag">System Design</span>
                <span className="interest-tag">Real-Time Architecture</span>
                <span className="interest-tag">Multi-Tenant SaaS</span>
                <span className="interest-tag">Data Engineering</span>
              </div>
            </div>
          </div>
          <div>
            <div className="about-stats">
              <StatCard target={72} suffix="+" label="Live Client Orgs" />
              <StatCard target={3} suffix="" label="Production Apps" />
              <StatCard target={2} suffix="+" label="Years Experience" />
              <StatCard target={740} suffix="" label="LinkedIn Connections" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
