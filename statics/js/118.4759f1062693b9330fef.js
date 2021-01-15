(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"7v8I":function(t,s,v){"use strict";v.r(s);var _={data:function(){return{show:!0}},methods:{ready:function(t){t.Cesium,t.viewer},clicked:function(t){console.log(t)}}},e=v("JFUb"),a=Object(e.a)(_,(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("section",[v("h1",[t._v("KmlDataSource")]),t._v(" "),t._m(0),t._v(" "),v("h2",[t._v("示例")]),t._v(" "),v("h3",[t._v("加载 KML 格式数据源")]),t._v(" "),v("h4",[t._v("预览")]),t._v(" "),v("doc-preview",[[v("div",{staticClass:"viewer"},[v("vc-viewer",{on:{ready:t.ready}},[v("vc-datasource-kml",{attrs:{data:"./statics/SampleData/kml/gdpPerCapita2008.kmz",show:t.show},on:{click:t.clicked}})],1)],1)]],2),t._v(" "),v("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),v("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),v("hr"),t._v(" "),t._m(3),t._v(" "),v("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),v("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-datasource-kml")]),this._v(" 组件用于加载 KML(2.2) 格式的数据。")])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-kml")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"./statics/SampleData/kml/gdpPerCapita2008.kmz"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clicked"')]),t._v(">")]),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-kml")]),t._v(">")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),v("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n    "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      },\n      clicked(e) {\n        "),v("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(e)\n      }\n    }\n  }\n")]),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("data")]),t._v(" "),v("td",[t._v("String|Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("required")]),t._v(" 指定要加载的 KML 对象 url。")])]),t._v(" "),v("tr",[v("td",[t._v("show")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定数据源是否显示。")])]),t._v(" "),v("tr",[v("td",[t._v("entities")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("[]")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("指定要添加到该数据源的实体集合。")])]),t._v(" "),v("tr",[v("td",[t._v("options")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定以下属性：")])]),t._v(" "),v("tr",[v("td",[t._v("-------------")]),t._v(" "),v("td",[t._v("--------------")]),t._v(" "),v("td",[t._v("-------")]),t._v(" "),v("td",[t._v("------------------------------------------")])]),t._v(" "),v("tr",[v("td",[t._v("camera")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("canvas")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("sourceUri")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("clampToGround")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("ellipsoid")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("credit")]),t._v(" "),v("td",[t._v("String|Object")]),t._v(" "),v("td"),t._v(" "),v("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html"}},[this._v("KmlDataSource")])])])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ready")]),t._v(" "),v("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),v("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),v("tr",[v("td",[t._v("changedEvent")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("数据源改变时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("errorEvent")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("数据源发生错误时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("loadingEvent")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("数据源开始或结束加载时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("clusterEvent")]),t._v(" "),v("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),v("td",[t._v("数据源聚合事件。")])]),t._v(" "),v("tr",[v("td",[t._v("collectionChanged")]),t._v(" "),v("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),v("td",[t._v("数据源实体集合改变时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("mousedown")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标在该数据源上按下时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("mouseup")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标在该数据源上弹起时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("click")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标单击该数据源时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("clickout")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标单击该数据源外部时触。")])]),t._v(" "),v("tr",[v("td",[t._v("dblclick")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标左键双击该数据源时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("mousemove")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标在该数据源上移动时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("mouseover")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标移动到该数据源时触发。")])]),t._v(" "),v("tr",[v("td",[t._v("mouseout")]),t._v(" "),v("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),v("td",[t._v("鼠标移出该数据源时触发。")])])])])}],!1,null,null,null);s.default=a.exports},xFyx:function(t,s,v){t.exports=v("7v8I")}}]);
//# sourceMappingURL=118.4759f1062693b9330fef.js.map