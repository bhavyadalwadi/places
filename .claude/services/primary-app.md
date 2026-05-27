# Primary App

## Responsibility
Main runtime for `places`.

## Dependencies
- Angular
- TypeScript
- RxJS
- SCSS

## Inbound APIs
- No formal inbound API is visible.

## Outbound APIs
- No confirmed external provider or downstream API.

## Databases Used
- No dedicated database visible.

## Queues / Topics
- No queue/topic layer visible.

## Critical Workflows
- Angular 9 scaffold with standard CLI project structure
- Place list component that loads JSON data through a service call
- Service-based data flow suitable for a directory or discovery-style UI
- Local Angular development, build, test, and e2e scripts

## Failure Modes
- There is no strong operational harness here; expect manual verification and thinner safety rails before changing behavior.

## Scaling Concerns
- current implementation appears intentionally lightweight
- there is no evidence of multi-service scaling machinery unless repo docs add it

## Operational Concerns
- start from repo-local `.claude/` docs and Graphify summary before code changes
- validate environment assumptions before debugging logic

## Important Source Files
- `README.md`
- `src/app/place-list/place-list.component.ts`
- `src/app/app.module.ts`
- `package.json`
- `README.MD`

## Dangerous Code Paths
- There is no strong operational harness here; expect manual verification and thinner safety rails before changing behavior.

## Testing Strategy
- `npm run test`
- `npm run lint`

## Known Technical Debt
- Pending work is unknown from current repo docs.
