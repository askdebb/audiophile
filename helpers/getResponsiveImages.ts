export function getResponsiveImage<
  T extends { mobile: string; tablet: string; desktop: string },
>(imageSet: T, screenSize: 'mobile' | 'tablet' | 'desktop' | '2xl'): string {
  const size = screenSize === '2xl' ? 'desktop' : screenSize;

  return imageSet[size];
}
