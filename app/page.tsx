import { VideoHero } from '@/components/home/VideoHero';
import { TourHighlights } from '@/components/home/TourHighlights';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTABanner } from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <TourHighlights />
      <GalleryPreview />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
