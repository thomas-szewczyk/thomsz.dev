import { DateRange } from './date-range.dto';

export interface CvEntry {
  id: number;
  title: string;
  description: string;
  company: string;
  dateRange: DateRange;
  projectTitle: string;
  responsibilities: Responsibility[];
  city?: string;
  imageUrl?: string;
  isEducation?: boolean;
}

export interface Responsibility {
  name: string;
  icon: string;
}
