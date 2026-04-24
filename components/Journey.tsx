'use client';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WORK_ITEMS = [
  {
    role: 'Software Engineer',
    company: 'Annz Technology',
    badgeClass: 'badge-work',
    badgeLabel: 'Work',
    meta: 'Mar 2026 – Present · Chennai, India · On-site',
    desc: 'Driving backend development for production applications in healthcare, mobility, and enterprise SaaS. Engineering multi-tenant SaaS platforms, real-time WebSocket systems, and GPS-based ride matching engines.',
    highlights: ['Multi-Tenant Architecture', 'Real-Time Systems', 'Production Deployment'],
  },
  {
    role: 'Software Developer',
    company: 'Annz Technology',
    badgeClass: 'badge-work',
    badgeLabel: 'Work',
    meta: 'Jun 2025 – Mar 2026 · 10 mos · Chennai, India',
    desc: 'Developed and maintained backend systems for 3 production applications serving 72+ live client organizations. Engineered multi-tenant SaaS platforms with RBAC dashboards, real-time WebSocket healthcare systems, and state-machine ride booking engines. Maintained 99.9% deployment stability.',
    highlights: ['Java', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'RBAC'],
  },
  {
    role: 'Software Trainee',
    company: 'Annz Technology',
    badgeClass: 'badge-intern',
    badgeLabel: 'Trainee',
    meta: 'Mar 2025 – May 2025 · 3 mos',
    desc: 'Accelerated into full-time role within 3 months by demonstrating mastery of Spring Boot architecture, RESTful design patterns, and JPA/Hibernate integration.',
    highlights: ['Spring Boot', 'PostgreSQL', 'REST APIs'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Centre for Development of Advanced Computing (C-DAC)',
    badgeClass: 'badge-intern',
    badgeLabel: 'Internship',
    meta: 'Mar 2024 – Jul 2024 · 5 mos · Chennai, India',
    desc: 'Developed enterprise-grade data pipelines at India\'s premier R&D institution using the ELK Stack. Designed real-time Kibana dashboards for actionable analytics on complex government datasets under MeitY standards.',
    highlights: ['ELK Stack', 'Python', 'Data Pipelines', 'Kibana'],
  },
  {
    role: 'Student Intern',
    company: 'All India Council for Technical Education (AICTE)',
    badgeClass: 'badge-intern',
    badgeLabel: 'Internship',
    meta: 'Dec 2022 – Feb 2023 · 3 mos · Puducherry, India',
    desc: 'Gained practical exposure to technical education frameworks and industry-aligned program development under AICTE guidance.',
    highlights: ['Technical Education', 'Research'],
  },
];

const EDU_ITEMS = [
  {
    role: 'B.Tech in Electrical and Electronics Engineering',
    company: 'Sri Manakula Vinayagar Engineering College',
    badgeClass: 'badge-edu',
    badgeLabel: 'Education',
    meta: 'Sep 2020 – May 2024 · Puducherry, India',
    desc: 'Bachelor of Technology with a foundation in engineering principles, complemented by self-driven expertise in Java backend development, distributed systems, and software architecture.',
    highlights: ['Engineering Fundamentals', 'Software Development'],
  },
  {
    role: 'Higher Secondary Education',
    company: 'Petit Seminaire Higher Secondary School',
    badgeClass: 'badge-edu',
    badgeLabel: 'Education',
    meta: 'Jun 2018 – Mar 2020',
    desc: 'Completed higher secondary schooling with strong academic foundations.',
    highlights: ['Science Stream'],
  },
];

const CERTS = [
  { icon: '🤖', name: 'Digital Skills: Artificial Intelligence', issuer: 'Accenture' },
  { icon: '📊', name: 'Career Essentials in Data Analysis', issuer: 'Microsoft' },
];

function TimelineItem({ item }: { item: typeof WORK_ITEMS[0] }) {
  return (
    <div className="timeline-item">
      <div className="ti-top">
        <div>
          <div className="ti-role">{item.role}</div>
          <div className="ti-company">{item.company}</div>
        </div>
        <span className={`ti-badge ${item.badgeClass}`}>{item.badgeLabel}</span>
      </div>
      <div className="ti-meta">{item.meta}</div>
      <div className="ti-desc">{item.desc}</div>
      <div className="ti-highlights">
        {item.highlights.map((h) => (
          <span key={h} className="ti-highlight">{h}</span>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  const [tab, setTab] = useState('work');
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="journey">
      <div className="reveal" ref={revealRef}>
        <div className="section-label">Professional Journey</div>
        <h2 className="section-title">Experience & <span className="gradient-underline">Education</span></h2>
        <p className="section-desc">A trajectory built on real-world systems — from government R&D to production multi-tenant platforms.</p>
        
        <div className="timeline-tabs">
          <button className={`tab-btn ${tab === 'work' ? 'active' : ''}`} onClick={() => setTab('work')}>Work Experience</button>
          <button className={`tab-btn ${tab === 'education' ? 'active' : ''}`} onClick={() => setTab('education')}>Education</button>
          <button className={`tab-btn ${tab === 'certs' ? 'active' : ''}`} onClick={() => setTab('certs')}>Certifications</button>
        </div>

        <div className={`tab-content ${tab === 'work' ? 'active' : ''}`}>
          <div className="timeline-items">
            {WORK_ITEMS.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>

        <div className={`tab-content ${tab === 'education' ? 'active' : ''}`}>
          <div className="timeline-items">
            {EDU_ITEMS.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>

        <div className={`tab-content ${tab === 'certs' ? 'active' : ''}`}>
          <div className="certs-grid">
            {CERTS.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
