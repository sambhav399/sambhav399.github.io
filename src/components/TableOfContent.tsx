'use client';

import { useEffect, useState } from 'react';

export function TableOfContents() {
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const SECTIONS = Array.from(document.querySelectorAll('section.block')).map(
      el => ({
        id: el.id,
        label: el.querySelector('.block-title')?.textContent || 'Untitled',
      })
    );
    setSections(SECTIONS);
  }, []);

  useEffect(() => {
    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-20 w-52">
      <p className="mb-4">On this page</p>

      <ul className="space-y-2 border-l border-neutral-800 pl-4">
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block transition-colors ${
                active === section.id
                  ? 'text-white font-medium'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
