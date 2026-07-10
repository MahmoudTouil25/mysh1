import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';

export const metadata: Metadata = {
  title: 'Landing Page Font Test | MYSH',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FontTestPage() {
  return <HomePage lang="en" />;
}
