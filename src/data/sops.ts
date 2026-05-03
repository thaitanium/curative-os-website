export interface SOP {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  whyItMatters: string;
  proTip?: string;
}

export const sops: SOP[] = [
  {
    id: 'sop-01',
    slug: 'set-up-first-board',
    title: 'Set up your first curative board',
    summary: 'Create a board that matches your workflow in 90 seconds.',
    description:
      'Your board is the contract between you and the team. Get the stages right and the team works the same way every time.',
    steps: [
      {
        number: 1,
        title: 'Boards → + New board',
        description: 'Click the new board button.',
      },
      {
        number: 2,
        title: 'Name + description',
        description: 'Give your board a clear name (e.g. "Houston Tax Sale 2026").',
      },
      {
        number: 3,
        title: 'Pick fields',
        description:
          'Choose which fields appear on every card, or click Select all (you can prune later).',
      },
      {
        number: 4,
        title: 'Pick card title fields',
        description:
          'Select up to 3 fields for the card title. Recommend: Property Address + Owner Last Name.',
      },
      {
        number: 5,
        title: 'Done',
        description:
          'Edit the four default stages (Leads, Researching, Pre-Qualified, Sold) to match your playbook.',
      },
    ],
    whyItMatters:
      'Your board is the contract between you and the team. Get the stages right and the team works the same way every time.',
  },
  {
    id: 'sop-02',
    slug: 'import-tax-delinquency-list',
    title: 'Import a tax-delinquency list',
    summary: 'Get a CSV into your board and start working in under two minutes.',
    description:
      'Use a Field Preset for repeatable imports. Set it up once, then second-time-onward it\'s three clicks.',
    steps: [
      {
        number: 1,
        title: 'Import → upload the CSV',
        description: 'Open the import wizard and select your CSV file.',
      },
      {
        number: 2,
        title: 'Pick the destination board',
        description: 'Choose which board the deals will land in.',
      },
      {
        number: 3,
        title: 'Pick the stage',
        description: 'Select the stage new deals land in (typically Leads).',
      },
      {
        number: 4,
        title: 'Map columns',
        description: 'Search by field name or type. Hit Continue when done.',
      },
      {
        number: 5,
        title: 'Confirm and import',
        description: 'Review the mapping and import your deals.',
      },
    ],
    whyItMatters: 'Get deals from list to board in seconds, not hours.',
    proTip:
      'Use a Field Preset for repeatable imports. Set it up once, then second-time-onward it\'s three clicks.',
  },
  {
    id: 'sop-03',
    slug: 'score-deal-ai-underwriting',
    title: 'Score a deal with AI Underwriting',
    summary: 'Get a 1-10 score with reasoning in seconds, not your head.',
    description:
      'The AI scores against the data you actually collected, not a generic template. Calibrate it once and it gets sharper every run.',
    steps: [
      {
        number: 1,
        title: 'Open the deal',
        description: 'Navigate to the deal you want to score.',
      },
      {
        number: 2,
        title: 'Fill underwriting fields',
        description: 'Make sure the underwriting fields are filled (mark them in board settings).',
      },
      {
        number: 3,
        title: 'Run underwriting',
        description: 'Click Run underwriting.',
      },
      {
        number: 4,
        title: 'Review the score',
        description: 'Check the 1-10 score + reasoning.',
      },
      {
        number: 5,
        title: 'Override if needed',
        description:
          'If you disagree, fill the Risk Scorecard manually — your call wins.',
      },
    ],
    whyItMatters:
      'If you can\'t tell me what your cash conversion cycle is across the portfolio, you don\'t know if you\'re getting better or worse. This makes it trivial.',
  },
  {
    id: 'sop-04',
    slug: 'track-cash-on-deal',
    title: 'Track cash on a deal',
    summary: 'Log every dollar deployed and returned.',
    description:
      'If you can\'t tell me what your cash conversion cycle is, you don\'t know if you\'re improving.',
    steps: [
      {
        number: 1,
        title: 'Open the deal',
        description: 'Navigate to the deal you want to track cash for.',
      },
      {
        number: 2,
        title: 'Cash events panel',
        description: 'Click on Cash events.',
      },
      {
        number: 3,
        title: 'Log Deployed event',
        description: 'When you wire money, log a Deployed event (date + amount).',
      },
      {
        number: 4,
        title: 'Log Returned event',
        description: 'When capital comes back, log a Returned event.',
      },
      {
        number: 5,
        title: 'Dashboard updates',
        description: 'Dashboard Cash conversion cycles tile updates in real time.',
      },
    ],
    whyItMatters:
      'Cash conversion cycles are the heartbeat of your business. Track them obsessively.',
  },
  {
    id: 'sop-05',
    slug: 'move-deal-across-boards',
    title: 'Move a deal across boards',
    summary: 'Hand off deals from Research → Sales without losing them.',
    description: 'One wrong move and a deal falls through. This prevents that.',
    steps: [
      {
        number: 1,
        title: 'Open the deal',
        description: 'Navigate to the deal you want to move.',
      },
      {
        number: 2,
        title: '⋯ menu → Move to board',
        description: 'Click the menu and select Move to board.',
      },
      {
        number: 3,
        title: 'Pick destination',
        description: 'Choose the destination board and stage.',
      },
      {
        number: 4,
        title: 'Confirm',
        description: 'Confirm the move.',
      },
      {
        number: 5,
        title: 'Audit trail',
        description: 'Activity log captures the move with a timestamp.',
      },
    ],
    whyItMatters:
      'Research → Sales handoff is where deals die. Move them with one click and an audit trail; nothing falls through.',
  },
  {
    id: 'sop-06',
    slug: 'configure-dashboard-standup',
    title: 'Configure your dashboard for the morning standup',
    summary: 'Surface the metrics that matter most.',
    description:
      'What you measure first is what you act on. Make the right tiles default-visible.',
    steps: [
      {
        number: 1,
        title: 'Dashboard → ⚙ Customize',
        description: 'Click the customize button.',
      },
      {
        number: 2,
        title: 'Pin tiles',
        description:
          'Pin Cash allocated, Cash conversion cycles, Won deals this month, Deals in litigation.',
      },
      {
        number: 3,
        title: 'Set Conversion Funnel',
        description: 'Set the Conversion Funnel to your top board.',
      },
      {
        number: 4,
        title: 'Reload',
        description: 'Reload the page.',
      },
      {
        number: 5,
        title: 'Morning standup',
        description:
          'That\'s now your first screen every morning.',
      },
    ],
    whyItMatters:
      'What you measure first is what you act on. Make the right tiles default-visible.',
  },
  {
    id: 'sop-07',
    slug: 'manage-litigation-hold',
    title: 'Manage a litigation hold',
    summary: 'Lock deals down when legal gets involved.',
    description:
      'One wrong field edit on a litigated deal can blow up your case. Lock it down at the source.',
    steps: [
      {
        number: 1,
        title: 'Open the deal',
        description: 'Navigate to the deal with litigation.',
      },
      {
        number: 2,
        title: 'Sidebar → toggle In Active Litigation',
        description: 'Toggle the litigation flag in the sidebar.',
      },
      {
        number: 3,
        title: 'Deal locks',
        description: 'The deal locks editing for non-admins.',
      },
      {
        number: 4,
        title: 'Dashboard surfaces it',
        description:
          'Dashboard Deals in active litigation tile counts it.',
      },
      {
        number: 5,
        title: 'Clear when done',
        description: 'Clear the flag when the issue resolves.',
      },
    ],
    whyItMatters:
      'One wrong field edit on a litigated deal can blow up your case. Lock it down at the source.',
  },
  {
    id: 'sop-08',
    slug: 'quarterly-board-hygiene',
    title: 'Quarterly board hygiene',
    summary: 'Keep your workspace clean and fast.',
    description: 'Clutter is the silent killer of CRM adoption. Clean the surface monthly.',
    steps: [
      {
        number: 1,
        title: 'Boards → Active',
        description: 'Archive any board you\'re not actively working.',
      },
      {
        number: 2,
        title: 'Boards → Archived',
        description: 'Delete (permanent) the ones you\'re sure about.',
      },
      {
        number: 3,
        title: 'Run conversion funnel',
        description:
          'Run the conversion funnel for each remaining board.',
      },
      {
        number: 4,
        title: 'Kill unused stages',
        description: 'Kill stages that nobody uses.',
      },
      {
        number: 5,
        title: 'Review field presets',
        description: 'Retire stale ones.',
      },
    ],
    whyItMatters:
      'Clutter is the silent killer of CRM adoption. Clean the surface monthly.',
  },
];

export const getSopBySlug = (slug: string): SOP | undefined => {
  return sops.find((sop) => sop.slug === slug);
};
