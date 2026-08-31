export type EvidenceState = 'Documented Fact' | 'Evidence-backed Market Indicator' | 'Commercial Hypothesis' | 'CEO Input Required';

export type EvidenceItem = { state: EvidenceState; text: string; source?: string };

export type LibraryAsset = {
  id: string; number: string; name: string; file: string; ready: boolean;
  format: 'PDF' | 'PPTX'; version: string; description: string; summary: string;
  covers: string; reader: string; sections: string[]; type: string;
};

export type Product = {
  id: 'cliniq' | 'regure' | 'sentienguard'; name: string; label: string;
  understanding: string; operationalProblem: string; industryFocus: string;
  bestFitIcp: string[]; markets: string[];
  committee: { role: string; buyer: string; motivation: string; concern: string }[];
  incumbent: { system: string; boundary: string; message: string };
  triggers: string[]; whyTheyBuy: string[];
  competitors: { name: string; stronger: string; wedge: string; avoid: string }[];
  objections: { objection: string; response: string }[];
  entryWedge: string; firstProof: string[]; conversation: string[]; discovery: string[];
  methodology: string; businessCase: string[]; pricingContext: string[];
  scaleVariables: string[]; graduationTriggers: string[]; expansionPath: string[];
  engineeringAdjacency: string; managedAdjacency: string; gaps: string[];
  targets: { company: string; fact: string; hypothesis: string; question: string }[];
  marketIndicator: EvidenceItem; assetId: string;
};

export const evidenceStates: { state: EvidenceState; meaning: string }[] = [
  { state: 'Documented Fact', meaning: 'Directly supported by supplied material or a cited public source.' },
  { state: 'Evidence-backed Market Indicator', meaning: 'Useful category context, never an Algorithm revenue forecast.' },
  { state: 'Commercial Hypothesis', meaning: 'A testable account or market proposition, not a conclusion.' },
  { state: 'CEO Input Required', meaning: 'Internal truth is missing and must not be inferred.' },
];

export const opportunityEngines = [
  { number: '01', name: 'Product IP', detail: 'clinIQ, Regure and SentienGuard create distinct entry points.' },
  { number: '02', name: 'Regulated Engineering', detail: 'Compliance-native modernization, AI, cloud and data create account depth.' },
  { number: '03', name: 'Managed Infrastructure', detail: 'Operational ownership can create continuity when the requirement justifies it.' },
  { number: '04', name: 'Existing Relationships', detail: 'Earned trust should be audited before assuming growth depends only on new logos.' },
];

export const discussionContext: EvidenceItem[] = [
  { state: 'Documented Fact', text: 'Three product engines and a broad regulated-engineering capability are documented in the supplied materials.' },
  { state: 'Commercial Hypothesis', text: 'Founder, network and referral-led acquisition can be strengthened with systematic account intelligence.' },
  { state: 'CEO Input Required', text: 'Existing service relationships require a structured audit; identities, scope, proof and expansion potential remain unconfirmed.' },
  { state: 'CEO Input Required', text: 'Current customer counts, revenue, margins, pipeline, conversion, capacity and referenceable outcomes are not supplied.' },
];

export const commercialLifecycle = [
  ['Understand', 'Product and service truth, ICP and proof boundaries'],
  ['Prioritize', 'Markets, verticals and account tiers'],
  ['Identify', 'Verified trigger and account hypothesis'],
  ['Engage', 'Value-first executive outreach'],
  ['Diagnose', 'Business impact, critical event and economic case'],
  ['Convert', 'Technical validation, buying process and commercial closure'],
  ['Expand', 'Modules, sites, workflows, engineering and managed services'],
  ['Retain', 'Value governance, renewal and strategic-account development'],
];

export const accountValueLifecycle = [
  ['Land', 'Solve one contained and measurable problem.'],
  ['Expand', 'Increase product, workflow, site, team or environment scope.'],
  ['Transform', 'Address deeper integration, data, cloud, AI or compliance requirements.'],
  ['Retain', 'Keep value visible through adoption, executive review and continuous improvement.'],
];

export const valueLayers = [
  { name: 'Product ARR', purpose: 'Create a repeatable product relationship.', trigger: 'Validated operational fit and adoption.', proof: 'Customer-specific workflow evidence.', next: 'Modules, sites, users or environments.' },
  { name: 'Implementation', purpose: 'Configure the product around the real operating workflow.', trigger: 'Deployment and integration requirements.', proof: 'Acceptance criteria and adoption baseline.', next: 'Broader rollout or integration.' },
  { name: 'Custom Engineering', purpose: 'Solve requirements outside clean product configuration.', trigger: 'Data, integration, AI, cloud or compliance complexity.', proof: 'Defined outcome and technical boundary.', next: 'Transformation programme.' },
  { name: 'Managed Infrastructure', purpose: 'Own recurring operational responsibility where justified.', trigger: 'Ongoing reliability, platform or support requirement.', proof: 'Clear service boundary and governance.', next: 'Continuous optimization.' },
  { name: 'Account Expansion', purpose: 'Grow the relationship around newly evidenced problems.', trigger: 'Adoption, scale or adjacent operational friction.', proof: 'Executive review and customer-owned priority.', next: 'Multi-workstream account plan.' },
  { name: 'Strategic Account', purpose: 'Coordinate durable, multi-engine value.', trigger: 'Multiple validated workstreams and executive sponsorship.', proof: 'Shared roadmap, governance and realized value.', next: 'Retention and referenceability.' },
];

export const libraryAssets: LibraryAsset[] = [
  {
    id: 'cliniq-playbook', number: '01', name: 'clinIQ GTM Playbook', file: 'downloads/cliniq-gtm-playbook-v2-3.pdf', ready: true, format: 'PDF', version: 'V2.3',
    description: 'Clinic-operations growth motion for active US, UAE, UK and Saudi Arabia markets. India excluded.',
    summary: 'A trigger-led enterprise growth system for positioning clinIQ as the operational layer around the clinic journey and existing EHR or PAS.',
    covers: 'Industry focus, ICP, buying committee, workflow triggers, competitive boundaries, diagnosis, business-case scoping, proof and account expansion.',
    reader: 'Healthcare commercial leaders, clinic-operations teams, product leadership and solution specialists.',
    sections: ['Executive understanding', 'ICP and buying committee', 'Trigger intelligence', 'Competitive intelligence', 'Business-case scoping', 'Enterprise monetization and expansion'], type: 'Product GTM playbook',
  },
  {
    id: 'regure-playbook', number: '02', name: 'Regure GTM Playbook', file: 'downloads/regure-gtm-playbook-v2-3.pdf', ready: true, format: 'PDF', version: 'V2.3',
    description: 'Insurance workflow and document intelligence around the existing core platform.',
    summary: 'An enterprise motion for entering through one claims or document workflow without forcing unnecessary core replacement.',
    covers: 'Insurance ICP, Guidewire and Duck Creek adjacency, claims-document triggers, business-case models, guided proof and enterprise value drivers.',
    reader: 'Insurance operations leaders, enterprise sellers, claims transformation teams and solution architects.',
    sections: ['Commercial position', 'Buyer committee', 'Adjacent monopoly boundary', 'Competitive intelligence', 'Five-stage sales process', 'Enterprise monetization and expansion'], type: 'Product GTM playbook',
  },
  {
    id: 'sentienguard-playbook', number: '03', name: 'SentienGuard GTM Playbook', file: 'downloads/sentienguard-gtm-playbook-v2-3.pdf', ready: true, format: 'PDF', version: 'V2.3',
    description: 'Autonomous remediation and controlled self-healing infrastructure growth motion.',
    summary: 'A product-led path from technical validation to controlled remediation, fleet governance, cloud engineering and managed infrastructure.',
    covers: 'PQA signals, trust progression, incident economics, competitive positioning, proof requirements, Fleet or MSP graduation and account depth.',
    reader: 'CTO, platform, SRE and infrastructure leaders plus enterprise commercial teams.',
    sections: ['Remediation-first position', 'PQA signals', 'Trigger intelligence', 'Competitive intelligence', 'Observe to approve to automate', 'Enterprise monetization and expansion'], type: 'Product GTM playbook',
  },
  {
    id: 'engineering-playbook', number: '04', name: 'Regulated Engineering GTM Playbook', file: 'downloads/regulated-engineering-gtm-playbook-v2-2.pdf', ready: true, format: 'PDF', version: 'V2.2',
    description: 'Compliance-native engineering, modernization and managed infrastructure. Outcome, not capacity.',
    summary: 'A problem-led commercial system for surgical-strike engineering in regulated and expensive-to-get-wrong environments.',
    covers: 'Priority plays, competitive frame, compliance-by-architecture, fixed price versus T&M, recovery motion, scoring and installed-base expansion.',
    reader: 'CEO, CTO, CIO, risk, transformation, delivery and enterprise-commercial stakeholders.',
    sections: ['Positioning', 'Priority surgical-strike plays', 'Competitive frame', 'Compliance-by-architecture', 'Failed modernization recovery', 'Existing-customer expansion'], type: 'Regulated engineering playbook',
  },
  {
    id: 'master-architecture', number: '05', name: 'Master Commercial Growth Architecture', file: 'downloads/master-commercial-growth-architecture-v2-3.pdf', ready: true, format: 'PDF', version: 'V2.3',
    description: 'The unified operating system for products, regulated engineering, account intelligence and expansion.',
    summary: 'The complete architecture connecting market focus, triggers, diagnosis, conversion, expansion, retention and commercial ownership.',
    covers: 'All four commercial engines, account scoring, pipeline discipline, installed-base strategy, partners, readiness, leading indicators and the 180-day plan.',
    reader: 'CEO, founders, commercial leadership, product leadership and senior engineering stakeholders.',
    sections: ['Strategic direction', 'Unified operating system', 'Four commercial engines', 'Account acquisition and scoring', 'Pipeline and expansion', '180-day execution and ownership'], type: 'Master strategy document',
  },
  {
    id: 'executive-brief', number: '06', name: 'Executive Strategy Brief', file: 'downloads/executive-strategy-brief-v2-3.pdf', ready: true, format: 'PDF', version: 'V2.3',
    description: 'A concise CEO readout of the commercial direction, priorities and operating sequence.',
    summary: 'A five-minute leadership brief explaining the opportunity, system, first focus areas, selling discipline and enterprise expansion logic.',
    covers: 'Operating direction, engine priorities, trigger-based acquisition, discovery, pipeline, ownership, 180-day execution and success indicators.',
    reader: 'CEO, founders, board members and senior commercial or technology stakeholders.',
    sections: ['The opportunity', 'Commercial system', 'Where to focus first', 'How to sell', 'What commercial ownership means', 'Enterprise entry and expansion'], type: 'Executive strategy brief',
  },
  {
    id: 'executive-presentation', number: '07', name: 'Executive 10-Slide Presentation', file: 'downloads/executive-presentation-v2-2.pptx', ready: true, format: 'PPTX', version: 'V2.2',
    description: 'The leadership conversation deck that complements the website without duplicating it.',
    summary: 'A concise ten-slide conversation aid covering what was heard, what is understood, where to start and how to create qualified traction.',
    covers: 'The opportunity, four engines, market focus, account scoring, outreach discipline, diagnosis, expansion, ownership and first 180 days.',
    reader: 'CEO and leadership stakeholders using the website as the detailed operating source of truth.',
    sections: ['What I heard', 'Four commercial engines', 'Where to start', 'How to find revenue', 'How to convert and expand', 'First 180 days'], type: 'Executive presentation',
  },
];

export const products: Product[] = [
  {
    id: 'cliniq', name: 'clinIQ', label: 'Clinic operations growth engine',
    understanding: 'clinIQ is an operational layer around the existing EHR or PAS. It connects patient flow, digital check-in, scheduling, analytics, RTM, pre-authorization, telehealth, messaging and related clinic workflows.',
    operationalProblem: 'Patient access, scheduling, front-desk work, RTM, pre-authorization, patient flow, revenue workflow and integration complexity can remain fragmented around the system of record.',
    industryFocus: 'Multi-location outpatient and specialty clinic networks, behavioral health, addiction medicine, psychiatry, pain, physical therapy and rehabilitation, surgery and procedure centers, urgent care, primary and specialty care, FQHC, community and rural health where fit is validated.',
    bestFitIcp: ['Specialty practices with visible front-office, RTM or pre-authorization friction', 'Multi-location groups with 10 to 100+ providers', 'Ambulatory networks where a contained specialty or site pilot is possible'],
    markets: ['United States', 'UAE', 'United Kingdom', 'Saudi Arabia'],
    committee: [
      { role: 'Economic buyer', buyer: 'Practice owner, COO, Managing Director or VP Operations', motivation: 'Capacity, consistency and operating visibility', concern: 'Value proof and change burden' },
      { role: 'Technical / compliance', buyer: 'CIO, health informatics, IT, security or EHR administration', motivation: 'Reliable workflow integration', concern: 'Security, data flow and EHR dependencies' },
      { role: 'Operational champion', buyer: 'Practice manager, clinic operations or service-line leader', motivation: 'Less manual friction and better flow', concern: 'Adoption and day-to-day disruption' },
      { role: 'Procurement / blocker', buyer: 'Finance, legal, procurement or incumbent platform owner', motivation: 'Controlled risk and commercial clarity', concern: 'Duplication and implementation scope' },
    ],
    incumbent: { system: 'EHR / PAS / practice-management system', boundary: 'Keep the clinical or administrative record system. Address workflow and operational gaps around the encounter.', message: 'Do not replace the record unnecessarily. Prove the workflow layer around it.' },
    triggers: ['New clinics, acquisitions or multi-site expansion', 'Specialty, behavioral-health, PT or procedure-line growth', 'Patient-access, RCM, RTM, pre-authorization or EHR initiative'],
    whyTheyBuy: ['Standardize clinic operations as locations scale', 'Reduce measurable administrative burden', 'Improve visibility into flow, capacity and revenue-related workflow'],
    competitors: [
      { name: 'Phreesia', stronger: 'Scale, enterprise proof and broad patient-access or payments footprint', wedge: 'Whole clinic-operations layer including live flow plus relevant RTM or pre-authorization', avoid: 'Do not claim broader platform superiority without account-specific proof' },
      { name: 'Clearwave', stronger: 'AI patient engagement, scheduling, eligibility, check-in and payments', wedge: 'Operational floor visibility and specialty workflow combination', avoid: 'Do not reduce the incumbent to a kiosk comparison' },
      { name: 'EHR-native workflow', stronger: 'Bundling and incumbent trust', wedge: 'Solve evidenced operational gaps without replacing the record', avoid: 'Do not assume every EHR lacks equivalent capability' },
    ],
    objections: [
      { objection: 'Our EHR already does this.', response: 'Map the exact workflow boundary first. Proceed only if a measurable operational gap remains.' },
      { objection: 'Another system will add workload.', response: 'Start with one contained workflow and define adoption and integration evidence before expansion.' },
      { objection: 'The value case is unclear.', response: 'Use customer-provided capacity, labor, no-show or workflow inputs before proposing a solution.' },
    ],
    entryWedge: 'Clinic Operations & Revenue Assessment',
    firstProof: ['Customer baseline for one site, specialty, module or workflow', 'Workflow time, capacity utilization or administrative burden', 'Adoption evidence and agreed success criteria'],
    conversation: ['Verified expansion or operations trigger', 'Hypothesis about where standardization may break', 'Executive question before any demonstration', 'Patient-flow or workflow bottleneck map', 'Low-friction assessment next step'],
    discovery: ['Where does patient access or workflow break as locations scale?', 'Which tasks remain manual around the EHR?', 'What baseline would prove operational improvement?', 'What event makes the issue important now?'],
    methodology: 'SPICED for diagnosis, MEDDPICC for larger enterprise deals, Challenger when incumbent inertia blocks examination of the workflow gap.',
    businessCase: ['Unused slots x operating days x customer-provided contribution per visit', 'Weekly administrative hours x loaded rate x 52', 'Missed visits x realistic recoverable percentage x customer-provided contribution'],
    pricingContext: ['$249 monthly Starter up to 500 patients', '$499 monthly Professional up to 2,000 patients', 'Enterprise custom with unlimited patients, pre-authorization, custom integrations, dedicated success and SLA', '$750 implementation; EHR integration custom'],
    scaleVariables: ['Patient volume', 'Locations and providers', 'Modules and operational scope', 'EHR and API complexity', 'Enterprise SLA and support', 'Multi-site standardization'],
    graduationTriggers: ['Additional sites or specialties', 'Patient volume beyond public tiers', 'Pre-authorization or custom integration', 'Enterprise support, SLA or standardization requirement'],
    expansionPath: ['Enterprise entry', 'Prove value', 'Add modules, providers or sites', 'Integrate EHR or APIs', 'Healthcare data, AI or cloud engineering where justified', 'Managed infrastructure where ongoing ownership is required'],
    engineeringAdjacency: 'Custom EHR or API work, healthcare data, AI, cloud or compliance requirements that extend beyond standard product configuration.',
    managedAdjacency: 'Ongoing operational ownership only when deployment scale, support, cloud or reliability requirements create a real service boundary.',
    gaps: ['Enterprise ACV and discount authority', 'Implementation margin and capacity', 'Referenceable outcomes and renewal history', 'Production EHR depth by vendor', 'Current security and compliance artefacts'],
    targets: [],
    marketIndicator: { state: 'Evidence-backed Market Indicator', text: 'Patient-engagement category growth supports investigation in active markets, but category size is not clinIQ revenue.', source: 'Supplied clinIQ GTM Playbook V2.3' },
    assetId: 'cliniq-playbook',
  },
  {
    id: 'regure', name: 'Regure', label: 'Insurance operations growth engine',
    understanding: 'Regure can run as a claims platform or sit alongside an existing insurance core. Its strongest enterprise wedge is document intelligence, workflow orchestration and collaboration around systems such as Guidewire and Duck Creek.',
    operationalProblem: 'Claims, policy and compliance work can remain trapped in documents, email, spreadsheets, portals and manual exception queues around the core platform.',
    industryFocus: 'Brokers and agencies, MGAs, carriers, TPAs, Lloyd\'s and specialty insurance plus compliance teams across property, auto, health, casualty, commercial-lines and catastrophe workflows.',
    bestFitIcp: ['Growth MGAs, coverholders, TPAs and specialty brokers', 'Regional or specialty insurers and carriers', 'Large carriers or Lloyd\'s participants with contained workflow gaps around a core'],
    markets: ['United States', 'United Kingdom / Ireland', 'EU', 'Middle East', 'India where account fit is validated'],
    committee: [
      { role: 'Economic buyer', buyer: 'CEO, COO, Chief Claims Officer or Claims Director', motivation: 'Throughput, control and operating leverage', concern: 'Business disruption and measurable value' },
      { role: 'Technical / compliance', buyer: 'CIO, CTO, architecture, security or compliance', motivation: 'Extend the core safely', concern: 'Integration, data residency and governance' },
      { role: 'Operational champion', buyer: 'Claims operations or transformation lead', motivation: 'Reduce manual queues and improve collaboration', concern: 'Exception handling and adoption' },
      { role: 'Procurement / blocker', buyer: 'Core-platform owner, risk, legal or procurement', motivation: 'Protect existing investment', concern: 'Duplicate functionality and vendor risk' },
    ],
    incumbent: { system: 'Guidewire, Duck Creek or another insurance core', boundary: 'Keep the claim, policy, billing, reserve or payment system of record. Extend document, collaboration and selected workflow layers around it.', message: 'Do not replace the core unnecessarily. Automate the operational layer around the system the customer already has.' },
    triggers: ['Guidewire, Duck Creek or core transformation', 'Claims AI, automation or document initiative', 'Regulatory, audit, resilience or compliance-evidence programme'],
    whyTheyBuy: ['Reduce measurable document and backlog labor', 'Orchestrate workflows outside the core', 'Improve traceability and compliance-evidence assembly'],
    competitors: [
      { name: 'Sprout.ai', stronger: 'Claims AI and automation specialization', wedge: 'Broader workflow and core coexistence where validated', avoid: 'Do not claim better AI without benchmark evidence' },
      { name: 'Five Sigma', stronger: 'AI-native claims management system', wedge: 'Fit where the buyer wants augmentation rather than full replacement', avoid: 'Qualify replacement versus extension early' },
      { name: 'Hyperscience', stronger: 'High-volume document automation', wedge: 'Insurance workflow orchestration around document intelligence', avoid: 'If extraction alone is the problem, a specialist may fit better' },
    ],
    objections: [
      { objection: 'We are already investing in the core.', response: 'Protect that investment and identify only the workflows that remain outside it.' },
      { objection: 'This can be built inside the core.', response: 'Compare time, governance and custom-core burden against a bounded adjacent layer.' },
      { objection: 'AI accuracy creates risk.', response: 'Start with a specific document and exception workflow, define human controls and measure production evidence.' },
    ],
    entryWedge: 'Claims Workflow Friction Assessment or guided pilot',
    firstProof: ['One claims or document workflow, department or line of business', 'Baseline volume, manual minutes, backlog or compliance effort', 'Integration boundary, exception handling and user adoption'],
    conversation: ['Verified core or claims-transformation trigger', 'Hypothesis about work remaining outside the core', 'Executive question about manual queues', 'Workflow friction map', 'Contained workshop or guided pilot'],
    discovery: ['What still happens in email, documents or manual queues?', 'Which workflow is costly but bounded enough to prove?', 'What must remain inside the core?', 'What compliance or operational event creates urgency?'],
    methodology: 'SPICED for impact and critical event, MEDDPICC for enterprise buying risk, Challenger to reframe unnecessary custom work inside the core.',
    businessCase: ['Documents per year x manual minutes / 60 x loaded rate', 'Backlog claims x manual hours x loaded rate, annualized when recurring', 'Internal evidence-preparation hours plus verified external cost'],
    pricingContext: ['$75 per user monthly Starter for 10 to 50 users', '$150 per user monthly Professional for 50 to 200 users', '$225 per user monthly Enterprise for 200+ users', 'Annual and volume discounts plus guided pilot documented'],
    scaleVariables: ['Users', 'Workflows and lines of business', 'Claims and document complexity', 'Custom APIs', 'Private cloud', 'Regional and data-residency requirements', 'Governance and enterprise support'],
    graduationTriggers: ['200+ users', 'Custom workflow development or APIs', 'Private-cloud or white-label requirement', 'Multi-region or multi-entity governance', '24/7 support or dedicated success'],
    expansionPath: ['Enterprise entry', 'Prove one workflow', 'Add users, documents and lines of business', 'Integrate the core and custom APIs', 'Insurance AI, data or compliance engineering where justified', 'Cloud operations where ongoing ownership is required'],
    engineeringAdjacency: 'Custom core integration, insurance data or AI, compliance architecture and cloud requirements that no longer fit clean product configuration.',
    managedAdjacency: 'Workflow optimization, support or cloud operations only when the operating requirement is recurring and explicitly owned.',
    gaps: ['Actual enterprise ACV and custom-development pricing', 'Gross margin and discount authority', 'Referenceable deployments and accuracy evidence', 'Supported core versions and production integration depth', 'Historical expansion and services attachment'],
    targets: [],
    marketIndicator: { state: 'Evidence-backed Market Indicator', text: 'Insurance analytics category estimates indicate demand context. Regure serviceability still depends on workflow fit, incumbent cores and procurement readiness.', source: 'Supplied Regure GTM Playbook V2.3' },
    assetId: 'regure-playbook',
  },
  {
    id: 'sentienguard', name: 'SentienGuard', label: 'Infrastructure autonomy growth engine',
    understanding: 'SentienGuard is the remediation layer after monitoring: detect, diagnose, execute, verify and prove. It can begin read-only, move to human approval and automate proven playbooks while coexisting with the observability stack.',
    operationalProblem: 'Monitoring can identify an incident while engineers still perform repetitive diagnosis and known fixes manually. Trust, authority, security, change control and verification can block safe automation.',
    industryFocus: 'SaaS, FinTech, HealthTech, e-commerce and digital platforms, cloud-native technology companies, regulated infrastructure teams and MSPs with meaningful SRE, on-call and multi-environment operations.',
    bestFitIcp: ['Cloud-native organizations with repetitive incident remediation', 'Regulated technology teams requiring controlled authority and audit evidence', 'MSPs managing multiple organizations or client fleets'],
    markets: ['United States', 'UAE', 'United Kingdom', 'India where cloud and SRE triggers justify action'],
    committee: [
      { role: 'Economic buyer', buyer: 'CTO, CIO, VP Engineering or VP Infrastructure', motivation: 'Operational leverage and reliable production', concern: 'Risk of autonomous change' },
      { role: 'Technical / compliance', buyer: 'Platform, SRE, DevOps, security or change-control leadership', motivation: 'Controlled remediation and evidence', concern: 'Credentials, failure modes and rollback' },
      { role: 'Operational champion', buyer: 'SRE, platform or on-call team lead', motivation: 'Reduce repetitive incident toil', concern: 'Noise, trust and playbook quality' },
      { role: 'Procurement / blocker', buyer: 'Security, risk, procurement or MSP governance', motivation: 'Auditable enterprise control', concern: 'Multi-tenancy, retention and support' },
    ],
    incumbent: { system: 'Datadog, PagerDuty, Prometheus, Grafana, Dynatrace or equivalent observability', boundary: 'Keep monitoring and telemetry. SentienGuard addresses the controlled resolution layer after detection.', message: 'Monitoring detects. Controlled remediation closes the loop.' },
    triggers: ['Kubernetes, cloud, region or infrastructure-footprint growth', 'Reliability initiative, on-call pressure or repetitive incidents', 'Compliance, audit or change-control requirement'],
    whyTheyBuy: ['Reduce customer-verified incident toil', 'Move known fixes through a controlled trust ladder', 'Create governance across environments, teams or client organizations'],
    competitors: [
      { name: 'PagerDuty', stronger: 'Incident response ecosystem, orchestration and enterprise adoption', wedge: 'Remediation-first closed loop with verification and rollback where validated', avoid: 'Do not claim PagerDuty cannot automate' },
      { name: 'BigPanda', stronger: 'Event correlation and incident intelligence', wedge: 'Execute and verify after correlation', avoid: 'Lead cautiously when correlation is the primary pain' },
      { name: 'Scripts, Ansible or Rundeck', stronger: 'Known automation and operator control', wedge: 'Gated authority, playbook selection, verification, rollback and evidence', avoid: 'Do not oversell AI when deterministic execution is enough' },
    ],
    objections: [
      { objection: 'We already have monitoring and incident response.', response: 'Keep them. Diagnose whether repeatable remediation still requires manual execution.' },
      { objection: 'Autonomous remediation is too risky.', response: 'Start read-only, then human approval, then automate only repeatedly verified playbooks.' },
      { objection: 'We can build scripts ourselves.', response: 'Compare the need for policy, verification, rollback, audit evidence and multi-environment governance.' },
    ],
    entryWedge: 'Infrastructure Autonomy Assessment and limited technical validation',
    firstProof: ['Contained nodes or Team deployment without replacing observability', 'A small set of repeatable incident classes and safe acceptance criteria', 'Verified playbook outcomes, rollback evidence and production trust'],
    conversation: ['Verified cloud, reliability or governance trigger', 'Hypothesis about repeatable manual remediation', 'Question about what blocks automation', 'Incident-toil map', 'Three-node or contained Team validation'],
    discovery: ['How many incidents require a known manual fix?', 'How many people and hours are involved?', 'What blocks automation today?', 'Which three incident classes are safest to prove first?'],
    methodology: 'PQA signals for engagement, SPICED for toil and urgency, MEDDPICC for Fleet procurement, Challenger to separate remediation from monitoring.',
    businessCase: ['Incidents per month x engineers x hours x loaded hourly cost x 12', 'Repeatable escalations x senior-engineer hours x loaded rate x 12', 'Verified downtime hours x customer-provided loss per hour'],
    pricingContext: ['First 3 nodes free', '$5 per node monthly or $4 annual Team', 'Fleet / MSP custom', 'Per endpoint, with no metering of alerts, metrics, API calls, transfer or playbook execution'],
    scaleVariables: ['Endpoints', 'Environments', 'Organizations and tenants', 'RBAC and authority policy', 'Audit retention', 'Governance', 'Support'],
    graduationTriggers: ['Production and multi-environment adoption', 'Node growth and multiple teams', 'Custom playbooks or API use', 'Multiple organizations or tenants', 'Security, procurement or 24/7 support requirement'],
    expansionPath: ['Technical validation', 'Team adoption', 'Production and multi-environment use', 'Enterprise Fleet or MSP', 'Cloud or platform engineering for recurring root faults', 'Managed infrastructure where ongoing ownership is justified'],
    engineeringAdjacency: 'Recurring architectural faults, platform constraints or compliance requirements that cannot be solved by remediation playbooks alone.',
    managedAdjacency: 'Continuous infrastructure operations when multi-environment or fleet governance requires sustained ownership.',
    gaps: ['Fleet ACV and volume discounts', 'Support economics and service boundary', 'Independent production case studies', 'Security attestations and failure-mode documentation', 'Renewal, expansion and managed-services attachment'],
    targets: [],
    marketIndicator: { state: 'Evidence-backed Market Indicator', text: 'AIOps category growth supports investigation, but the sharper commercial question is the operational gap between detection and verified remediation.', source: 'Supplied SentienGuard GTM Playbook V2.3' },
    assetId: 'sentienguard-playbook',
  },
];

export const engineeringPlays = [
  { name: 'Enterprise Modernization', trigger: 'Failed implementation, end-of-life stack, migration delay or acquisition integration', buyer: 'CIO / CTO', entry: 'Modernization Triage & Recovery Assessment' },
  { name: 'Production AI / AI Platform Engineering', trigger: 'Pilot blocked before production, regulated data or governance risk', buyer: 'CTO / CDO / business leader', entry: 'Production AI Readiness Sprint' },
  { name: 'Compliance Architecture', trigger: 'Audit findings, new regulation, expansion or manual evidence', buyer: 'CISO / Risk / CTO', entry: 'Compliance Architecture Review' },
  { name: 'Regulated Cloud Migration', trigger: 'Cloud mandate with residency or security constraints', buyer: 'CIO / Cloud leader', entry: 'Regulated Cloud Migration Blueprint' },
  { name: 'Agentic AI Engineering', trigger: 'High-value multi-step workflow or agentic initiative', buyer: 'CTO / COO / CDO', entry: 'Agentic Workflow Discovery' },
  { name: 'Managed Infrastructure', trigger: 'On-call burden, MSP dissatisfaction or recurring reliability work', buyer: 'CIO / VP Infrastructure / COO', entry: 'Infrastructure Autonomy & Managed Ops Assessment' },
];

export const engineeringPrinciples = [
  'Outcome, not capacity.',
  'Compliance enters before implementation, not as a downstream review.',
  'Fixed price works only when scope, access, dependencies, acceptance criteria and change control are explicit.',
  'Staffing or resource augmentation can be a valid entry when capacity is the actual problem, but it is not the company identity.',
];

export const installedBaseFields = [
  'Current account and industry', 'Current product or service relationship', 'Known stakeholders',
  'Delivery history and value already proven', 'Adjacent operational problems', 'Product applicability',
  'Regulated-engineering fit', 'Managed-infrastructure fit', 'Executive relationships',
  'Cross-sell hypothesis', 'Next discovery question', 'Evidence gap',
];

export const markets = [
  { name: 'United States', priority: 'Priority 1', engines: 'All four engines', verticals: 'Healthcare, insurance, financial services, SaaS and regulated enterprise', dynamics: 'Large opportunity pool, high competition and proof-heavy buying', route: 'Trigger-led named accounts, contained assessments and ecosystem introductions', indicator: 'Category indicators are large but remain secondary to account-level evidence.', partners: 'EHR/PAS and RCM ecosystems; insurance cores; cloud, Kubernetes and observability; hyperscalers and specialist consultancies' },
  { name: 'UAE', priority: 'Priority 1', engines: 'All four engines', verticals: 'Healthcare, insurance, financial services, government, AI and cloud infrastructure', dynamics: 'Relationship-led regulated enterprise environment with executive sponsorship and local operating requirements', route: 'Executive discovery, partner routes and contained high-value assessments', indicator: 'Supplied healthcare category data supports investigation, not an Algorithm forecast.', partners: 'Healthcare consultants, regional technology partners, insurance ecosystems and sovereign cloud or AI platforms' },
  { name: 'United Kingdom', priority: 'Priority 2', engines: 'Regure, Engineering, SentienGuard and selected clinIQ', verticals: 'Insurance, financial services, healthcare and regulated enterprise', dynamics: 'Strong regulatory and insurance relevance with procurement and evidence requirements', route: 'Insurance-core adjacency, compliance or modernization plays and account-specific triggers', indicator: 'UK patient-engagement and insurance context support targeted investigation.', partners: 'Lloyd\'s and specialty ecosystems, insurance consultancies, EHR/PAS and cloud or platform communities' },
  { name: 'India', priority: 'Priority 2', engines: 'Engineering, SentienGuard and selected Regure. clinIQ excluded.', verticals: 'Technology, GCC, enterprise engineering and selected insurance operations', dynamics: 'Selective revenue and partnership motion driven by fit rather than broad coverage', route: 'Surgical-strike engineering, product-qualified signals and partner-led opportunities', indicator: 'No clinIQ market motion. Other engines require account-specific validation.', partners: 'GCC and technology networks, specialist consultancies, cloud platforms and engineering partners' },
];

export const acquisitionSteps = ['ICP', 'Verifiable Trigger', 'Account Intelligence', 'Buyer Mapping', 'Hypothesis', 'Value-First Outreach', 'Diagnostic Discovery', 'Business Case', 'Technical Validation', 'Proposal'];

export const acquisitionTriggers = [
  { engine: 'clinIQ', triggers: ['Clinic expansion or acquisition', 'Specialty growth', 'Patient-access, RCM, RTM or EHR initiative'] },
  { engine: 'Regure', triggers: ['Core transformation', 'Claims AI or automation programme', 'Audit, resilience or compliance initiative'] },
  { engine: 'SentienGuard', triggers: ['Cloud or Kubernetes growth', 'On-call or reliability pressure', 'Change-control or audit requirement'] },
  { engine: 'Engineering', triggers: ['Failed modernization', 'Production AI commitment', 'Regulated cloud or compliance re-architecture'] },
];

export const scoreDimensions = [
  { name: 'Fit', weight: 25, evidence: 'Vertical, scale, geography and technology compatibility' },
  { name: 'Trigger Validity', weight: 25, evidence: 'Source quality, recency, relevance and critical event' },
  { name: 'Identifiable Pain', weight: 20, evidence: 'Economic significance, evidence and measurability' },
  { name: 'Access', weight: 15, evidence: 'Named buyers, relationship path and contactability' },
  { name: 'Expansion Potential', weight: 15, evidence: 'Logical product, engineering or managed-services path' },
];

export const readiness = [
  'Referenceable customers and quantified outcomes', 'Security and compliance documentation',
  'Integration readiness', 'Demo and sandbox readiness', 'Pricing and packaging',
  'Implementation model', 'Support and SLA clarity', 'Proposal and SOW templates',
  'Product roadmap boundaries', 'Sales-to-delivery handoff readiness',
];

export const discoveryByEngine = [
  { name: 'clinIQ', questions: ['Where does patient access or flow become difficult to standardize?', 'Which workflow remains manual around the EHR?', 'What customer baseline would prove value?'], formula: 'Capacity leakage + administrative burden + recoverable workflow value, using customer inputs.' },
  { name: 'Regure', questions: ['What remains outside the insurance core?', 'Which document or exception queue creates measurable effort?', 'What decision or compliance event makes this urgent?'], formula: 'Document labor + backlog effort + compliance-evidence cost, using verified inputs.' },
  { name: 'SentienGuard', questions: ['Which incidents require a known manual fix?', 'What blocks safe automation?', 'Which incident classes can be proven first?'], formula: 'Incident toil + repetitive escalation + verified downtime, using customer inputs.' },
  { name: 'Engineering', questions: ['What business outcome is delayed or at risk?', 'Which technical and compliance constraints define the boundary?', 'What must be true for acceptance?'], formula: 'Cost of delay + current-state burden + recovery or remediation cost, using approved inputs.' },
];

export const pipeline = [
  { name: 'Qualified Problem', entry: 'Verified trigger and hypothesis', evidence: 'Problem, owner, reason now and customer-owned next step', exit: 'Customer confirms the problem and discovery path', forecast: 'Pipeline only', falsePositive: 'A meeting or demo request without a verified problem' },
  { name: 'Business Case Validated', entry: 'Problem confirmed', evidence: 'Baseline, impact, critical event and economic buyer or champion', exit: 'Customer accepts the value case and decision priority', forecast: 'Qualified pipeline', falsePositive: 'Interest without quantified or agreed impact' },
  { name: 'Solution & Technical Validation', entry: 'Business case accepted', evidence: 'Scope, security, integration, acceptance criteria and buying process', exit: 'Technical and commercial path is viable', forecast: 'Upside or probable only when the path is real', falsePositive: 'Successful demo or pilot without buying process' },
  { name: 'Commercial Commitment', entry: 'Solution path validated', evidence: 'Proposal, economic review, paper process, signature date and remaining risks', exit: 'All commercial and procurement conditions are resolved', forecast: 'Commit candidate', falsePositive: 'Proposal sent without economic-buyer review' },
  { name: 'Closed / Implementation', entry: 'Commercial commitment complete', evidence: 'Signed agreement or PO, implementation owner, baseline and success criteria', exit: 'Handoff complete and value-governance cadence established', forecast: 'Closed Won', falsePositive: 'Verbal support without executed paper' },
];

export const expansionJourneys = [
  { name: 'clinIQ', steps: ['Module or site', 'More sites and workflows', 'EHR or API integration', 'Healthcare AI and data', 'Cloud', 'Managed infrastructure'] },
  { name: 'Regure', steps: ['Claims workflow', 'More users, documents and LOBs', 'Core integration', 'Insurance AI and compliance', 'Cloud', 'Managed operations'] },
  { name: 'SentienGuard', steps: ['Technical validation', 'Team adoption', 'Fleet or multi-environment', 'Self-healing infrastructure', 'Cloud transformation', 'Managed operations'] },
  { name: 'Engineering', steps: ['Surgical-strike outcome', 'Adjacent workload', 'Broader transformation', 'Relevant product where fit is proven', 'Managed operations', 'Strategic account'] },
];

export const leadingIndicators = [
  { name: 'Account Intelligence', metrics: ['Tier-A accounts researched', 'Verified triggers', 'Buyer maps', 'Account hypotheses'] },
  { name: 'Engagement', metrics: ['Executive conversations', 'Technical conversations', 'Response by play'] },
  { name: 'Qualification', metrics: ['Qualified opportunities', 'Economic buyers', 'Critical events', 'Validated business cases'] },
  { name: 'Conversion', metrics: ['Assessments', 'Pilots', 'Proposals', 'Negotiations', 'Wins where cycle permits'] },
  { name: 'Expansion', metrics: ['Module, site or workload expansion', 'Cross-sell conversations', 'Executive account reviews'] },
  { name: 'System Maturity', metrics: ['Objection intelligence', 'Win and loss analysis', 'Case studies', 'CRM hygiene', 'Forecast accuracy', 'Partner pipeline'] },
];

export const roadmap = [
  { range: '1-30', phase: 'Validate', items: ['Internal commercial audit', 'Customer and account review', 'Product proof and pricing validation', 'ICP and market prioritization', 'Installed-base expansion map'] },
  { range: '31-60', phase: 'Build', items: ['Account database and triggers', 'Buyer maps and messaging', 'Micro-value assets', 'Discovery frameworks', 'Five-stage CRM discipline'] },
  { range: '61-90', phase: 'Create Qualified Traction', items: ['Executive outreach', 'Diagnostic discovery', 'Assessments and technical workshops', 'Early proposals where evidence supports them', 'Partner conversations'] },
  { range: '91-120', phase: 'Convert', items: ['Business cases', 'Pilots', 'Technical and commercial validation', 'Procurement movement', 'Wins where the cycle permits'] },
  { range: '121-150', phase: 'Expand & Refine', items: ['Installed-base expansion', 'Evidence-led cross-sell', 'Case-study creation', 'Win and loss refinement', 'Vertical playbooks'] },
  { range: '151-180', phase: 'Systemize', items: ['Document repeatable motions', 'Refine account scoring', 'Pipeline governance', 'Customer success and expansion cadence', 'Evidence-based next-phase recommendation'] },
];

export const ownershipChain = ['Market Strategy', 'ICP', 'Account Intelligence', 'Prospecting', 'Executive Outreach', 'Discovery', 'Business Case', 'Solution Alignment', 'Proposal', 'Negotiation', 'Closure', 'Implementation Handoff', 'Customer Success', 'Expansion', 'Partnerships', 'Product-Market Feedback', 'Revenue Intelligence'];
export const feedbackLoop = ['Customer insight', 'Product feedback', 'Roadmap input', 'Positioning refinement', 'Stronger GTM'];
export const valueRealizationLoop = ['Implementation', 'Adoption', 'Value realization', 'Executive review', 'Expansion', 'Retention', 'Referenceability'];

export const experienceEvidence = [
  { industry: 'Insurance / Enterprise Technology', requirement: 'Guidewire-related resource and platform requirement', challenge: 'Niche capability aligned to enterprise insurance architecture', approach: 'Requirements discovery, solution and resource alignment, technical-commercial coordination and customer lifecycle support', outcome: 'Delivery acceleration and flexible specialist capacity', relevance: 'Regure and insurance engineering' },
  { industry: 'Laboratory / Testing & Inspection', requirement: 'Laboratory workflow digitization', challenge: 'Manual sample, workflow and reporting processes', approach: 'Discovery, workflow mapping, SaaS LIMS positioning and implementation discussions', outcome: 'Digitized workflows, improved sample tracking and reporting visibility', relevance: 'clinIQ-style workflow digitization and SaaS adoption' },
  { industry: 'Food / FMCG Quality', requirement: 'Quality management and batch traceability', challenge: 'Fragmented quality tracking and manual reporting', approach: 'Business discovery, digital workflow design, product collaboration and adoption support', outcome: 'Improved quality tracking, batch visibility and reporting efficiency', relevance: 'Regulated workflow selling, adoption and product feedback' },
  { industry: 'Energy Trading Technology', requirement: 'Niche ETRM and Java engineering support', challenge: 'Specialist platform requirements and difficult-to-source technical skills', approach: 'Requirement alignment, engineering capability positioning and delivery coordination', outcome: 'Flexible access to specialist engineering capability', relevance: 'Regulated engineering and enterprise platform ecosystems' },
  { industry: 'AI / Enterprise Software', requirement: 'AI-enabled marketplace and multilingual automation use cases', challenge: 'Translate business requirements into practical AI workflows', approach: 'Opportunity identification, AI/NLP positioning, requirements shaping and technical-commercial coordination', outcome: 'Delivered AI-enabled workflows and integration use cases', relevance: 'AI engineering' },
];

export const sampleExecutions = [
  { engine: 'clinIQ', target: 'Denova Collaborative Health', industry: 'Outpatient behavioral health / integrated care · US', score: 88, scoreDetail: 'Fit 24 · Trigger 24 · Pain 17 · Access 10 · Expansion 13', trigger: 'New integrated-care clinics and service-line expansion announced Mar-Jul 2026.', evidence: 'Official company announcements; strong first-party evidence.', buyers: 'CEO/COO; clinic operations; CIO/IT/EHR owner; RCM/operations leadership.', fact: 'Public announcements document physical-footprint and virtual-care expansion.', hypothesis: 'Multi-site growth may increase pressure to standardize patient access, scheduling, intake and reporting.', question: 'Which patient-access and operating workflows are hardest to keep consistent as locations and programs expand?', wedge: 'Clinic Operations & Revenue Assessment focused on one location or cross-site workflow.', proof: 'Baseline workflow, touchpoints, scheduling/flow measures, adoption and integration feasibility.', growth: 'One workflow/site → patient/location scope → modules → enterprise support → EHR/API integration → healthcare engineering.', kill: 'Existing stack solves it; no owner; infeasible integration; no measurable need.', next: 'Validate EHR/PAS, patient-access stack and operations leadership.' },
  { engine: 'Regure', target: 'The Cincinnati Insurance Company', industry: 'Property & casualty insurance · US', score: 89, scoreDetail: 'Fit 25 · Trigger 25 · Pain 17 · Access 10 · Expansion 12', trigger: 'Guidewire ClaimCenter deployment and continued multi-line rollout announced 4 Dec 2025.', evidence: 'Guidewire first-party announcement and platform evidence.', buyers: 'CIO/COO/Chief Claims Officer; claims operations; Guidewire architecture; security; procurement.', fact: 'ClaimCenter is live for workers’ compensation and rollout continues across other lines.', hypothesis: 'Document-heavy or exception workflows may remain adjacent to the core during transformation.', question: 'Which workflows still rely on email, manual queues or adjacent tools after ClaimCenter owns the core lifecycle?', wedge: 'Claims Workflow Friction Assessment around one document or exception workflow.', proof: 'Workflow map, cycle time, touchpoints, document handling, exceptions, integration feasibility and acceptance.', growth: 'One workflow → users/team → workflows/LOBs → APIs/core integration → private cloud/governance → insurance engineering.', kill: 'Native ecosystem covers it; no gap; procurement exclusion; infeasible integration/security.', next: 'Map transformation leadership, implementation partners and adjacent workflow initiatives.' },
  { engine: 'SentienGuard', target: 'Airwallex', industry: 'Global fintech / payments infrastructure · EMEA growth', score: 91, scoreDetail: 'Fit 25 · Trigger 24 · Pain 18 · Access 10 · Expansion 14', trigger: 'EMEA investment and London engineering expansion announced Mar 2026, corroborated by platform/SRE roles.', evidence: 'Official newsroom and first-party careers material.', buyers: 'CTO/CIO/VP Engineering; infrastructure/platform/SRE; security and architecture.', fact: 'Public material documents engineering scale, Kubernetes/cloud infrastructure, incident response and reliability work.', hypothesis: 'Platform growth may increase repetitive SRE load even with observability and internal automation.', question: 'Which incident classes still require repeatable human diagnosis and remediation after monitoring detects the issue?', wedge: 'Technical validation on narrow, reversible runbooks alongside existing monitoring.', proof: 'Known incident class, safe execution, verification/rollback, audit trail, SRE acceptance and security review.', growth: 'Nodes → environments → teams → Fleet governance → RBAC/audit/support → cloud engineering → managed operations.', kill: 'Internal automation solves it; security rejection; insufficient fit; build preference.', next: 'Identify a narrow recurring incident class suitable for controlled validation.' },
  { engine: 'Engineering', target: 'Kotak Life Insurance', industry: 'Life insurance / regulated financial services · India', score: 86, scoreDetail: 'Fit 24 · Trigger 24 · Pain 16 · Access 9 · Expansion 13', trigger: 'Public 2026 AI-led growth direction across underwriting, claims, fraud, sales and customer engagement.', evidence: 'Executive interview, public AI activity and investor material; not a procurement announcement.', buyers: 'CTO/digital transformation; CIO/COO; business owners; architecture/data/AI; risk/security/compliance.', fact: 'Public material discusses AI across multiple insurance functions with trust, compliance and measurable-impact priorities.', hypothesis: 'Moving from pilots to production may expose data, integration, governance and operability requirements.', question: 'Which AI use cases are constrained by data access, legacy integration, governance or production readiness?', wedge: 'Production AI / Agentic AI Readiness Assessment around one business process.', proof: 'Defined outcome, architecture, data readiness, controls, acceptance criteria and operability plan.', growth: 'Assessment → production AI/data strike → modernization/compliance architecture → platform program → managed infrastructure.', kill: 'Existing partners cover it; no funded event; strategy-only scope; inadequate access; compliance blocker.', next: 'Validate funded production initiatives and map accountable owners.' },
];

export const prioritizationCriteria = ['Market fit', 'Proof available', 'Sales-cycle length', 'Referenceability', 'Implementation readiness', 'Expansion potential', 'Founder / technical dependency'];
export const disqualificationCriteria = ['No identifiable business problem', 'No meaningful trigger', 'No buyer or champion access', 'Only price-shopping', 'Impossible delivery requirement', 'Irresponsible roadmap commitment required', 'No critical event', 'Poor strategic fit'];

export const ceoFields = [
  ['priorities', 'Top three commercial priorities for the next 12 months'],
  ['enginePriority', 'Which products or services should be scaled first, and why?'],
  ['productCustomers', 'Current customer count by product'],
  ['productEconomics', 'Current product ARR, MRR or contract value'],
  ['serviceClients', 'Current services clients by industry and service line'],
  ['pipeline', 'Current qualified pipeline'],
  ['dealSize', 'Average deal sizes and sales cycles'],
  ['pricing', 'Pricing, packaging and discount authority'],
  ['margins', 'Gross margins and implementation economics'],
  ['winsLosses', 'Why do we win, stall or lose?'],
  ['proof', 'Referenceable case studies and quantified outcomes'],
  ['productGaps', 'Product, security and integration gaps'],
  ['capacity', 'Current delivery and support capacity'],
  ['partners', 'Active partnerships and certifications'],
  ['installedBase', 'Existing-account expansion opportunities to investigate'],
  ['success180', 'Definition of successful commercial traction after 180 days'],
  ['ownership', 'What should the commercial leader own independently?'],
  ['leadership', 'Where should CEO and technical leadership stay involved?'],
  ['firstProblem', 'Single biggest commercial problem to solve first'],
] as const;
