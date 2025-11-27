# GitHub Issue → Branch → PR Workflow

This workflow ensures traceability from issue creation through to PR merge.

---

## 1. Create Issue

Create a GitHub issue to track the work:

```markdown
**Title:** {{Brief descriptive title}}

**Description:**
## Summary
{{What needs to be done and why}}

## Acceptance Criteria
- [ ] {{Criterion 1}}
- [ ] {{Criterion 2}}
- [ ] {{Criterion 3}}

## Additional Context
{{Links to PRD, designs, specs, or related issues}}
```

**Labels:** `{{type: feature | bug | chore | docs}}`, `{{priority: P0-P3}}`
**Assignee:** `{{@username}}`
**Milestone:** `{{Sprint/Release if applicable}}`

### ⚠️ Capture Issue Number
After creation, note the issue number:
```
ISSUE_NUMBER={{#42}}
```

---

## 2. Create Branch

Create a branch referencing the issue number:

### Branch Naming Convention
```
{{type}}/{{issue-number}}-{{short-description}}
```

**Examples:**
- `feat/42-user-authentication`
- `fix/123-login-redirect-loop`
- `chore/99-update-dependencies`
- `docs/55-api-documentation`

### Commands
```bash
git checkout main
git pull origin main
git checkout -b feat/{{ISSUE_NUMBER}}-{{short-description}}
```

---

## 3. Development Checklist

- [ ] Branch created with issue number reference
- [ ] Pre-code checklist completed (`checklist-pre-code.md`)
- [ ] Implementation complete
- [ ] Tests written and passing
- [ ] Post-code checklist completed (`checklist-post-code.md`)
- [ ] Changes committed with meaningful messages

### Commit Message Format
Reference the issue in commits:
```
{{type}}: {{description}} (#{{ISSUE_NUMBER}})

{{Optional body with details}}
```

---

## 4. Create Pull Request

### PR Title
```
{{type}}: {{description}} (#{{ISSUE_NUMBER}})
```

### PR Description Template
```markdown
## Summary
{{Brief description of changes}}

## Related Issue
Closes #{{ISSUE_NUMBER}}

## Changes Made
- {{Change 1}}
- {{Change 2}}
- {{Change 3}}

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if UI changes)
{{Before/After screenshots}}

## Checklist
- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Documentation updated (if needed)
- [ ] No console errors or warnings
```

### Issue-Closing Keywords
Use one of these in the PR description to auto-close the issue on merge:
- `Closes #{{ISSUE_NUMBER}}`
- `Fixes #{{ISSUE_NUMBER}}`
- `Resolves #{{ISSUE_NUMBER}}`

---

## 5. Workflow Summary

| Step | Action | Key Output |
|------|--------|------------|
| 1 | Create Issue | `ISSUE_NUMBER` (e.g., #42) |
| 2 | Create Branch | `feat/42-feature-name` |
| 3 | Develop & Commit | Reference issue in commits |
| 4 | Create PR | Include `Closes #42` |
| 5 | Merge PR | Issue auto-closes |

---

## Agent Checklist

- [ ] Issue created with clear description and acceptance criteria
- [ ] Issue number captured: `#_____`
- [ ] Branch created with issue number in name
- [ ] All commits reference the issue number
- [ ] PR created with `Closes #{{ISSUE_NUMBER}}` in description
- [ ] PR linked to issue in GitHub sidebar
- [ ] Ready for review

