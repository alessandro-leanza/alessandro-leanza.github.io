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
    title: graphrag.paperTitle,
    authors: graphrag.authors,
    status: graphrag.publicationStatus,
    citationLabel: 'Forthcoming proceedings · Paper ID 25 · final citation pending',
    paper: graphrag.paper,
    project: '/projects/graphrag/',
    code: graphrag.code,
  },
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
