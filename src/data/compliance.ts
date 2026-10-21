// Public project overview derived from the supplied work-in-progress manuscript.
// The manuscript itself is not a public asset or a publication record.
export const compliance = {
  title: 'Learning Compliance with Diffusion Policies',
  path: '/projects/diffusion-compliance/',
  description: 'Work in progress: learning motion and compliance schedules from demonstrations, with force-aware diffusion policies and velocity-level admittance control.',
  tags: ['Diffusion policies', 'Force sensing', 'Variable admittance', 'Work in progress'],
};

export const complianceStages = [
  { name: 'Demonstrate', title: 'Record motion and compliance together', text: 'A teleoperator commands motion while compliance is authored through operator-selected phases or a force- and velocity-based fuzzy scheduler. RGB, robot state, wrist wrench, hand state, stiffness and damping ratio are recorded together.' },
  { name: 'Learn', title: 'Predict action chunks with diffusion', text: 'A diffusion policy learns incremental Cartesian motion together with stiffness and damping ratio, plus an optional hand command. Force-conditioned variants include the measured wrench in the observation alongside vision and robot state.' },
  { name: 'Deploy', title: 'Use the same compliant control path', text: 'The policy replaces the demonstration producer on a shared command bus. A separate variable-admittance loop uses the external wrist wrench and converts the commanded motion and compliance into Cartesian velocity commands.' },
];

export const complianceSnapshot = [
  { label: 'Platform', value: '6-DoF industrial arm with Cartesian velocity commands; no joint-torque command interface' },
  { label: 'Sensing', value: 'External six-axis wrist force/torque sensor · one or two RGB cameras · robot and hand state' },
  { label: 'Software', value: 'ROS 2 · shared motion and compliance command bus' },
  { label: 'Learned actions', value: 'Incremental Cartesian pose · stiffness · damping ratio · optional hand command' },
  { label: 'Policy observations', value: 'Vision and robot state, with and without wrist wrench in the compared variants' },
  { label: 'Control loop', value: 'Variable admittance at a nominal 100 Hz; recording and command publication target 50 Hz' },
  { label: 'Diffusion rollout', value: 'Two observation frames · eight predicted actions · four executed before replanning · DDPM denoising' },
  { label: 'Tasks explored', value: 'Door opening · sustained sliding contact · insertion' },
];
