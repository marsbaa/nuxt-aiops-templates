# Acceptance Tests: {{Feature Title}}

- **Owner:** {{QA/Engineer}}
- **Version:** {{v1.0}}
- **Environments:** {{Dev | Staging | Prod}}
- **Test Data Setup:** {{Fixtures, seeded Firestore docs, feature flags}}

## Scope
- **In Scope:** {{Areas covered}}
- **Out of Scope:** {{Explicit exclusions}}

## Preconditions
- {{e.g., User authenticated, feature flag on, data seeded}}

## Test Cases
- **AT-01 — {{Scenario Name}}**
  - Given {{precondition}}
  - When {{action}}
  - Then {{observable outcome}}
  - And {{secondary assertion}}
  - Data/Mocks: {{If applicable}}
- **AT-02 — {{Scenario Name}}**
  - Given {{precondition}}
  - When {{action}}
  - Then {{observable outcome}}
- **AT-03 — {{Scenario Name}}**
  - ...

## Non-Functional Checks
- Performance: {{P95 < X ms}}
- Accessibility: {{WCAG checks, keyboard nav, ARIA labels}}
- Security: {{authZ, authN, data privacy}}
- Reliability: {{retry, idempotency, offline handling}}
- Observability: {{logs/traces/metrics asserted}}

## Regression Matrix
- **Impacted Areas:** {{Pages/components/stores/apis}}
- **Smoke Tests:** {{Quick verifications per area}}

## Signoff
- **QA:** {{Name, date}}
- **Product:** {{Name, date}}
- **Eng:** {{Name, date}}
