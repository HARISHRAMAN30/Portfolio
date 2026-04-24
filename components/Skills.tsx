'use client';
import { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SKILL_CATEGORIES = [
  {
    name: 'Core Backend',
    count: '6 skills',
    icon: '⚙️',
    iconClass: 'blue',
    keywords: 'java spring boot spring security spring data jpa hibernate servlets',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Servlets'],
  },
  {
    name: 'Architecture & APIs',
    count: '5 skills',
    icon: '🏗️',
    iconClass: 'purple',
    keywords: 'microservices rest api design websocket jwt auth multi-tenant',
    skills: ['Microservices', 'REST API Design', 'WebSocket', 'JWT Auth', 'Multi-Tenant'],
  },
  {
    name: 'Databases',
    count: '4 skills',
    icon: '🗄️',
    iconClass: 'cyan',
    keywords: 'postgresql mysql mongodb redis',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Data & Analytics',
    count: '5 skills',
    icon: '📊',
    iconClass: 'orange',
    keywords: 'elastic stack elk python numpy pandas kibana',
    skills: ['Elastic Stack (ELK)', 'Python', 'NumPy', 'Pandas', 'Kibana'],
  },
  {
    name: 'DevOps & Tools',
    count: '7 skills',
    icon: '🔧',
    iconClass: 'green',
    keywords: 'docker git github maven linux postman swagger',
    skills: ['Docker', 'Git', 'GitHub', 'Maven', 'Linux', 'Postman', 'Swagger'],
  },
  {
    name: 'Integrations',
    count: '5 skills',
    icon: '📡',
    iconClass: 'pink',
    keywords: 'twilio sendgrid google maps api flyway zoho',
    skills: ['Twilio', 'SendGrid', 'Google Maps API', 'Flyway', 'Zoho'],
  },
];

export default function Skills() {
  const [query, setQuery] = useState('');
  const revealRef = useScrollReveal<HTMLDivElement>();

  const q = query.toLowerCase().trim();

  const filteredCategories = useMemo(
    () => SKILL_CATEGORIES.filter(cat => !q || cat.keywords.includes(q)),
    [q]
  );

  return (
    <section id="skills">
      <div className="reveal" ref={revealRef}>
        <div className="section-label">Technical Expertise</div>
        <h2 className="section-title">Skills & <span className="gradient-underline">Technologies</span></h2>
        <p className="section-desc">A battle-tested stack focused on backend excellence, real-time systems, and scalable data architectures.</p>
        
        <div className="skills-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            type="text"
            placeholder="Search skills..."
            id="skill-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="skills-grid" id="skills-grid">
          {filteredCategories.map((cat) => (
            <div className="skill-category" key={cat.name} data-skills={cat.keywords}>
              <div className="skill-cat-header">
                <div className={`skill-cat-icon ${cat.iconClass}`}>{cat.icon}</div>
                <div>
                  <div className="skill-cat-name">{cat.name}</div>
                  <div className="skill-cat-count">{cat.count}</div>
                </div>
              </div>
              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
