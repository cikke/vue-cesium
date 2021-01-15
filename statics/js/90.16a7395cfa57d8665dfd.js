(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{b5pq:function(e,t,s){"use strict";s.r(t);var a={data:function(){return{id:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:108,lat:35,height:1e4},billboard:{},show:!0,distanceDisplayCondition:{near:0,far:2e7},horizontalOrigin:0}},methods:{ready:function(e){e.Cesium,e.viewer},clicked:function(e){console.log(e)}}},r=s("JFUb"),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("Billboard")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-collection-primitive-billboard",[s("vc-primitive-billboard",{attrs:{image:e.image,scale:.4,show:e.show,distanceDisplayCondition:e.distanceDisplayCondition,horizontalOrigin:e.horizontalOrigin,position:e.position},on:{click:e.clicked}})],1)],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),s("hr")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-primitive-billboard")]),this._v(" component is used to load a viewport-aligned image positioned in the 3D scene, that is created and rendered using a "),t("code",{pre:!0},[this._v("vc-collection-primitive-billboard")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Load a Billboard with "),t("code",{pre:!0},[this._v("vc-primitive-billboard")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-collection-primitive-billboard")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-billboard")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":image")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"image"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":scale")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0.4"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":show")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"show"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":distanceDisplayCondition")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"distanceDisplayCondition"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":horizontalOrigin")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"horizontalOrigin"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":position")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"position"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@click")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"clicked"')]),e._v("\n        >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-billboard")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-collection-primitive-billboard")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("id")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Hello Vue Cesium'")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("image")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("position")]),e._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("108")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("35")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("10000")]),e._v(" },\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("billboard")]),e._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("show")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("distanceDisplayCondition")]),e._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("near")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("far")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20000000")]),e._v(" },\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("horizontalOrigin")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n      },\n      clicked(e) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(e)\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("alignedAxis")]),e._v(" "),s("td",[e._v("Cartesian3")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("{x: 0, y: 0, z: 0}")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the aligned axis in world space. The aligned axis is the unit vector that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector. "),s("strong",[e._v("Structure: { x: number, y: number, z: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("color")]),e._v(" "),s("td",[e._v("Object|String|Array")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("'white'")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the color that is multiplied with the billboard's texture. This has two common use cases. First, the same white texture may be used by many different billboards, each with a different color, to create colored billboards. Second, the color's alpha component can be used to make the billboard translucent as shown below. An alpha of 0.0 makes the billboard transparent, and 1.0 makes the billboard opaque.")])]),e._v(" "),s("tr",[s("td",[e._v("disableDepthTestDistance")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.")])]),e._v(" "),s("tr",[s("td",[e._v("distanceDisplayCondition")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the condition specifying at what distance from the camera that this billboard will be displayed. "),s("strong",[e._v("Structure: { near: number, far: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("eyeOffset")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("{x: 0, y: 0, z: 0}")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the 3D Cartesian offset applied to this billboard in eye coordinates. Eye coordinates is a left-handed coordinate system, where x points towards the viewer's right, y points up, and z points into the screen. Eye coordinates use the same scale as world and model coordinates, which is typically meters. "),s("strong",[e._v("Structure: { x: number, y: number, z: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("height")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets a height for the billboard. If undefined, the image height will be used.")])]),e._v(" "),s("tr",[s("td",[e._v("heightReference")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the height reference of this billboard. "),s("strong",[e._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),e._v(" "),s("tr",[s("td",[e._v("horizontalOrigin")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the horizontal origin of this billboard, which determines if the billboard is to the left, center, or right of its anchor position. "),s("strong",[e._v("CENTER: 0, LEFT: 1, RIGHT: -1")])])]),e._v(" "),s("tr",[s("td",[e._v("id")]),e._v(" "),s("td",[e._v("*")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the user-defined object returned when the billboard is picked.")])]),e._v(" "),s("tr",[s("td",[e._v("image")]),e._v(" "),s("td",[e._v("String|Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the image to be used for this billboard. If a texture has already been created for the given image, the existing texture is used.This property can be set to a loaded Image, a URL which will be loaded as an Image automatically, a canvas, or another billboard's image property (from the same billboard collection).")])]),e._v(" "),s("tr",[s("td",[e._v("pixelOffset")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("{x: 0, y: 0}")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the pixel offset in screen space from the origin of this billboard. This is commonly used to align multiple billboards and labels at the same position, e.g., an image and text. The screen space origin is the top, left corner of the canvas; x increases from left to right, and y increases from top to bottom. "),s("strong",[e._v("Structure: { x: number, y: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("pixelOffsetScaleByDistance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets near and far pixel offset scaling properties of a Billboard based on the billboard's distance from the camera. A billboard's pixel offset will be scaled between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's pixel offset scale remains clamped to the nearest bound. If undefined, pixelOffsetScaleByDistance will be disabled. "),s("strong",[e._v("Structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("position")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the Cartesian position of this billboard. "),s("strong",[e._v("Structure: { lng: number, lat: number, height: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("rotation")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the rotation angle in radians.")])]),e._v(" "),s("tr",[s("td",[e._v("scale")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the uniform scale that is multiplied with the billboard's image size in pixels. A scale of 1.0 does not change the size of the billboard; a scale greater than 1.0 enlarges the billboard; a positive scale less than 1.0 shrinks the billboard.")])]),e._v(" "),s("tr",[s("td",[e._v("scaleByDistance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets near and far scaling properties of a Billboard based on the billboard's distance from the camera. A billboard's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's scale remains clamped to the nearest bound. If undefined, scaleByDistance will be disabled. "),s("strong",[e._v("Structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("show")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if this billboard will be shown. Use this to hide or show a billboard, instead of removing it and re-adding it to the collection.")])]),e._v(" "),s("tr",[s("td",[e._v("sizeInMeters")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets if the billboard size is in meters or pixels. true to size the billboard in meters; otherwise, the size is in pixels.")])]),e._v(" "),s("tr",[s("td",[e._v("translucencyByDistance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets near and far translucency properties of a Billboard based on the billboard's distance from the camera. A billboard's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the upper and lower bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled. "),s("strong",[e._v("Structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("verticalOrigin")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Gets or sets the vertical origin of this billboard, which determines if the billboard is to the above, below, or at the center of its anchor position. "),s("strong",[e._v("CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html"}},[this._v("Billboard")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),s("tr",[s("td",[e._v("mousedown")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse is pressed on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseup")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse bounces on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("click")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("clickout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Touch when the mouse clicks outside the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("dblclick")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mousemove")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseover")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves out of the primitive.")])])])])}],!1,null,null,null);t.default=i.exports},dJ0v:function(e,t,s){e.exports=s("b5pq")}}]);
//# sourceMappingURL=90.16a7395cfa57d8665dfd.js.map