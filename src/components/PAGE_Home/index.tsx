import { cloneElement } from 'react';
import { styled } from 'styled-components';
import config from '@/config';

function PAGE_Home() {
  const CONTACT_DATA = config.PORTFOLIO_DATA.DATA_CONTACT;

  return (
    <Styled.PAGE_Home>
      <p className="pf-greet">Hi, There, I&apos;m</p>
      <h1 className="pf-name">Sambhav Sharma</h1>
      <h2 className="pf-desc">
        <span className="pf-lead">Senior Full Stack Engineer</span> passionate
        about crafting powerful digital experiences, leading engineering teams
        and AI-powered projects with robust engineering.
      </h2>
      <p className="pf-desc">
        Currently working with{' '}
        <a
          className="pf-lead"
          href="https://www.bold.com/"
          target="_blank"
          aria-label="bold"
        >
          BOLD
        </a>
        , and previously worked as{' '}
        <span className="pf-lead">Creative Lead</span> with different startups.
      </p>
      <p className="pf-desc">
        Founder{' '}
        <a
          className="pf-lead"
          href="https://quekia.netlify.app/"
          target="_blank"
          aria-label="quekia"
        >
          QUEKIA
        </a>
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
    max-width: 834px;
    display: grid;
    align-content: center;
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 500;

    .pf-name {
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .pf-lead {
      font-size: 1.6rem;
      font-weight: 700;
    }

    .pf-desc {
      font-size: 1.2rem;
      line-height: 1.4;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .contact-wrapper {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem 2rem;
    }
  `,
};
