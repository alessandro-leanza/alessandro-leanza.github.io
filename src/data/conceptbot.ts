export const conceptbot = {
  title: 'ConceptBot',
  publicationStatus: 'Accepted in 2026 for publication in Biomimetic Intelligence and Robotics (BIROB).',
  publicationVenueUrl: 'https://www.sciencedirect.com/journal/biomimetic-intelligence-and-robotics',
  subtitle: 'Knowledge-Graph–Grounded Commonsense for Task Decomposition in LLM Robot Planning',
  description: 'ConceptBot is a knowledge-graph-grounded LLM framework for commonsense, ambiguity-aware, and risk-aware robot task planning.',
  authors: ['Alessandro Leanza', 'Angelo Moroncelli', 'Giuseppe Vizzari', 'Francesco Braghin', 'Loris Roveda', 'Blerina Spahiu'],
  paper: 'https://arxiv.org/abs/2509.00570',
  code: 'https://github.com/alessandro-leanza/ConceptBot',
  media: {
    architecture: '/projects/conceptbot/architecture.png',
    qualitative: '/projects/conceptbot/qualitative-risk.png',
    deployment: '/projects/conceptbot/deployment.png',
    overview: '/projects/conceptbot/overview.mp4',
    poster: '/projects/conceptbot/poster.webp',
  },
};
export const metrics = [
  { value: '87.0%', label: 'Implicit tasks', supporting: 'Full ConceptBot', comparison: 'SayCan 31.0% · ReAct 27.0% · ProgPrompt 13.0%' },
  { value: '76.2%', label: 'Risk-aware tasks', supporting: 'Full ConceptBot', comparison: 'SayCan 15.0% · ReAct 37.5% · ProgPrompt 22.5%' },
  { value: '80%', label: 'SafeAgentBench BSS', supporting: 'Observed overall BSS', comparison: 'Next-highest reported comparison: ReAct + ThinkSafe, 46%' },
  { value: '45 / 50', label: 'Controlled task completions', supporting: 'PyBullet + Franka deployments', comparison: 'All 45 / 45 planning-correct policies completed execution' },
];
export const stages = [
  { name: 'OPE', title: 'Object Properties Extraction', text: 'Retrieves commonsense relations from ConceptNet, filters task-relevant semantic evidence, and infers properties of detected scene objects. In safety-sensitive configurations, it also produces semantic risk information.' },
  { name: 'URP', title: 'User Request Processing', text: 'Combines the natural-language instruction with robot capabilities, detected objects, semantic relations, and OPE-derived properties to resolve ambiguity and produce structured object–destination operations.' },
  { name: 'Planner', text: 'Grounds the structured request into sequential, scene-valid pick-and-place actions while tracking the execution history and terminating with done() once the requested operations are complete.' },
];
export const snapshot = [
  { label: 'Knowledge', value: 'ConceptNet commonsense knowledge graph' },
  { label: 'Reasoning', value: 'Large language models with structured prompting' },
  { label: 'Core modules', value: 'OPE · URP · Planner' },
  { label: 'Planning interface', value: 'Scene-valid pick-and-place actions' },
  { label: 'Simulation', value: 'PyBullet · CLIPort' },
  { label: 'Real robot', value: 'Franka Emika Panda · FrankaPy' },
  { label: 'Perception', value: 'YOLOv8 · Intel RealSense D435' },
  { label: 'Evaluated LLM backbones', value: 'GPT-4o-mini · DeepSeek-R1 · Llama-3.3-70B-Instruct' },
  { label: 'Implementation', value: 'Python · Docker' },
];
export const bibtex = `@article{leanza2025conceptbot,
  title={ConceptBot: Knowledge-Graph--Grounded Commonsense for Task Decomposition in LLM Robot Planning},
  author={Leanza, Alessandro and Moroncelli, Angelo and Vizzari, Giuseppe and Braghin, Francesco and Roveda, Loris and Spahiu, Blerina},
  journal={arXiv preprint arXiv:2509.00570},
  year={2025}
}`;
