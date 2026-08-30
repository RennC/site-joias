export type TestimonialMediaType = 'image' | 'video';

export interface Testimonial {
  attribution: string;
  id: string;
  mediaAlt: string;
  mediaSrc: string;
  mediaType: TestimonialMediaType;
  quote: string;
}

export interface FaqItem {
  answer: string;
  id: string;
  question: string;
}

export interface Partner {
  id: string;
  instagramUrl: string;
  name: string;
}
