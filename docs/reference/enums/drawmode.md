# Enumeration: DrawMode

DrawMode represents available draw modes for rendering, changes how render
systems interpret how to render renderables.

## Table of contents

### Enumeration members

- [LINES](drawmode.md#lines)
- [LINE\_STRIP](drawmode.md#line_strip)
- [POINTS](drawmode.md#points)
- [TRIANGLES](drawmode.md#triangles)
- [TRIANGLE\_STRIP](drawmode.md#triangle_strip)

## Enumeration members

### LINES

• **LINES**: = 1

Every pair of vertices are treated as a line, pairs are not continous,
e.g. in ABCD A-B are a pair and connected, C-D are a pair and connected,
B C are NOT a pair and connected.

___

### LINE\_STRIP

• **LINE\_STRIP**: = 2

The vertices make up a singular line that moves from point to point
continously, e.g. in ABCD A-B are connected, B-C are connected, C-D are
connected.

___

### POINTS

• **POINTS**: = 0

Each vertex is interpreted as a point.

___

### TRIANGLES

• **TRIANGLES**: = 3

Every 3 vertices make up a triangle, triangles are not continous, e.g in
ABCDEF A-B-C make up a triangle, D-E-F make up a triangle, A-B-C and
D-E-F are not connected.

___

### TRIANGLE\_STRIP

• **TRIANGLE\_STRIP**: = 4

Every group of 3 adjacent vertices forms a triangle, with the face
direction of the strip determined by the winding of the first triangle.
Each successive triangle will have its effective face order reversed.
