import * as React from 'react';

interface DataBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}

export default function DataBlock({ title, children, id }: DataBlockProps) {
  return (
    <section className="block" id={id}>
      <div className="block-title">
        <p className="font-lead text-heading-5">{title}</p>
      </div>
      <div className="block-body">{children}</div>
    </section>
  );
}
