// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31392__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31389 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__31390 = cljs.core.seq.call(null,vec__31389);
var first__31391 = cljs.core.first.call(null,seq__31390);
var seq__31390__$1 = cljs.core.next.call(null,seq__31390);
var tag = first__31391;
var body = seq__31390__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31393__i = 0, G__31393__a = new Array(arguments.length -  0);
while (G__31393__i < G__31393__a.length) {G__31393__a[G__31393__i] = arguments[G__31393__i + 0]; ++G__31393__i;}
  args = new cljs.core.IndexedSeq(G__31393__a,0);
} 
return G__31392__delegate.call(this,args);};
G__31392.cljs$lang$maxFixedArity = 0;
G__31392.cljs$lang$applyTo = (function (arglist__31394){
var args = cljs.core.seq(arglist__31394);
return G__31392__delegate(args);
});
G__31392.cljs$core$IFn$_invoke$arity$variadic = G__31392__delegate;
return G__31392;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21068__auto__ = (function sablono$core$update_arglists_$_iter__31399(s__31400){
return (new cljs.core.LazySeq(null,(function (){
var s__31400__$1 = s__31400;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31400__$1);
if(temp__4657__auto__){
var s__31400__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31400__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__31400__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__31402 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__31401 = (0);
while(true){
if((i__31401 < size__21067__auto__)){
var args = cljs.core._nth.call(null,c__21066__auto__,i__31401);
cljs.core.chunk_append.call(null,b__31402,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31403 = (i__31401 + (1));
i__31401 = G__31403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31402),sablono$core$update_arglists_$_iter__31399.call(null,cljs.core.chunk_rest.call(null,s__31400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31402),null);
}
} else {
var args = cljs.core.first.call(null,s__31400__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31399.call(null,cljs.core.rest.call(null,s__31400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21400__auto__ = [];
var len__21393__auto___31409 = arguments.length;
var i__21394__auto___31410 = (0);
while(true){
if((i__21394__auto___31410 < len__21393__auto___31409)){
args__21400__auto__.push((arguments[i__21394__auto___31410]));

var G__31411 = (i__21394__auto___31410 + (1));
i__21394__auto___31410 = G__31411;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21068__auto__ = (function sablono$core$iter__31405(s__31406){
return (new cljs.core.LazySeq(null,(function (){
var s__31406__$1 = s__31406;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31406__$1);
if(temp__4657__auto__){
var s__31406__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31406__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__31406__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__31408 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__31407 = (0);
while(true){
if((i__31407 < size__21067__auto__)){
var style = cljs.core._nth.call(null,c__21066__auto__,i__31407);
cljs.core.chunk_append.call(null,b__31408,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31412 = (i__31407 + (1));
i__31407 = G__31412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31408),sablono$core$iter__31405.call(null,cljs.core.chunk_rest.call(null,s__31406__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31408),null);
}
} else {
var style = cljs.core.first.call(null,s__31406__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31405.call(null,cljs.core.rest.call(null,s__31406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31404){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31404));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to31413 = (function sablono$core$link_to31413(var_args){
var args__21400__auto__ = [];
var len__21393__auto___31416 = arguments.length;
var i__21394__auto___31417 = (0);
while(true){
if((i__21394__auto___31417 < len__21393__auto___31416)){
args__21400__auto__.push((arguments[i__21394__auto___31417]));

var G__31418 = (i__21394__auto___31417 + (1));
i__21394__auto___31417 = G__31418;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to31413.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.link_to31413.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31413.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31413.cljs$lang$applyTo = (function (seq31414){
var G__31415 = cljs.core.first.call(null,seq31414);
var seq31414__$1 = cljs.core.next.call(null,seq31414);
return sablono.core.link_to31413.cljs$core$IFn$_invoke$arity$variadic(G__31415,seq31414__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31413);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31419 = (function sablono$core$mail_to31419(var_args){
var args__21400__auto__ = [];
var len__21393__auto___31426 = arguments.length;
var i__21394__auto___31427 = (0);
while(true){
if((i__21394__auto___31427 < len__21393__auto___31426)){
args__21400__auto__.push((arguments[i__21394__auto___31427]));

var G__31428 = (i__21394__auto___31427 + (1));
i__21394__auto___31427 = G__31428;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to31419.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.mail_to31419.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31422){
var vec__31423 = p__31422;
var content = cljs.core.nth.call(null,vec__31423,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20285__auto__ = content;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31419.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31419.cljs$lang$applyTo = (function (seq31420){
var G__31421 = cljs.core.first.call(null,seq31420);
var seq31420__$1 = cljs.core.next.call(null,seq31420);
return sablono.core.mail_to31419.cljs$core$IFn$_invoke$arity$variadic(G__31421,seq31420__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31419);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31429 = (function sablono$core$unordered_list31429(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21068__auto__ = (function sablono$core$unordered_list31429_$_iter__31434(s__31435){
return (new cljs.core.LazySeq(null,(function (){
var s__31435__$1 = s__31435;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31435__$1);
if(temp__4657__auto__){
var s__31435__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31435__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__31435__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__31437 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__31436 = (0);
while(true){
if((i__31436 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__31436);
cljs.core.chunk_append.call(null,b__31437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31438 = (i__31436 + (1));
i__31436 = G__31438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31437),sablono$core$unordered_list31429_$_iter__31434.call(null,cljs.core.chunk_rest.call(null,s__31435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31437),null);
}
} else {
var x = cljs.core.first.call(null,s__31435__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31429_$_iter__31434.call(null,cljs.core.rest.call(null,s__31435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31429);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31439 = (function sablono$core$ordered_list31439(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21068__auto__ = (function sablono$core$ordered_list31439_$_iter__31444(s__31445){
return (new cljs.core.LazySeq(null,(function (){
var s__31445__$1 = s__31445;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31445__$1);
if(temp__4657__auto__){
var s__31445__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31445__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__31445__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__31447 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__31446 = (0);
while(true){
if((i__31446 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__31446);
cljs.core.chunk_append.call(null,b__31447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31448 = (i__31446 + (1));
i__31446 = G__31448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31447),sablono$core$ordered_list31439_$_iter__31444.call(null,cljs.core.chunk_rest.call(null,s__31445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31447),null);
}
} else {
var x = cljs.core.first.call(null,s__31445__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31439_$_iter__31444.call(null,cljs.core.rest.call(null,s__31445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31439);
/**
 * Create an image element.
 */
sablono.core.image31449 = (function sablono$core$image31449(var_args){
var args31450 = [];
var len__21393__auto___31453 = arguments.length;
var i__21394__auto___31454 = (0);
while(true){
if((i__21394__auto___31454 < len__21393__auto___31453)){
args31450.push((arguments[i__21394__auto___31454]));

var G__31455 = (i__21394__auto___31454 + (1));
i__21394__auto___31454 = G__31455;
continue;
} else {
}
break;
}

var G__31452 = args31450.length;
switch (G__31452) {
case 1:
return sablono.core.image31449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31450.length)].join('')));

}
});

sablono.core.image31449.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31449.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31449.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31449);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31457_SHARP_,p2__31458_SHARP_){
return [cljs.core.str(p1__31457_SHARP_),cljs.core.str("["),cljs.core.str(p2__31458_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31459_SHARP_,p2__31460_SHARP_){
return [cljs.core.str(p1__31459_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31460_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field31461 = (function sablono$core$color_field31461(var_args){
var args31462 = [];
var len__21393__auto___31529 = arguments.length;
var i__21394__auto___31530 = (0);
while(true){
if((i__21394__auto___31530 < len__21393__auto___31529)){
args31462.push((arguments[i__21394__auto___31530]));

var G__31531 = (i__21394__auto___31530 + (1));
i__21394__auto___31530 = G__31531;
continue;
} else {
}
break;
}

var G__31464 = args31462.length;
switch (G__31464) {
case 1:
return sablono.core.color_field31461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31462.length)].join('')));

}
});

sablono.core.color_field31461.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.color_field31461.call(null,name__31376__auto__,null);
});

sablono.core.color_field31461.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.color_field31461.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31461);

/**
 * Creates a date input field.
 */
sablono.core.date_field31465 = (function sablono$core$date_field31465(var_args){
var args31466 = [];
var len__21393__auto___31533 = arguments.length;
var i__21394__auto___31534 = (0);
while(true){
if((i__21394__auto___31534 < len__21393__auto___31533)){
args31466.push((arguments[i__21394__auto___31534]));

var G__31535 = (i__21394__auto___31534 + (1));
i__21394__auto___31534 = G__31535;
continue;
} else {
}
break;
}

var G__31468 = args31466.length;
switch (G__31468) {
case 1:
return sablono.core.date_field31465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31466.length)].join('')));

}
});

sablono.core.date_field31465.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.date_field31465.call(null,name__31376__auto__,null);
});

sablono.core.date_field31465.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.date_field31465.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31465);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31469 = (function sablono$core$datetime_field31469(var_args){
var args31470 = [];
var len__21393__auto___31537 = arguments.length;
var i__21394__auto___31538 = (0);
while(true){
if((i__21394__auto___31538 < len__21393__auto___31537)){
args31470.push((arguments[i__21394__auto___31538]));

var G__31539 = (i__21394__auto___31538 + (1));
i__21394__auto___31538 = G__31539;
continue;
} else {
}
break;
}

var G__31472 = args31470.length;
switch (G__31472) {
case 1:
return sablono.core.datetime_field31469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31470.length)].join('')));

}
});

sablono.core.datetime_field31469.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.datetime_field31469.call(null,name__31376__auto__,null);
});

sablono.core.datetime_field31469.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.datetime_field31469.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31469);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31473 = (function sablono$core$datetime_local_field31473(var_args){
var args31474 = [];
var len__21393__auto___31541 = arguments.length;
var i__21394__auto___31542 = (0);
while(true){
if((i__21394__auto___31542 < len__21393__auto___31541)){
args31474.push((arguments[i__21394__auto___31542]));

var G__31543 = (i__21394__auto___31542 + (1));
i__21394__auto___31542 = G__31543;
continue;
} else {
}
break;
}

var G__31476 = args31474.length;
switch (G__31476) {
case 1:
return sablono.core.datetime_local_field31473.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31473.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31474.length)].join('')));

}
});

sablono.core.datetime_local_field31473.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.datetime_local_field31473.call(null,name__31376__auto__,null);
});

sablono.core.datetime_local_field31473.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.datetime_local_field31473.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31473);

/**
 * Creates a email input field.
 */
sablono.core.email_field31477 = (function sablono$core$email_field31477(var_args){
var args31478 = [];
var len__21393__auto___31545 = arguments.length;
var i__21394__auto___31546 = (0);
while(true){
if((i__21394__auto___31546 < len__21393__auto___31545)){
args31478.push((arguments[i__21394__auto___31546]));

var G__31547 = (i__21394__auto___31546 + (1));
i__21394__auto___31546 = G__31547;
continue;
} else {
}
break;
}

var G__31480 = args31478.length;
switch (G__31480) {
case 1:
return sablono.core.email_field31477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31478.length)].join('')));

}
});

sablono.core.email_field31477.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.email_field31477.call(null,name__31376__auto__,null);
});

sablono.core.email_field31477.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.email_field31477.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31477);

/**
 * Creates a file input field.
 */
sablono.core.file_field31481 = (function sablono$core$file_field31481(var_args){
var args31482 = [];
var len__21393__auto___31549 = arguments.length;
var i__21394__auto___31550 = (0);
while(true){
if((i__21394__auto___31550 < len__21393__auto___31549)){
args31482.push((arguments[i__21394__auto___31550]));

var G__31551 = (i__21394__auto___31550 + (1));
i__21394__auto___31550 = G__31551;
continue;
} else {
}
break;
}

var G__31484 = args31482.length;
switch (G__31484) {
case 1:
return sablono.core.file_field31481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31482.length)].join('')));

}
});

sablono.core.file_field31481.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.file_field31481.call(null,name__31376__auto__,null);
});

sablono.core.file_field31481.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.file_field31481.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31481);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31485 = (function sablono$core$hidden_field31485(var_args){
var args31486 = [];
var len__21393__auto___31553 = arguments.length;
var i__21394__auto___31554 = (0);
while(true){
if((i__21394__auto___31554 < len__21393__auto___31553)){
args31486.push((arguments[i__21394__auto___31554]));

var G__31555 = (i__21394__auto___31554 + (1));
i__21394__auto___31554 = G__31555;
continue;
} else {
}
break;
}

var G__31488 = args31486.length;
switch (G__31488) {
case 1:
return sablono.core.hidden_field31485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31486.length)].join('')));

}
});

sablono.core.hidden_field31485.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.hidden_field31485.call(null,name__31376__auto__,null);
});

sablono.core.hidden_field31485.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.hidden_field31485.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31485);

/**
 * Creates a month input field.
 */
sablono.core.month_field31489 = (function sablono$core$month_field31489(var_args){
var args31490 = [];
var len__21393__auto___31557 = arguments.length;
var i__21394__auto___31558 = (0);
while(true){
if((i__21394__auto___31558 < len__21393__auto___31557)){
args31490.push((arguments[i__21394__auto___31558]));

var G__31559 = (i__21394__auto___31558 + (1));
i__21394__auto___31558 = G__31559;
continue;
} else {
}
break;
}

var G__31492 = args31490.length;
switch (G__31492) {
case 1:
return sablono.core.month_field31489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31490.length)].join('')));

}
});

sablono.core.month_field31489.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.month_field31489.call(null,name__31376__auto__,null);
});

sablono.core.month_field31489.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.month_field31489.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31489);

/**
 * Creates a number input field.
 */
sablono.core.number_field31493 = (function sablono$core$number_field31493(var_args){
var args31494 = [];
var len__21393__auto___31561 = arguments.length;
var i__21394__auto___31562 = (0);
while(true){
if((i__21394__auto___31562 < len__21393__auto___31561)){
args31494.push((arguments[i__21394__auto___31562]));

var G__31563 = (i__21394__auto___31562 + (1));
i__21394__auto___31562 = G__31563;
continue;
} else {
}
break;
}

var G__31496 = args31494.length;
switch (G__31496) {
case 1:
return sablono.core.number_field31493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31494.length)].join('')));

}
});

sablono.core.number_field31493.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.number_field31493.call(null,name__31376__auto__,null);
});

sablono.core.number_field31493.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.number_field31493.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31493);

/**
 * Creates a password input field.
 */
sablono.core.password_field31497 = (function sablono$core$password_field31497(var_args){
var args31498 = [];
var len__21393__auto___31565 = arguments.length;
var i__21394__auto___31566 = (0);
while(true){
if((i__21394__auto___31566 < len__21393__auto___31565)){
args31498.push((arguments[i__21394__auto___31566]));

var G__31567 = (i__21394__auto___31566 + (1));
i__21394__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var G__31500 = args31498.length;
switch (G__31500) {
case 1:
return sablono.core.password_field31497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31498.length)].join('')));

}
});

sablono.core.password_field31497.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.password_field31497.call(null,name__31376__auto__,null);
});

sablono.core.password_field31497.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.password_field31497.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31497);

/**
 * Creates a range input field.
 */
sablono.core.range_field31501 = (function sablono$core$range_field31501(var_args){
var args31502 = [];
var len__21393__auto___31569 = arguments.length;
var i__21394__auto___31570 = (0);
while(true){
if((i__21394__auto___31570 < len__21393__auto___31569)){
args31502.push((arguments[i__21394__auto___31570]));

var G__31571 = (i__21394__auto___31570 + (1));
i__21394__auto___31570 = G__31571;
continue;
} else {
}
break;
}

var G__31504 = args31502.length;
switch (G__31504) {
case 1:
return sablono.core.range_field31501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31502.length)].join('')));

}
});

sablono.core.range_field31501.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.range_field31501.call(null,name__31376__auto__,null);
});

sablono.core.range_field31501.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.range_field31501.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31501);

/**
 * Creates a search input field.
 */
sablono.core.search_field31505 = (function sablono$core$search_field31505(var_args){
var args31506 = [];
var len__21393__auto___31573 = arguments.length;
var i__21394__auto___31574 = (0);
while(true){
if((i__21394__auto___31574 < len__21393__auto___31573)){
args31506.push((arguments[i__21394__auto___31574]));

var G__31575 = (i__21394__auto___31574 + (1));
i__21394__auto___31574 = G__31575;
continue;
} else {
}
break;
}

var G__31508 = args31506.length;
switch (G__31508) {
case 1:
return sablono.core.search_field31505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31506.length)].join('')));

}
});

sablono.core.search_field31505.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.search_field31505.call(null,name__31376__auto__,null);
});

sablono.core.search_field31505.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.search_field31505.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31505);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31509 = (function sablono$core$tel_field31509(var_args){
var args31510 = [];
var len__21393__auto___31577 = arguments.length;
var i__21394__auto___31578 = (0);
while(true){
if((i__21394__auto___31578 < len__21393__auto___31577)){
args31510.push((arguments[i__21394__auto___31578]));

var G__31579 = (i__21394__auto___31578 + (1));
i__21394__auto___31578 = G__31579;
continue;
} else {
}
break;
}

var G__31512 = args31510.length;
switch (G__31512) {
case 1:
return sablono.core.tel_field31509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31510.length)].join('')));

}
});

sablono.core.tel_field31509.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.tel_field31509.call(null,name__31376__auto__,null);
});

sablono.core.tel_field31509.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.tel_field31509.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31509);

/**
 * Creates a text input field.
 */
sablono.core.text_field31513 = (function sablono$core$text_field31513(var_args){
var args31514 = [];
var len__21393__auto___31581 = arguments.length;
var i__21394__auto___31582 = (0);
while(true){
if((i__21394__auto___31582 < len__21393__auto___31581)){
args31514.push((arguments[i__21394__auto___31582]));

var G__31583 = (i__21394__auto___31582 + (1));
i__21394__auto___31582 = G__31583;
continue;
} else {
}
break;
}

var G__31516 = args31514.length;
switch (G__31516) {
case 1:
return sablono.core.text_field31513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31514.length)].join('')));

}
});

sablono.core.text_field31513.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.text_field31513.call(null,name__31376__auto__,null);
});

sablono.core.text_field31513.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.text_field31513.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31513);

/**
 * Creates a time input field.
 */
sablono.core.time_field31517 = (function sablono$core$time_field31517(var_args){
var args31518 = [];
var len__21393__auto___31585 = arguments.length;
var i__21394__auto___31586 = (0);
while(true){
if((i__21394__auto___31586 < len__21393__auto___31585)){
args31518.push((arguments[i__21394__auto___31586]));

var G__31587 = (i__21394__auto___31586 + (1));
i__21394__auto___31586 = G__31587;
continue;
} else {
}
break;
}

var G__31520 = args31518.length;
switch (G__31520) {
case 1:
return sablono.core.time_field31517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31518.length)].join('')));

}
});

sablono.core.time_field31517.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.time_field31517.call(null,name__31376__auto__,null);
});

sablono.core.time_field31517.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.time_field31517.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31517);

/**
 * Creates a url input field.
 */
sablono.core.url_field31521 = (function sablono$core$url_field31521(var_args){
var args31522 = [];
var len__21393__auto___31589 = arguments.length;
var i__21394__auto___31590 = (0);
while(true){
if((i__21394__auto___31590 < len__21393__auto___31589)){
args31522.push((arguments[i__21394__auto___31590]));

var G__31591 = (i__21394__auto___31590 + (1));
i__21394__auto___31590 = G__31591;
continue;
} else {
}
break;
}

var G__31524 = args31522.length;
switch (G__31524) {
case 1:
return sablono.core.url_field31521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31522.length)].join('')));

}
});

sablono.core.url_field31521.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.url_field31521.call(null,name__31376__auto__,null);
});

sablono.core.url_field31521.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.url_field31521.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31521);

/**
 * Creates a week input field.
 */
sablono.core.week_field31525 = (function sablono$core$week_field31525(var_args){
var args31526 = [];
var len__21393__auto___31593 = arguments.length;
var i__21394__auto___31594 = (0);
while(true){
if((i__21394__auto___31594 < len__21393__auto___31593)){
args31526.push((arguments[i__21394__auto___31594]));

var G__31595 = (i__21394__auto___31594 + (1));
i__21394__auto___31594 = G__31595;
continue;
} else {
}
break;
}

var G__31528 = args31526.length;
switch (G__31528) {
case 1:
return sablono.core.week_field31525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31526.length)].join('')));

}
});

sablono.core.week_field31525.cljs$core$IFn$_invoke$arity$1 = (function (name__31376__auto__){
return sablono.core.week_field31525.call(null,name__31376__auto__,null);
});

sablono.core.week_field31525.cljs$core$IFn$_invoke$arity$2 = (function (name__31376__auto__,value__31377__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31376__auto__,value__31377__auto__);
});

sablono.core.week_field31525.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31525);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31597 = (function sablono$core$check_box31597(var_args){
var args31598 = [];
var len__21393__auto___31601 = arguments.length;
var i__21394__auto___31602 = (0);
while(true){
if((i__21394__auto___31602 < len__21393__auto___31601)){
args31598.push((arguments[i__21394__auto___31602]));

var G__31603 = (i__21394__auto___31602 + (1));
i__21394__auto___31602 = G__31603;
continue;
} else {
}
break;
}

var G__31600 = args31598.length;
switch (G__31600) {
case 1:
return sablono.core.check_box31597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31597.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31598.length)].join('')));

}
});

sablono.core.check_box31597.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31597.call(null,name,null);
});

sablono.core.check_box31597.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31597.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31597.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31597.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31597);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31605 = (function sablono$core$radio_button31605(var_args){
var args31606 = [];
var len__21393__auto___31609 = arguments.length;
var i__21394__auto___31610 = (0);
while(true){
if((i__21394__auto___31610 < len__21393__auto___31609)){
args31606.push((arguments[i__21394__auto___31610]));

var G__31611 = (i__21394__auto___31610 + (1));
i__21394__auto___31610 = G__31611;
continue;
} else {
}
break;
}

var G__31608 = args31606.length;
switch (G__31608) {
case 1:
return sablono.core.radio_button31605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31605.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31606.length)].join('')));

}
});

sablono.core.radio_button31605.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31605.call(null,group,null);
});

sablono.core.radio_button31605.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31605.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31605.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31605.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31605);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31613 = (function sablono$core$select_options31613(coll){
var iter__21068__auto__ = (function sablono$core$select_options31613_$_iter__31630(s__31631){
return (new cljs.core.LazySeq(null,(function (){
var s__31631__$1 = s__31631;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31631__$1);
if(temp__4657__auto__){
var s__31631__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31631__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__31631__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__31633 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__31632 = (0);
while(true){
if((i__31632 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__31632);
cljs.core.chunk_append.call(null,b__31633,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31640 = x;
var text = cljs.core.nth.call(null,vec__31640,(0),null);
var val = cljs.core.nth.call(null,vec__31640,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31640,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31613.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__31646 = (i__31632 + (1));
i__31632 = G__31646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31633),sablono$core$select_options31613_$_iter__31630.call(null,cljs.core.chunk_rest.call(null,s__31631__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31633),null);
}
} else {
var x = cljs.core.first.call(null,s__31631__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31643 = x;
var text = cljs.core.nth.call(null,vec__31643,(0),null);
var val = cljs.core.nth.call(null,vec__31643,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31643,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31613.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options31613_$_iter__31630.call(null,cljs.core.rest.call(null,s__31631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31613);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31647 = (function sablono$core$drop_down31647(var_args){
var args31648 = [];
var len__21393__auto___31651 = arguments.length;
var i__21394__auto___31652 = (0);
while(true){
if((i__21394__auto___31652 < len__21393__auto___31651)){
args31648.push((arguments[i__21394__auto___31652]));

var G__31653 = (i__21394__auto___31652 + (1));
i__21394__auto___31652 = G__31653;
continue;
} else {
}
break;
}

var G__31650 = args31648.length;
switch (G__31650) {
case 2:
return sablono.core.drop_down31647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31647.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31648.length)].join('')));

}
});

sablono.core.drop_down31647.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31647.call(null,name,options,null);
});

sablono.core.drop_down31647.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31647.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31647);
/**
 * Creates a text area element.
 */
sablono.core.text_area31655 = (function sablono$core$text_area31655(var_args){
var args31656 = [];
var len__21393__auto___31659 = arguments.length;
var i__21394__auto___31660 = (0);
while(true){
if((i__21394__auto___31660 < len__21393__auto___31659)){
args31656.push((arguments[i__21394__auto___31660]));

var G__31661 = (i__21394__auto___31660 + (1));
i__21394__auto___31660 = G__31661;
continue;
} else {
}
break;
}

var G__31658 = args31656.length;
switch (G__31658) {
case 1:
return sablono.core.text_area31655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31656.length)].join('')));

}
});

sablono.core.text_area31655.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31655.call(null,name,null);
});

sablono.core.text_area31655.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area31655.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31655);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31663 = (function sablono$core$label31663(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31663);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31664 = (function sablono$core$submit_button31664(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31664);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31665 = (function sablono$core$reset_button31665(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31665);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to31666 = (function sablono$core$form_to31666(var_args){
var args__21400__auto__ = [];
var len__21393__auto___31673 = arguments.length;
var i__21394__auto___31674 = (0);
while(true){
if((i__21394__auto___31674 < len__21393__auto___31673)){
args__21400__auto__.push((arguments[i__21394__auto___31674]));

var G__31675 = (i__21394__auto___31674 + (1));
i__21394__auto___31674 = G__31675;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to31666.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.form_to31666.cljs$core$IFn$_invoke$arity$variadic = (function (p__31669,body){
var vec__31670 = p__31669;
var method = cljs.core.nth.call(null,vec__31670,(0),null);
var action = cljs.core.nth.call(null,vec__31670,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to31666.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31666.cljs$lang$applyTo = (function (seq31667){
var G__31668 = cljs.core.first.call(null,seq31667);
var seq31667__$1 = cljs.core.next.call(null,seq31667);
return sablono.core.form_to31666.cljs$core$IFn$_invoke$arity$variadic(G__31668,seq31667__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31666);

//# sourceMappingURL=core.js.map?rel=1482468814246