'use client';
import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROJECTS = [
  {
    id: 'org',
    category: 'saas',
    icon: '🏢',
    iconClass: 'purple',
    badges: [{ label: '● Live', className: 'badge-live' }, { label: 'SaaS Platform', className: 'badge-done' }],
    title: 'Organization Management Platform',
    desc: 'A full-featured multi-tenant Organization Management System built at Annz Technology — currently serving 72 live client organizations in production with isolated data environments.',
    impact: 'Enabling HR teams across 72+ organizations to manage surveys, employees, and compliance workflows',
    tech: ['Spring Boot', 'PostgreSQL', 'Hibernate', 'JWT', 'RBAC'],
    modal: {
      label: 'SaaS Platform · Live in Production',
      title: 'Organization Management Platform',
      paragraphs: [
        'A full-featured, multi-tenant Organization Management System built at Annz Technology — currently serving 72 live client organizations in production.',
        'The platform enables HR and admin teams to onboard employees and create, distribute and manage employee surveys end-to-end. Each organization operates in an isolated data environment, ensuring complete privacy and data separation across tenants.',
      ],
      featuresLabel: 'Key Features',
      features: [
        'Survey Builder with multi-type questions and conditional logic',
        'Real-time response capture and aggregation across all 72 organizations',
        'RBAC-based Organization Dashboard with role-scoped data views',
        'Multi-Tenant Architecture with strict tenant boundary enforcement',
        'Analytics & Reporting with exportable results per survey cycle',
      ],
      techStack: ['Spring Boot', 'Hibernate ORM', 'PostgreSQL', 'JWT Auth', 'Spring Security', 'RBAC'],
    },
  },
  {
    id: 'ride',
    category: 'realtime',
    icon: '🚗',
    iconClass: 'cyan',
    badges: [{ label: '● Live', className: 'badge-live' }, { label: 'Mobility', className: 'badge-done' }],
    title: 'Ride Booking Application',
    desc: 'On-demand ride booking platform with real-time GPS tracking, state-machine booking lifecycle, dynamic fare calculation, and multi-role authentication for Rider, Driver, and Admin.',
    impact: 'Full ride lifecycle from REQUESTED → COMPLETED with live location streaming via WebSockets',
    tech: ['Spring Boot', 'WebSocket', 'PostgreSQL', 'State Machine', 'JWT'],
    modal: {
      label: 'Real-Time System · Mobility',
      title: 'Ride Booking Application',
      paragraphs: [
        'An on-demand Ride Booking Application platform built at Annz Technology — covering the complete lifecycle from ride request to trip completion, built on a real-time backend architecture.',
      ],
      featuresLabel: 'Core Systems Built',
      features: [
        'Proximity-based driver matching with real-time availability',
        'Live GPS streaming to riders via WebSocket',
        'State machine: REQUESTED → DRIVER_ASSIGNED → EN_ROUTE → TRIP_STARTED → COMPLETED',
        'Dynamic fare computation with surge/flat-rate rules',
        'Admin dashboard APIs for fleet visibility and trip monitoring',
      ],
      techStack: ['Spring Boot', 'WebSocket', 'PostgreSQL', 'JWT', 'Spring Security', 'State Machine'],
    },
  },
  {
    id: 'health',
    category: 'realtime',
    icon: '🏥',
    iconClass: 'pink',
    badges: [{ label: '● Live', className: 'badge-live' }, { label: 'Healthcare', className: 'badge-done' }],
    title: 'Unified Healthcare Ecosystem',
    desc: 'Real-time WebSocket-driven doctor-patient consultation system with complex REST APIs for lab diagnostics, service booking, and multi-role healthcare workflows.',
    impact: 'Streamlining doctor-patient consultations and lab diagnostics in real time',
    tech: ['WebSocket', 'Spring Boot', 'REST API', 'PostgreSQL'],
    modal: {
      label: 'Real-Time · Healthcare',
      title: 'Unified Healthcare Ecosystem',
      paragraphs: [
        'A real-time healthcare platform featuring WebSocket-driven doctor-patient consultations, lab diagnostics APIs, and multi-role healthcare service booking built as part of Annz Technology\'s production suite.',
      ],
      featuresLabel: null,
      features: [],
      techStack: ['WebSocket', 'Spring Boot', 'REST API', 'PostgreSQL', 'JWT'],
    },
  },
  {
    id: 'elk',
    category: 'data',
    icon: '📈',
    iconClass: 'orange',
    badges: [{ label: 'Completed', className: 'badge-done' }, { label: 'Data Engineering', className: 'badge-done' }],
    title: 'ELK Stack Data Pipeline — C-DAC',
    desc: 'Enterprise-grade data ingestion pipelines at India\'s premier R&D institution using the ELK Stack for large-scale search and real-time analytics visualization.',
    impact: 'Government-grade real-time analytics under MeitY standards at C-DAC',
    tech: ['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'NumPy'],
    modal: {
      label: 'Data Engineering · C-DAC',
      title: 'ELK Stack Data Pipeline',
      paragraphs: [
        'Enterprise-grade data ingestion pipelines developed at India\'s premier R&D institution (C-DAC), enabling real-time analytics for government-grade systems under the Ministry of Electronics & IT (MeitY).',
      ],
      featuresLabel: null,
      features: [
        'Large-scale data ingestion using Elasticsearch and Logstash',
        'Real-time Kibana dashboards for actionable operational insights',
        'Python-based data transformation and NumPy processing pipelines',
        'Government-grade MeitY compliance standards',
      ],
      techStack: ['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'NumPy', 'Pandas'],
    },
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [openModal, setOpenModal] = useState<string | null>(null);
  const revealRef = useScrollReveal<HTMLDivElement>();

  const handleFilterClick = useCallback((cat: string) => {
    setFilter(cat);
  }, []);

  const handleOpenModal = useCallback((id: string) => {
    setOpenModal(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay') || target.classList.contains('modal-close')) {
      setOpenModal(null);
      document.body.style.overflow = '';
    }
  }, []);

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: 'SaaS Platform', value: 'saas' },
    { label: 'Real-Time', value: 'realtime' },
    { label: 'Data', value: 'data' },
  ];

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <>
      <section id="projects">
        <div className="reveal" ref={revealRef}>
          <div className="section-label">What I've Built</div>
          <h2 className="section-title">Featured <span className="gradient-underline">Projects</span></h2>
          <p className="section-desc">Production systems and engineering projects — from real-time mobility engines to multi-tenant enterprise platforms.</p>
          
          <div className="projects-filter">
            {filterButtons.map(({ label, value }) => (
              <button
                key={value}
                className={`filter-btn ${filter === value ? 'active' : ''}`}
                onClick={() => handleFilterClick(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="projects-grid" id="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleOpenModal(project.id)}
              >
                <div className="project-head">
                  <div className={`project-icon ${project.iconClass}`}>{project.icon}</div>
                  <div className="project-badges">
                    {project.badges.map((badge, i) => (
                      <span key={i} className={`project-badge ${badge.className}`}>{badge.label}</span>
                    ))}
                  </div>
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-impact">{project.impact}</div>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <span className="project-link">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {PROJECTS.map((project) => (
        <div
          key={project.id}
          className={`modal-overlay ${openModal === project.id ? 'open' : ''}`}
          onClick={handleCloseModal}
        >
          <div className="modal">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="modal-label">{project.modal.label}</div>
            <h3 className="modal-title">{project.modal.title}</h3>
            {project.modal.paragraphs.map((p, i) => (
              <p key={i} className="modal-text">{p}</p>
            ))}
            {project.modal.featuresLabel && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="modal-features-label">{project.modal.featuresLabel}</div>
                <ul className="modal-features">
                  {project.modal.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {!project.modal.featuresLabel && project.modal.features.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <ul className="modal-features">
                  {project.modal.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="project-tech">
              {project.modal.techStack.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
