# Post-code Checklist

- [ ] Code reviewed: feedback addressed; style/lint checks pass.
- [ ] Commits reference issue: all commits include `(#issue-number)`.
- [ ] Tests: unit/integration/E2E executed and passing; coverage acceptable.
- [ ] Accessibility: keyboard navigation, ARIA labels, color contrast verified.
- [ ] Performance: meets budgets (e.g., P95 latency), no obvious regressions.
- [ ] Security/Privacy: authZ/authN enforced; secrets not committed; PII handled per policy.
- [ ] Observability: logs/metrics/traces added/updated; dashboards/alerts verified.
- [ ] Documentation: README/ADR/feature spec updated; API OpenSpec synced.
- [ ] Config/Flags: feature flags defaulted correctly; migrations/backfills run if needed.
- [ ] Cross-env checks: works in Dev/Staging; deploy plan ready for Prod.
- [ ] Regression/Smoke: impacted areas exercised; acceptance criteria revalidated.
- [ ] Handover: notes recorded; open issues/tickets filed if follow-ups remain.
- [ ] PR created: includes `Closes #issue-number` in description. See `github-issue-pr-workflow.md`.
- [ ] PR linked: issue linked in GitHub sidebar; reviewers assigned.
