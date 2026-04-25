import * as React from 'react';

export default function Footer() {
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
    <footer id="footer" className="footer">
      <p>
        &copy; {DATE_START.getFullYear()} - {DATE_CURRENT.getFullYear()} Sambhav
        Sharma
      </p>
      <p>Experience: {TOTAL_EXPERIENCE}</p>
    </footer>
  );
}
