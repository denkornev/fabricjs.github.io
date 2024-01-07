# Class: Canvas

## Hierarchy

- `SelectableCanvas`

  ↳ **`Canvas`**

## Implements

- [`CanvasOptions`](/apidocs/interfaces/CanvasOptions.md)

## Constructors

### constructor

**new Canvas**(`el?`, `options?`): [`Canvas`](/apidocs/classes/Canvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el?` | `string` \| `HTMLCanvasElement` |
| `options` | `TCanvasOptions` |

#### Returns

[`Canvas`](/apidocs/classes/Canvas.md)

#### Overrides

SelectableCanvas.constructor

#### Defined in

[src/canvas/Canvas.ts:114](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L114)

## Properties

### \_\_cleanupTask

 `Protected` `Optional` **\_\_cleanupTask**: `Object`

#### Call signature

(): `void`

##### Returns

`void`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kill` | (`reason?`: `any`) => `void` |

#### Inherited from

SelectableCanvas.\_\_cleanupTask

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L157)

___

### \_absolutePointer

 `Protected` `Optional` **\_absolutePointer**: [`Point`](/apidocs/classes/Point.md)

During a mouse event we may need the pointer multiple times in multiple functions.
_absolutePointer holds a reference to the pointer in fabricCanvas/design coordinates that is valid for the event
lifespan. Every fabricJS mouse event create and delete the cache every time
We do this because there are some HTML DOM inspection functions to get the actual pointer coordinates

#### Inherited from

SelectableCanvas.\_absolutePointer

#### Defined in

[src/canvas/SelectableCanvas.ts:256](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L256)

___

### \_activeObject

 `Optional` **\_activeObject**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

SelectableCanvas.\_activeObject

#### Defined in

[src/canvas/SelectableCanvas.ts:296](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L296)

___

### \_activeSelection

 `Protected` **\_activeSelection**: [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Inherited from

SelectableCanvas.\_activeSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:297](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L297)

___

### \_currentTransform

 `Private` **\_currentTransform**: ``null`` \| [`Transform`](/apidocs/modules.md#transform) = `null`

hold a reference to a data structure that contains information
on the current on going transform

#### Inherited from

SelectableCanvas.\_currentTransform

#### Defined in

[src/canvas/SelectableCanvas.ts:224](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L224)

___

### \_dragSource

 `Private` `Optional` **\_dragSource**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Holds a reference to an object on the canvas from where the drag operation started

#### Defined in

[src/canvas/Canvas.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L99)

___

### \_draggedoverTarget

 `Private` `Optional` **\_draggedoverTarget**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Holds a reference to an object on the canvas that is receiving the drag over event.

#### Defined in

[src/canvas/Canvas.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L92)

___

### \_dropTarget

 `Private` **\_dropTarget**: `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Holds a reference to an object on the canvas that is the current drop target
May differ from [_draggedoverTarget](/apidocs/classes/Canvas.md#_draggedovertarget)

**`Todo`**

inspect whether [_draggedoverTarget](/apidocs/classes/Canvas.md#_draggedovertarget) and [_dropTarget](/apidocs/classes/Canvas.md#_droptarget) should be merged somehow

#### Defined in

[src/canvas/Canvas.ts:108](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L108)

___

### \_groupSelector

 `Private` **\_groupSelector**: ``null`` \| \{ `deltaX`: `number` ; `deltaY`: `number` ; `x`: `number` ; `y`: `number`  } = `null`

hold a reference to a data structure used to track the selection
box on canvas drag
on the current on going transform
x, y, deltaX and deltaY are in scene plane

#### Inherited from

SelectableCanvas.\_groupSelector

#### Defined in

[src/canvas/SelectableCanvas.ts:234](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L234)

___

### \_hoveredTarget

 `Optional` `Private` **\_hoveredTarget**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Keep track of the hovered target

#### Inherited from

SelectableCanvas.\_hoveredTarget

#### Defined in

[src/canvas/SelectableCanvas.ts:202](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L202)

___

### \_hoveredTargets

 `Private` **\_hoveredTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] = `[]`

hold the list of nested targets hovered

#### Inherited from

SelectableCanvas.\_hoveredTargets

#### Defined in

[src/canvas/SelectableCanvas.ts:209](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L209)

___

### \_isClick

 `Private` **\_isClick**: `boolean`

#### Defined in

[src/canvas/Canvas.ts:110](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L110)

___

### \_isCurrentlyDrawing

 `Protected` **\_isCurrentlyDrawing**: `boolean`

#### Inherited from

SelectableCanvas.\_isCurrentlyDrawing

#### Defined in

[src/canvas/SelectableCanvas.ts:294](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L294)

___

### \_objects

 **\_objects**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

SelectableCanvas.\_objects

#### Defined in

[src/canvas/SelectableCanvas.ts:140](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L140)

___

### \_objectsToRender

 `Optional` `Private` **\_objectsToRender**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

hold the list of objects to render

#### Inherited from

SelectableCanvas.\_objectsToRender

#### Defined in

[src/canvas/SelectableCanvas.ts:216](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L216)

___

### \_offset

 **\_offset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

SelectableCanvas.\_offset

#### Defined in

[src/canvas/StaticCanvas.ts:148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L148)

___

### \_pointer

 `Protected` `Optional` **\_pointer**: [`Point`](/apidocs/classes/Point.md)

During a mouse event we may need the pointer multiple times in multiple functions.
_pointer holds a reference to the pointer in html coordinates that is valid for the event
lifespan. Every fabricJS mouse event create and delete the cache every time
We do this because there are some HTML DOM inspection functions to get the actual pointer coordinates

#### Inherited from

SelectableCanvas.\_pointer

#### Defined in

[src/canvas/SelectableCanvas.ts:265](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L265)

___

### \_target

 `Protected` `Optional` **\_target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

During a mouse event we may need the target multiple times in multiple functions.
_target holds a reference to the target that is valid for the event
lifespan. Every fabricJS mouse event create and delete the cache every time

#### Inherited from

SelectableCanvas.\_target

#### Defined in

[src/canvas/SelectableCanvas.ts:273](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L273)

___

### \_willAddMouseDown

 `Private` **\_willAddMouseDown**: `number`

Holds a reference to a setTimeout timer for event synchronization

#### Defined in

[src/canvas/Canvas.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L85)

___

### allowTouchScrolling

 **allowTouchScrolling**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[allowTouchScrolling](/apidocs/interfaces/CanvasOptions.md#allowtouchscrolling)

#### Inherited from

SelectableCanvas.allowTouchScrolling

#### Defined in

[src/canvas/StaticCanvas.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L112)

___

### altActionKey

 **altActionKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[altActionKey](/apidocs/interfaces/CanvasOptions.md#altactionkey)

#### Inherited from

SelectableCanvas.altActionKey

#### Defined in

[src/canvas/SelectableCanvas.ts:148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L148)

___

### altSelectionKey

 **altSelectionKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key enable alternative selection
in case of target overlapping with active object
values: 'altKey', 'shiftKey', 'ctrlKey'.
For a series of reason that come from the general expectations on how
things should work, this feature works only for preserveObjectStacking true.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[altSelectionKey](/apidocs/interfaces/CanvasOptions.md#altselectionkey)

#### Inherited from

SelectableCanvas.altSelectionKey

#### Defined in

[src/canvas/SelectableCanvas.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L153)

___

### backgroundColor

 **backgroundColor**: `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

Background color of canvas instance.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[backgroundColor](/apidocs/interfaces/CanvasOptions.md#backgroundcolor)

#### Inherited from

SelectableCanvas.backgroundColor

#### Defined in

[src/canvas/StaticCanvas.ts:87](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L87)

___

### backgroundImage

 `Optional` **backgroundImage**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[backgroundImage](/apidocs/interfaces/CanvasOptions.md#backgroundimage)

#### Inherited from

SelectableCanvas.backgroundImage

#### Defined in

[src/canvas/StaticCanvas.ts:88](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L88)

___

### backgroundVpt

 **backgroundVpt**: `boolean`

if set to false background image is not affected by viewport transform

**`Since`**

1.6.3

**`Todo`**

we should really find a different way to do this

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[backgroundVpt](/apidocs/interfaces/CanvasOptions.md#backgroundvpt)

#### Inherited from

SelectableCanvas.backgroundVpt

#### Defined in

[src/canvas/StaticCanvas.ts:86](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L86)

___

### centeredKey

 **centeredKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[centeredKey](/apidocs/interfaces/CanvasOptions.md#centeredkey)

#### Inherited from

SelectableCanvas.centeredKey

#### Defined in

[src/canvas/SelectableCanvas.ts:147](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L147)

___

### centeredRotation

 **centeredRotation**: `boolean`

When true, objects use center point as the origin of rotate transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[centeredRotation](/apidocs/interfaces/CanvasOptions.md#centeredrotation)

#### Inherited from

SelectableCanvas.centeredRotation

#### Defined in

[src/canvas/SelectableCanvas.ts:146](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L146)

___

### centeredScaling

 **centeredScaling**: `boolean`

When true, objects use center point as the origin of scale transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[centeredScaling](/apidocs/interfaces/CanvasOptions.md#centeredscaling)

#### Inherited from

SelectableCanvas.centeredScaling

#### Defined in

[src/canvas/SelectableCanvas.ts:145](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L145)

___

### clipPath

 `Optional` **clipPath**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[clipPath](/apidocs/interfaces/CanvasOptions.md#clippath)

#### Inherited from

SelectableCanvas.clipPath

#### Defined in

[src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L94)

___

### containerClass

 **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

**`Default`**

```ts

```

**`Deprecated`**

customize [CanvasDOMManager](/apidocs/classes/CanvasDOMManager.md) instead or access [elements](/apidocs/classes/Canvas.md#elements) directly

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[containerClass](/apidocs/interfaces/CanvasOptions.md#containerclass)

#### Inherited from

SelectableCanvas.containerClass

#### Defined in

[src/canvas/SelectableCanvas.ts:167](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L167)

___

### contextTopDirty

 `Private` **contextTopDirty**: `boolean` = `false`

internal flag used to understand if the context top requires a cleanup
in case this is true, the contextTop will be cleared at the next render

#### Inherited from

SelectableCanvas.contextTopDirty

#### Defined in

[src/canvas/SelectableCanvas.ts:247](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L247)

___

### controlsAboveOverlay

 **controlsAboveOverlay**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[controlsAboveOverlay](/apidocs/interfaces/CanvasOptions.md#controlsaboveoverlay)

#### Inherited from

SelectableCanvas.controlsAboveOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:107](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L107)

___

### defaultCursor

 **defaultCursor**: `string`

Default cursor value used for the entire canvas

**`Default`**

```ts
default
```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[defaultCursor](/apidocs/interfaces/CanvasOptions.md#defaultcursor)

#### Inherited from

SelectableCanvas.defaultCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:163](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L163)

___

### destroyed

 `Optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Inherited from

SelectableCanvas.destroyed

#### Defined in

[src/canvas/StaticCanvas.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L139)

___

### disposed

 `Optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Inherited from

SelectableCanvas.disposed

#### Defined in

[src/canvas/StaticCanvas.ts:146](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L146)

___

### elements

 **elements**: [`CanvasDOMManager`](/apidocs/classes/CanvasDOMManager.md)

#### Inherited from

SelectableCanvas.elements

#### Defined in

[src/canvas/SelectableCanvas.ts:281](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L281)

___

### enablePointerEvents

 **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[enablePointerEvents](/apidocs/interfaces/CanvasOptions.md#enablepointerevents)

#### Defined in

[src/canvas/Canvas.ts:78](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L78)

___

### enableRetinaScaling

 **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[enableRetinaScaling](/apidocs/interfaces/CanvasOptions.md#enableretinascaling)

#### Inherited from

SelectableCanvas.enableRetinaScaling

#### Defined in

[src/canvas/StaticCanvas.ts:101](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L101)

___

### fireMiddleClick

 **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

**`Since`**

1.7.8

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[fireMiddleClick](/apidocs/interfaces/CanvasOptions.md#firemiddleclick)

#### Inherited from

SelectableCanvas.fireMiddleClick

#### Defined in

[src/canvas/SelectableCanvas.ts:189](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L189)

___

### fireRightClick

 **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[fireRightClick](/apidocs/interfaces/CanvasOptions.md#firerightclick)

#### Inherited from

SelectableCanvas.fireRightClick

#### Defined in

[src/canvas/SelectableCanvas.ts:188](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L188)

___

### freeDrawingBrush

 `Optional` **freeDrawingBrush**: [`BaseBrush`](/apidocs/classes/BaseBrush.md)

#### Inherited from

SelectableCanvas.freeDrawingBrush

#### Defined in

[src/canvas/SelectableCanvas.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L295)

___

### freeDrawingCursor

 **freeDrawingCursor**: `string`

Cursor value used during free drawing

**`Default`**

```ts
crosshair
```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[freeDrawingCursor](/apidocs/interfaces/CanvasOptions.md#freedrawingcursor)

#### Inherited from

SelectableCanvas.freeDrawingCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:164](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L164)

___

### hasLostContext

 `Protected` **hasLostContext**: `boolean`

#### Inherited from

SelectableCanvas.hasLostContext

#### Defined in

[src/canvas/StaticCanvas.ts:149](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L149)

___

### height

 **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[height](/apidocs/interfaces/CanvasOptions.md#height)

#### Inherited from

SelectableCanvas.height

#### Defined in

[src/canvas/StaticCanvas.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L83)

___

### hoverCursor

 **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

**`Default`**

```ts
move
```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[hoverCursor](/apidocs/interfaces/CanvasOptions.md#hovercursor)

#### Inherited from

SelectableCanvas.hoverCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:161](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L161)

___

### imageSmoothingEnabled

 **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[imageSmoothingEnabled](/apidocs/interfaces/CanvasOptions.md#imagesmoothingenabled)

#### Inherited from

SelectableCanvas.imageSmoothingEnabled

#### Defined in

[src/canvas/StaticCanvas.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L102)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[includeDefaultValues](/apidocs/interfaces/CanvasOptions.md#includedefaultvalues)

#### Inherited from

SelectableCanvas.includeDefaultValues

#### Defined in

[src/canvas/StaticCanvas.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L96)

___

### isDrawingMode

 **isDrawingMode**: `boolean`

When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
After mousedown, mousemove creates a shape,
and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-4#free_drawing](http://fabricjs.com/fabric-intro-part-4#free_drawing)

**`Default`**

```ts

```

#### Inherited from

SelectableCanvas.isDrawingMode

#### Defined in

[src/canvas/SelectableCanvas.ts:182](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L182)

___

### mainTouchId

 `Private` **mainTouchId**: ``null`` \| `number`

Contains the id of the touch event that owns the fabric transform

#### Defined in

[src/canvas/Canvas.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L76)

___

### moveCursor

 **moveCursor**: `string`

Default cursor value used when moving an object on canvas

**`Default`**

```ts
move
```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[moveCursor](/apidocs/interfaces/CanvasOptions.md#movecursor)

#### Inherited from

SelectableCanvas.moveCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:162](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L162)

___

### nextRenderHandle

 `Protected` **nextRenderHandle**: `number`

#### Inherited from

SelectableCanvas.nextRenderHandle

#### Defined in

[src/canvas/StaticCanvas.ts:150](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L150)

___

### notAllowedCursor

 **notAllowedCursor**: `string`

Cursor value used for disabled elements ( corners with disabled action )

**`Since`**

2.0.0

**`Default`**

```ts
not-allowed
```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[notAllowedCursor](/apidocs/interfaces/CanvasOptions.md#notallowedcursor)

#### Inherited from

SelectableCanvas.notAllowedCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:165](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L165)

___

### overlayColor

 **overlayColor**: `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[overlayColor](/apidocs/interfaces/CanvasOptions.md#overlaycolor)

#### Inherited from

SelectableCanvas.overlayColor

#### Defined in

[src/canvas/StaticCanvas.ts:91](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L91)

___

### overlayImage

 `Optional` **overlayImage**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[overlayImage](/apidocs/interfaces/CanvasOptions.md#overlayimage)

#### Inherited from

SelectableCanvas.overlayImage

#### Defined in

[src/canvas/StaticCanvas.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L92)

___

### overlayVpt

 **overlayVpt**: `boolean`

if set to false overlay image is not affected by viewport transform

**`Since`**

1.6.3

**`Todo`**

we should really find a different way to do this

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[overlayVpt](/apidocs/interfaces/CanvasOptions.md#overlayvpt)

#### Inherited from

SelectableCanvas.overlayVpt

#### Defined in

[src/canvas/StaticCanvas.ts:90](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L90)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[perPixelTargetFind](/apidocs/interfaces/CanvasOptions.md#perpixeltargetfind)

#### Inherited from

SelectableCanvas.perPixelTargetFind

#### Defined in

[src/canvas/SelectableCanvas.ts:170](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L170)

___

### preserveObjectStacking

 **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[preserveObjectStacking](/apidocs/interfaces/CanvasOptions.md#preserveobjectstacking)

#### Inherited from

SelectableCanvas.preserveObjectStacking

#### Defined in

[src/canvas/SelectableCanvas.ts:184](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L184)

___

### renderOnAddRemove

 **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](/apidocs/classes/StaticCanvas.md#add), [StaticCanvas#insertAt](/apidocs/classes/StaticCanvas.md#insertat) and [StaticCanvas#remove](/apidocs/classes/StaticCanvas.md#remove),
StaticCanvas#moveTo, [StaticCanvas#clear](/apidocs/classes/StaticCanvas.md#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[renderOnAddRemove](/apidocs/interfaces/CanvasOptions.md#renderonaddremove)

#### Inherited from

SelectableCanvas.renderOnAddRemove

#### Defined in

[src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L99)

___

### selection

 **selection**: `boolean`

Indicates whether group selection should be enabled

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selection](/apidocs/interfaces/CanvasOptions.md#selection)

#### Inherited from

SelectableCanvas.selection

#### Defined in

[src/canvas/SelectableCanvas.ts:151](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L151)

___

### selectionBorderColor

 **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selectionBorderColor](/apidocs/interfaces/CanvasOptions.md#selectionbordercolor)

#### Inherited from

SelectableCanvas.selectionBorderColor

#### Defined in

[src/canvas/SelectableCanvas.ts:156](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L156)

___

### selectionColor

 **selectionColor**: `string`

Color of selection

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selectionColor](/apidocs/interfaces/CanvasOptions.md#selectioncolor)

#### Inherited from

SelectableCanvas.selectionColor

#### Defined in

[src/canvas/SelectableCanvas.ts:154](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L154)

___

### selectionDashArray

 **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selectionDashArray](/apidocs/interfaces/CanvasOptions.md#selectiondasharray)

#### Inherited from

SelectableCanvas.selectionDashArray

#### Defined in

[src/canvas/SelectableCanvas.ts:155](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L155)

___

### selectionFullyContained

 **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selectionFullyContained](/apidocs/interfaces/CanvasOptions.md#selectionfullycontained)

#### Inherited from

SelectableCanvas.selectionFullyContained

#### Defined in

[src/canvas/SelectableCanvas.ts:158](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L158)

___

### selectionKey

 **selectionKey**: `undefined` \| ``null`` \| ``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"`` \| (``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"``)[]

Indicates which key or keys enable multiple click selection
Pass value as a string or array of strings
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or empty or containing any other string that is not a modifier key
feature is disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selectionKey](/apidocs/interfaces/CanvasOptions.md#selectionkey)

#### Inherited from

SelectableCanvas.selectionKey

#### Defined in

[src/canvas/SelectableCanvas.ts:152](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L152)

___

### selectionLineWidth

 **selectionLineWidth**: `number`

Width of a line used in object/group selection

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[selectionLineWidth](/apidocs/interfaces/CanvasOptions.md#selectionlinewidth)

#### Inherited from

SelectableCanvas.selectionLineWidth

#### Defined in

[src/canvas/SelectableCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L157)

___

### skipOffscreen

 **skipOffscreen**: `boolean`

Based on vptCoords and object.aCoords, skip rendering of objects that
are not included in current viewport.
May greatly help in applications with crowded canvas and use of zoom/pan
If One of the corner of the bounding box of the object is on the canvas
the objects get rendered.

**`Default`**

```ts
true
```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[skipOffscreen](/apidocs/interfaces/CanvasOptions.md#skipoffscreen)

#### Inherited from

SelectableCanvas.skipOffscreen

#### Defined in

[src/canvas/StaticCanvas.ts:100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L100)

___

### skipTargetFind

 **skipTargetFind**: `boolean`

When true, target detection is skipped. Target detection will return always undefined.
click selection won't work anymore, events will fire with no targets.
if something is selected before setting it to true, it will be deselected at the first click.
area selection will still work. check the `selection` property too.
if you deactivate both, you should look into staticCanvas.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[skipTargetFind](/apidocs/interfaces/CanvasOptions.md#skiptargetfind)

#### Inherited from

SelectableCanvas.skipTargetFind

#### Defined in

[src/canvas/SelectableCanvas.ts:172](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L172)

___

### stopContextMenu

 **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[stopContextMenu](/apidocs/interfaces/CanvasOptions.md#stopcontextmenu)

#### Inherited from

SelectableCanvas.stopContextMenu

#### Defined in

[src/canvas/SelectableCanvas.ts:187](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L187)

___

### svgViewportTransformation

 **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[svgViewportTransformation](/apidocs/interfaces/CanvasOptions.md#svgviewporttransformation)

#### Inherited from

SelectableCanvas.svgViewportTransformation

#### Defined in

[src/canvas/StaticCanvas.ts:930](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L930)

___

### targetFindTolerance

 **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[targetFindTolerance](/apidocs/interfaces/CanvasOptions.md#targetfindtolerance)

#### Inherited from

SelectableCanvas.targetFindTolerance

#### Defined in

[src/canvas/SelectableCanvas.ts:171](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L171)

___

### targets

 **targets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] = `[]`

Keep track of the subTargets for Mouse Events

#### Inherited from

SelectableCanvas.targets

#### Defined in

[src/canvas/SelectableCanvas.ts:195](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L195)

___

### textEditingManager

 **textEditingManager**: `TextEditingManager`

#### Defined in

[src/canvas/Canvas.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L112)

___

### uniScaleKey

 **uniScaleKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key switches uniform scaling.
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.
totally wrong named. this sounds like `uniform scaling`
if Canvas.uniformScaling is true, pressing this will set it to false
and viceversa.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[uniScaleKey](/apidocs/interfaces/CanvasOptions.md#uniscalekey)

#### Inherited from

SelectableCanvas.uniScaleKey

#### Defined in

[src/canvas/SelectableCanvas.ts:144](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L144)

___

### uniformScaling

 **uniformScaling**: `boolean`

When true, objects can be transformed by one side (unproportionately)
when dragged on the corners that normally would not do that.

**`Default`**

```ts

```

**`Since`**

fabric 4.0 // changed name and default value

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[uniformScaling](/apidocs/interfaces/CanvasOptions.md#uniformscaling)

#### Inherited from

SelectableCanvas.uniformScaling

#### Defined in

[src/canvas/SelectableCanvas.ts:143](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L143)

___

### viewportTransform

 **viewportTransform**: [`TMat2D`](/apidocs/modules.md#tmat2d)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

**`Example`**

```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

**`Example`**

```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[viewportTransform](/apidocs/interfaces/CanvasOptions.md#viewporttransform)

#### Inherited from

SelectableCanvas.viewportTransform

#### Defined in

[src/canvas/StaticCanvas.ts:114](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L114)

___

### vptCoords

 **vptCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](/apidocs/classes/Canvas.md#calcviewportboundaries)

#### Inherited from

SelectableCanvas.vptCoords

#### Defined in

[src/canvas/StaticCanvas.ts:119](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L119)

___

### width

 **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[CanvasOptions](/apidocs/interfaces/CanvasOptions.md).[width](/apidocs/interfaces/CanvasOptions.md#width)

#### Inherited from

SelectableCanvas.width

#### Defined in

[src/canvas/StaticCanvas.ts:82](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L82)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `canvasDefaults`

#### Inherited from

SelectableCanvas.ownDefaults

#### Defined in

[src/canvas/SelectableCanvas.ts:275](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L275)

## Accessors

### contextContainer

`get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.contextContainer

#### Defined in

[src/canvas/StaticCanvas.ts:130](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L130)

___

### contextTop

`get` **contextTop**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.contextTop

#### Defined in

[src/canvas/SelectableCanvas.ts:285](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L285)

___

### lowerCanvasEl

`get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.lowerCanvasEl

#### Defined in

[src/canvas/StaticCanvas.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L126)

___

### upperCanvasEl

`get` **upperCanvasEl**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.upperCanvasEl

#### Defined in

[src/canvas/SelectableCanvas.ts:282](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L282)

___

### wrapperEl

`get` **wrapperEl**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Inherited from

SelectableCanvas.wrapperEl

#### Defined in

[src/canvas/SelectableCanvas.ts:288](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L288)

## Methods

### \_\_onMouseDown

**__onMouseDown**(`e`): `void`

Method that defines the actions when mouse is clicked on canvas.
The method inits the currentTransform parameters and renders all the
canvas so the current image can be placed on the top canvas and the rest
in on the container one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1023](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1023)

___

### \_\_onMouseMove

**__onMouseMove**(`e`): `void`

Method that defines the actions when mouse is hovering the canvas.
The currentTransform parameter will define whether the user is rotating/scaling/translating
an image or neither of them (only hovering). A group selection is also possible and would cancel
all any other type of action.
In case of an image transformation only the top canvas will be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1169](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1169)

___

### \_\_onMouseUp

**__onMouseUp**(`e`): `void`

Method that defines the actions when mouse is released on canvas.
The method resets the currentTransform parameters, store the image corner
position in the image object and render the canvas on top.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:769](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L769)

___

### \_\_onMouseWheel

**__onMouseWheel**(`e`): `void`

Method that defines actions when an Event Mouse Wheel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1320](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1320)

___

### \_\_serializeBgOverlay

**__serializeBgOverlay**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Inherited from

SelectableCanvas.\_\_serializeBgOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:884](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L884)

___

### \_basicEventHandler

**_basicEventHandler**\<`T`\>(`eventType`, `options`): [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) & [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"erasing:end"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"dragover"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragend"`` \| ``"drop:before"`` \| ``"drop"`` \| ``"drop:after"`` \| ``"contextmenu:before"`` \| ``"contextmenu"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `T` |
| `options` | [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) & [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)[`T`] |

#### Returns

[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) & [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)[`T`]

#### Defined in

[src/canvas/Canvas.ts:872](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L872)

___

### \_beforeTransform

**_beforeTransform**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1152](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1152)

___

### \_cacheTransformEventData

**_cacheTransformEventData**(`e`): `void`

Cache common information needed during event processing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1135)

___

### \_centerObject

**_centerObject**(`object`, `center`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center |
| `center` | [`Point`](/apidocs/classes/Point.md) | Center point |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_centerObject

#### Defined in

[src/canvas/StaticCanvas.ts:782](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L782)

___

### \_checkTarget

**_checkTarget**(`obj`, `pointer?`): `boolean`

Checks point is inside the object selection condition. Either area with padding
or over pixels if perPixelTargetFind is enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to test against |
| `pointer?` | [`Point`](/apidocs/classes/Point.md) | point from viewport. |

#### Returns

`boolean`

true if point is contained within an area of given object

#### Inherited from

SelectableCanvas.\_checkTarget

#### Defined in

[src/canvas/SelectableCanvas.ts:806](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L806)

___

### \_chooseObjectsToRender

**_chooseObjectsToRender**(): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Divides objects in two groups, one to render immediately
and one to render as activeGroup.

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

objects to render immediately and pushes the other in the activeGroup.

#### Inherited from

SelectableCanvas.\_chooseObjectsToRender

#### Defined in

[src/canvas/SelectableCanvas.ts:358](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L358)

___

### \_createCacheCanvas

**_createCacheCanvas**(): `void`

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_createCacheCanvas

#### Defined in

[src/canvas/SelectableCanvas.ts:991](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L991)

___

### \_discardActiveObject

**_discardActiveObject**(`e?`, `object?`): this is Object

This is supposed to be equivalent to discardActiveObject but without firing
any selection events ( can still fire object transformation events ). There is commitment to have this stay this way.
This is the functional part of discardActiveObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | Event (passed along when firing "object:deselected") |
| `object?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the next object to set as active, reason why we are discarding this |

#### Returns

this is Object

true if the active object has been discarded

#### Inherited from

SelectableCanvas.\_discardActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1166](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1166)

___

### \_drawSelection

**_drawSelection**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | to draw the selection on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_drawSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:663](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L663)

___

### \_finalizeCurrentTransform

**_finalizeCurrentTransform**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | send the mouse event that generate the finalize down, so it can be used in the event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:940](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L940)

___

### \_fireEnterLeaveEvents

**_fireEnterLeaveEvents**(`target`, `data`): `void`

Manage the dragEnter, dragLeave events for the fabric objects on the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the target where the target from the onDrag event |
| `data` | [`DragEventData`](/apidocs/interfaces/DragEventData.md) | Event object fired on dragover |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1240](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1240)

___

### \_fireOverOutEvents

**_fireOverOutEvents**(`e`, `target?`): `void`

Manage the mouseout, mouseover events for the fabric object on the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousemove |
| `target?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the target where the target from the mousemove event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1211](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1211)

___

### \_fireSelectionEvents

**_fireSelectionEvents**(`oldObjects`, `e?`): `void`

Compares the old activeObject with the current one and fires correct events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldObjects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | old activeObject |
| `e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | mouse event triggering the selection events |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_fireSelectionEvents

#### Defined in

[src/canvas/SelectableCanvas.ts:1061](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1061)

___

### \_getEventPrefix

**_getEventPrefix**(): ``"mouse"`` \| ``"pointer"``

return an event prefix pointer or mouse.

#### Returns

``"mouse"`` \| ``"pointer"``

#### Defined in

[src/canvas/Canvas.ts:154](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L154)

___

### \_getOriginFromCorner

**_getOriginFromCorner**(`target`, `controlName`): `Object`

Given the control clicked, determine the origin of the transform.
This is bad because controls can totally have custom names
should disappear before release 4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `controlName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | [`TOriginX`](/apidocs/modules.md#toriginx) |
| `y` | [`TOriginY`](/apidocs/modules.md#toriginy) |

**`Deprecated`**

#### Inherited from

SelectableCanvas.\_getOriginFromCorner

#### Defined in

[src/canvas/SelectableCanvas.ts:552](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L552)

___

### \_handleEvent

**_handleEvent**\<`T`\>(`e`, `eventType`): `void`

Handle event firing for target and subtargets

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TPointerEventNames`](/apidocs/modules.md#tpointereventnames) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | event from mouse |
| `eventType` | `T` |  |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:894](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L894)

___

### \_isMainEvent

**_isMainEvent**(`evt`): `boolean`

Determines if an event has the id of the event that is considered main

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

`boolean`

#### Defined in

[src/canvas/Canvas.ts:573](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L573)

___

### \_isRetinaScaling

**_isRetinaScaling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SelectableCanvas.\_isRetinaScaling

#### Defined in

[src/canvas/StaticCanvas.ts:235](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L235)

___

### \_isSelectionKeyPressed

**_isSelectionKeyPressed**(`e`): `boolean`

takes an event and determines if selection key has been pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |

#### Returns

`boolean`

#### Inherited from

SelectableCanvas.\_isSelectionKeyPressed

#### Defined in

[src/canvas/SelectableCanvas.ts:470](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L470)

___

### \_onContextMenu

**_onContextMenu**(`e`): ``false``

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

``false``

#### Defined in

[src/canvas/Canvas.ts:524](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L524)

___

### \_onDoubleClick

**_onDoubleClick**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:542](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L542)

___

### \_onDragEnd

**_onDragEnd**(`e`): `void`

supports native like text dragging
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:349](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L349)

___

### \_onDragEnter

**_onDragEnter**(`e?`): `void`

fire `dragleave` on `dragover` targets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `DragEvent` | Event object fired on Event.js shake |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:455](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L455)

___

### \_onDragLeave

**_onDragLeave**(`e?`): `void`

fire `dragleave` on `dragover` targets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `DragEvent` | Event object fired on Event.js shake |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:473](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L473)

___

### \_onDragOver

**_onDragOver**(`e?`): `void`

prevent default to allow drop event to be fired
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `DragEvent` | Event object fired on Event.js shake |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:410](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L410)

___

### \_onDragProgress

**_onDragProgress**(`e`): `void`

fire `drag` event on canvas and drag source

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:377](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L377)

___

### \_onDragStart

**_onDragStart**(`e`): `void`

supports native like text dragging

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:283](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L283)

___

### \_onDrop

**_onDrop**(`e`): `void`

`drop:before` is a an event that allows you to schedule logic
before the `drop` event. Prefer `drop` event always, but if you need
to run some drop-disabling logic on an event, since there is no way
to handle event handlers ordering, use `drop:before`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:499](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L499)

___

### \_onMouseDown

**_onMouseDown**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:629](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L629)

___

### \_onMouseDownInDrawingMode

**_onMouseDownInDrawingMode**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:966](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L966)

___

### \_onMouseEnter

**_onMouseEnter**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mouseenter |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:261](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L261)

___

### \_onMouseMove

**_onMouseMove**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:726](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L726)

___

### \_onMouseMoveInDrawingMode

**_onMouseMoveInDrawingMode**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:983](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L983)

___

### \_onMouseOut

**_onMouseOut**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:241](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L241)

___

### \_onMouseUp

**_onMouseUp**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:695](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L695)

___

### \_onMouseUpInDrawingMode

**_onMouseUpInDrawingMode**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1001](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1001)

___

### \_onMouseWheel

**_onMouseWheel**(`e?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `MouseEvent` | Event object fired on wheel event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:233](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L233)

___

### \_onObjectAdded

**_onObjectAdded**(`obj`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object that was added |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_onObjectAdded

#### Defined in

[src/canvas/SelectableCanvas.ts:321](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L321)

___

### \_onObjectRemoved

**_onObjectRemoved**(`obj`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object that was removed |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_onObjectRemoved

#### Defined in

[src/canvas/SelectableCanvas.ts:330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L330)

___

### \_onResize

**_onResize**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:741](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L741)

___

### \_onStackOrderChanged

**_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_onStackOrderChanged

#### Defined in

[src/canvas/SelectableCanvas.ts:348](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L348)

___

### \_onTouchEnd

**_onTouchEnd**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `TouchEvent` | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:654](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L654)

___

### \_onTouchStart

**_onTouchStart**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `TouchEvent` | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:595](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L595)

___

### \_performTransformAction

**_performTransformAction**(`e`, `transform`, `pointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | [`Transform`](/apidocs/modules.md#transform) |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1356](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1356)

___

### \_realizeGroupTransformOnObject

**_realizeGroupTransformOnObject**(`instance?`): `Partial`\<[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Realizes an object's group transformation on it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instance?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the object to transform (gets mutated) |

#### Returns

`Partial`\<[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

the original values of instance which were changed

#### Inherited from

SelectableCanvas.\_realizeGroupTransformOnObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1296](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1296)

___

### \_renderBackground

**_renderBackground**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderBackground

#### Defined in

[src/canvas/StaticCanvas.ts:674](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L674)

___

### \_renderBackgroundOrOverlay

**_renderBackgroundOrOverlay**(`ctx`, `property`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `property` | ``"overlay"`` \| ``"background"`` | 'background' or 'overlay' |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderBackgroundOrOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:622](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L622)

___

### \_renderDragEffects

**_renderDragEffects**(`e`, `source?`, `target?`): `void`

First we clear top context where the effects are being rendered.
Then we render the effects.
Doing so will render the correct effect for all cases including an overlap between `source` and `target`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |
| `source?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `target?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:307](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L307)

___

### \_renderObjects

**_renderObjects**(`ctx`, `objects`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderObjects

#### Defined in

[src/canvas/StaticCanvas.ts:611](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L611)

___

### \_renderOverlay

**_renderOverlay**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:682](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L682)

___

### \_resetTransformEventData

**_resetTransformEventData**(): `void`

reset cache form common information needed during event processing

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1124](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1124)

___

### \_searchPossibleTargets

**_searchPossibleTargets**(`objects?`, `pointer?`): `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Internal Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | objects array to look into |
| `pointer?` | [`Point`](/apidocs/classes/Point.md) | x,y object of point coordinates we want to check. |

#### Returns

`undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

**top most object from given `objects`** that contains pointer

#### Inherited from

SelectableCanvas.\_searchPossibleTargets

#### Defined in

[src/canvas/SelectableCanvas.ts:837](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L837)

___

### \_set

**_set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_set

#### Defined in

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L38)

___

### \_setActiveObject

**_setActiveObject**(`object`, `e?`): `boolean`

This is supposed to be equivalent to setActiveObject but without firing
any event. There is commitment to have this stay this way.
This is the functional part of setActiveObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | to set as active |
| `e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | Event (passed along when firing "object:selected") |

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

SelectableCanvas.\_setActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1136)

___

### \_setCursorFromEvent

**_setCursorFromEvent**(`e`, `target?`): `void`

Sets the cursor depending on where the canvas is being hovered.
Note: very buggy in Opera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |
| `target?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object that the mouse is hovering, if so. |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1384](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1384)

___

### \_setDimensionsImpl

**_setDimensionsImpl**(`dimensions`, `options?`): `void`

Internal use only

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | [`TSize`](/apidocs/modules.md#tsize) |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setDimensionsImpl

#### Defined in

[src/canvas/SelectableCanvas.ts:978](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L978)

___

### \_setObject

**_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`\<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setObject

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L18)

___

### \_setOptions

**_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L9)

___

### \_setSVGBgOverlayColor

**_setSVGBgOverlayColor**(`markup`, `property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"overlay"`` \| ``"background"`` |

#### Returns

`void`

**`TODO`**

this seems to handle patterns but fail at gradients.

#### Inherited from

SelectableCanvas.\_setSVGBgOverlayColor

#### Defined in

[src/canvas/StaticCanvas.ts:1187](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1187)

___

### \_setSVGBgOverlayImage

**_setSVGBgOverlayImage**(`markup`, `property`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"backgroundImage"`` \| ``"overlayImage"`` |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGBgOverlayImage

#### Defined in

[src/canvas/StaticCanvas.ts:1172](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1172)

___

### \_setSVGHeader

**_setSVGHeader**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGHeader

#### Defined in

[src/canvas/StaticCanvas.ts:1011](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1011)

___

### \_setSVGObject

**_setSVGObject**(`markup`, `instance`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1326](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1326)

___

### \_setSVGObjects

**_setSVGObjects**(`markup`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGObjects

#### Defined in

[src/canvas/StaticCanvas.ts:1148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1148)

___

### \_setSVGPreamble

**_setSVGPreamble**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGPreamble

#### Defined in

[src/canvas/StaticCanvas.ts:995](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L995)

___

### \_setupCurrentTransform

**_setupCurrentTransform**(`e`, `target`, `alreadySelected`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `alreadySelected` | `boolean` | - |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setupCurrentTransform

#### Defined in

[src/canvas/SelectableCanvas.ts:582](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L582)

___

### \_shouldClearSelection

**_shouldClearSelection**(`e`, `target?`): target is undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |
| `target?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |

#### Returns

target is undefined

#### Inherited from

SelectableCanvas.\_shouldClearSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:487](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L487)

___

### \_shouldRender

**_shouldRender**(`target`): `undefined` \| `boolean`

Decides whether the canvas should be redrawn in mouseup and mousedown events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/canvas/Canvas.ts:751](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L751)

___

### \_toObject

**_toObject**(`instance`, `methodName`, `propertiesToInclude`): `Record`\<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `methodName` | ``"toObject"`` \| ``"toDatalessObject"`` |
| `propertiesToInclude` | `string`[] |

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

SelectableCanvas.\_toObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1274](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1274)

___

### \_toObjectMethod

**_toObjectMethod**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Inherited from

SelectableCanvas.\_toObjectMethod

#### Defined in

[src/canvas/StaticCanvas.ts:837](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L837)

___

### \_transformObject

**_transformObject**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1330)

___

### absolutePan

**absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | to move to |

#### Returns

`void`

#### Inherited from

SelectableCanvas.absolutePan

#### Defined in

[src/canvas/StaticCanvas.ts:408](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L408)

___

### add

**add**(`...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Inherited from

SelectableCanvas.add

#### Defined in

[src/canvas/StaticCanvas.ts:189](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L189)

___

### addOrRemove

**addOrRemove**(`functor`, `eventjsFunctor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functor` | `any` |
| `eventjsFunctor` | ``"remove"`` \| ``"add"`` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:158](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L158)

___

### bringObjectForward

**bringObjectForward**(`object`, `intersecting?`): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object in front of next upper intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.bringObjectForward

#### Defined in

[src/Collection.ts:240](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L240)

___

### bringObjectToFront

**bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.bringObjectToFront

#### Defined in

[src/Collection.ts:194](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L194)

___

### calcOffset

**calcOffset**(): `Object`

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

SelectableCanvas.calcOffset

#### Defined in

[src/canvas/StaticCanvas.ts:251](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L251)

___

### calcViewportBoundaries

**calcViewportBoundaries**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

SelectableCanvas.calcViewportBoundaries

#### Defined in

[src/canvas/StaticCanvas.ts:505](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L505)

___

### cancelRequestedRender

**cancelRequestedRender**(): `void`

#### Returns

`void`

#### Inherited from

SelectableCanvas.cancelRequestedRender

#### Defined in

[src/canvas/StaticCanvas.ts:523](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L523)

___

### centerObject

**centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.centerObject

#### Defined in

[src/canvas/StaticCanvas.ts:732](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L732)

___

### centerObjectH

**centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

SelectableCanvas.centerObjectH

#### Defined in

[src/canvas/StaticCanvas.ts:710](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L710)

___

### centerObjectV

**centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically |

#### Returns

`void`

#### Inherited from

SelectableCanvas.centerObjectV

#### Defined in

[src/canvas/StaticCanvas.ts:721](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L721)

___

### clear

**clear**(): `void`

clear [textEditingManager](/apidocs/classes/Canvas.md#texteditingmanager)

#### Returns

`void`

#### Overrides

SelectableCanvas.clear

#### Defined in

[src/canvas/Canvas.ts:1564](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1564)

___

### clearContext

**clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to clear |

#### Returns

`void`

#### Inherited from

SelectableCanvas.clearContext

#### Defined in

[src/canvas/StaticCanvas.ts:440](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L440)

___

### clone

**clone**(`properties?`): `Promise`\<[`Canvas`](/apidocs/classes/Canvas.md)\>

Clones canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `string`[] | Array of properties to include in the cloned canvas and children |

#### Returns

`Promise`\<[`Canvas`](/apidocs/classes/Canvas.md)\>

#### Inherited from

SelectableCanvas.clone

#### Defined in

[src/canvas/StaticCanvas.ts:1303](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1303)

___

### cloneWithoutData

**cloneWithoutData**(): [`Canvas`](/apidocs/classes/Canvas.md)

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

SelectableCanvas.cloneWithoutData

#### Defined in

[src/canvas/StaticCanvas.ts:1313](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1313)

___

### collectObjects

**collectObjects**(`bbox`, `options?`): `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bbox` | [`TBBox`](/apidocs/modules.md#tbbox) | `undefined` | a bounding box in scene coordinates |
| `options` | `Object` | `{}` | an object with includeIntersecting |
| `options.includeIntersecting?` | `boolean` | `true` | - |

#### Returns

`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

SelectableCanvas.collectObjects

#### Defined in

[src/Collection.ts:326](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L326)

___

### complexity

**complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

SelectableCanvas.complexity

#### Defined in

[src/Collection.ts:165](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L165)

___

### contains

**contains**(`object`, `deep?`): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](/apidocs/classes/FabricObject.md#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to check against |
| `deep?` | `boolean` | `true` to check all descendants, `false` to check only `_objects` |

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

SelectableCanvas.contains

#### Defined in

[src/Collection.ts:148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L148)

___

### createSVGClipPathMarkup

**createSVGClipPathMarkup**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`string`

#### Inherited from

SelectableCanvas.createSVGClipPathMarkup

#### Defined in

[src/canvas/StaticCanvas.ts:1056](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1056)

___

### createSVGFontFacesMarkup

**createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Inherited from

SelectableCanvas.createSVGFontFacesMarkup

#### Defined in

[src/canvas/StaticCanvas.ts:1099](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1099)

___

### createSVGRefElementsMarkup

**createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Inherited from

SelectableCanvas.createSVGRefElementsMarkup

#### Defined in

[src/canvas/StaticCanvas.ts:1071](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1071)

___

### destroy

**destroy**(): `void`

clear [textEditingManager](/apidocs/classes/Canvas.md#texteditingmanager)

#### Returns

`void`

#### Overrides

SelectableCanvas.destroy

#### Defined in

[src/canvas/Canvas.ts:1572](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1572)

___

### discardActiveObject

**discardActiveObject**(`e?`): this is Object

Discards currently active object and fire events. If the function is called by fabric
as a consequence of a mouse event, the event is passed as a parameter and
sent to the fire function for the custom events. When used as a method the
e param does not have any application.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` |

#### Returns

this is Object

true if the active object has been discarded

#### Inherited from

SelectableCanvas.discardActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1199)

___

### dispose

**dispose**(): `Promise`\<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

**`Throws`**

if aborted by a consequent call

#### Inherited from

SelectableCanvas.dispose

#### Defined in

[src/canvas/StaticCanvas.ts:1429](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1429)

___

### drawClipPathOnCanvas

**drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | - |

#### Returns

`void`

#### Inherited from

SelectableCanvas.drawClipPathOnCanvas

#### Defined in

[src/canvas/StaticCanvas.ts:586](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L586)

___

### drawControls

**drawControls**(`ctx`): `void`

Draws objects' controls (borders/controls)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render controls on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.drawControls

#### Defined in

[src/canvas/SelectableCanvas.ts:1263](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1263)

___

### endCurrentTransform

**endCurrentTransform**(`e?`): `void`

End the current transform.
You don't usually need to call this method unless you are interrupting a user initiated transform
because of some other event ( a press of key combination, or something that block the user UX )

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | send the mouse event that generate the finalize down, so it can be used in the event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:926](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L926)

___

### findDragTargets

**findDragTargets**(`e`): `Object`

As opposed to [findTarget](/apidocs/classes/Canvas.md#findtarget) we want the top most object to be returned w/o the active object cutting in line.
Override at will

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `target` | `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `targets` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Defined in

[src/canvas/Canvas.ts:392](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L392)

___

### findNewLowerIndex

**findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

SelectableCanvas.findNewLowerIndex

#### Defined in

[src/Collection.ts:272](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L272)

___

### findNewUpperIndex

**findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

SelectableCanvas.findNewUpperIndex

#### Defined in

[src/Collection.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L295)

___

### findTarget

**findTarget**(`e`): `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Method that determines what object we are clicking on
11/09/2018 TODO: would be cool if findTarget could discern between being a full target
or the outside part of the corner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | mouse event |

#### Returns

`undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

the target found

#### Inherited from

SelectableCanvas.findTarget

#### Defined in

[src/canvas/SelectableCanvas.ts:707](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L707)

___

### fire

**fire**\<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

SelectableCanvas.fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L159)

___

### fireSyntheticInOutEvents

**fireSyntheticInOutEvents**\<`T`\>(`type`, `«destructured»`): `void`

Manage the synthetic in/out events for the fabric objects on the canvas

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `TSyntheticEventContext` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `«destructured»` | `TSyntheticEventContext`[`T`] & \{ `fireCanvas?`: `boolean` ; `oldTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `target?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1274](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1274)

___

### forEachObject

**forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, `index`: `number`, `array`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]) => `any` | Callback invoked with current object as first argument, index - as second and an array of all objects - as third. |

#### Returns

`void`

#### Inherited from

SelectableCanvas.forEachObject

#### Defined in

[src/Collection.ts:91](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L91)

___

### get

**get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

SelectableCanvas.get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L59)

___

### getActiveObject

**getActiveObject**(): `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Returns currently active object

#### Returns

`undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

active object

#### Inherited from

SelectableCanvas.getActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1028](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1028)

___

### getActiveObjects

**getActiveObjects**(): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Returns an array with the current selected objects

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

active objects array

#### Inherited from

SelectableCanvas.getActiveObjects

#### Defined in

[src/canvas/SelectableCanvas.ts:1043](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1043)

___

### getActiveSelection

**getActiveSelection**(): [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

Returns instance's active selection

#### Returns

[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Inherited from

SelectableCanvas.getActiveSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:1035](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1035)

___

### getCenter

**getCenter**(): `Object`

Returns coordinates of a center of canvas.
Returned value is an object with top and left properties

#### Returns

`Object`

object with "top" and "left" number values

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

**`Deprecated`**

migrate to `getCenterPoint`

#### Inherited from

SelectableCanvas.getCenter

#### Defined in

[src/canvas/StaticCanvas.ts:692](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L692)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

SelectableCanvas.getCenterPoint

#### Defined in

[src/canvas/StaticCanvas.ts:703](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L703)

___

### getContext

**getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.getContext

#### Defined in

[src/canvas/StaticCanvas.ts:448](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L448)

___

### getElement

**getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.getElement

#### Defined in

[src/canvas/StaticCanvas.ts:432](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L432)

___

### getHeight

**getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Inherited from

SelectableCanvas.getHeight

#### Defined in

[src/canvas/StaticCanvas.ts:267](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L267)

___

### getObjects

**getObjects**(`...types?`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...types?` | `string`[] | When specified, only objects of these types are returned |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

SelectableCanvas.getObjects

#### Defined in

[src/Collection.ts:108](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L108)

___

### getPointer

**getPointer**(`e`, `fromViewport?`): [`Point`](/apidocs/classes/Point.md)

Returns pointer relative to canvas.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | `undefined` |  |
| `fromViewport?` | `boolean` | `false` | whether to return the point from the viewport or in the scene |

#### Returns

[`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

This method is deprecated since v6 to protect you from misuse.
Use [getViewportPoint](/apidocs/classes/Canvas.md#getviewportpoint) or [getScenePoint](/apidocs/classes/Canvas.md#getscenepoint) instead.

#### Inherited from

SelectableCanvas.getPointer

#### Defined in

[src/canvas/SelectableCanvas.ts:933](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L933)

___

### getPointerId

**getPointerId**(`evt`): `number`

Return a the id of an event.
returns either the pointerId or the identifier or 0 for the mouse event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `TouchEvent` \| `PointerEvent` | Event object |

#### Returns

`number`

#### Defined in

[src/canvas/Canvas.ts:554](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L554)

___

### getRetinaScaling

**getRetinaScaling**(): `number`

#### Returns

`number`

retinaScaling if applied, otherwise 1;

#### Inherited from

SelectableCanvas.getRetinaScaling

#### Defined in

[src/canvas/StaticCanvas.ts:243](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L243)

___

### getScenePoint

**getScenePoint**(`e`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

point existing in the scene (the same plane as the plane [FabricObject#getCenterPoint](/apidocs/classes/FabricObject.md#getcenterpoint) exists in).
This means that changes to the [viewportTransform](/apidocs/classes/StaticCanvas.md#viewporttransform) do not change the values of the point,
however, from the viewer's perspective, the point is changed.

**`Example`**

```ts
const viewportPoint = sendPointToPlane(
 this.getScenePoint(e),
 canvas.viewportTransform
);
```

#### Inherited from

SelectableCanvas.getScenePoint

#### Defined in

[src/canvas/SelectableCanvas.ts:916](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L916)

___

### getSelectionContext

**getSelectionContext**(): `CanvasRenderingContext2D`

Returns context of canvas where object selection is drawn

#### Returns

`CanvasRenderingContext2D`

**`Alias`**

#### Inherited from

SelectableCanvas.getSelectionContext

#### Defined in

[src/canvas/SelectableCanvas.ts:1012](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1012)

___

### getSelectionElement

**getSelectionElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element on which object selection is drawn

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.getSelectionElement

#### Defined in

[src/canvas/SelectableCanvas.ts:1020](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1020)

___

### getTopContext

**getTopContext**(): `CanvasRenderingContext2D`

Returns context of top canvas where interactions are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.getTopContext

#### Defined in

[src/canvas/SelectableCanvas.ts:1003](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1003)

___

### getViewportPoint

**getViewportPoint**(`e`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

point existing in the same plane as the HTMLCanvasElement,
`(0, 0)` being the top left corner of the HTMLCanvasElement.
This means that changes to the [viewportTransform](/apidocs/classes/StaticCanvas.md#viewporttransform) do not change the values of the point
and it remains unchanged from the viewer's perspective.

**`Example`**

```ts
const scenePoint = sendPointToPlane(
 this.getViewportPoint(e),
 undefined,
 canvas.viewportTransform
);
```

#### Inherited from

SelectableCanvas.getViewportPoint

#### Defined in

[src/canvas/SelectableCanvas.ts:897](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L897)

___

### getVpCenter

**getVpCenter**(): [`Point`](/apidocs/classes/Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](/apidocs/classes/Point.md)

vpCenter, viewport center

#### Inherited from

SelectableCanvas.getVpCenter

#### Defined in

[src/canvas/StaticCanvas.ts:770](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L770)

___

### getWidth

**getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Inherited from

SelectableCanvas.getWidth

#### Defined in

[src/canvas/StaticCanvas.ts:259](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L259)

___

### getZoom

**getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Inherited from

SelectableCanvas.getZoom

#### Defined in

[src/canvas/StaticCanvas.ts:347](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L347)

___

### handleMultiSelection

**handleMultiSelection**(`e`, `target?`): `boolean`

## Handles multiple selection
- toggles `target` selection (selects/deselects `target` if it isn't/is selected respectively)
- sets the active object in case it is not set or in case there is a single active object left under active selection.
---
- If the active object is the active selection we add/remove `target` from it
- If not, add the active object and `target` to the active selection and make it the active object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |
| `target?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | target of event to select/deselect |

#### Returns

`boolean`

true if grouping occurred

#### Defined in

[src/canvas/Canvas.ts:1432](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1432)

___

### handleSelection

**handleSelection**(`e`): `boolean`

## Handles selection
- selects objects that are contained in (and possibly intersecting) the selection bounding box
- sets the active object
---
runs on mouse up after a mouse move

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

`boolean`

#### Defined in

[src/canvas/Canvas.ts:1513](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L1513)

___

### initElements

**initElements**(`el?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el?` | `string` \| `HTMLCanvasElement` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.initElements

#### Defined in

[src/canvas/SelectableCanvas.ts:309](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L309)

___

### insertAt

**insertAt**(`index`, `...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Inherited from

SelectableCanvas.insertAt

#### Defined in

[src/canvas/StaticCanvas.ts:195](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L195)

___

### isEmpty

**isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

SelectableCanvas.isEmpty

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L128)

___

### isTargetTransparent

**isTargetTransparent**(`target`, `x`, `y`): `boolean`

Returns true if object is transparent at a certain location
Clarification: this is `is target transparent at location X or are controls there`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to check |
| `x` | `number` | Left coordinate in viewport space |
| `y` | `number` | Top coordinate in viewport space |

#### Returns

`boolean`

**`TODO`**

this seems dumb that we treat controls with transparency. we can find controls
programmatically without painting them, the cache canvas optimization is always valid

#### Inherited from

SelectableCanvas.isTargetTransparent

#### Defined in

[src/canvas/SelectableCanvas.ts:442](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L442)

___

### item

**item**(`index`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

SelectableCanvas.item

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L120)

___

### loadFromJSON

**loadFromJSON**(`json`, `reviver?`, `options?`): `Promise`\<[`Canvas`](/apidocs/classes/Canvas.md)\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` \| `Record`\<`string`, `any`\> | JSON string or object |
| `reviver?` | \<T\>(`serializedObj`: `Record`\<`string`, `any`\>, `instance`: `T`) => `void` | Method for further parsing of JSON elements, called after each fabric object created. |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | options |

#### Returns

`Promise`\<[`Canvas`](/apidocs/classes/Canvas.md)\>

instance

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle)

**`Example`**

```ts
canvas.loadFromJSON(json).then((canvas) => canvas.requestRenderAll());
```

**`Example`**

```ts
canvas.loadFromJSON(json, function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
}).then((canvas) => {
  ... canvas is restored, add your code.
});
```

#### Inherited from

SelectableCanvas.loadFromJSON

#### Defined in

[src/canvas/StaticCanvas.ts:1252](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1252)

___

### moveObjectTo

**moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `index` | `number` | Position to move to |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.moveObjectTo

#### Defined in

[src/Collection.ts:262](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L262)

___

### off

**off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

SelectableCanvas.off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L120)

**off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

SelectableCanvas.off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L129)

___

### on

**on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| \{ `drawables`: \{ `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `subTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `transform`: [`Transform`](/apidocs/modules.md#transform)  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

SelectableCanvas.on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L23)

**on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

SelectableCanvas.on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L27)

___

### once

**once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| \{ `drawables`: \{ `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `subTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `transform`: [`Transform`](/apidocs/modules.md#transform)  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

SelectableCanvas.once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L62)

**once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

SelectableCanvas.once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L66)

___

### relativePan

**relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | (position vector) to move by |

#### Returns

`void`

#### Inherited from

SelectableCanvas.relativePan

#### Defined in

[src/canvas/StaticCanvas.ts:419](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L419)

___

### remove

**remove**(`...objects`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

SelectableCanvas.remove

#### Defined in

[src/canvas/StaticCanvas.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L201)

___

### removeListeners

**removeListeners**(): `void`

Removes all event listeners

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/Canvas.ts#L199)

___

### renderAll

**renderAll**(): `void`

Renders both the top canvas and the secondary container canvas.

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderAll

#### Defined in

[src/canvas/SelectableCanvas.ts:370](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L370)

___

### renderAndReset

**renderAndReset**(): `void`

Function created to be instance bound at initialization
used in requestAnimationFrame rendering
Let the fabricJS call it. If you call it manually you could have more
animationFrame stacking on to of each other
for an imperative rendering, use canvas.renderAll

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderAndReset

#### Defined in

[src/canvas/StaticCanvas.ts:485](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L485)

___

### renderCanvas

**renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderCanvas

#### Defined in

[src/canvas/StaticCanvas.ts:539](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L539)

___

### renderTop

**renderTop**(): `void`

Method to render only the top canvas.
Also used to render the group selection box.
Does not render text selection.

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderTop

#### Defined in

[src/canvas/SelectableCanvas.ts:410](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L410)

___

### renderTopLayer

**renderTopLayer**(`ctx`): `void`

text selection is rendered by the active text instance during the rendering cycle

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderTopLayer

#### Defined in

[src/canvas/SelectableCanvas.ts:391](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L391)

___

### requestRenderAll

**requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Inherited from

SelectableCanvas.requestRenderAll

#### Defined in

[src/canvas/StaticCanvas.ts:495](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L495)

___

### searchPossibleTargets

**searchPossibleTargets**(`objects?`, `pointer?`): `undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | objects array to look into |
| `pointer?` | [`Point`](/apidocs/classes/Point.md) | coordinates from viewport to check. |

#### Returns

`undefined` \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

**top most object on screen** that contains pointer

**`See`**

[_searchPossibleTargets](/apidocs/classes/Canvas.md#_searchpossibletargets)

#### Inherited from

SelectableCanvas.searchPossibleTargets

#### Defined in

[src/canvas/SelectableCanvas.ts:867](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L867)

___

### sendObjectBackwards

**sendObjectBackwards**(`object`, `intersecting?`): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object behind next lower intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.sendObjectBackwards

#### Defined in

[src/Collection.ts:214](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L214)

___

### sendObjectToBack

**sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send to back |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.sendObjectToBack

#### Defined in

[src/Collection.ts:178](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L178)

___

### set

**set**(`key`, `value?`): [`Canvas`](/apidocs/classes/Canvas.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`\<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

SelectableCanvas.set

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L29)

___

### setActiveObject

**setActiveObject**(`object`, `e?`): `boolean`

Sets given object as the only active object on canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to set as an active one |
| `e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | Event (passed along when firing "object:selected") |

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

SelectableCanvas.setActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1120)

___

### setCursor

**setCursor**(`value`): `void`

Set the cursor type of the canvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Cursor type of the canvas element. |

#### Returns

`void`

**`See`**

http://www.w3.org/TR/css3-ui/#cursor

#### Inherited from

SelectableCanvas.setCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:655](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L655)

___

### setDimensions

**setDimensions**(`dimensions`, `options?`): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dimensions` | `Partial`\<[`TSize`](/apidocs/modules.md#tsize)\> | Object with width/height properties |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setDimensions

#### Defined in

[src/canvas/StaticCanvas.ts:330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L330)

___

### setHeight

**setHeight**(`value`, `options?`): `void`

Sets height of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set height to |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Inherited from

SelectableCanvas.setHeight

#### Defined in

[src/canvas/StaticCanvas.ts:291](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L291)

___

### setTargetFindTolerance

**setTargetFindTolerance**(`value`): `void`

Set the canvas tolerance value for pixel taret find.
Use only integer numbers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setTargetFindTolerance

#### Defined in

[src/canvas/SelectableCanvas.ts:423](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L423)

___

### setViewportTransform

**setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vpt` | [`TMat2D`](/apidocs/modules.md#tmat2d) | a Canvas 2D API transform matrix |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setViewportTransform

#### Defined in

[src/canvas/SelectableCanvas.ts:1217](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L1217)

___

### setWidth

**setWidth**(`value`, `options?`): `void`

Sets width of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set width to |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Inherited from

SelectableCanvas.setWidth

#### Defined in

[src/canvas/StaticCanvas.ts:279](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L279)

___

### setZoom

**setZoom**(`value`): `void`

Sets zoom level of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setZoom

#### Defined in

[src/canvas/StaticCanvas.ts:400](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L400)

___

### size

**size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

SelectableCanvas.size

#### Defined in

[src/Collection.ts:136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L136)

___

### toCanvasElement

**toCanvasElement**(`multiplier?`, `options?`): `HTMLCanvasElement`

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `multiplier?` | `number` | `1` | a zoom factor. |
| `options?` | [`TToCanvasElementOptions`](/apidocs/modules.md#ttocanvaselementoptions)\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | `undefined` | Cropping informations |

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.toCanvasElement

#### Defined in

[src/canvas/StaticCanvas.ts:1389](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1389)

___

### toDataURL

**toDataURL**(`options?`): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TDataUrlOptions`](/apidocs/modules.md#tdataurloptions)\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

**`See`**

[demo](https://jsfiddle.net/xsjua1rd/)

**`Example`**

```ts
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

**`Example`**

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
```

**`Example`**

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

**`Example`**

```ts
var myObject;
var dataURL = canvas.toDataURL({
  filter: (object) => object.isContainedWithinObject(myObject) || object.intersectsWithObject(myObject)
});
```

#### Inherited from

SelectableCanvas.toDataURL

#### Defined in

[src/canvas/StaticCanvas.ts:1358](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1358)

___

### toDatalessJSON

**toDatalessJSON**(`propertiesToInclude?`): `any`

Returns dataless JSON representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

json string

#### Inherited from

SelectableCanvas.toDatalessJSON

#### Defined in

[src/canvas/StaticCanvas.ts:793](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L793)

___

### toDatalessObject

**toDatalessObject**(`propertiesToInclude?`): `any`

Returns dataless object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Inherited from

SelectableCanvas.toDatalessObject

#### Defined in

[src/canvas/StaticCanvas.ts:830](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L830)

___

### toJSON

**toJSON**(): `any`

Returns Object representation of canvas
this alias is provided because if you call JSON.stringify on an instance,
the toJSON object will be invoked if it exists.
Having a toJSON method means you can do JSON.stringify(myCanvas)

#### Returns

`any`

JSON compatible object

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/pec86/|jsFiddle)

**`Example`**

```ts
var json = canvas.toJSON();
```

**`Example`**

```ts
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

**`Example`**

```ts
var json = canvas.toJSON();
```

#### Inherited from

SelectableCanvas.toJSON

#### Defined in

[src/canvas/StaticCanvas.ts:821](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L821)

___

### toObject

**toObject**(`propertiesToInclude?`): `any`

Returns object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Inherited from

SelectableCanvas.toObject

#### Defined in

[src/canvas/StaticCanvas.ts:802](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L802)

___

### toSVG

**toSVG**(`options?`, `reviver?`): `string`

Returns SVG representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) | Options object for SVG output |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg elements, called after each fabric object converted into svg representation. |

#### Returns

`string`

SVG string

**`Function`**

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle)

**`Example`**

```ts
var svg = canvas.toSVG();
```

**`Example`**

```ts
var svg = canvas.toSVG({suppressPreamble: true});
```

**`Example`**

```ts
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
```

**`Example`**

```ts
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

**`Example`**

```ts
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### Inherited from

SelectableCanvas.toSVG

#### Defined in

[src/canvas/StaticCanvas.ts:969](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L969)

___

### toString

**toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Inherited from

SelectableCanvas.toString

#### Defined in

[src/canvas/StaticCanvas.ts:1488](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1488)

___

### toggle

**toggle**(`property`): [`Canvas`](/apidocs/classes/Canvas.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

SelectableCanvas.toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L46)

___

### viewportCenterObject

**viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.viewportCenterObject

#### Defined in

[src/canvas/StaticCanvas.ts:740](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L740)

___

### viewportCenterObjectH

**viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.viewportCenterObjectH

#### Defined in

[src/canvas/StaticCanvas.ts:748](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L748)

___

### viewportCenterObjectV

**viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.viewportCenterObjectV

#### Defined in

[src/canvas/StaticCanvas.ts:759](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L759)

___

### zoomToPoint

**zoomToPoint**(`point`, `value`): `void`

Sets zoom level of this canvas instance, the zoom centered around point
meaning that following zoom to point with the same point will have the visual
effect of the zoom originating from that point. The point won't move.
It has nothing to do with canvas center or visual center of the viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | to zoom with respect to |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Inherited from

SelectableCanvas.zoomToPoint

#### Defined in

[src/canvas/StaticCanvas.ts:383](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L383)

___

### getDefaults

**getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

SelectableCanvas.getDefaults

#### Defined in

[src/canvas/SelectableCanvas.ts:277](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/SelectableCanvas.ts#L277)