# Graph Report - places  (2026-05-19)

## Corpus Check
- 26 files · ~3,796 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 238 nodes · 242 edges · 21 communities (17 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `rules` - 40 edges
2. `devDependencies` - 20 edges
3. `production` - 15 edges
4. `dependencies` - 13 edges
5. `compilerOptions` - 13 edges
6. `options` - 10 edges
7. `options` - 8 edges
8. `bidi-buddy` - 7 edges
9. `architect` - 7 edges
10. `scripts` - 7 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (21 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (43): severity, extends, rules, array-type, arrow-parens, component-class-suffix, component-selector, contextual-lifecycle (+35 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (8): AppComponent, fixture, AppModule, AppRoutingModule, routes, RestServicesService, environment, PlaceListComponent

### Community 2 - "Community 2"
Cohesion: 0.1
Nodes (20): devDependencies, @angular/cli, @angular/compiler-cli, @angular-devkit/build-angular, @angular/language-service, codelyzer, jasmine-core, jasmine-spec-reporter (+12 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (19): e2e, extract-i18n, lint, serve, test, architect, builder, configurations (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (17): angularCompilerOptions, fullTemplateTypeCheck, strictInjectionParameters, compileOnSave, compilerOptions, baseUrl, declaration, downlevelIteration (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (16): build, builder, configurations, production, browserTarget, budgets, buildOptimizer, devServerTarget (+8 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (13): prefix, projectType, root, schematics, sourceRoot, defaultProject, newProjectRoot, projects (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.2
Nodes (14): options, options, aot, assets, exclude, index, karmaConfig, main (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (13): dependencies, @angular/animations, @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/platform-browser, @angular/platform-browser-dynamic (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, e2e, lint, ng, start (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.25
Nodes (7): BidiBuddy, Build, Code scaffolding, Development server, Further help, Running end-to-end tests, Running unit tests

### Community 11 - "Community 11"
Cohesion: 0.29
Nodes (6): compilerOptions, module, outDir, target, types, extends

### Community 12 - "Community 12"
Cohesion: 0.29
Nodes (6): compilerOptions, outDir, types, extends, files, include

### Community 13 - "Community 13"
Cohesion: 0.29
Nodes (6): compilerOptions, outDir, types, extends, files, include

### Community 15 - "Community 15"
Cohesion: 0.5
Nodes (3): html_attributions, results, status

## Knowledge Gaps
- **159 isolated node(s):** `extends`, `outDir`, `types`, `files`, `include` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `architect` connect `Community 3` to `Community 5`, `Community 6`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `bidi-buddy` connect `Community 6` to `Community 3`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `extends`, `outDir`, `types` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._