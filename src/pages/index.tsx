import { useEffect } from 'react';
import PAGE_Home from '@/components/PAGE_Home';
import { TrackEvent } from '@/config/mixpanel';

export default function Home() {
  useEffect(() => {
    TrackEvent('portfolio', {
      Action: 'viewed',
    });
  });
  return <PAGE_Home />;
}
