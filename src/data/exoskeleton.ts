// Project description grounded in the public Exoskeleton repository (ccac469).
// Selected results and figures are from the supplied research manuscript,
// explicitly authorized for the website and repository overview by Alessandro.
// The previously public arXiv URL is also linked in Alessandro's supplied CV.
export const exoskeleton = {
  title: 'Context-Aware Exoskeleton Assistance',
  path: '/projects/exoskeleton/',
  cardDescription: 'Multimodal perception and adaptive control combining gaze, vision, and physical interaction.',
  description: 'Gaze-informed perception and variable-admittance control for context-aware assistance with an active back-support exoskeleton.',
  intro: 'A research project connecting egocentric vision and gaze tracking with adaptive assistance for an active back-support exoskeleton. The system brings information about the attended object and the handling task into the control loop, alongside the user’s posture and physical interaction.',
  tags: ['Multimodal perception', 'Adaptive control'],
  code: 'https://github.com/alessandro-leanza/Exoskeleton',
  preprint: 'https://arxiv.org/abs/2602.04648',
  media: {
    architecture: '/projects/exoskeleton/architecture.png',
    setup: '/projects/exoskeleton/setup.webp',
  },
};

// Preserve the manuscript's separate baselines and study populations.
export const exoskeletonMetrics = [
  { value: '0.066 s', label: 'Payload-aware assistance onset', supporting: 'Gaze-conditioned pipeline', comparison: 'Without gaze: 1.892 s · 50 trials per condition' },
  { value: '3.60 / 4', label: 'Physical-demand questionnaire', supporting: 'Q1 score · higher means less demand', comparison: 'Posture-only: 2.13 / 4 · no exoskeleton: 2.00 / 4' },
  { value: '14.29%', label: 'Thoracic EMG RMS reduction', supporting: 'Envelope RMS · loaded lifting', comparison: 'Lumbar RMS reduction: 14.63% · both vs no exoskeleton' },
];

export const exoskeletonStages = [
  { name: 'Attend', title: 'Egocentric vision and gaze', text: 'Tobii eye-tracking glasses provide a first-person view and gaze information. YOLO-based perception identifies objects and their visual grasp state, while gaze indicates the object receiving the user’s attention.' },
  { name: 'Interpret', title: 'Task-context cues', text: 'Visual cues inform task progression and assistance activation. A vision-language model provides object and payload estimates to complement the perception pipeline.' },
  { name: 'Assist', title: 'Adaptive physical support', text: 'A finite-state machine combines posture and perception cues. A variable-admittance controller adjusts assistance, stiffness, and damping across the handling task, with smooth transitions between control states.' },
];

export const exoskeletonSnapshot = [
  { label: 'Platform', value: 'Active back-support exoskeleton' },
  { label: 'Perception', value: 'Egocentric vision · gaze tracking · YOLO' },
  { label: 'Task context', value: 'Visual grasp state · VLM-based payload estimation' },
  { label: 'Control', value: 'Variable admittance · finite-state assistance' },
  { label: 'Integration', value: 'ROS 2 Humble · Moteus · Tobii' },
  { label: 'Implementation', value: 'Python · ROS 2 interfaces' },
];
