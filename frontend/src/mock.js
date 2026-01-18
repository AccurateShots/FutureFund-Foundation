// Mock data for frontend-only development
// This will be replaced with real backend integration

export const mockSubmitContact = async (data) => {
  console.log('Mock Contact Submission:', data);
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return { success: true, message: 'Thank you for contacting us. We will get back to you soon.' };
};

export const mockSubmitChapterInterest = async (data) => {
  console.log('Mock Chapter Interest Submission:', data);
  await new Promise(resolve => setTimeout(resolve, 800));
  return { success: true, message: 'Thank you for your interest! We will reach out with next steps.' };
};

export const mockSubmitSchoolInterest = async (data) => {
  console.log('Mock School Interest Submission:', data);
  await new Promise(resolve => setTimeout(resolve, 800));
  return { success: true, message: 'Thank you! We will contact you to discuss bringing Future Fund to your school.' };
};

export const leadershipTeam = [
  { role: 'Chief Executive Officer', name: 'TBD', responsibilities: 'Overall strategy, external relations, national growth' },
  { role: 'Chief Operations Officer', name: 'TBD', responsibilities: 'Internal systems, execution, scalability' },
  { role: 'Director of Programs', name: 'TBD', responsibilities: 'Learning Kit development, curriculum standards' },
  { role: 'Director of Chapters', name: 'TBD', responsibilities: 'Chapter support, onboarding, training' },
  { role: 'Director of Competition', name: 'TBD', responsibilities: 'Scoring system, evaluation, national framework' },
  { role: 'Director of Partnerships', name: 'TBD', responsibilities: 'Sponsors, schools, strategic alliances' }
];

export const programs = {
  elementary: {
    title: 'Elementary Programs (K-5)',
    description: 'Foundational skills, structured routines, and hands-on learning activities designed for younger students.',
    components: [
      'Daily planners with visual schedules',
      'Core academic units (literacy, math, science)',
      'iPad-based interactive lessons',
      'Role-play activities for social skills',
      'Weekly assessments and progress tracking'
    ]
  },
  middle: {
    title: 'Middle School Programs (6-8)',
    description: 'Building independence, critical thinking, and real-world problem solving for developing students.',
    components: [
      'Academic planners with goal-setting tools',
      'Integrated STEM units',
      'Technology-enhanced project work',
      'Decision-making simulations',
      'Quarterly performance assessments'
    ]
  },
  high: {
    title: 'High School Programs (9-12)',
    description: 'Advanced curriculum, leadership development, and preparation for post-secondary success.',
    components: [
      'College/career readiness planners',
      'Advanced academic units with real-world application',
      'Research and presentation projects',
      'Leadership role-play and case studies',
      'Comprehensive assessment portfolio'
    ]
  }
};

export const downloadableResources = [
  { title: 'Chapter Launch Guide', description: 'Everything you need to start a chapter at your school', filename: 'chapter-launch-guide.pdf' },
  { title: 'Program Overview', description: 'Detailed look at our Learning Kits and implementation', filename: 'program-overview.pdf' },
  { title: 'Partner One-Pager', description: 'Information for sponsors and strategic partners', filename: 'partner-info.pdf' }
];
