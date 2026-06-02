import { AnimateOnScroll } from './AnimateOnScroll';

interface Props {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  center = true,
  light = false,
}: Props) {
  return (
    <AnimateOnScroll className={center ? 'text-center' : ''}>
      {badge && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 ${
            light
              ? 'bg-moss/10 text-moss border border-moss/20'
              : 'bg-forest-700/60 text-moss border border-forest-600/40'
          }`}
        >
          <span className="w-1.5 h-1.5 bg-moss rounded-full" />
          {badge}
        </span>
      )}
      <h2
        className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none tracking-tight mb-5 ${
          light ? 'text-forest-900' : 'text-white'
        }`}
      >
        {title}
        {titleHighlight && (
          <>
            <br />
            <span className="text-moss">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-forest-600' : 'text-white/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
