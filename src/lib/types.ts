import { z } from "zod";

/** How strongly a claim is supported by public or synthetic evidence. */
export const evidenceStatusSchema = z.enum([
  "confirmed-public",
  "proposed-illustrative",
  "synthetic-example",
  "international-benchmark",
  "industry-guidance",
  "inferred-from-source",
]);
export type EvidenceStatus = z.infer<typeof evidenceStatusSchema>;

export const sourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  publisher: z.string(),
  date: z.string(),
  url: z.string().url(),
  accessDate: z.string(),
  evidenceStatus: evidenceStatusSchema,
  relevance: z.string(),
  notes: z.string().optional(),
});
export type Source = z.infer<typeof sourceSchema>;

export const evidenceClaimSchema = z.object({
  id: z.string(),
  statement: z.string(),
  sourceIds: z.array(z.string()),
  evidenceStatus: evidenceStatusSchema,
  scope: z.string().optional(),
});
export type EvidenceClaim = z.infer<typeof evidenceClaimSchema>;

export const roleSchema = z.object({
  id: z.string(),
  name: z.string(),
  purpose: z.string(),
  accountabilities: z.array(z.string()),
  keyDecisions: z.array(z.string()),
  coreArtifacts: z.array(z.string()),
  relationshipWithImpactLead: z.string(),
  mustNotAbsorb: z.array(z.string()),
  evidenceStatus: evidenceStatusSchema.optional(),
});
export type Role = z.infer<typeof roleSchema>;

export const lifecycleGateSchema = z.object({
  id: z.string(),
  number: z.number().int().min(1).max(6),
  name: z.string(),
  objective: z.string(),
  entryCriteria: z.array(z.string()),
  impactLeadActivities: z.array(z.string()),
  otherRoleActivities: z.array(
    z.object({ roleId: z.string(), activities: z.array(z.string()) }),
  ),
  meetings: z.array(z.string()),
  participants: z.array(z.string()),
  inputs: z.array(z.string()),
  artifacts: z.array(z.string()),
  owners: z.array(z.string()),
  reviewers: z.array(z.string()),
  approvers: z.array(z.string()),
  decisionBasis: z.array(z.string()),
  exitCriteria: z.array(z.string()),
  possibleDecisions: z.array(z.string()),
  risksIfSkipped: z.array(z.string()),
  exampleEvidence: z.array(z.string()),
  durationRange: z.string(),
  handoffs: z.array(z.string()),
  evidenceStatus: evidenceStatusSchema,
});
export type LifecycleGate = z.infer<typeof lifecycleGateSchema>;

export const meetingSchema = z.object({
  id: z.string(),
  name: z.string(),
  lifecycleStage: z.string(),
  trigger: z.string(),
  purpose: z.string(),
  duration: z.string(),
  chair: z.string(),
  requiredParticipants: z.array(z.string()),
  optionalParticipants: z.array(z.string()),
  preread: z.array(z.string()),
  agenda: z.array(z.string()),
  facilitationMethod: z.string(),
  decisionsExpected: z.array(z.string()),
  artifacts: z.array(z.string()),
  followUp: z.array(z.string()),
  escalationPath: z.string(),
  evidenceStatus: evidenceStatusSchema.optional(),
});
export type Meeting = z.infer<typeof meetingSchema>;

export const artifactCategorySchema = z.enum([
  "intake",
  "impact",
  "assurance",
  "change",
  "governance",
  "operations",
  "portfolio",
]);
export type ArtifactCategory = z.infer<typeof artifactCategorySchema>;

export const artifactSchema = z.object({
  id: z.string(),
  name: z.string(),
  purpose: z.string(),
  gateIds: z.array(z.string()),
  author: z.string(),
  accountableOwner: z.string(),
  contributors: z.array(z.string()),
  reviewers: z.array(z.string()),
  endorser: z.string(),
  approver: z.string(),
  inputs: z.array(z.string()),
  mandatoryFields: z.array(z.string()),
  qualityCriteria: z.array(z.string()),
  evidenceRequired: z.array(z.string()),
  classification: z.string(),
  versioning: z.string(),
  reviewFrequency: z.string(),
  exampleOutline: z.array(z.string()),
  relatedArtifacts: z.array(z.string()),
  category: artifactCategorySchema,
  evidenceStatus: evidenceStatusSchema.optional(),
});
export type Artifact = z.infer<typeof artifactSchema>;

export const decisionCriterionSchema = z.object({
  id: z.string(),
  lens: z.string(),
  question: z.string(),
  signals: z.array(z.string()),
  evidenceStatus: evidenceStatusSchema,
});
export type DecisionCriterion = z.infer<typeof decisionCriterionSchema>;

export const hardStopSchema = z.object({
  id: z.string(),
  name: z.string(),
  condition: z.string(),
  rationale: z.string(),
  escalation: z.string(),
  evidenceStatus: evidenceStatusSchema,
});
export type HardStop = z.infer<typeof hardStopSchema>;

export const impactDimensionSchema = z.enum([
  "productivity",
  "decision-quality",
  "risk-resilience",
  "customer-stakeholder",
  "people-capability",
  "cost-efficiency",
  "compliance-trust",
]);
export type ImpactDimension = z.infer<typeof impactDimensionSchema>;

export const riskTierSchema = z.enum(["tier-1", "tier-2", "tier-3", "tier-4"]);
export type RiskTier = z.infer<typeof riskTierSchema>;

export const readinessDomainSchema = z.enum([
  "strategy-alignment",
  "data-model",
  "technology-platform",
  "governance-assurance",
  "people-change",
  "operating-model",
  "vendor-third-party",
  "benefits-measurement",
]);
export type ReadinessDomain = z.infer<typeof readinessDomainSchema>;

export const useCaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  functionArea: z.string(),
  problemStatement: z.string(),
  proposedSolution: z.string(),
  impactDimensions: z.array(impactDimensionSchema),
  riskTier: riskTierSchema,
  readinessDomains: z.array(readinessDomainSchema),
  primaryArtifacts: z.array(z.string()),
  gatePath: z.array(z.number()),
  metrics: z.array(z.string()),
  dependencies: z.array(z.string()),
  humanOversightModel: z.string(),
  assuranceNotes: z.string(),
  evidenceStatus: evidenceStatusSchema,
});
export type UseCase = z.infer<typeof useCaseSchema>;

export const frameworkSchema = z.object({
  id: z.string(),
  name: z.string(),
  publisher: z.string(),
  summary: z.string(),
  applicationAreas: z.array(z.string()),
  sourceIds: z.array(z.string()),
  evidenceStatus: evidenceStatusSchema,
});
export type Framework = z.infer<typeof frameworkSchema>;

export const comparativeExampleSchema = z.object({
  id: z.string(),
  name: z.string(),
  context: z.string(),
  evidenceStatus: evidenceStatusSchema,
  transferableLesson: z.string(),
  howItInformsProposal: z.string(),
  limitations: z.string(),
  sourceIds: z.array(z.string()),
});
export type ComparativeExample = z.infer<typeof comparativeExampleSchema>;

export const metricSchema = z.object({
  id: z.string(),
  name: z.string(),
  definition: z.string(),
  baseline: z.string().optional(),
  target: z.string().optional(),
  cadence: z.string(),
  owner: z.string(),
  evidenceStatus: evidenceStatusSchema,
});
export type Metric = z.infer<typeof metricSchema>;

export const workedExampleDeepDiveSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type WorkedExampleDeepDive = z.infer<typeof workedExampleDeepDiveSchema>;

export const workedExampleStepSchema = z.object({
  gateId: z.string(),
  gateNumber: z.number(),
  title: z.string(),
  narrative: z.string(),
  syntheticData: z.record(z.string(), z.string()),
  artifactsProduced: z.array(z.string()),
  decision: z.string(),
  evidenceStatus: evidenceStatusSchema,
  deepDive: z.array(workedExampleDeepDiveSchema).optional(),
});
export type WorkedExampleStep = z.infer<typeof workedExampleStepSchema>;

export const workedExampleCaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  division: z.enum([
    "investment-business",
    "technology",
    "operations-risk",
    "industry-benchmark",
  ]),
  functionArea: z.string(),
  problemStatement: z.string(),
  whySubmitted: z.string(),
  intendedBenefits: z.array(z.string()),
  industryContext: z.string().optional(),
  organisationContext: z.string(),
  narrator: z.string(),
  primaryUseCaseId: z.string().optional(),
  evidenceStatus: evidenceStatusSchema,
  steps: z.array(workedExampleStepSchema),
});
export type WorkedExampleCase = z.infer<typeof workedExampleCaseSchema>;

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  description: z.string().optional(),
});
export type NavItem = z.infer<typeof navItemSchema>;

export const siteContentSchema = z.object({
  siteName: z.string(),
  tagline: z.string(),
  disclaimer: z.string(),
  aboutSanjay: z.string(),
  nav: z.array(navItemSchema),
  hero: z.object({
    headline: z.string(),
    subhead: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
  }),
  evidenceStatus: evidenceStatusSchema,
});
export type SiteContent = z.infer<typeof siteContentSchema>;

export const mobilisationPhaseSchema = z.object({
  days: z.string(),
  objectives: z.array(z.string()),
  activities: z.array(z.string()),
  deliverables: z.array(z.string()),
  metrics: z.array(z.string()),
  evidenceStatus: evidenceStatusSchema,
});
export type MobilisationPhase = z.infer<typeof mobilisationPhaseSchema>;

export const reassessmentTriggerSchema = z.object({
  id: z.string(),
  trigger: z.string(),
  response: z.string(),
  evidenceStatus: evidenceStatusSchema,
});
export type ReassessmentTrigger = z.infer<typeof reassessmentTriggerSchema>;
