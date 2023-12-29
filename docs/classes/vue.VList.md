# Class: VList

[vue](../modules/vue.md).VList

## Table of contents

### Methods

- [$watch](vue.VList.md#$watch)
- [scrollToIndex](vue.VList.md#scrolltoindex)
- [scrollTo](vue.VList.md#scrollto)
- [scrollBy](vue.VList.md#scrollby)

### Properties

- [$](vue.VList.md#$)
- [$data](vue.VList.md#$data)
- [$props](vue.VList.md#$props)
- [$attrs](vue.VList.md#$attrs)
- [$refs](vue.VList.md#$refs)
- [$slots](vue.VList.md#$slots)
- [$root](vue.VList.md#$root)
- [$parent](vue.VList.md#$parent)
- [$emit](vue.VList.md#$emit)
- [$el](vue.VList.md#$el)
- [$options](vue.VList.md#$options)
- [$forceUpdate](vue.VList.md#$forceupdate)
- [$nextTick](vue.VList.md#$nexttick)
- [shift](vue.VList.md#shift)
- [onScroll](vue.VList.md#onscroll)
- [data](vue.VList.md#data)
- [overscan](vue.VList.md#overscan)
- [initialItemSize](vue.VList.md#initialitemsize)
- [horizontal](vue.VList.md#horizontal)
- [onScrollStop](vue.VList.md#onscrollstop)
- [onRangeChange](vue.VList.md#onrangechange)
- [scrollOffset](vue.VList.md#scrolloffset)
- [scrollSize](vue.VList.md#scrollsize)
- [viewportSize](vue.VList.md#viewportsize)

## Methods

### $watch

▸ **$watch**\<`T`\>(`source`, `cb`, `options?`): `WatchStopHandle`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `T` |
| `cb` | `T` extends (...`args`: `any`) => `R` ? (...`args`: [`R`, `R`]) => `any` : (...`args`: `any`) => `any` |
| `options?` | `WatchOptions`\<`boolean`\> |

#### Returns

`WatchStopHandle`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:128

___

### scrollToIndex

▸ **scrollToIndex**(`index`, `opts?`): `void`

Scroll to the item specified by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index of item |
| `opts?` | [`ScrollToIndexOpts`](../interfaces/react.ScrollToIndexOpts.md) | options |

#### Returns

`void`

#### Defined in

[src/vue/VList.ts:49](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L49)

___

### scrollTo

▸ **scrollTo**(`offset`): `void`

Scroll to the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from start |

#### Returns

`void`

#### Defined in

[src/vue/VList.ts:54](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L54)

___

### scrollBy

▸ **scrollBy**(`offset`): `void`

Scroll by the given offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | offset from current position |

#### Returns

`void`

#### Defined in

[src/vue/VList.ts:59](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L59)

## Properties

### $

• **$**: `ComponentInternalInstance`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:115

___

### $data

• **$data**: `Object`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:116

___

### $props

• **$props**: `Partial`\<\{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean }\> & `Omit`\<\{ `shift`: `boolean` = Boolean; `data`: `unknown`[] ; `overscan`: `number` ; `horizontal`: `boolean` = Boolean; `initialItemSize?`: `number` = Number; `onScroll`: `undefined` \| (...`args`: [offset: number]) => `any` ; `onScrollStop`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  } & `VNodeProps` & `AllowedComponentProps` & `ComponentCustomProps` & `Readonly`\<`ExtractPropTypes`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `initialItemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }\>\> & \{ `onScroll`: `undefined` \| (...`args`: [offset: number]) => `any` ; `onScrollStop`: `undefined` \| (...`args`: []) => `any` ; `onRangeChange`: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`  }, `DefaultKeys`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `initialItemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }\>\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:117

___

### $attrs

• **$attrs**: `Data`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:118

___

### $refs

• **$refs**: `Data`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:119

___

### $slots

• **$slots**: `Readonly`\<\{ `default`: `any`  }\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:120

___

### $root

• **$root**: ``null`` \| `ComponentPublicInstance`\<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`, {}\>, {}, {}\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:121

___

### $parent

• **$parent**: ``null`` \| `ComponentPublicInstance`\<{}, {}, {}, {}, {}, {}, {}, {}, ``false``, `ComponentOptionsBase`\<`any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`, {}, {}, `string`, {}\>, {}, {}\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:122

___

### $emit

• **$emit**: (`event`: ``"scroll"``, ...`args`: [offset: number]) => `void` & (`event`: ``"scrollStop"``, ...`args`: []) => `void` & (`event`: ``"rangeChange"``, ...`args`: [startIndex: number, endIndex: number]) => `void`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:123

___

### $el

• **$el**: `any`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:124

___

### $options

• **$options**: `ComponentOptionsBase`\<`ResolveProps`\<\{ `data`: \{ `type`: `ArrayConstructor` = Array; `required`: ``true`` = true } ; `overscan`: \{ `type`: `NumberConstructor` = Number; `default`: `number` = 4 } ; `initialItemSize`: `NumberConstructor` = Number; `shift`: `BooleanConstructor` = Boolean; `horizontal`: `BooleanConstructor` = Boolean }, \{ `scroll`: (`offset`: `number`) => `void` ; `scrollStop`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }\>, `VListHandle`, {}, {}, {}, `ComponentOptionsMixin`, `ComponentOptionsMixin`, \{ `scroll`: (`offset`: `number`) => `void` ; `scrollStop`: () => `void` ; `rangeChange`: (`startIndex`: `number`, `endIndex`: `number`) => `void`  }, `string`, \{ `shift`: `boolean` = Boolean; `overscan`: `number` ; `horizontal`: `boolean` = Boolean }, {}, `string`, `SlotsType`\<\{ `default`: `any`  }\>\> & `MergedComponentOptionsOverride`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:125

___

### $forceUpdate

• **$forceUpdate**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:126

___

### $nextTick

• **$nextTick**: \<T, R\>(`this`: `T`, `fn?`: (`this`: `T`) => `R`) => `Promise`\<`Awaited`\<`R`\>\>

#### Type declaration

▸ \<`T`, `R`\>(`this`, `fn?`): `Promise`\<`Awaited`\<`R`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |
| `R` | `void` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `fn?` | (`this`: `T`) => `R` |

##### Returns

`Promise`\<`Awaited`\<`R`\>\>

#### Defined in

node_modules/@vue/runtime-core/dist/runtime-core.d.ts:127

___

### shift

• `Readonly` **shift**: `boolean` = `Boolean`

While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.

#### Defined in

[src/vue/VList.ts:82](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L82)

___

### onScroll

• **onScroll**: `undefined` \| (...`args`: [offset: number]) => `any`

___

### data

• `Readonly` **data**: `unknown`[]

The data items rendered by this component.

#### Defined in

[src/vue/VList.ts:66](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L66)

___

### overscan

• `Readonly` **overscan**: `number`

Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.

**`Default Value`**

```ts
4
```

#### Defined in

[src/vue/VList.ts:71](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L71)

___

### initialItemSize

• `Optional` `Readonly` **initialItemSize**: `number` = `Number`

Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.

#### Defined in

[src/vue/VList.ts:78](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L78)

___

### horizontal

• `Readonly` **horizontal**: `boolean` = `Boolean`

If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.

#### Defined in

[src/vue/VList.ts:86](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L86)

___

### onScrollStop

• **onScrollStop**: `undefined` \| (...`args`: []) => `any`

___

### onRangeChange

• **onRangeChange**: `undefined` \| (...`args`: [startIndex: number, endIndex: number]) => `any`

___

### scrollOffset

• `Readonly` **scrollOffset**: `number`

Get current scrollTop or scrollLeft.

#### Defined in

[src/vue/VList.ts:35](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L35)

___

### scrollSize

• `Readonly` **scrollSize**: `number`

Get current scrollHeight or scrollWidth.

#### Defined in

[src/vue/VList.ts:39](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L39)

___

### viewportSize

• `Readonly` **viewportSize**: `number`

Get current offsetHeight or offsetWidth.

#### Defined in

[src/vue/VList.ts:43](https://github.com/inokawa/virtua/blob/401edf3d/src/vue/VList.ts#L43)