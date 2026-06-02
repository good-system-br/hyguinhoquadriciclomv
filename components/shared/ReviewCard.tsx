import type { Review } from '@/lib/data/reviews';

interface Props {
  review: Review;
  dark?: boolean;
}

export function ReviewCard({ review, dark = false }: Props) {
  return (
    <div
      className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-forest-800 border-forest-700 hover:border-moss/40'
          : 'bg-white border-stone hover:border-forest-300 hover:shadow-lg'
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-white/75' : 'text-forest-700'}`}>
        "{review.text}"
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-forest-600 to-moss rounded-full flex items-center justify-center">
            <span className="font-display font-black text-white text-sm">{review.name[0]}</span>
          </div>
          <div>
            <p className={`font-bold text-sm ${dark ? 'text-white' : 'text-forest-900'}`}>{review.name}</p>
            <p className={`text-xs ${dark ? 'text-white/40' : 'text-forest-400'}`}>{review.location}</p>
          </div>
        </div>
        {review.tour && (
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              dark ? 'bg-forest-700 text-moss' : 'bg-forest-50 text-forest-600'
            }`}
          >
            {review.tour}
          </span>
        )}
      </div>
    </div>
  );
}
