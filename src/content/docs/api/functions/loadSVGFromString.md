---
editUrl: false
next: false
prev: false
title: "loadSVGFromString"
---

> **loadSVGFromString**(`string`, `reviver`?, `options`?): `Promise`\<`SVGParsingOutput`\>

Takes string corresponding to an SVG document, and parses it into a set of fabric objects

## Parameters

• **string**: `string`

representing the svg

• **reviver?**: `TSvgReviverCallback`

Extra callback for further parsing of SVG elements, called after each fabric object has been created.
Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric,
or extra custom manipulation

• **options?**: [`LoadImageOptions`](/api/namespaces/util/type-aliases/loadimageoptions/)

Object containing options for parsing

## Returns

`Promise`\<`SVGParsingOutput`\>

## Member Of

fabric

## Defined in

[src/parser/loadSVGFromString.ts:20](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/parser/loadSVGFromString.ts#L20)
