import { useState } from 'react';
import type { Lang } from './i18n/sharedContent';
import HomePage from './views/HomePage';
import './index.css';

function App() {
  const [lang] = useState<Lang>('en');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div lang={lang} dir={dir} className="min-h-screen bg-[#F8F9FA]">
      <HomePage lang={lang} />
    </div>
  );
}

export default App;
