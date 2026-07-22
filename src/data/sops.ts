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
        title: 'Boards → + Create Board',
        description:
          'Start from scratch, copy stages from an existing board, or apply a field preset to auto-add common fields.',
      },
      {
        number: 2,
        title: 'Name + description',
        description: 'Give your board a clear name (e.g. "Houston Tax Sale 2026").',
      },
      {
        number: 3,
        title: 'Shape your stages',
        description:
          'Edit the stage columns to match your playbook (e.g. Leads → Researching → Pre-Qualified → Offer Out → Closed). Mark your Won/Lost outcome stages and one terminal stage so closed-deal KPIs count correctly.',
      },
      {
        number: 4,
        title: 'Configure the cards',
        description:
          'In Board Settings → Cards, pick up to 3 fields for the card title. Give each a fixed pill color or value-based color logic, and add up to 5 quick-action icons per card.',
      },
      {
        number: 5,
        title: 'Save views',
        description:
          'Save your go-to filter combinations as named views in the view picker so the whole team can jump between them.',
      },
    ],
    whyItMatters:
      'Your board is the contract between you and the team. Get the stages right and the team works the same way every time.',
    proTip:
      'Numeric card-title fields ship with a lead-score preset: 0–39 blue, 40–59 yellow, 60–79 orange, 80+ red. Tune the ranges to your scoring model.',
  },
  {
    id: 'sop-02',
    slug: 'import-tax-delinquency-list',
    title: 'Import a county list',
    summary: 'Turn a raw CSV, XLSX, or ACCDB file into workable leads.',
    description:
      'The import wizard takes the file formats counties actually send — including Microsoft Access databases — and maps them onto your fields.',
    steps: [
      {
        number: 1,
        title: 'Import → upload the file',
        description:
          'Upload a CSV, XLSX, or ACCDB file and review the preview. Blank rows and formula-filled export noise are filtered automatically.',
      },
      {
        number: 2,
        title: 'Pick the destination board',
        description: 'Choose which board the imported deals land on.',
      },
      {
        number: 3,
        title: 'Map columns',
        description:
          'Match source columns to CRM fields. Number and currency fields extract clean values from messy data like "9 Years" or "$1,234.56".',
      },
      {
        number: 4,
        title: 'Set the stage and card title',
        description:
          'Pick the stage imported deals start in and the card title template (e.g. {Property Address} — {Owner Name}).',
      },
      {
        number: 5,
        title: 'Confirm and import',
        description:
          'Start the import, then review the imported-row count. Rows that fail validation land in the error log instead of being silently skipped. Leads are deduplicated by address across lists.',
      },
    ],
    whyItMatters:
      'Every deal starts as a row on a county list. A clean import means your researchers work leads instead of cleaning spreadsheets.',
    proTip:
      'ACCDB support means Harris County-style tax rolls import directly — no Access-to-Excel conversion step.',
  },
  {
    id: 'sop-03',
    slug: 'work-a-smart-list',
    title: 'Work a Smart List',
    summary: 'Let live queues tell you what to work next.',
    description:
      'Smart Lists are live working queues built from the deals already on your boards. They never copy or move a deal — when deal data changes, membership updates automatically.',
    steps: [
      {
        number: 1,
        title: 'Open Smart Lists',
        description:
          'Start with the built-in lists: My follow-ups, New & unworked, No response, Family research needed, and Active legal.',
      },
      {
        number: 2,
        title: 'Pick a queue',
        description:
          'Choose the list that matches the work session. Signal columns show why each deal qualified.',
      },
      {
        number: 3,
        title: 'Filter and sort',
        description:
          'Search by deal or person, apply filters, change the sort order, and show or hide signal columns.',
      },
      {
        number: 4,
        title: 'Work the results',
        description:
          'Select a row to inspect its context, then open the deal to act. When you log the follow-up or move the stage, the list updates itself.',
      },
      {
        number: 5,
        title: 'Save your own lists',
        description:
          'Click Create Smart List to define a reusable workspace queue with a name, description, color, match rules, and filters.',
      },
    ],
    whyItMatters:
      'The pipeline shows everything; a Smart List shows what needs you today. Teams that work from queues stop letting deals go quiet.',
    proTip:
      'Deleting a Smart List only removes the saved filter definition — it never touches the deals.',
  },
  {
    id: 'sop-04',
    slug: 'run-the-sales-inbox',
    title: 'Run your day from the Sales Inbox',
    summary: 'Every call, text, email, and voicemail in one queue.',
    description:
      'The Sales Inbox groups communication by person and deal so a rep understands the full conversation without opening five tools.',
    steps: [
      {
        number: 1,
        title: 'Open the Sales Inbox',
        description:
          'Use the views — Open conversations, Needs reply, Unread, Calls, Texts, Emails, Voicemails — to focus the session.',
      },
      {
        number: 2,
        title: 'Work a conversation',
        description:
          'Open it to see the full person-and-deal history. Mark read or unread, assign it to a teammate, or open the connected deal.',
      },
      {
        number: 3,
        title: 'Record the outcome',
        description:
          'Calls and voicemails can require an outcome — Connected, No answer, Voicemail left, Callback requested, and more. Outcomes land on the deal timeline.',
      },
      {
        number: 4,
        title: 'Schedule the follow-up',
        description:
          'The Follow-up button creates a reminder on the connected deal — which also surfaces it in the My follow-ups Smart List.',
      },
      {
        number: 5,
        title: 'Resolve it',
        description:
          'Resolving moves the conversation to Resolved (with Undo). A new incoming call or text automatically reopens it.',
      },
    ],
    whyItMatters:
      'Curative deals are won in conversations with heirs, attorneys, and owners. One queue means nothing gets missed and every touch is on the record.',
  },
  {
    id: 'sop-05',
    slug: 'build-a-family-tree',
    title: 'Build a Family Tree',
    summary: 'Map the heirs around an owner of record, generation by generation.',
    description:
      'The Family Tree workspace turns heir research into a living relationship map — living, deceased, and unknown at a glance, with evidence attached to every person.',
    steps: [
      {
        number: 1,
        title: 'Open the deal → Family Tree',
        description:
          'In the empty state, click Create family tree. Enter the case name, the owner of record or starting deceased subject, the property state, and their living status.',
      },
      {
        number: 2,
        title: 'Add Person',
        description:
          'Add each relative with their name, living status, dates, case role, possible-heir status, and how they connect to someone already in the tree.',
      },
      {
        number: 3,
        title: 'Connect children to parents',
        description:
          'When adding a child, select Parent 1 and optionally Parent 2 so the child sits under the correct parent set. Leave Parent 2 blank when unknown.',
      },
      {
        number: 4,
        title: 'Extend the lineage',
        description:
          'Select a person and use Add descendant to place a new child in one step, or Connect existing person to attach someone already in the tree. Grandchildren and later generations stay under their lineage.',
      },
      {
        number: 5,
        title: 'Read the colors',
        description:
          'Green = living, red = deceased, amber = unknown. A blue outline marks the selected person. Mark relationships verified only after reviewing supporting information.',
      },
    ],
    whyItMatters:
      'Heirship is the heart of a curative deal. A tree the whole team can read beats a research doc only one person understands.',
    proTip:
      'Use Merge to combine duplicate people and Archive to remove someone from the active tree without losing their evidence or history.',
  },
  {
    id: 'sop-06',
    slug: 'link-evidence-to-heirs',
    title: 'Attach evidence to Family Tree people',
    summary: 'Keep deeds, wills, and probate files pinned to the right person.',
    description:
      'Documents uploaded on the deal can be linked as evidence to specific people in the Family Tree, so every claim in your heirship theory has a source.',
    steps: [
      {
        number: 1,
        title: 'Upload to the deal',
        description:
          'In the deal Overview → Documents, drag in up to 20 files per batch (PDF, DOCX, TXT, MD, PNG, JPEG — 50 MB max each).',
      },
      {
        number: 2,
        title: 'Select the documents',
        description:
          'Check the documents that support a person — a deed, probate file, will, obituary, or vital record.',
      },
      {
        number: 3,
        title: 'Link to person',
        description:
          'In the "Link selected documents to Family Tree" panel, choose the person and the document type, then click Link to person.',
      },
      {
        number: 4,
        title: 'Verify the badges',
        description:
          'Evidence badges on each person summarize the attached source types. Colored badges on the document row show its links.',
      },
    ],
    whyItMatters:
      'When an attorney or title company asks "how do you know she\'s an heir?", the answer should be one click away — not buried in a folder.',
    proTip:
      'Deleting a document automatically cleans up its Family Tree evidence links, so badges never point at missing files.',
  },
  {
    id: 'sop-07',
    slug: 'track-legal-matters',
    title: 'Track a legal matter',
    summary: 'Quiet title, probate, partition — tracked to resolution.',
    description:
      'Legal Matters tracks lawsuits and claims with litigation stage, suit types, parties, counsel, deadlines, and an append-only timeline.',
    steps: [
      {
        number: 1,
        title: 'Open the deal → Financials + Legal',
        description: 'Legal Matters lives alongside Cash Events in its own workspace tab.',
      },
      {
        number: 2,
        title: 'Add matter',
        description:
          'Enter the matter name, stage, suit types, parties, dates, attorney contact info, and a short current-situation summary. Court info, linked Family Tree people, and opposing counsel sit in an expandable section.',
      },
      {
        number: 3,
        title: 'Log every event',
        description:
          'Expand the matter and click Add update to record filings, hearings, attorney communications, and milestones. The timeline is append-only, so the history stays trustworthy.',
      },
      {
        number: 4,
        title: 'Track multiple matters',
        description:
          'One deal can carry several matters — separate case numbers, opposing parties, attorneys, and timelines.',
      },
      {
        number: 5,
        title: 'Archive when resolved',
        description:
          'Archiving removes a matter from the active view while preserving its full history.',
      },
    ],
    whyItMatters:
      'A curative deal can live or die on a hearing date. Status colors and deadlines on the matter card mean nothing slips past the team.',
  },
  {
    id: 'sop-08',
    slug: 'track-cash-on-deal',
    title: 'Track cash on a deal',
    summary: 'Log every dollar deployed and returned.',
    description:
      'Cash Events capture the real financial transactions on a deal, with a running Net Deployed total that feeds dashboard KPIs.',
    steps: [
      {
        number: 1,
        title: 'Open the deal → Financials + Legal',
        description: 'The Cash Events panel sits next to Legal Matters.',
      },
      {
        number: 2,
        title: 'Log Deployed events',
        description:
          'Money going out — purchase price, cure costs, repair costs, closing costs. Enter type, amount, date, and an optional note.',
      },
      {
        number: 3,
        title: 'Log Returned events',
        description: 'Money coming in — sale proceeds, earnest money returned.',
      },
      {
        number: 4,
        title: 'Watch Net Deployed',
        description:
          'The panel keeps a running Net Deployed total so you always know your true basis in the deal.',
      },
      {
        number: 5,
        title: 'Check the dashboard',
        description:
          'Cash event data rolls up into the Dashboard KPIs — cash allocated and average deal cycle.',
      },
    ],
    whyItMatters:
      'Curative deals have irregular cash flows. If you only track them in your accounting software, the acquisition team is flying blind.',
  },
  {
    id: 'sop-09',
    slug: 'score-deal-ai-underwriting',
    title: 'Score a deal with AI Underwriting',
    summary: 'A 1–10 heat score with reasoning, from your own AI key.',
    description:
      'Underwriting analyzes the deal using its fields, Five Fact Pattern scorecard, notes, completed call transcripts, and your workspace reference files.',
    steps: [
      {
        number: 1,
        title: 'Connect a provider (once)',
        description:
          'A workspace admin connects Claude, OpenAI, Gemini, Grok, Mistral, or DeepSeek in Settings → Underwriting. Your key, your costs, your control.',
      },
      {
        number: 2,
        title: 'Feed it context',
        description:
          'Upload reference files (market data, comps, SOPs) and write custom instructions in Settings → Underwriting. Both are injected into every run.',
      },
      {
        number: 3,
        title: 'Run underwriting',
        description:
          'Open the deal → Underwriting panel → Run Underwriting. Results stream in real time.',
      },
      {
        number: 4,
        title: 'Review the score',
        description:
          'The AI returns a 1–10 heat score with reasoning and flagged risks. Completed call transcripts are included automatically, newest first.',
      },
      {
        number: 5,
        title: 'Override if needed',
        description:
          'Your judgment wins. All previous runs stay in the panel history for comparison.',
      },
    ],
    whyItMatters:
      'A consistent second opinion on every deal keeps the team honest — and the reasoning trail shows the "why" behind every score.',
  },
  {
    id: 'sop-10',
    slug: 'analyze-documents-with-ai',
    title: 'Analyze deal documents with AI',
    summary: 'Read deeds and probate files in minutes, not evenings.',
    description:
      'Document Analysis reads your uploaded documents and returns a summary, deal implications, risks, follow-up questions, citations, and suggested field updates.',
    steps: [
      {
        number: 1,
        title: 'Select up to 10 documents',
        description:
          'In the deal Overview → Documents, check the documents to analyze. Scanned PDFs and images are read with OCR.',
      },
      {
        number: 2,
        title: 'Analyze selected',
        description:
          'Curative sends the documents to your connected AI provider and streams the analysis back.',
      },
      {
        number: 3,
        title: 'Read the summary',
        description:
          'The drawer shows a plain-English overview, conflicts between documents, risks, missing information, and citations to the exact source pages.',
      },
      {
        number: 4,
        title: 'Apply fields',
        description:
          'Review suggested field updates — current value, proposed value, confidence, and reasoning — and apply only the ones you approve.',
      },
      {
        number: 5,
        title: 'Save to Notes',
        description:
          'Save the full analysis as an editable deal note so the findings live with the deal.',
      },
    ],
    whyItMatters:
      'A 40-page probate file has three facts that matter. AI analysis finds them, cites them, and offers to type them into your fields.',
  },
  {
    id: 'sop-11',
    slug: 'record-calls-get-transcripts',
    title: 'Record calls and get AI transcripts',
    summary: 'Every conversation captured, transcribed, and summarized.',
    description:
      'Record a call in the browser or upload audio. The AI transcribes it, summarizes the outcome, and feeds future underwriting runs.',
    steps: [
      {
        number: 1,
        title: 'Open the deal → Outreach → Call',
        description:
          'Click Record to capture the call in the browser, or upload an existing WebM, MP3, M4A, WAV, or MP4 file (up to 24 MB — roughly 100 minutes of browser recording).',
      },
      {
        number: 2,
        title: 'Let it transcribe',
        description:
          'Keep the deal page open until transcription finishes. Large files upload in resumable chunks with separate upload and transcription progress.',
      },
      {
        number: 3,
        title: 'Review the summary',
        description:
          'Click a saved call to open the transcript panel — an AI summary of the outcome, confirmed facts, and next steps sits above the full transcript.',
      },
      {
        number: 4,
        title: 'It feeds underwriting',
        description:
          'Completed transcripts are automatically included in future AI underwriting runs, newest calls first.',
      },
    ],
    whyItMatters:
      'The details heirs share on calls are the deal. Transcripts turn "I think she said..." into a searchable record.',
  },
  {
    id: 'sop-12',
    slug: 'send-imessages-from-deals',
    title: 'Send iMessages from a deal',
    summary: 'Pair your Mac once, text from the CRM forever.',
    description:
      'iMessage outreach sends through your own Mac using the Messages account already signed in — outbound-only, queued when the Mac is offline.',
    steps: [
      {
        number: 1,
        title: 'Settings → Integrations → Connect Mac',
        description:
          'Requires macOS 13+ with Messages signed in. Generate the secure setup file (the pairing code works once and expires in 10 minutes).',
      },
      {
        number: 2,
        title: 'Run the setup script',
        description:
          'Open Terminal, type "zsh " and drag the downloaded .sh file in, press Return, and approve access to Messages. The wizard flips to Connected automatically.',
      },
      {
        number: 3,
        title: 'Send from Outreach',
        description:
          "Pick iMessage in a deal's Outreach composer. Suggested numbers come from your fields and skip-trace results — DNC numbers are excluded.",
      },
      {
        number: 4,
        title: 'Watch the status',
        description:
          'Queued → Sending → Delivered badges track every message. If your Mac is offline, messages queue and send when it reconnects.',
      },
    ],
    whyItMatters:
      'Heirs answer blue bubbles. Sending from the CRM keeps the personal touch while the deal record stays complete.',
    proTip:
      'Each user pairs their own Mac — the connection can only send messages queued by that CRM login and can never read your Messages history.',
  },
  {
    id: 'sop-13',
    slug: 'skip-trace-your-leads',
    title: 'Skip trace your leads',
    summary: 'Owner phone numbers and emails, linked straight to the deal.',
    description:
      'Skip tracing looks up contact information for property owners from lead data, metered per lookup.',
    steps: [
      {
        number: 1,
        title: 'Select leads in a list',
        description: 'Pick one or many rows, then click Skip Trace.',
      },
      {
        number: 2,
        title: 'Confirm the cost estimate',
        description: 'Review the estimate before running. Usage and charges appear in Settings → Billing.',
      },
      {
        number: 3,
        title: 'Review the results',
        description:
          'Open the skip-trace status to see returned phone numbers, emails, and addresses — with litigator and Do Not Call indicators.',
      },
      {
        number: 4,
        title: 'Reach out',
        description:
          'Skip-traced contacts link automatically to their deals and appear as labeled suggestions in the Outreach composer. DNC numbers never appear as suggestions.',
      },
    ],
    whyItMatters:
      'A verified phone number is the difference between a lead and a conversation. Keeping results inside the CRM means no copy-paste and no compliance slip-ups.',
  },
  {
    id: 'sop-14',
    slug: 'run-risk-scorecard',
    title: 'Run the Five Fact Pattern Risk Scorecard',
    summary: 'A structured review before you commit capital.',
    description:
      'The Risk Scorecard is a five-pattern review — People & Personalities, Probate, Property, Title, and Taxes — scored by assigned reviewers.',
    steps: [
      {
        number: 1,
        title: 'Assign reviewers',
        description:
          'Reviewers see their assigned deals in the queue on the Review page. Admins can review any deal.',
      },
      {
        number: 2,
        title: 'Score each pattern',
        description:
          'Each fact pattern includes a checklist of research items — verify title vesting, confirm probate status, profile heirs, document property condition, check tax situations.',
      },
      {
        number: 3,
        title: 'Submit the decision',
        description:
          'Once all five patterns are scored, submit Approve, Deny, or Review (needs more info).',
      },
      {
        number: 4,
        title: 'See it everywhere',
        description:
          'The decision status shows on the deal card and in the right sidebar, and feeds the AI underwriting context.',
      },
    ],
    whyItMatters:
      'Five fact patterns is how disciplined curative buyers avoid the deal that looks cheap and costs a fortune.',
  },
  {
    id: 'sop-15',
    slug: 'manage-tags',
    title: 'Organize leads and deals with tags',
    summary: 'A controlled label library the whole team shares.',
    description:
      'Tags are workspace-approved labels — admins manage the library, everyone applies them, and they follow leads onto deals.',
    steps: [
      {
        number: 1,
        title: 'Admin: create the library',
        description:
          'Settings → Tags → enter a name, choose a color, create. No free-text tag sprawl — the library is the source of truth.',
      },
      {
        number: 2,
        title: 'Apply tags',
        description:
          "Tag an individual lead, bulk-tag a selection with Manage tags, or use the Tags control in a deal's right sidebar.",
      },
      {
        number: 3,
        title: 'Filter by tags',
        description:
          'In All Leads, include records matching any or all selected tags — and separately exclude tags.',
      },
      {
        number: 4,
        title: 'Route with confidence',
        description:
          'When a tagged lead routes to a board, its tags follow onto the resulting deal. Rename a tag once in Settings and it updates everywhere.',
      },
    ],
    whyItMatters:
      'Tags with stable IDs are the foundation for the upcoming automation builder — a clean library now means powerful rules later.',
  },
  {
    id: 'sop-16',
    slug: 'move-deal-across-boards',
    title: 'Move a deal across boards',
    summary: 'Promote a deal from research to acquisition without losing history.',
    description:
      'Deals move between boards with their fields, notes, documents, and timeline intact.',
    steps: [
      {
        number: 1,
        title: 'Open the deal',
        description: 'Open the deal detail from any board or Smart List.',
      },
      {
        number: 2,
        title: 'Header menu → Move to board',
        description: 'Pick the destination board.',
      },
      {
        number: 3,
        title: 'Land in the right stage',
        description: 'Choose the stage the deal enters on the new board.',
      },
      {
        number: 4,
        title: 'Audit trail',
        description:
          'The move is recorded on the deal timeline, so anyone can see when and why the deal changed lanes.',
      },
    ],
    whyItMatters:
      'Research boards and acquisition boards run different stages. Moving the deal — instead of recreating it — keeps one history per property.',
  },
  {
    id: 'sop-17',
    slug: 'configure-dashboard-standup',
    title: 'Configure your dashboard for the morning standup',
    summary: 'One screen that answers "where are we?" every morning.',
    description:
      'The Dashboard summarizes workspace activity — KPI tiles, the conversion funnel, and reminders grouped by urgency.',
    steps: [
      {
        number: 1,
        title: 'Dashboard → Customize',
        description: 'Choose which KPI tiles appear for your user account.',
      },
      {
        number: 2,
        title: 'Pin what matters',
        description:
          'Active and closed deal counts, pipeline values, outcomes, cash allocated — pick the numbers your standup actually discusses.',
      },
      {
        number: 3,
        title: 'Set the conversion funnel',
        description: 'Point the funnel at the board your team is driving this quarter.',
      },
      {
        number: 4,
        title: 'Run the standup',
        description:
          'Reminders group into overdue, due today, and coming soon — assign the overdue ones before the meeting ends.',
      },
    ],
    whyItMatters:
      'A standup that starts from the same screen every day takes ten minutes. One that starts from memory takes thirty.',
  },
  {
    id: 'sop-18',
    slug: 'quarterly-board-hygiene',
    title: 'Quarterly board hygiene',
    summary: 'Keep boards fast, stages honest, and fields lean.',
    description:
      'Once a quarter, prune what the team stopped using so the workspace reflects how you actually work now.',
    steps: [
      {
        number: 1,
        title: 'Review active boards',
        description:
          'Archive boards for campaigns that ended. Archived boards keep their data and can be restored.',
      },
      {
        number: 2,
        title: 'Run the conversion funnel',
        description:
          "Stages where deals pile up or teleport past are stages that don't match reality — rename, merge, or delete them.",
      },
      {
        number: 3,
        title: 'Reassign orphaned deals',
        description:
          'Deleting a stage moves its deals to the Orphaned Deals panel — sweep it to zero.',
      },
      {
        number: 4,
        title: 'Prune the field library',
        description:
          'In Settings → Fields, delete fields nobody fills and fold one-off fields into folders. Update presets so new boards start clean.',
      },
      {
        number: 5,
        title: 'Audit the tag library',
        description:
          'Settings → Tags shows usage counts per tag. Merge near-duplicates and delete the dead ones.',
      },
    ],
    whyItMatters:
      'CRMs rot from the edges — unused stages, stale fields, duplicate tags. An hour a quarter keeps the whole team trusting the data.',
  },
];

export const getSopBySlug = (slug: string): SOP | undefined => {
  return sops.find((sop) => sop.slug === slug);
};
