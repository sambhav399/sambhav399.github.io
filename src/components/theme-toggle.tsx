'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const checked = resolvedTheme === 'dark';

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={() => setTheme(checked ? 'light' : 'dark')}
        checked={checked}
      />
    </label>
  );
}
