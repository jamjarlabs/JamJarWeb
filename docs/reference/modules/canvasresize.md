# Namespace: CanvasResize

CanvasResize provides utility functions for calculating resolutions and aspect ratios.

## Table of contents

### Functions

- [GetClosestAspectRatioToResolution](canvasresize.md#getclosestaspectratiotoresolution)
- [GetLargestResolutionForAspect](canvasresize.md#getlargestresolutionforaspect)

## Functions

### GetClosestAspectRatioToResolution

▸ **GetClosestAspectRatioToResolution**(`screenWidth`: *number*, `screenHeight`: *number*, `ratios?`: [*number*, *number*][]): [*number*, *number*]

GetClosestAspectRatioToResolution determines which aspect ratio is closest to the screen width and height. Allows
a list of aspect ratios to be provided, if none provided will use a default list of common aspect ratios.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`screenWidth` | *number* | The width of the screen.   |
`screenHeight` | *number* | The height of the screen.   |
`ratios` | [*number*, *number*][] | An optional list of ratios to pick from, if not provided will use a default list.    |

**Returns:** [*number*, *number*]

___

### GetLargestResolutionForAspect

▸ **GetLargestResolutionForAspect**(`ratio`: *number*, `maxWidth`: *number*, `maxHeight`: *number*): [*number*, *number*]

GetLargestResolutionForAspect calculates the largest resolution for an aspect ratio that will fit inside the
minimum and maximum resolutions.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ratio` | *number* | The aspect ratio to target.   |
`maxWidth` | *number* | The maximum allowed width of the resolultion.   |
`maxHeight` | *number* | The maximum allowed height of the resolution.    |

**Returns:** [*number*, *number*]
