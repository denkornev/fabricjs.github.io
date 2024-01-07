# Interface: TextProps

## Hierarchy

- [`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)

- `UniqueTextProps`

  ↳ **`TextProps`**

  ↳↳ [`ITextProps`](/apidocs/interfaces/ITextProps.md)

## Properties

### absolutePositioned

 **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

**`Default`**

```ts
false
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[absolutePositioned](/apidocs/interfaces/FabricObjectProps.md#absolutepositioned)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:72](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L72)

___

### activeOn

 `Private` **activeOn**: ``"down"`` \| ``"up"``

When 'down', object is set to active on mousedown/touchstart
When 'up', object is set to active on mouseup/touchend
Experimental. Let's see if this breaks anything before supporting officially

since 4.4.0

**`Default`**

```ts
'down'
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[activeOn](/apidocs/interfaces/FabricObjectProps.md#activeon)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L76)

___

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[angle](/apidocs/interfaces/FabricObjectProps.md#angle)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L57)

___

### backgroundColor

 **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[backgroundColor](/apidocs/interfaces/FabricObjectProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### borderColor

 **borderColor**: `string`

Color of controlling borders of an object (when it's active)

**`Default`**

```ts
rgb(178,204,255)
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderColor](/apidocs/interfaces/FabricObjectProps.md#bordercolor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BorderProps.ts#L7)

___

### borderDashArray

 **borderDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

**`Since`**

1.6.2

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderDashArray](/apidocs/interfaces/FabricObjectProps.md#borderdasharray)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BorderProps.ts#L15)

___

### borderOpacityWhenMoving

 **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

**`Default`**

```ts
0.4
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderOpacityWhenMoving](/apidocs/interfaces/FabricObjectProps.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BorderProps.ts#L29)

___

### borderScaleFactor

 **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

**`Default`**

```ts
1
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderScaleFactor](/apidocs/interfaces/FabricObjectProps.md#borderscalefactor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:39](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BorderProps.ts#L39)

___

### canvas

 `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\>

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[canvas](/apidocs/interfaces/FabricObjectProps.md#canvas)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L20)

___

### centeredRotation

 **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[centeredRotation](/apidocs/interfaces/FabricObjectProps.md#centeredrotation)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectTransformProps.ts#L27)

___

### centeredScaling

 **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[centeredScaling](/apidocs/interfaces/FabricObjectProps.md#centeredscaling)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:36](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectTransformProps.ts#L36)

___

### charSpacing

 **charSpacing**: `number`

#### Inherited from

UniqueTextProps.charSpacing

#### Defined in

[src/shapes/Text/Text.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L92)

___

### clipPath

 `Optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[clipPath](/apidocs/interfaces/FabricObjectProps.md#clippath)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:16](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L16)

___

### cornerColor

 **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

**`Default`**

```ts
rgb(178,204,255)
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerColor](/apidocs/interfaces/FabricObjectProps.md#cornercolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L28)

___

### cornerDashArray

 **cornerDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

**`Since`**

1.6.2

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerDashArray](/apidocs/interfaces/FabricObjectProps.md#cornerdasharray)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L54)

___

### cornerSize

 **cornerSize**: `number`

Size of object's controlling corners (in pixels)

**`Default`**

```ts
13
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerSize](/apidocs/interfaces/FabricObjectProps.md#cornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L7)

___

### cornerStrokeColor

 **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

**`Since`**

1.6.2

**`Default`**

```ts
null
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerStrokeColor](/apidocs/interfaces/FabricObjectProps.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:36](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L36)

___

### cornerStyle

 **cornerStyle**: ``"circle"`` \| ``"rect"``

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

**`Since`**

1.6.2

**`Default`**

```ts
rect
```

**`Deprecated`**

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerStyle](/apidocs/interfaces/FabricObjectProps.md#cornerstyle)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:47](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L47)

___

### direction

 **direction**: `CanvasDirection`

#### Inherited from

UniqueTextProps.direction

#### Defined in

[src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L104)

___

### evented

 **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[evented](/apidocs/interfaces/FabricObjectProps.md#evented)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:65](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L65)

___

### excludeFromExport

 **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

**`Since`**

1.6.3

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[excludeFromExport](/apidocs/interfaces/FabricObjectProps.md#excludefromexport)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L52)

___

### fill

 **fill**: ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[fill](/apidocs/interfaces/FabricObjectProps.md#fill)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L17)

___

### fillRule

 **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

**`Default`**

```ts
nonzero
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[fillRule](/apidocs/interfaces/FabricObjectProps.md#fillrule)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L26)

___

### flipX

 **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

**`Default`**

```ts
false
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[flipX](/apidocs/interfaces/FabricObjectProps.md#flipx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:64](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L64)

___

### flipY

 **flipY**: `boolean`

When true, an object is rendered as flipped vertically

**`Default`**

```ts
false
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[flipY](/apidocs/interfaces/FabricObjectProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L71)

___

### fontFamily

 **fontFamily**: `string`

#### Inherited from

UniqueTextProps.fontFamily

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L96)

___

### fontSize

 **fontSize**: `number`

#### Inherited from

UniqueTextProps.fontSize

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L94)

___

### fontStyle

 **fontStyle**: `string`

#### Inherited from

UniqueTextProps.fontStyle

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L97)

___

### fontWeight

 **fontWeight**: `string`

#### Inherited from

UniqueTextProps.fontWeight

#### Defined in

[src/shapes/Text/Text.ts:95](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L95)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[globalCompositeOperation](/apidocs/interfaces/FabricObjectProps.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L18)

___

### hasBorders

 **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[hasBorders](/apidocs/interfaces/FabricObjectProps.md#hasborders)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BorderProps.ts#L22)

___

### hasControls

 **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[hasControls](/apidocs/interfaces/FabricObjectProps.md#hascontrols)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:68](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L68)

___

### height

 **height**: `number`

Object height

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[height](/apidocs/interfaces/FabricObjectProps.md#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L34)

___

### hoverCursor

 **hoverCursor**: ``null`` \| `string`

Default cursor value used when hovering over this object on canvas

**`Default`**

```ts
null
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[hoverCursor](/apidocs/interfaces/FabricObjectProps.md#hovercursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L27)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[includeDefaultValues](/apidocs/interfaces/FabricObjectProps.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L44)

___

### inverted

 **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

**`Default`**

```ts
false
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[inverted](/apidocs/interfaces/FabricObjectProps.md#inverted)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L60)

___

### left

 **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](/apidocs/interfaces/FabricObjectProps.md#originx)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[left](/apidocs/interfaces/FabricObjectProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L11)

___

### lineHeight

 **lineHeight**: `number`

#### Inherited from

UniqueTextProps.lineHeight

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L93)

___

### linethrough

 **linethrough**: `boolean`

#### Inherited from

UniqueTextProps.linethrough

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L102)

___

### lockMovementX

 **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockMovementX](/apidocs/interfaces/FabricObjectProps.md#lockmovementx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L7)

___

### lockMovementY

 **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockMovementY](/apidocs/interfaces/FabricObjectProps.md#lockmovementy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L14)

___

### lockRotation

 **lockRotation**: `boolean`

When `true`, object rotation is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockRotation](/apidocs/interfaces/FabricObjectProps.md#lockrotation)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L21)

___

### lockScalingFlip

 **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockScalingFlip](/apidocs/interfaces/FabricObjectProps.md#lockscalingflip)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:56](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L56)

___

### lockScalingX

 **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockScalingX](/apidocs/interfaces/FabricObjectProps.md#lockscalingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L28)

___

### lockScalingY

 **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockScalingY](/apidocs/interfaces/FabricObjectProps.md#lockscalingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L35)

___

### lockSkewingX

 **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockSkewingX](/apidocs/interfaces/FabricObjectProps.md#lockskewingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:42](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L42)

___

### lockSkewingY

 **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockSkewingY](/apidocs/interfaces/FabricObjectProps.md#lockskewingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:49](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/LockInteractionProps.ts#L49)

___

### minScaleLimit

 **minScaleLimit**: `number`

Minimum allowed scale value of an object

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[minScaleLimit](/apidocs/interfaces/FabricObjectProps.md#minscalelimit)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L27)

___

### moveCursor

 **moveCursor**: ``null`` \| `string`

Default cursor value used when moving this object on canvas

**`Default`**

```ts
null
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[moveCursor](/apidocs/interfaces/FabricObjectProps.md#movecursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L34)

___

### noScaleCache

 `Optional` **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[noScaleCache](/apidocs/interfaces/FabricObjectProps.md#noscalecache)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L20)

___

### objectCaching

 **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

**`Since`**

1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[objectCaching](/apidocs/interfaces/FabricObjectProps.md#objectcaching)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L37)

___

### opacity

 **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[opacity](/apidocs/interfaces/FabricObjectProps.md#opacity)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L11)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'left'
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[originX](/apidocs/interfaces/FabricObjectProps.md#originx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:42](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L42)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'top'
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[originY](/apidocs/interfaces/FabricObjectProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L50)

___

### overline

 **overline**: `boolean`

#### Inherited from

UniqueTextProps.overline

#### Defined in

[src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L101)

___

### padding

 **padding**: `number`

Padding between object and its controlling borders (in pixels)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[padding](/apidocs/interfaces/FabricObjectProps.md#padding)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:61](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L61)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[paintFirst](/apidocs/interfaces/FabricObjectProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

 `Optional` **path**: [`Path`](/apidocs/classes/Path.md)\<`Partial`\<[`PathProps`](/apidocs/interfaces/PathProps.md)\>, [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

UniqueTextProps.path

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L105)

___

### pathAlign

 **pathAlign**: [`TPathAlign`](/apidocs/modules.md#tpathalign)

#### Inherited from

UniqueTextProps.pathAlign

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L99)

___

### pathSide

 **pathSide**: [`TPathSide`](/apidocs/modules.md#tpathside)

#### Inherited from

UniqueTextProps.pathSide

#### Defined in

[src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L98)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[perPixelTargetFind](/apidocs/interfaces/FabricObjectProps.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L50)

___

### scaleX

 **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[scaleX](/apidocs/interfaces/FabricObjectProps.md#scalex)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:78](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L78)

___

### scaleY

 **scaleY**: `number`

Object scale factor (vertical)

**`Default`**

```ts
1
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[scaleY](/apidocs/interfaces/FabricObjectProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L85)

___

### selectable

 **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[selectable](/apidocs/interfaces/FabricObjectProps.md#selectable)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L58)

___

### selectionBackgroundColor

 **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

**`Deprecated`**

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[selectionBackgroundColor](/apidocs/interfaces/FabricObjectProps.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:43](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FabricObjectProps.ts#L43)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[shadow](/apidocs/interfaces/FabricObjectProps.md#shadow)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:19](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L19)

___

### skewX

 **skewX**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of skew on x axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[skewX](/apidocs/interfaces/FabricObjectProps.md#skewx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L92)

___

### skewY

 **skewY**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of skew on y axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[skewY](/apidocs/interfaces/FabricObjectProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L99)

___

### snapAngle

 `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

The angle that an object will lock to while rotating.

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[snapAngle](/apidocs/interfaces/FabricObjectProps.md#snapangle)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectTransformProps.ts#L8)

___

### snapThreshold

 `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[snapThreshold](/apidocs/interfaces/FabricObjectProps.md#snapthreshold)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectTransformProps.ts#L15)

___

### stroke

 **stroke**: ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[stroke](/apidocs/interfaces/FabricObjectProps.md#stroke)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ObjectProps.ts#L18)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

**`Default`**

```ts
null;
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeDashArray](/apidocs/interfaces/FabricObjectProps.md#strokedasharray)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L48)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

Line offset of an object's stroke

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeDashOffset](/apidocs/interfaces/FabricObjectProps.md#strokedashoffset)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L55)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

**`Default`**

```ts
butt
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeLineCap](/apidocs/interfaces/FabricObjectProps.md#strokelinecap)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L62)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeLineJoin](/apidocs/interfaces/FabricObjectProps.md#strokelinejoin)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L69)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

**`Default`**

```ts
4
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeMiterLimit](/apidocs/interfaces/FabricObjectProps.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L76)

___

### strokeUniform

 **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

**`Since`**

2.6.0

**`Default`**

```ts
false
```

**`Default`**

```ts
false
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeUniform](/apidocs/interfaces/FabricObjectProps.md#strokeuniform)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L89)

___

### strokeWidth

 **strokeWidth**: `number`

Width of a stroke used to render this object

**`Default`**

```ts
1
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeWidth](/apidocs/interfaces/FabricObjectProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

 **styles**: [`TextStyle`](/apidocs/modules.md#textstyle)

#### Defined in

[src/shapes/Text/Text.ts:115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L115)

___

### textAlign

 **textAlign**: `string`

#### Inherited from

UniqueTextProps.textAlign

#### Defined in

[src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L103)

___

### top

 **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](/apidocs/interfaces/FabricObjectProps.md#originy)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[top](/apidocs/interfaces/FabricObjectProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L20)

___

### touchCornerSize

 **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

**`Default`**

```ts
24
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[touchCornerSize](/apidocs/interfaces/FabricObjectProps.md#touchcornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L14)

___

### transparentCorners

 **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

**`Default`**

```ts
true
```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[transparentCorners](/apidocs/interfaces/FabricObjectProps.md#transparentcorners)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/ControlProps.ts#L21)

___

### underline

 **underline**: `boolean`

#### Inherited from

UniqueTextProps.underline

#### Defined in

[src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L100)

___

### visible

 **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[visible](/apidocs/interfaces/FabricObjectProps.md#visible)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L40)

___

### width

 **width**: `number`

Object width

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[width](/apidocs/interfaces/FabricObjectProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L27)