import { cloneElement } from 'react';
import { styled } from 'styled-components';
import config from '@/config';
import { TrackEvent } from '@/config/mixpanel';

function PAGE_Home() {
  const CONTACT_DATA = config.PORTFOLIO_DATA.DATA_CONTACT;

  const DATE_START = new Date(2019, 5);
  const DATE_CURRENT = new Date();

  const MONTHS_DIFFERENCE =
    (DATE_CURRENT.getFullYear() - DATE_START.getFullYear()) * 12 +
    (DATE_CURRENT.getMonth() - DATE_START.getMonth());
  const YEARS_DIFFERENCE = MONTHS_DIFFERENCE / 12;

  const TOTAL_EXPERIENCE =
    YEARS_DIFFERENCE < 1
      ? `${Math.floor(MONTHS_DIFFERENCE)} months`
      : `${YEARS_DIFFERENCE.toFixed(1)} years`;

  return (
    <Styled.PAGE_Home>
      <p className="pf-greet">Hi There, I&apos;m</p>
      <h1 className="pf-name">Sambhav Sharma</h1>
      <h2 className="pf-desc">
        <span className="pf-lead1">Senior Software Engineer (Full Stack)</span>{' '}
        with over <span className="pf-lead1">{TOTAL_EXPERIENCE}</span> of
        experience designing and building{' '}
        <span className="pf-lead2">High-performance</span>,{' '}
        <span className="pf-lead2">AI-driven</span>, and{' '}
        <span className="pf-lead2">Scalable Web Applications</span> used by
        millions of users. My work revolves around{' '}
        <span className="pf-lead2">Microservices Architecture</span>, modern{' '}
        <span className="pf-lead2">Frontend Ecosystems</span> (React,
        TypeScript, Next.js), and{' '}
        <span className="pf-lead2">Cloud-native development</span> on{' '}
        <span className="pf-lead2">AWS</span> and{' '}
        <span className="pf-lead2">GCP</span>.
      </h2>
      <p className="pf-desc quote">
        Currently at{' '}
        <a
          className="pf-lead1"
          href="https://www.bold.com/"
          target="_blank"
          aria-label="bold"
          onClick={() =>
            TrackEvent('portfolio', {
              Action: 'clicked',
              'Click Option': 'bold technologies pvt. ltd.',
              'Click URL': 'https://www.bold.com/',
            })
          }
        >
          BOLD
        </a>
        , I’ve led engineering initiatives that improved{' '}
        <span className="pf-lead2">load times by 35%</span>, increased{' '}
        <span className="pf-lead2">user retention by 22%</span>, and reduced{' '}
        <span className="pf-lead2">frontend delivery cycles by 25%</span>{' '}
        through reusable design systems and automation. Additionally, by
        migrating our dependency management from <code>npm</code> to{' '}
        <code>pnpm</code>, I optimized{' '}
        <span className="pf-lead2">build and development times by 65%</span>,
        significantly enhancing overall developer productivity.
      </p>
      <p className="pf-desc quote">
        Previously, as a{' '}
        <span className="pf-lead1">
          Lead Full Stack Developer (Creative Lead)
        </span>{' '}
        at{' '}
        <a
          className="pf-lead1"
          href="https://careerdose.com/"
          target="_blank"
          aria-label="bold"
          onClick={() =>
            TrackEvent('portfolio', {
              Action: 'clicked',
              'Click Option': 'bold technologies pvt. ltd.',
              'Click URL': 'https://careerdose.com/',
            })
          }
        >
          CareerDose
        </a>
        , I built multi-platform applications (web, mobile, and desktop) and led
        a team of <span className="pf-lead2">10+ engineers and designers</span>{' '}
        to deliver impactful ed-tech products.
      </p>
      <p className="pf-desc">
        I’m deeply fascinated by <span className="pf-lead2">System Design</span>
        , <span className="pf-lead2">Cloud Scalability</span>, and{' '}
        <span className="pf-lead2">AI Integration</span> in everyday products.
        Currently, I’m exploring real-time{' '}
        <span className="pf-lead2">Analytics Pipelines</span>,{' '}
        <span className="pf-lead2">Distributed Systems</span>, and{' '}
        <span className="pf-lead2">AI-driven Personalization</span>, where
        architecture and data intersect beautifully.
      </p>
      <p className="pf-desc">
        Beyond coding, I enjoy{' '}
        <span className="pf-lead2">mentoring developers</span>,{' '}
        <span className="pf-lead2">driving cross-functional collaboration</span>
        , and ensuring{' '}
        <span className="pf-lead2">clean, scalable system design</span> that
        delivers measurable business value. Outside of work, you’ll often find
        me geeking out over <span className="pf-lead2">design patterns</span>,
        playing <span className="pf-lead2">badminton</span> or, or{' '}
        <span className="pf-lead2">
          experimenting with new frameworks and side projects
        </span>
        .
      </p>
      <div className="contact-wrapper">
        {CONTACT_DATA.map(function (contact) {
          return (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              className="contact"
              aria-label={config.PORTFOLIO_TITLE + 's ' + contact.label}
              onClick={() =>
                TrackEvent('portfolio', {
                  Action: 'clicked',
                  'Click Option': contact.label,
                  'Click URL': contact.link,
                })
              }
            >
              {cloneElement(contact.icon, {
                width: 24,
                height: 24,
              })}
            </a>
          );
        })}
      </div>
    </Styled.PAGE_Home>
  );
}

export default PAGE_Home;

const Styled = {
  PAGE_Home: styled.div`
    min-height: 100lvh;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 991px;
    padding: 100px 0 100px 0;
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 500;

    .pf-name {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .pf-lead1 {
      font-size: 1.6rem;
      font-weight: 700;
    }

    .pf-lead2 {
      font-size: 1.4rem;
      font-weight: 700;
    }

    .pf-desc {
      font-size: 1.2rem;
      line-height: 1.4;
      font-weight: 400;

      &:not(:last-child) {
        margin-bottom: 1.8rem;
      }

      &.fun-line {
        font-style: italic;
      }
    }

    .contact-wrapper {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem 2rem;
    }
  `,
};
