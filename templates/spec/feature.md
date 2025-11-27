# Feature: {{Feature Title}}

- **Owner:** {{Name}} (Role/Team)
- **Status:** {{Draft | In Review | Approved}}
- **Last Updated:** {{YYYY-MM-DD}}
- **Spec Version:** {{v1.0}}

## Summary
- **One-liner:** {{Short description of the capability}}
- **Problem:** {{What user/business problem are we solving?}}
- **Target Users/Personas:** {{Persona A, Persona B}}
- **Outcome:** {{What success looks like in user terms}}

## Context
- **Motivation:** {{Why this matters now}}
- **Related Docs:** {{Links to PRD, architecture, prior decisions, research}}

## Goals
- {{Measurable goal 1}}
- {{Measurable goal 2}}

## Non-Goals
- {{Explicitly excluded item 1}}
- {{Explicitly excluded item 2}}

## Scope
- **In Scope:** {{Key capabilities delivered in this feature}}
- **Out of Scope:** {{Explicitly deferred items}}

## Requirements
- **Functional:** 
  - {{FR-1: requirement statement}}
  - {{FR-2: requirement statement}}
- **Non-Functional (NFRs):**
  - Performance: {{e.g., P95 < 200ms}}
  - Availability: {{e.g., 99.9% monthly}}
  - Security/Privacy: {{e.g., data residency, PII handling}}
  - Accessibility: {{e.g., WCAG 2.1 AA}}
  - Observability: {{logging/tracing/metrics expectations}}

## User Experience (Vue 3 / Nuxt 3)
- **Flows:** {{Link to wireframes or describe key steps}}
- **States:** {{loading | success | empty | error | offline}}
- **i18n/L10n:** {{languages, copy guidelines}}

## Data Model & Contracts
- **Domain Objects:** {{Entity names with brief fields}}
- **Source of Truth:** {{Firestore collection(s), cache rules}}
- **OpenSpec Links:** {{Path to OpenSpec contract(s) for APIs}}
- **Events:** {{Pub/Sub or analytics events with schema}}

## Dependencies
- **Systems:** {{Firebase services, external APIs}}
- **Libraries:** {{Pinia store modules, composables}}
- **Sequencing:** {{Prereqs and ordering}}

## Risks & Mitigations
- {{Risk 1}} — Mitigation: {{Plan}}
- {{Risk 2}} — Mitigation: {{Plan}}

## Rollout Plan
- **Environments:** {{Dev → Staging → Prod schedule}}
- **Gates:** {{QA signoff, accessibility review, security review}}
- **Feature Flags:** {{Flag name, default, kill switch}}
- **Migration/Data Backfill:** {{If applicable}}

## Success Metrics
- **Activation:** {{e.g., % users completing flow}}
- **Performance:** {{e.g., P95 latency, error rate}}
- **Quality:** {{bug rate, escaped defects}}
- **Adoption:** {{weekly active users for feature}}

## Acceptance Criteria (link to tests)
- {{AC-1: Given/When/Then}}
- {{AC-2: Given/When/Then}}
- See `acceptance-tests.md` for full scenarios.

## Open Questions
- {{Question 1}}
- {{Question 2}}

## Decisions
- {{Decision 1 (date, approver)}}
- {{Decision 2 (date, approver)}}
