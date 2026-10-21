export const graphrag = {
  title: 'Graph-Based RAG for Robot Planning',
  paperTitle: 'Graph-Based Retrieval-Augmented Planning for Robots with Provenance-Aware Knowledge',
  description: 'A local graph-based retrieval-augmented planner that grounds robot task decomposition in persistent, provenance-linked object knowledge.',
  publicationStatus: 'Accepted for publication in the DSA ISC 2026 proceedings (Springer, LNCS, vol. 16621).',
  authors: ['Alessandro Leanza', 'Loris Roveda', 'Blerina Spahiu'],
  code: 'https://github.com/alessandro-leanza/Graph-Based-RAG_RobotPlanning',
  // Add a public author-manuscript or publisher URL once its sharing status is confirmed.
  paper: undefined as string | undefined,
  architecture: '/projects/graphrag/architecture.png',
};

// Reported task-decomposition success from Table 5 of the supplied manuscript.
export const graphragMetrics = [
  { value: '86%', label: 'Materials', supporting: 'GraphRAG', comparison: 'ConceptBot 70% · SayCan 20% · ConceptBot w/o ConceptNet 51%' },
  { value: '96%', label: 'Toxicity', supporting: 'GraphRAG', comparison: 'ConceptBot 86% · SayCan 36% · ConceptBot w/o ConceptNet 56%' },
  { value: '85%', label: 'Implicit tasks', supporting: 'GraphRAG', comparison: 'ConceptBot 87% · SayCan 31% · ConceptBot w/o ConceptNet 64%' },
  { value: '75%', label: 'Risk-aware tasks', supporting: 'GraphRAG', comparison: 'ConceptBot 76% · SayCan 15% · ConceptBot w/o ConceptNet 58%' },
];
export const graphragStages = [
  { name: 'Build', title: 'Object-centric knowledge memory', text: 'Chunk object-associated documents and extract schema-constrained facts with a local LLM. Store each fact in Neo4j with confidence, source metadata, and links to supporting evidence.' },
  { name: 'Retrieve', title: 'Scene- and task-conditioned context', text: 'Retrieve facts for the perceived objects and select a compact, diverse subgraph under a prompt budget, balancing source reliability, confidence, and instruction relevance.' },
  { name: 'Plan', title: 'Grounded JSON subgoals', text: 'Condition a local LLM on the instruction, scene entities, and selected evidence. Produce ordered subgoals using a restricted action-template library for downstream skills.' },
];
export const graphragSnapshot = [
  { label: 'Graph backend', value: 'Neo4j · Object, Fact, and Chunk nodes' },
  { label: 'Knowledge sources', value: 'Object-associated text; Wikipedia in the prototype' },
  { label: 'Extraction', value: 'Qwen3-Coder:30B' },
  { label: 'Planning', value: 'Qwen3:32B' },
  { label: 'Relevance embeddings', value: 'all-MiniLM-L6-v2' },
  { label: 'Local model serving', value: 'Ollama' },
  { label: 'Output', value: 'JSON subgoals with restricted action templates' },
  { label: 'Provenance', value: 'Source metadata, confidence, and evidence-chunk links' },
  { label: 'Implementation', value: 'Python · Docker' },
];
export const graphragBibtex = `@unpublished{leanza2026graphbased,
  title={Graph-Based Retrieval-Augmented Planning for Robots with Provenance-Aware Knowledge},
  author={Leanza, Alessandro and Roveda, Loris and Spahiu, Blerina},
  year={2026},
  note={Accepted for publication in the DSA ISC 2026 proceedings, Springer, Lecture Notes in Computer Science, vol. 16621, Paper ID 25. Final publication metadata pending.}
}`;
