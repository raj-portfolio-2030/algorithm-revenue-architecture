export type Product = {
  id: string; name: string; kicker: string; thesis: string; message: string;
  icp: string[]; buyers: string[]; triggers: string[]; wedge: string;
  assess: string[]; motion: string[]; expansion: string[];
};

export const architecture = [
  { name: 'Land', intent: 'Create the first commercial foothold.', mechanisms: ['clinIQ, Regure or SentienGuard', 'Diagnostic or assessment', 'Pilot or focused engineering', 'Specialist resources where appropriate'] },
  { name: 'Expand', intent: 'Increase value inside the account.', mechanisms: ['More modules or locations', 'More workloads and users', 'Integrations and teams', 'Adjacent use cases'] },
  { name: 'Transform', intent: 'Move into higher-value programmes.', mechanisms: ['AI and data', 'Cloud and modernization', 'Compliance and agentic AI', 'Enterprise engineering'] },
  { name: 'Retain', intent: 'Create durable recurring value.', mechanisms: ['Managed infrastructure', 'AIOps and support', 'Customer success', 'Continuous engineering'] },
];

export const products: Product[] = [
  {
    id: 'cliniq', name: 'clinIQ', kicker: 'From clinic workflow to healthcare account',
    thesis: 'An operational layer connecting the patient journey from arrival to revenue.',
    message: 'Better visibility, smoother patient operations, reduced workflow friction and stronger revenue capture.',
    icp: ['Multi-provider specialty practices', 'Behavioral health & addiction medicine', 'Physical therapy, pain & orthopedics', 'Procedure centres & outpatient groups'],
    buyers: ['CEO / Practice Owner', 'COO / Practice Administrator', 'Operations & Revenue Cycle', 'Clinical Operations / IT & EHR'],
    triggers: ['Additional clinic locations', 'Patient-volume growth', 'Front-desk or pre-auth pressure', 'No-shows and fragmented workflows', 'RTM programme expansion'],
    wedge: 'Clinic Operations & Revenue Assessment',
    assess: ['Patient flow & waiting time', 'Intake, check-in & scheduling', 'No-shows & pre-authorisation', 'RTM opportunity', 'Communication workload & visibility'],
    motion: ['Account intelligence', 'Assessment', 'Workflow discovery', 'Tailored demo', 'Business case', 'Pilot / implementation', 'Adoption'],
    expansion: ['clinIQ', 'Locations / modules', 'EHR integration', 'Healthcare engineering', 'AI / data', 'Cloud', 'Managed infrastructure'],
  },
  {
    id: 'regure', name: 'Regure', kicker: 'Enter through workflow. Expand through insurance operations.',
    thesis: 'The operations and intelligence layer around the insurance core.',
    message: 'Keep the core where appropriate. Modernize the workflow, document and operational layer around it.',
    icp: ['MGAs & Lloyd’s coverholders', 'Specialty insurers & mid-market carriers', 'TPAs & brokers', 'Reinsurance organisations'],
    buyers: ['CEO / COO', 'Chief Claims Officer', 'Operations / Underwriting Operations', 'CIO / CTO / Architecture', 'Risk & Compliance'],
    triggers: ['Guidewire or core transformation', 'Claims backlog', 'New MGA or programme launch', 'Regulatory change', 'Document-heavy legacy workflow'],
    wedge: 'Insurance Workflow & Document Intelligence Workshop',
    assess: ['Claims automation', 'Document intelligence', 'Policy comparison & renewal', 'MGA operations', 'Core workflow extension'],
    motion: ['Named account', 'Trigger', 'Executive discovery', 'Workflow workshop', 'Use-case demo', 'Technical validation', 'Pilot', 'Production'],
    expansion: ['Regure', 'Core / Guidewire integration', 'Insurance engineering', 'AI / regulatory intelligence', 'Cloud', 'Managed infrastructure'],
  },
  {
    id: 'sentienguard', name: 'SentienGuard', kicker: 'From observability to infrastructure autonomy',
    thesis: 'An autonomous remediation layer designed to work with the infrastructure and observability environment already in place.',
    message: 'The commercial conversation starts with remediation, operational control and safely reducing repetitive infrastructure work.',
    icp: ['SaaS & cloud-native organisations', 'FinTech & HealthTech', 'Regulated technology companies', 'MSPs'],
    buyers: ['CIO / CTO', 'VP Engineering', 'Infrastructure / SRE', 'DevOps / Platform Engineering', 'Security & Compliance'],
    triggers: ['High MTTR or repetitive incidents', 'Alert fatigue and engineer toil', 'Cloud / Kubernetes expansion', 'SRE hiring pressure', 'Audit and operational control'],
    wedge: 'Infrastructure Autonomy Assessment',
    assess: ['Incident volume & repetition', 'MTTR & engineer hours', 'Alert noise', 'Existing tools and cloud environment', 'Safely automatable incident classes'],
    motion: ['Assessment', 'Trial / observation', 'Controlled remediation', 'Proof of value', 'Production', 'Environment expansion', 'Enterprise'],
    expansion: ['SentienGuard', 'Cloud engineering', 'AIOps', 'Managed infrastructure', 'Compliance', 'Modernization / AI'],
  },
];

export const services = [
  { name: 'Enterprise Modernization', trigger: 'Legacy technology, technical debt or stalled transformation', entry: 'Modernization Diagnostic', capabilities: 'Enterprise modernization · engineering' },
  { name: 'Production AI', trigger: 'AI pilot cannot move securely into production', entry: 'Production AI Acceleration', capabilities: 'AI platform engineering · data' },
  { name: 'Compliance Engineering', trigger: 'Regulatory, audit, security or delivery pressure', entry: 'Compliance-by-Architecture Assessment', capabilities: 'Compliance infrastructure · regulatory intelligence' },
  { name: 'Regulated Cloud', trigger: 'Migration, scale, infrastructure complexity or compliance', entry: 'Regulated Cloud Assessment', capabilities: 'Cloud infrastructure · migration · operations' },
  { name: 'Agentic AI', trigger: 'Need for autonomous or multi-step enterprise workflows', entry: 'Enterprise Agentic AI Discovery', capabilities: 'Agentic AI engineering · integration' },
  { name: 'Autonomous Infrastructure', trigger: 'Incident burden, SRE pressure or team overload', entry: 'Infrastructure Autonomy Assessment', capabilities: 'Self-healing · AIOps · managed infrastructure' },
];

export const markets = [
  { name: 'North America', role: 'Primary revenue engine', sectors: ['Healthcare', 'Insurance', 'Financial services', 'SaaS / technology', 'Regulated enterprise'], buyer: 'COO · CIO · CTO · business operations', trigger: 'Growth, platform change, compliance, cloud or AI initiative', entry: 'Vertical assessment, product wedge or focused engineering', fit: 'All three products + regulated engineering', expansion: 'Enterprise programme → managed services' },
  { name: 'UK', role: 'Strategic regulated market', sectors: ['Insurance', 'Financial services', 'Healthcare', 'Government', 'Regulated enterprise'], buyer: 'COO · Claims / Operations · CIO · Compliance', trigger: 'Core transformation, regulatory change or workflow friction', entry: 'Regure workshop or compliance / cloud diagnostic', fit: 'Regure + insurance and compliance engineering', expansion: 'Core integration → AI / cloud → managed' },
  { name: 'UAE / Gulf', role: 'Enterprise relationship market', sectors: ['Healthcare', 'Insurance / financial services', 'Government', 'AI / cloud transformation', 'Enterprise modernization'], buyer: 'Executive sponsor · CIO · transformation leader', trigger: 'Digital programme, expansion or modernization mandate', entry: 'Executive discovery and transformation diagnostic', fit: 'Engineering + clinIQ / Regure where relevant', expansion: 'Transformation programme → strategic account' },
  { name: 'India', role: 'Delivery ecosystem + selective revenue', sectors: ['Technology', 'Enterprise', 'Engineering partnerships', 'Selected product opportunities'], buyer: 'Technology leadership · operations · partner leadership', trigger: 'Specialist capacity, product expansion or delivery partnership', entry: 'Focused engineering or partner-led motion', fit: 'Engineering partnerships + selective products', expansion: 'Adjacent capability → longer-term delivery' },
];

export const accountSteps = ['ICP', 'Trigger', 'Account research', 'Buyer mapping', 'Executive outreach', 'Discovery', 'Business case', 'Solution', 'Proposal', 'Close', 'Delivery', 'Expand'];
export const accountFields = ['Industry', 'Geography', 'Scale', 'Technology environment', 'Regulatory exposure', 'Growth signal', 'Acquisition / funding signal', 'Transformation signal', 'Current vendors', 'Decision makers', 'Likely pain', 'Product fit', 'Service fit', 'Expansion potential', 'Relationship status'];
export const scoreWeights = [{ name: 'ICP Fit', weight: 25 }, { name: 'Trigger Strength', weight: 25 }, { name: 'Pain / Need', weight: 20 }, { name: 'Buyer Access', weight: 15 }, { name: 'Commercial Potential', weight: 15 }];

export const triggerExamples = [
  { sector: 'Healthcare', signal: 'Clinic expansion', pain: 'Operational complexity', offer: 'clinIQ assessment' },
  { sector: 'Insurance', signal: 'Core transformation', pain: 'Workflow / document friction', offer: 'Regure workshop' },
  { sector: 'Technology', signal: 'Cloud / Kubernetes expansion', pain: 'Incident burden', offer: 'SentienGuard assessment' },
  { sector: 'Enterprise', signal: 'Legacy platform', pain: 'Modernization requirement', offer: 'Modernization diagnostic' },
];

export const crossSell = [
  { name: 'Healthcare', steps: ['clinIQ', 'EHR / Integration', 'Healthcare Engineering', 'AI / Data', 'Cloud', 'Managed Infrastructure'] },
  { name: 'Insurance', steps: ['Regure', 'Core / Guidewire Integration', 'Insurance Engineering', 'AI / Regulatory Intelligence', 'Cloud', 'Managed Infrastructure'] },
  { name: 'Technology', steps: ['SentienGuard', 'Cloud Engineering', 'AIOps', 'Managed Infrastructure', 'Compliance', 'Modernization'] },
  { name: 'Services-first', steps: ['Focused Engineering', 'Adjacent Capability', 'Relevant Product', 'Managed Service', 'Strategic Account'] },
];

export const roadmap = [
  { range: '0–30', phase: 'Understand & validate', items: ['Audit existing customers and pipeline', 'Validate product positioning, ICP and pricing', 'Build account universe, buyer maps and trigger taxonomy', 'Assess CRM, collateral and baseline metrics', 'Review wins / losses where available'] },
  { range: '31–60', phase: 'Activate', items: ['Controlled named-account campaigns', 'Executive outreach and discovery', 'Assessments, workshops and product demos', 'Partner and founder-network activation', 'Pilot design and qualification'] },
  { range: '61–90', phase: 'Prove', items: ['Measure conversations, qualified opportunities and proposals', 'Progress pilots and first wins where cycle permits', 'Identify strongest ICP, market and offer', 'Measure response and conversion', 'Establish evidence for repeatability'] },
  { range: '90–180', phase: 'Build', items: ['Formalise repeatable outbound motions', 'Develop partner and channel engine', 'Create customer expansion and success process', 'Establish CRM governance and playbooks', 'Add sales capacity only where justified'] },
  { range: '180–365', phase: 'Scale', items: ['Vertical / market motions where economics justify', 'Strategic-account planning and cross-sell', 'Recurring managed revenue', 'Forecasting discipline and RevOps', 'Scale the team around proven motions'] },
];

export const scenarios = [
  { name: 'Foundation', value: '$0.9M', note: 'Illustrative new-business scenario', assumptions: ['A focused set of early product wins across selected motions', 'A small portfolio of entry engineering projects', 'Average deal values calibrated to internal pricing', 'Limited managed / expansion conversion in the period', 'Sales-cycle assumptions validated before operating use'] },
  { name: 'Base', value: '$2.5M', note: 'Illustrative planning scenario', assumptions: ['Broader product-win volume across priority ICPs', 'Multiple services projects with selected account expansion', 'Product ACV / ARR assumptions require internal validation', 'A portion of landed accounts move to managed or adjacent work', 'Conversion and cycle inputs remain adjustable'] },
  { name: 'Scale', value: '$5.9M', note: 'Illustrative scale scenario', assumptions: ['Higher product and services win volume', 'Larger engineering programmes alongside entry projects', 'More managed and expansion accounts', 'Cross-market execution only after early motion proof', 'Team capacity grows behind demonstrated conversion'] },
];

export const operatingModel = [
  { name: 'Market strategy', owns: 'Market selection · ICP · positioning · offers' },
  { name: 'Account acquisition', owns: 'Research · ABM · outbound · referrals · partners' },
  { name: 'Discovery', owns: 'Business conditions · pain · timing · buyer alignment' },
  { name: 'Solution & closure', owns: 'Business case · solution · proposal · negotiation' },
  { name: 'Customer success', owns: 'Adoption · feedback · risk · renewal' },
  { name: 'Expansion', owns: 'Cross-sell · upsell · teams · geographies' },
  { name: 'Partnerships', owns: 'Technology ecosystems · consultants · channels' },
  { name: 'Revenue intelligence', owns: 'Conversion · velocity · cycle · market feedback' },
];

export const teamStages = [
  { stage: 'Stage 1', phase: 'Prove', roles: ['Commercial / GTM Lead', 'CEO / founder technical credibility', 'Shared solution and delivery resources'] },
  { stage: 'Stage 2', phase: 'Build', roles: ['GTM Lead', '1–2 BDR / SDR', 'AE / product / enterprise seller', 'Shared solutions engineer', 'Shared customer success'] },
  { stage: 'Stage 3', phase: 'Scale', roles: ['Revenue / GTM leadership', 'Product and enterprise services sales', 'BDR / SDR', 'Solutions engineering', 'Customer success', 'Partnerships / RevOps'] },
];

export const experience = [
  { org: 'TC+LIMS', work: ['Pump Testing & Gauge Room Integration', 'ATL Labs Laboratory Digitization', 'Suhana Foods Quality Management Platform'], themes: 'Discovery · workflow mapping · SaaS positioning · solution alignment · product feedback' },
  { org: 'InfoCodec', work: ['Guidewire Insurance Platform Resource Augmentation', 'Openlink ETRM Energy Trading Technology Partnership', 'Harvest Production Operations ERP'], themes: 'Niche requirements · insurance technology · resource augmentation · enterprise solution selling' },
  { org: 'Metafic', work: ['B2B Food & Beverage Marketplace', 'AI Translation Bot'], themes: 'Custom software · AI · requirements · stakeholder discovery · commercial closure support' },
];

export const playbooks = [
  {
    number: '01', name: 'Master Revenue Architecture', file: '/downloads/master-revenue-architecture.pdf', ready: true,
    description: 'The complete commercial system connecting products, engineering, markets, acquisition, expansion, team design and scenarios.',
    summary: 'A board-level blueprint for converting The Algorithm’s product and engineering capability into a connected, repeatable revenue system.',
    covers: 'The central commercial thesis, product and services motions, market priorities, account acquisition, cross-sell, team design and planning scenarios.',
    reader: 'CEO, founders, commercial leadership and senior delivery stakeholders.',
    sections: ['Executive revenue thesis', 'LAND → EXPAND → TRANSFORM → RETAIN', 'Product and services engines', 'Market and account strategy', 'Operating roadmap', 'Revenue scenarios'],
    type: 'Master strategy document',
  },
  {
    number: '02', name: 'clinIQ GTM Playbook', file: '/downloads/cliniq-gtm-playbook.pdf', ready: true,
    description: 'Healthcare ICP, buyer, trigger, assessment, sales motion, adoption and account-expansion architecture.',
    summary: 'A focused go-to-market system for positioning clinIQ as the operational layer around the patient journey and clinic revenue workflow.',
    covers: 'Healthcare segmentation, buying committees, operational triggers, discovery, demonstration, implementation, adoption and engineering cross-sell.',
    reader: 'Healthcare product sellers, GTM leaders, practice-operations specialists and solutions teams.',
    sections: ['ICP and market prioritisation', 'Buyer pain and trigger events', 'Clinic Operations & Revenue Assessment', 'Discovery and demo strategy', 'Adoption and customer success', 'Healthcare account expansion'],
    type: 'Product GTM playbook',
  },
  {
    number: '03', name: 'Regure GTM Playbook', file: '/downloads/regure-gtm-playbook.pdf', ready: true,
    description: 'Insurance operations, MGA and core-ecosystem account strategy from workflow wedge to enterprise expansion.',
    summary: 'An enterprise GTM playbook for entering through insurance workflow friction and expanding around the existing core environment.',
    covers: 'Insurance segments, executive buyers, document and claims workflows, core-platform coexistence, pilots, production rollout and engineering expansion.',
    reader: 'Insurance GTM teams, enterprise sellers, solution consultants and insurance-technology leaders.',
    sections: ['Insurance market architecture', 'MGA and buyer segmentation', 'Workflow and document wedges', 'Core-platform ecosystem motion', 'Pilot and technical validation', 'Insurance engineering cross-sell'],
    type: 'Product GTM playbook',
  },
  {
    number: '04', name: 'SentienGuard GTM Playbook', file: '/downloads/sentienguard-gtm-playbook.pdf', ready: true,
    description: 'AIOps category, autonomy assessment, controlled-remediation motion and enterprise conversion plan.',
    summary: 'A GTM system for moving the infrastructure conversation from observability toward controlled, auditable remediation and operational autonomy.',
    covers: 'Infrastructure maturity, buyer pain, incident economics, assessment, observation mode, proof of value, enterprise conversion and managed-services expansion.',
    reader: 'AIOps sellers, CTO and SRE-facing teams, platform consultants and managed-services leaders.',
    sections: ['AIOps category thesis', 'Infrastructure ICP and buyers', 'Incident and toil taxonomy', 'Infrastructure Autonomy Assessment', 'Controlled remediation proof', 'Enterprise and MSP expansion'],
    type: 'Product GTM playbook',
  },
  {
    number: '05', name: 'Algorithm IT Services GTM Playbook', file: '/downloads/it-services-gtm-playbook.pdf', ready: true,
    description: 'Problem-led engineering plays, account research, discovery, commercial closure and strategic expansion.',
    summary: 'The problem-led commercial playbook for selling engineering outcomes across AI, cloud, data, modernization, compliance and managed infrastructure.',
    covers: 'Services positioning, vertical and market strategy, entry offers, account research, technical discovery, proposals, delivery handoff and strategic expansion.',
    reader: 'Enterprise services sellers, commercial leaders, solutions teams, delivery leadership and account managers.',
    sections: ['Services category positioning', 'Problem-led revenue plays', 'Account and trigger intelligence', 'Commercial and technical discovery', 'Proposal and delivery handoff', 'Account expansion and managed revenue'],
    type: 'Enterprise services GTM playbook',
  },
  {
    number: '06', name: 'Executive Strategy Brief', file: '/downloads/executive-strategy-brief.pdf', ready: true,
    description: 'A concise boardroom summary of the commercial thesis, priorities and operating sequence.',
    summary: 'A concise executive readout of the revenue architecture, why it matters and the sequence for proving a repeatable commercial motion.',
    covers: 'The opportunity, the proposed commercial shift, priority growth engines, market focus, roadmap and leadership model.',
    reader: 'CEO, founders, board members and senior commercial or technology stakeholders.',
    sections: ['Commercial opportunity', 'Revenue architecture', 'Growth engines', 'Market priorities', '90 / 180 / 365 roadmap', 'Operating principles'],
    type: 'Executive briefing document',
  },
  {
    number: '07', name: '10-Slide Executive Presentation', file: '/downloads/executive-presentation.pdf', ready: true,
    description: 'A condensed narrative for discussing the revenue architecture with executive stakeholders.',
    summary: 'A presentation-ready narrative that compresses the strategy into ten clear discussion points for an executive conversation.',
    covers: 'The opportunity, existing capability, commercial shift, product motions, markets, architecture, cross-sell, roadmap and operating vision.',
    reader: 'CEO, founders, executive teams, potential commercial partners and strategic stakeholders.',
    sections: ['The opportunity', 'What we already have', 'Three product motions', 'Where we play', 'Revenue and cross-sell architecture', 'Roadmap and operating vision'],
    type: 'Executive presentation',
  },
];
