# Class: Control

## Constructors

### constructor

**new Control**(`options?`): [`Control`](/apidocs/classes/Control.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`Control`](/apidocs/classes/Control.md)\> |

#### Returns

[`Control`](/apidocs/classes/Control.md)

#### Defined in

[src/controls/Control.ts:141](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L141)

## Properties

### actionHandler

 **actionHandler**: [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<[`Transform`](/apidocs/modules.md#transform)\>

The control actionHandler, provide one to handle action ( control being moved )

**`Param`**

the native mouse event

**`Param`**

properties of the current transform

**`Param`**

x position of the cursor

**`Param`**

y position of the cursor

#### Defined in

[src/controls/Control.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L153)

___

### actionName

 **actionName**: `string` = `'scale'`

Name of the action that the control will likely execute.
This is optional. FabricJS uses to identify what the user is doing for some
extra optimizations. If you are writing a custom control and you want to know
somewhere else in the code what is going on, you can use this string here.
you can also provide a custom getActionName if your control run multiple actions
depending on some external state.
default to scale since is the most common, used on 4 corners by default

**`Default`**

```ts
'scale'
```

#### Defined in

[src/controls/Control.ts:42](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L42)

___

### angle

 **angle**: `number` = `0`

Drawing angle of the control.
NOT used for now, but name marked as needed for internal logic
example: to reuse the same drawing function for different rotated controls

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:51](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L51)

___

### cursorStyle

 **cursorStyle**: `string` = `'crosshair'`

Css cursor style to display when the control is hovered.
if the method `cursorStyleHandler` is provided, this property is ignored.

**`Default`**

```ts
'crosshair'
```

#### Defined in

[src/controls/Control.ts:131](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L131)

___

### mouseDownHandler

 `Optional` **mouseDownHandler**: [`ControlActionHandler`](/apidocs/modules.md#controlactionhandler)

The control handler for mouse down, provide one to handle mouse down on control

**`Param`**

the native mouse event

**`Param`**

properties of the current transform

**`Param`**

x position of the cursor

**`Param`**

y position of the cursor

#### Defined in

[src/controls/Control.ts:163](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L163)

___

### mouseUpHandler

 `Optional` **mouseUpHandler**: [`ControlActionHandler`](/apidocs/modules.md#controlactionhandler)

The control mouseUpHandler, provide one to handle an effect on mouse up.

**`Param`**

the native mouse event

**`Param`**

properties of the current transform

**`Param`**

x position of the cursor

**`Param`**

y position of the cursor

#### Defined in

[src/controls/Control.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L173)

___

### offsetX

 **offsetX**: `number` = `0`

Horizontal offset of the control from the defined position. In pixels
Positive offset moves the control to the right, negative to the left.
It used when you want to have position of control that does not scale with
the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
the boundind box, with an offset of 30 pixels vertically. Those 30 pixels will
stay 30 pixels no matter how the object is big. Another example is having 2
controls in the corner, that stay in the same position when the object scale.
of the bounding box.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L83)

___

### offsetY

 **offsetY**: `number` = `0`

Vertical offset of the control from the defined position. In pixels
Positive offset moves the control to the bottom, negative to the top.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:91](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L91)

___

### sizeX

 **sizeX**: `number` = `0`

Sets the length of the control. If null, defaults to object's cornerSize.
Expects both sizeX and sizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L99)

___

### sizeY

 **sizeY**: `number` = `0`

Sets the height of the control. If null, defaults to object's cornerSize.
Expects both sizeX and sizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:107](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L107)

___

### touchSizeX

 **touchSizeX**: `number` = `0`

Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
Expects both touchSizeX and touchSizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L115)

___

### touchSizeY

 **touchSizeY**: `number` = `0`

Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
Expects both touchSizeX and touchSizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:123](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L123)

___

### visible

 **visible**: `boolean` = `true`

keep track of control visibility.
mainly for backward compatibility.
if you do not want to see a control, you can remove it
from the control set.

**`Default`**

```ts
true
```

#### Defined in

[src/controls/Control.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L29)

___

### withConnection

 **withConnection**: `boolean` = `false`

If controls has an offsetY or offsetX, draw a line that connects
the control to the bounding box

**`Default`**

```ts
false
```

#### Defined in

[src/controls/Control.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L139)

___

### x

 **x**: `number` = `0`

Relative position of the control. X
0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
of the bounding box.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L60)

___

### y

 **y**: `number` = `0`

Relative position of the control. Y
0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
of the bounding box.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L69)

## Methods

### calcCornerCoords

**calcCornerCoords**(`angle`, `objectCornerSize`, `centerX`, `centerY`, `isTouch`, `fabricObject`): `Object`

Returns the coords for this control based on object values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TDegree`](/apidocs/modules.md#tdegree) | - |
| `objectCornerSize` | `number` | cornerSize from the fabric object holding the control (or touchCornerSize if isTouch is true) |
| `centerX` | `number` | x coordinate where the control center should be |
| `centerY` | `number` | y coordinate where the control center should be |
| `isTouch` | `boolean` | true if touch corner, false if normal corner |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bl` | [`Point`](/apidocs/classes/Point.md) |
| `br` | [`Point`](/apidocs/classes/Point.md) |
| `tl` | [`Point`](/apidocs/classes/Point.md) |
| `tr` | [`Point`](/apidocs/classes/Point.md) |

#### Defined in

[src/controls/Control.ts:311](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L311)

___

### cursorStyleHandler

**cursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
function you can pass one in the constructor
the cursorStyle property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the native mouse event |
| `control` | [`Control`](/apidocs/classes/Control.md) | the current control ( likely this) |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |

#### Returns

`string`

#### Defined in

[src/controls/Control.ts:244](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L244)

___

### getActionHandler

**getActionHandler**(`eventData`, `fabricObject`, `control`): `undefined` \| [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<[`Transform`](/apidocs/modules.md#transform)\>

Returns control actionHandler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the native mouse event |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | on which the control is displayed |
| `control` | [`Control`](/apidocs/classes/Control.md) | control for which the action handler is being asked |

#### Returns

`undefined` \| [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<[`Transform`](/apidocs/modules.md#transform)\>

the action handler

#### Defined in

[src/controls/Control.ts:196](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L196)

___

### getActionName

**getActionName**(`eventData`, `control`, `fabricObject`): `string`

Returns the action name. The basic implementation just return the actionName property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the native mouse event |
| `control` | [`Control`](/apidocs/classes/Control.md) | the current control ( likely this) |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |

#### Returns

`string`

#### Defined in

[src/controls/Control.ts:259](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L259)

___

### getMouseDownHandler

**getMouseDownHandler**(`eventData`, `fabricObject`, `control`): `undefined` \| [`ControlActionHandler`](/apidocs/modules.md#controlactionhandler)

Returns control mouseDown handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the native mouse event |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | on which the control is displayed |
| `control` | [`Control`](/apidocs/classes/Control.md) | control for which the action handler is being asked |

#### Returns

`undefined` \| [`ControlActionHandler`](/apidocs/modules.md#controlactionhandler)

the action handler

#### Defined in

[src/controls/Control.ts:211](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L211)

___

### getMouseUpHandler

**getMouseUpHandler**(`eventData`, `fabricObject`, `control`): `undefined` \| [`ControlActionHandler`](/apidocs/modules.md#controlactionhandler)

Returns control mouseUp handler.
During actions the fabricObject or the control can be of different obj

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the native mouse event |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | on which the control is displayed |
| `control` | [`Control`](/apidocs/classes/Control.md) | control for which the action handler is being asked |

#### Returns

`undefined` \| [`ControlActionHandler`](/apidocs/modules.md#controlactionhandler)

the action handler

#### Defined in

[src/controls/Control.ts:227](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L227)

___

### getVisibility

**getVisibility**(`fabricObject`, `controlKey`): `boolean`

Returns controls visibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `controlKey` | `string` | key where the control is memorized on the |

#### Returns

`boolean`

#### Defined in

[src/controls/Control.ts:273](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L273)

___

### positionHandler

**positionHandler**(`dim`, `finalMatrix`, `fabricObject`, `currentControl`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dim` | [`Point`](/apidocs/classes/Point.md) |
| `finalMatrix` | [`TMat2D`](/apidocs/modules.md#tmat2d) |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `currentControl` | [`Control`](/apidocs/classes/Control.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/controls/Control.ts:290](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L290)

___

### render

**render**(`ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render function for the control.
When this function runs the context is unscaled. unrotate. Just retina scaled.
all the functions will have to translate to the point left,top before starting Drawing
if they want to draw a control where the position is detected.
left and top are the result of the positionHandler function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | the context where the control will be drawn |
| `left` | `number` | position of the canvas where we are about to render the control. |
| `top` | `number` | position of the canvas where we are about to render the control. |
| `styleOverride` | `undefined` \| `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> |  |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the object where the control is about to be rendered |

#### Returns

`void`

#### Defined in

[src/controls/Control.ts:347](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L347)

___

### setVisibility

**setVisibility**(`visibility`, `name`, `fabricObject`): `void`

Sets controls visibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visibility` | `boolean` | for the object |
| `name` | `string` | - |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |

#### Returns

`void`

#### Defined in

[src/controls/Control.ts:282](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L282)

___

### shouldActivate

**shouldActivate**(`controlKey`, `fabricObject`, `pointer`, `«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controlKey` | `string` |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |
| `«destructured»` | [`TCornerPoint`](/apidocs/modules.md#tcornerpoint) |

#### Returns

`boolean`

#### Defined in

[src/controls/Control.ts:175](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/Control.ts#L175)