(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(e,t,n){var content=n(182);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("754963d2",content,!0,{sourceMap:!1})},181:function(e,t,n){"use strict";var r=n(179);n.n(r).a},182:function(e,t,n){(t=n(62)(!1)).push([e.i,".prompt-box[data-v-151de742]{position:relative;overflow:hidden;padding:1em;margin-bottom:24px;transform:scaleY(1)}.prompt-box>.title[data-v-151de742]{margin:0 0 .5em}.prompt-box>.title>.meta[data-v-151de742]{margin-left:10px}.prompt-box>.actions[data-v-151de742]{display:flex;align-items:center}.prompt-box>button[data-v-151de742]{margin-right:.5em}.prompt-box>button[data-v-151de742]:last-of-type{margin-right:0}.location[data-v-151de742]{margin-bottom:0}.location>.icon[data-v-151de742]{margin-left:10px}.event-header>.title[data-v-151de742]{margin:0}.list-group[data-v-151de742]{margin:0;padding:0;list-style:none}.list-group>.list-item[data-v-151de742]{padding:1em 0;border-bottom:1px solid #e5e5e5}",""]),e.exports=t},187:function(e,t,n){"use strict";n.r(t);n(38);var r=n(5),o=n(76),d={fetch:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.error,o=e.params,t.prev=1,t.next=4,n.dispatch("events/fetchEvent",o.id);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),r({statusCode:503,message:"Unable to fetch event #"+o.id});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))()},computed:Object(o.b)({event:function(e){return e.events.event}}),head:function(){return{title:this.event.title,meta:[{hid:"description",name:"description",content:"What you need to know about "+this.event.title}]}}},v=(n(181),n(17)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"event-header"},[n("span",{staticClass:"eyebrow"},[e._v(" @"+e._s(e.event.time)+" on "+e._s(e.event.date)+" ")]),e._v(" "),n("h1",{staticClass:"title"},[e._v("\n      "+e._s(e.event.title)+"\n    ")]),e._v(" "),n("h5",[e._v("Organized by "+e._s(e.event.organizer?e.event.organizer.name:""))]),e._v(" "),n("h5",[e._v("Category: "+e._s(e.event.category))])]),e._v(" "),e._m(0),e._v(" "),n("address",[e._v(e._s(e.event.location))]),e._v(" "),n("h2",[e._v("Event details")]),e._v(" "),n("p",[e._v(e._s(e.event.description))]),e._v(" "),n("h2",[e._v("\n    Attendees\n    "),n("span",{staticClass:"badge -fill-gradient"},[e._v("\n      "+e._s(e.event.attendees?e.event.attendees.length:0)+"\n    ")])]),e._v(" "),n("ul",{staticClass:"list-group"},e._l(e.event.attendees,(function(t,r){return n("li",{key:r,staticClass:"list-item"},[n("b",[e._v(e._s(t.name))])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{attrs:{name:"map"}},[t("h2",[this._v("Location")])])}],!1,null,"151de742",null);t.default=component.exports}}]);