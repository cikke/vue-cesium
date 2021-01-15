(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{suyU:function(e,t,s){"use strict";s.r(t);var r={data:function(){return{url:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",modelMatrix:{}}},methods:{ready:function(e){var t=e.Cesium,s=e.viewer;this.viewer=s,this.modelMatrix=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(105,38,1e4))},readyPromise:function(e){var t=Cesium.BoundingSphere.transform(e.boundingSphere,e.modelMatrix);this.viewer.scene.camera.flyToBoundingSphere(t)}}},a=s("JFUb"),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("Model")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-primitive-model",{ref:"model",attrs:{url:e.url,modelMatrix:e.modelMatrix,scale:1e4,minimumPixelSize:128,maximumScale:2e5},on:{readyPromise:e.readyPromise}})],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),s("hr")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-primitive-model")]),this._v(" component is used to load a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Load a model with "),t("code",{pre:!0},[this._v("vc-primitive-model")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-model")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"model"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@readyPromise")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"readyPromise"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":url")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"url"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":modelMatrix")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"modelMatrix"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":scale")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"10000"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":minimumPixelSize")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"128"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":maximumScale")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"200000"')]),e._v("\n      >")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-model")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("url")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("modelMatrix")]),e._v(": {}\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".viewer = viewer\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("105")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("38")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("10000")]),e._v("))\n      },\n      readyPromise(model) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("|name|type|default|description|                                                                                     |\n| ------------------------- | ------- | ------ | ---------------------------------------------------------------------------------------------- |\n| url                       | String  |        | "),s("code",{pre:!0},[e._v("required")]),e._v(" The url to the .gltf file.                                                         |\n| basePath                  | String  |        | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The base path that paths in the glTF JSON are relative to.                                           |\n| show                      | Boolean | "),s("code",{pre:!0},[e._v("true")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the model primitive will be shown. |\n| modelMatrix               | Object  |        | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The 4x4 transformation matrix that transforms the model from model to world coordinates. |\n| scale                     | Number  | "),s("code",{pre:!0},[e._v("1.0")]),e._v("  | "),s("code",{pre:!0},[e._v("optional")]),e._v(" A uniform scale applied to this model.                                                               |\n| minimumPixelSize          | Number  | "),s("code",{pre:!0},[e._v("0.0")]),e._v("  | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The approximate minimum pixel size of the model regardless of zoom. |\n| maximumScale              | Number  |        | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The maximum scale for the model.                                                              |\n| id                        | *      |        | "),s("code",{pre:!0},[e._v("optional")]),e._v(" A user-defined object to return when the model is picked with Scene#pick. |\n| allowPicking              | Boolean | "),s("code",{pre:!0},[e._v("true")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" When true, each glTF mesh and primitive is pickable with Scene#pick. |\n| incrementallyLoadTextures | Boolean | "),s("code",{pre:!0},[e._v("true")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determine if textures may continue to stream in after the model is loaded. |\n| asynchronous              | Boolean | "),s("code",{pre:!0},[e._v("true")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded. |\n| clampAnimations | Boolean | "),s("code",{pre:!0},[e._v("true")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the model's animations should hold a pose over frames where no keyframes are specified. |\n| shadows | Number | "),s("code",{pre:!0},[e._v("1")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determines whether the model casts or receives shadows from each light source. "),s("strong",[e._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")]),e._v(" |\n| debugShowBoundingVolume | Boolean | "),s("code",{pre:!0},[e._v("false")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Draws the bounding sphere for each DrawCommand in the model. |\n| debugWireframe | Boolean | "),s("code",{pre:!0},[e._v("false")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Draws the model in wireframe. |\n| heightReference | Number | "),s("code",{pre:!0},[e._v("0")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determines how the model is drawn relative to terrain. "),s("strong",[e._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")]),e._v(" |\n| scene | Object | "),s("code",{pre:!0},[e._v("false")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Must be passed in for models that use the height reference property. |\n| distanceDisplayCondition | Object | | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The condition specifying at what distance from the camera that this model will be displayed. "),s("strong",[e._v("Structure: { near: number, far: number }")]),e._v(" |\n| color | Object|String|Array | "),s("code",{pre:!0},[e._v("'WHITE'")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" A color that blends with the model's rendered color. |\n| colorBlendMode | Number | "),s("code",{pre:!0},[e._v("0")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Defines how the color blends with the model. "),s("strong",[e._v("HIGHLIGHT: 0, REPLACE: 1, MIX: 2")]),e._v(" |\n| colorBlendAmount | Number | "),s("code",{pre:!0},[e._v("0.5")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two. |\n| silhouetteColor | Object|String|Array | "),s("code",{pre:!0},[e._v("'RED'")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts. |\n| silhouetteSize | Number | "),s("code",{pre:!0},[e._v("0.0")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The size of the silhouette in pixels. |\n| clippingPlanes | Object | | "),s("code",{pre:!0},[e._v("optional")]),e._v(" The ClippingPlaneCollection used to selectively disable rendering the model. |\n| debugWireframe | Boolean | "),s("code",{pre:!0},[e._v("true")]),e._v(" | "),s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models. |\n| credit | Object|String | | "),s("code",{pre:!0},[e._v("optional")]),e._v(" A credit for the model, which is displayed on the canvas. |")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Model.html"}},[this._v("Model")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),s("tr",[s("td",[e._v("readyPromise")]),e._v(" "),s("td",[e._v("model")]),e._v(" "),s("td",[e._v("Triggers when the model is ready for use.")])]),e._v(" "),s("tr",[s("td",[e._v("mousedown")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse is pressed on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseup")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse bounces on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("click")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("clickout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Touch when the mouse clicks outside the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("dblclick")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mousemove")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseover")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves out of the primitive.")])])])])}],!1,null,null,null);t.default=o.exports},tUP5:function(e,t,s){e.exports=s("suyU")}}]);
//# sourceMappingURL=94.3b03cf890152dfd706c3.js.map