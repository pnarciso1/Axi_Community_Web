'use client';

import Link from 'next/link';

const products = [
  { name: 'Wellspace', href: 'https://wellspace.peoplecare.ai' },
  { name: 'MyCareClaim', href: 'https://www.mycareclaim.com' },
];

export default function UtilityBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-deep-indigo/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-end h-10 gap-2 text-sm">
          <span className="text-white/60 hidden sm:inline">Also from PeopleCare.ai:</span>
          <div className="flex items-center gap-4">
            {products.map((product, index) => (
              <span key={product.name} className="flex items-center gap-4">
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent-cyan transition-colors duration-200 font-medium"
                >
                  {product.name}
                </Link>
                {index < products.length - 1 && (
                  <span className="text-white/30">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

