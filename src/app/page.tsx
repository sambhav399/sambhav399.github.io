import * as React from 'react';
import DataBlock from '../components/DataBlock';
import { cloneElement } from 'react';
import config from '../config';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <section className="block" id="about">
          <h1 className="font-lead font-500 text-heading-1">Sambhav Sharma</h1>
          <p className="text-body-1 font-500">
            Full Stack Engineer · Systems Architect
          </p>
          <div className="about">
            <p className="about-point">
              I design and scale high-performance systems, combining
              engineering, architecture, and research to drive measurable
              product impact.
            </p>
            <p className="about-point">
              I build distributed systems and high-scale applications with a
              focus on performance, reliability, and clean architecture.
            </p>
            <p className="about-point">
              At BOLD, I lead engineering efforts across system design,
              personalization platforms, and performance optimization -
              delivering systems used at scale.
            </p>
            <p className="about-point">
              I also explore system design through research and POCs, working at
              the intersection of engineering, product, and AI-driven systems.
            </p>
            <p className="about-point">
              I focus on building systems that scale without increasing
              complexity - prioritizing performance, reliability, and clear
              architecture over quick fixes.
            </p>
          </div>
          <div className="contact-wrapper">
            {config.PORTFOLIO_DATA.DATA_CONTACT.map(function (contact) {
              return (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  className="contact"
                  title={config.PORTFOLIO_TITLE + "'s - " + contact.label}
                  aria-label={config.PORTFOLIO_TITLE + "'s - " + contact.label}
                  rel="noreferrer"
                >
                  {cloneElement(contact.icon, {
                    width: 20,
                    height: 20
                  })}
                </a>
              );
            })}
          </div>
        </section>
        <DataBlock id="work" title="Experience">
          <div className="experience">
            <div className="experience-header">
              <div className="experience-title">
                Module Lead (Full Stack) | BOLD
              </div>
              <div className="experience-duration">2022 — Present</div>
            </div>
            <div className="experience-summary">
              Leading system architecture and personalization platforms for
              high-scale user applications
            </div>
            <ul className="experience-body data-list">
              <li>
                Built real-time personalization systems driving +22% user
                retention
              </li>
              <li>
                Reduced load times by 35% by migrating to optimized PWA
                architecture
              </li>
              <li>
                Designed event-driven systems using Kafka and Redis for
                analytics
              </li>
              <li>
                Developed reusable design systems → 25% faster development
                cycles
              </li>
              <li>
                Maintained 99.9% uptime through scalable cloud infrastructure
              </li>
            </ul>
          </div>
          <div className="experience">
            <div className="experience-header">
              <div className="experience-title">
                Lead (Full Stack) | CareerDose
              </div>
              <div className="experience-duration">2019 — 2022</div>
            </div>
            <p className="experience-summary">
              Built and scaled multi-platform applications across web, mobile,
              and desktop
            </p>
            <ul className="experience-body data-list">
              <li>
                Built cross-platform apps using React, React Native, and
                Electron
              </li>
              <li>
                Improved performance by 45%, significantly increasing user
                engagement
              </li>
              <li>
                Designed scalable CMS with role-based access and real-time
                updates
              </li>
              <li>
                Led frontend architecture and UX improvements across products
              </li>
              <li>Managed and mentored a team of 8–12 engineers</li>
            </ul>
          </div>
        </DataBlock>
        <DataBlock id="architecture" title="Systems & Architecture">
          <ul className="data-list">
            <li>
              Designed microservices for high-scale applications using Kafka,
              Redis, and containerized infrastructure
            </li>
            <li>
              Built real-time data pipelines powering analytics and
              personalization
            </li>
            <li>
              Led POCs for AI-driven experimentation and recommendation systems
            </li>
            <li>
              Exploring LLM-based systems for product intelligence and
              automation
            </li>
            <li>Defined reusable architectural patterns across teams</li>
          </ul>
        </DataBlock>
        <DataBlock id="research" title="Research">
          <ul className="data-list">
            <li>
              Studied how resume tools perform across ATS systems and design
              platforms
            </li>
            <li>Analyzed global user behavior and tool preferences</li>
            <li>
              Built evaluation pipelines to measure ATS parsing performance
            </li>
            <li>
              Identified trade-offs between system trust, design control, and
              outcomes
            </li>
            <li>
              Proposed AI-driven systems (LLMs, explainable scoring, dual-mode
              editing)
            </li>
          </ul>
        </DataBlock>
      </main>
      <Footer />
    </>
  );
}
