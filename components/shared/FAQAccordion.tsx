'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/data/faq';

interface Props {
  items: FAQItem[];
  dark?: boolean;
}

export function FAQAccordion({ items, dark = false }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
              dark
                ? isOpen
                  ? 'border-moss/40 bg-forest-800'
                  : 'border-forest-700 bg-forest-900 hover:border-forest-600'
                : isOpen
                ? 'border-forest-300 bg-forest-50'
                : 'border-stone bg-white hover:border-forest-200'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`font-bold text-base pr-4 ${
                  dark ? (isOpen ? 'text-moss' : 'text-white') : isOpen ? 'text-forest-700' : 'text-forest-900'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  dark
                    ? isOpen
                      ? 'bg-moss text-forest-950'
                      : 'bg-forest-700 text-white/60'
                    : isOpen
                    ? 'bg-forest-700 text-white'
                    : 'bg-stone text-forest-500'
                }`}
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>

            {/* CSS grid trick for animated height: grid-template-rows 0fr → 1fr */}
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.3s ease-in-out',
              }}
            >
              <div className="overflow-hidden">
                <div className={`px-6 pb-6 text-sm leading-relaxed ${dark ? 'text-white/65' : 'text-forest-600'}`}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
