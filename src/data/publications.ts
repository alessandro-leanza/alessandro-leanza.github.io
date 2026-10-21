import { conceptbot } from './conceptbot';

export interface Publication {
  title: string;
  authors: string[];
  status: string;
  citationLabel: string;
  paper: string;
  project?: string;
  code?: string;
}

// List only publications with verified titles and metadata.
export const selectedPublications: Publication[] = [
  {
    title: `${conceptbot.title}: ${conceptbot.subtitle}`,
    authors: conceptbot.authors,
    status: conceptbot.publicationStatus,
    citationLabel: 'arXiv preprint · 2025',
    paper: conceptbot.paper,
    project: '/projects/conceptbot/',
    code: conceptbot.code,
  },
];
