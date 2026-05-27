# places Graph Relationships

       ## Service Dependency Graph
       places
-> Angular application
-> Queues/Events: not present
-> Deployment: Deployment is manual and repo-specific; inspect the local scripts and README before changing runtime assumptions.

       ## Runtime Dependency Graph
       places
-> Runtime: Angular
-> Runtime: TypeScript
-> Runtime: RxJS
-> Runtime: SCSS

       ## Database Relationship Graph
       places
-> no dedicated database visible

       ## API Consumer / Provider Graph
       places
-> no formal API contract visible

       ## Queue Publisher / Consumer Graph
       places
-> no broker or queue layer visible

       ## Shared Package Dependency Graph
       places
-> no notable shared package layer beyond app-local dependencies

       ## Deployment Relationship Graph
       places
       - Deployment is manual and repo-specific; inspect the local scripts and README before changing runtime assumptions.

       ## Cross-Repo Relationship Graph
       places
-> no runtime dependency on sibling repos by default
