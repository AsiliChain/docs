export type TraceabilityStorage = {
  name: string;
  detail: string;
};

export type TraceabilityStage = {
  id: string;
  step: number;
  title: string;
  summary: string;
  badge: string;
  actor: string;
  governmentSystem: string;
  dataPoints: string[];
  storage: TraceabilityStorage[];
  note: string;
  accent: string;
};

export const traceabilityStages: TraceabilityStage[] = [
  {
    id: 'farm-registration',
    step: 1,
    title: 'Farm registration',
    summary: 'Anchor the farm identity before any crop value is created.',
    badge: 'Identity root',
    actor: 'Farmer and cooperative field officer',
    governmentSystem: 'Cooperative registry and farm onboarding records',
    dataPoints: ['GPS polygon', 'Tree count', 'Crop variety', 'Farmer consent'],
    storage: [
      {name: 'Celo', detail: 'Identity proof and registration anchor'},
      {name: 'IPFS', detail: 'Farm dossier and supporting documents'},
      {name: 'Supabase', detail: 'Operational onboarding record'},
    ],
    note: 'This is the anchor event. Every later token points back to the registered farm identity.',
    accent: '#1A5C3A',
  },
  {
    id: 'crop-growth',
    step: 2,
    title: 'Crop growth monitoring',
    summary: 'Append agronomy evidence as the crop matures.',
    badge: 'Inspection trail',
    actor: 'Field team and agronomist',
    governmentSystem: 'Extension service inspection and field visit logs',
    dataPoints: ['Visit photos', 'Disease alerts', 'Fertilizer usage', 'Yield forecast updates'],
    storage: [
      {name: 'Celo', detail: 'Signed inspection event'},
      {name: 'IPFS', detail: 'Photos, reports, and field notes'},
      {name: 'Hedera', detail: 'Tamper-evident audit trail'},
      {name: 'Supabase', detail: 'Workflow status for the cooperative'},
    ],
    note: 'Evidence accumulates without mutating the farm identity, so the record stays auditable.',
    accent: '#B95A28',
  },
  {
    id: 'financing',
    step: 3,
    title: 'Pre-harvest financing',
    summary: 'Use the growing crop as collateral for working capital.',
    badge: 'Credit decision',
    actor: 'Lender credit team',
    governmentSystem: 'Loan approval and credit committee register',
    dataPoints: ['Stage-adjusted valuation', 'LTV limit', 'Interest rate', 'Repayment schedule'],
    storage: [
      {name: 'Celo', detail: 'Loan commitment and repayment terms'},
      {name: 'Hedera', detail: 'Immutable approval hash'},
      {name: 'IPFS', detail: 'Term sheet and valuation evidence'},
    ],
    note: 'The borrower gets financing while the crop is still in the ground, which is the main unlock.',
    accent: '#1B8AA3',
  },
  {
    id: 'harvest-grading',
    step: 4,
    title: 'Harvest and grading',
    summary: 'Translate physical coffee into a verified batch record.',
    badge: 'Quality gate',
    actor: 'Mill, grader, and warehouse clerk',
    governmentSystem: 'Warehouse licensing and grading records',
    dataPoints: ['Weigh ticket', 'Moisture reading', 'Grade', 'Bag count'],
    storage: [
      {name: 'Celo', detail: 'Harvest event and batch mint'},
      {name: 'IPFS', detail: 'Weigh ticket and grading scans'},
      {name: 'Hedera', detail: 'Evidence hash for the batch'},
      {name: 'Mantle', detail: 'Bridged record once grading is approved'},
    ],
    note: 'This is where the pre-harvest token turns into a physical batch asset with stronger collateral value.',
    accent: '#2C7A7B',
  },
  {
    id: 'warehouse-receipt',
    step: 5,
    title: 'Warehouse receipt creation',
    summary: 'A graded batch becomes a receipted inventory claim.',
    badge: 'Inventory claim',
    actor: 'Warehouse operator and cooperative treasury',
    governmentSystem: 'Warehouse receipt and inventory registry',
    dataPoints: ['Receipt ID', 'Storage location', 'Custody chain', 'Insurance status'],
    storage: [
      {name: 'Celo', detail: 'Warehouse receipt issuance'},
      {name: 'Hedera', detail: 'Custody and receipt hash'},
      {name: 'IPFS', detail: 'Warehouse documents and insurance files'},
    ],
    note: 'The receipt narrows the gap between agricultural collateral and near-cash inventory finance.',
    accent: '#5E6AD2',
  },
  {
    id: 'dds-assembly',
    step: 6,
    title: 'DDS assembly',
    summary: 'Compile the due diligence package for export readiness.',
    badge: 'Compliance packet',
    actor: 'AsiliChain operations team',
    governmentSystem: 'EUDR due diligence and export documentation portal',
    dataPoints: ['Traceability chain', 'Deforestation checks', 'Batch evidence', 'Risk score'],
    storage: [
      {name: 'IPFS', detail: 'Full DDS evidence bundle'},
      {name: 'Hedera', detail: 'Hash of the submitted package'},
      {name: 'Celo', detail: 'Submission status and approvals'},
    ],
    note: 'The buyer can inspect a complete evidence trail instead of a static PDF or spreadsheet.',
    accent: '#7C4DFF',
  },
  {
    id: 'regulatory-review',
    step: 7,
    title: 'Regulatory review',
    summary: 'Surface the evidence to government and trade control systems.',
    badge: 'Export gate',
    actor: 'Exporter and regulator',
    governmentSystem: 'Uganda export review and customs clearance records',
    dataPoints: ['Export permit', 'Customs declaration', 'Inspection outcome', 'Cleared lot ID'],
    storage: [
      {name: 'Celo', detail: 'Regulatory status update'},
      {name: 'Hedera', detail: 'Regulator-signed audit hash'},
      {name: 'Mantle', detail: 'Cross-chain settlement marker'},
    ],
    note: 'At this step the traceability record becomes something the regulator can act on, not just observe.',
    accent: '#0F766E',
  },
  {
    id: 'buyer-settlement',
    step: 8,
    title: 'Buyer commitment and settlement',
    summary: 'Convert the traceable batch into cash flow and close the loop.',
    badge: 'Settlement point',
    actor: 'Buyer procurement and treasury',
    governmentSystem: 'Buyer procurement system and settlement confirmation',
    dataPoints: ['Purchase order', 'Settlement amount', 'Payout reference', 'Token burn or bridge-out'],
    storage: [
      {name: 'Celo', detail: 'Purchase order and settlement event'},
      {name: 'Mantle', detail: 'Final value transfer or bridged claim'},
      {name: 'Hedera', detail: 'Final audit hash'},
    ],
    note: 'The buyer commitment is the final step that makes the earlier evidence financeable and payable.',
    accent: '#1A5C3A',
  },
];