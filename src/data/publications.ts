import { conceptbot } from './conceptbot';
import { graphrag } from './graphrag';

export interface Publication {
  title: string;
  authors: string[];
  status: string;
  citationLabel: string;
  paper?: string;
  project?: string;
  code?: string;
}

// List only publications with verified titles and metadata.
export const selectedPublications: Publication[] = [
  {
    title: `${conceptbot.title}: ${conceptbot.subtitle}`,
    authors: conceptbot.authors,
    status: conceptbot.publicationStatus,
    citationLabel: '2026 · final journal citation pending',
    paper: conceptbot.paper,
    project: '/projects/conceptbot/',
    code: conceptbot.code,
  },
  {
    title: graphrag.paperTitle,
    authors: graphrag.authors,
    status: graphrag.publicationStatus,
    citationLabel: 'Forthcoming proceedings · Paper ID 25 · final citation pending',
    paper: graphrag.paper,
    project: '/projects/graphrag/',
    code: graphrag.code,
  },
];
