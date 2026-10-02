'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components';
import { AskAI } from '@/components/AskAI';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAskAIOpen, setIsAskAIOpen] = useState(false);

  return (
    <>
      <Navbar onAskAI={() => setIsAskAIOpen(true)} />
      <main>{children}</main>
      <Footer />
      <AskAI isOpen={isAskAIOpen} onClose={() => setIsAskAIOpen(false)} />
    </>
  );
};
