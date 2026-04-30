---
context: search-only
---

# Layout-driven animation geometry

Learning from the Harness Autoresearch intro connector fix:

- Connector geometry should be derived from the rendered layout, not hand-tuned from screenshots.
- For geometric nodes, connector endpoints should be computed by intersecting the connector ray with the actual visible shape boundary, not by guessing offsets from the center.
- Curved connectors need explicit routing rules. For loop diagrams, bow paths outward from the loop center so they avoid labels, node bodies, and central UI.
- Avoid duplicated layout logic: if nodes are rendered from one coordinate system while connectors use separate guessed coordinates, polish bugs appear when layout shifts.
- Prefer declarative/layout-driven geometry so later changes to node positions, shape sizes, or spacing keep connectors attached cleanly without manual retuning.

Concrete example: `pitch-animations/src/scenes/HarnessAutoresearchIntro.tsx` was improved by deriving loop connector endpoints from rendered hex node centers, clipping to hex-edge intersections, and curving outward from the loop center.
