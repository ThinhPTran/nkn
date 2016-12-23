// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26604 = arguments.length;
var i__21394__auto___26605 = (0);
while(true){
if((i__21394__auto___26605 < len__21393__auto___26604)){
args__21400__auto__.push((arguments[i__21394__auto___26605]));

var G__26606 = (i__21394__auto___26605 + (1));
i__21394__auto___26605 = G__26606;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26603){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26603));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26608 = arguments.length;
var i__21394__auto___26609 = (0);
while(true){
if((i__21394__auto___26609 < len__21393__auto___26608)){
args__21400__auto__.push((arguments[i__21394__auto___26609]));

var G__26610 = (i__21394__auto___26609 + (1));
i__21394__auto___26609 = G__26610;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26607){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26607));
});

var g_QMARK__26611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26612 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26611){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26611))
,null));
var mkg_26613 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26611,g_26612){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26611,g_26612))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26611,g_26612,mkg_26613){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26611).call(null,x);
});})(g_QMARK__26611,g_26612,mkg_26613))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26611,g_26612,mkg_26613){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26613).call(null,gfn);
});})(g_QMARK__26611,g_26612,mkg_26613))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26611,g_26612,mkg_26613){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26612).call(null,generator);
});})(g_QMARK__26611,g_26612,mkg_26613))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26575__auto___26632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26575__auto___26632){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26633 = arguments.length;
var i__21394__auto___26634 = (0);
while(true){
if((i__21394__auto___26634 < len__21393__auto___26633)){
args__21400__auto__.push((arguments[i__21394__auto___26634]));

var G__26635 = (i__21394__auto___26634 + (1));
i__21394__auto___26634 = G__26635;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26632))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26632),args);
});})(g__26575__auto___26632))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26575__auto___26632){
return (function (seq26614){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26614));
});})(g__26575__auto___26632))
;


var g__26575__auto___26636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26575__auto___26636){
return (function cljs$spec$impl$gen$list(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26637 = arguments.length;
var i__21394__auto___26638 = (0);
while(true){
if((i__21394__auto___26638 < len__21393__auto___26637)){
args__21400__auto__.push((arguments[i__21394__auto___26638]));

var G__26639 = (i__21394__auto___26638 + (1));
i__21394__auto___26638 = G__26639;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26636))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26636),args);
});})(g__26575__auto___26636))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26575__auto___26636){
return (function (seq26615){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26615));
});})(g__26575__auto___26636))
;


var g__26575__auto___26640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26575__auto___26640){
return (function cljs$spec$impl$gen$map(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26641 = arguments.length;
var i__21394__auto___26642 = (0);
while(true){
if((i__21394__auto___26642 < len__21393__auto___26641)){
args__21400__auto__.push((arguments[i__21394__auto___26642]));

var G__26643 = (i__21394__auto___26642 + (1));
i__21394__auto___26642 = G__26643;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26640))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26640),args);
});})(g__26575__auto___26640))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26575__auto___26640){
return (function (seq26616){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26616));
});})(g__26575__auto___26640))
;


var g__26575__auto___26644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26575__auto___26644){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26645 = arguments.length;
var i__21394__auto___26646 = (0);
while(true){
if((i__21394__auto___26646 < len__21393__auto___26645)){
args__21400__auto__.push((arguments[i__21394__auto___26646]));

var G__26647 = (i__21394__auto___26646 + (1));
i__21394__auto___26646 = G__26647;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26644))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26644),args);
});})(g__26575__auto___26644))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26575__auto___26644){
return (function (seq26617){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26617));
});})(g__26575__auto___26644))
;


var g__26575__auto___26648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26575__auto___26648){
return (function cljs$spec$impl$gen$set(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26649 = arguments.length;
var i__21394__auto___26650 = (0);
while(true){
if((i__21394__auto___26650 < len__21393__auto___26649)){
args__21400__auto__.push((arguments[i__21394__auto___26650]));

var G__26651 = (i__21394__auto___26650 + (1));
i__21394__auto___26650 = G__26651;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26648))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26648),args);
});})(g__26575__auto___26648))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26575__auto___26648){
return (function (seq26618){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26618));
});})(g__26575__auto___26648))
;


var g__26575__auto___26652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26575__auto___26652){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26653 = arguments.length;
var i__21394__auto___26654 = (0);
while(true){
if((i__21394__auto___26654 < len__21393__auto___26653)){
args__21400__auto__.push((arguments[i__21394__auto___26654]));

var G__26655 = (i__21394__auto___26654 + (1));
i__21394__auto___26654 = G__26655;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26652))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26652),args);
});})(g__26575__auto___26652))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26575__auto___26652){
return (function (seq26619){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26619));
});})(g__26575__auto___26652))
;


var g__26575__auto___26656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26575__auto___26656){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26657 = arguments.length;
var i__21394__auto___26658 = (0);
while(true){
if((i__21394__auto___26658 < len__21393__auto___26657)){
args__21400__auto__.push((arguments[i__21394__auto___26658]));

var G__26659 = (i__21394__auto___26658 + (1));
i__21394__auto___26658 = G__26659;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26656))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26656),args);
});})(g__26575__auto___26656))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26575__auto___26656){
return (function (seq26620){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26620));
});})(g__26575__auto___26656))
;


var g__26575__auto___26660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26575__auto___26660){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26661 = arguments.length;
var i__21394__auto___26662 = (0);
while(true){
if((i__21394__auto___26662 < len__21393__auto___26661)){
args__21400__auto__.push((arguments[i__21394__auto___26662]));

var G__26663 = (i__21394__auto___26662 + (1));
i__21394__auto___26662 = G__26663;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26660))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26660),args);
});})(g__26575__auto___26660))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26575__auto___26660){
return (function (seq26621){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26621));
});})(g__26575__auto___26660))
;


var g__26575__auto___26664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26575__auto___26664){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26665 = arguments.length;
var i__21394__auto___26666 = (0);
while(true){
if((i__21394__auto___26666 < len__21393__auto___26665)){
args__21400__auto__.push((arguments[i__21394__auto___26666]));

var G__26667 = (i__21394__auto___26666 + (1));
i__21394__auto___26666 = G__26667;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26664))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26664),args);
});})(g__26575__auto___26664))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26575__auto___26664){
return (function (seq26622){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26622));
});})(g__26575__auto___26664))
;


var g__26575__auto___26668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26575__auto___26668){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26669 = arguments.length;
var i__21394__auto___26670 = (0);
while(true){
if((i__21394__auto___26670 < len__21393__auto___26669)){
args__21400__auto__.push((arguments[i__21394__auto___26670]));

var G__26671 = (i__21394__auto___26670 + (1));
i__21394__auto___26670 = G__26671;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26668))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26668),args);
});})(g__26575__auto___26668))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26575__auto___26668){
return (function (seq26623){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26623));
});})(g__26575__auto___26668))
;


var g__26575__auto___26672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26575__auto___26672){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26673 = arguments.length;
var i__21394__auto___26674 = (0);
while(true){
if((i__21394__auto___26674 < len__21393__auto___26673)){
args__21400__auto__.push((arguments[i__21394__auto___26674]));

var G__26675 = (i__21394__auto___26674 + (1));
i__21394__auto___26674 = G__26675;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26672))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26672),args);
});})(g__26575__auto___26672))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26575__auto___26672){
return (function (seq26624){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26624));
});})(g__26575__auto___26672))
;


var g__26575__auto___26676 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26575__auto___26676){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26677 = arguments.length;
var i__21394__auto___26678 = (0);
while(true){
if((i__21394__auto___26678 < len__21393__auto___26677)){
args__21400__auto__.push((arguments[i__21394__auto___26678]));

var G__26679 = (i__21394__auto___26678 + (1));
i__21394__auto___26678 = G__26679;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26676))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26676),args);
});})(g__26575__auto___26676))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26575__auto___26676){
return (function (seq26625){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26625));
});})(g__26575__auto___26676))
;


var g__26575__auto___26680 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26575__auto___26680){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26681 = arguments.length;
var i__21394__auto___26682 = (0);
while(true){
if((i__21394__auto___26682 < len__21393__auto___26681)){
args__21400__auto__.push((arguments[i__21394__auto___26682]));

var G__26683 = (i__21394__auto___26682 + (1));
i__21394__auto___26682 = G__26683;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26680))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26680){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26680),args);
});})(g__26575__auto___26680))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26575__auto___26680){
return (function (seq26626){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26626));
});})(g__26575__auto___26680))
;


var g__26575__auto___26684 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26575__auto___26684){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26685 = arguments.length;
var i__21394__auto___26686 = (0);
while(true){
if((i__21394__auto___26686 < len__21393__auto___26685)){
args__21400__auto__.push((arguments[i__21394__auto___26686]));

var G__26687 = (i__21394__auto___26686 + (1));
i__21394__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26684))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26684){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26684),args);
});})(g__26575__auto___26684))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26575__auto___26684){
return (function (seq26627){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26627));
});})(g__26575__auto___26684))
;


var g__26575__auto___26688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26575__auto___26688){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26689 = arguments.length;
var i__21394__auto___26690 = (0);
while(true){
if((i__21394__auto___26690 < len__21393__auto___26689)){
args__21400__auto__.push((arguments[i__21394__auto___26690]));

var G__26691 = (i__21394__auto___26690 + (1));
i__21394__auto___26690 = G__26691;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26688))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26688),args);
});})(g__26575__auto___26688))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26575__auto___26688){
return (function (seq26628){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26628));
});})(g__26575__auto___26688))
;


var g__26575__auto___26692 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26575__auto___26692){
return (function cljs$spec$impl$gen$return(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26693 = arguments.length;
var i__21394__auto___26694 = (0);
while(true){
if((i__21394__auto___26694 < len__21393__auto___26693)){
args__21400__auto__.push((arguments[i__21394__auto___26694]));

var G__26695 = (i__21394__auto___26694 + (1));
i__21394__auto___26694 = G__26695;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26692))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26692){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26692),args);
});})(g__26575__auto___26692))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26575__auto___26692){
return (function (seq26629){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26629));
});})(g__26575__auto___26692))
;


var g__26575__auto___26696 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26575__auto___26696){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26697 = arguments.length;
var i__21394__auto___26698 = (0);
while(true){
if((i__21394__auto___26698 < len__21393__auto___26697)){
args__21400__auto__.push((arguments[i__21394__auto___26698]));

var G__26699 = (i__21394__auto___26698 + (1));
i__21394__auto___26698 = G__26699;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26696))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26696){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26696),args);
});})(g__26575__auto___26696))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26575__auto___26696){
return (function (seq26630){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26630));
});})(g__26575__auto___26696))
;


var g__26575__auto___26700 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26575__auto___26700){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26701 = arguments.length;
var i__21394__auto___26702 = (0);
while(true){
if((i__21394__auto___26702 < len__21393__auto___26701)){
args__21400__auto__.push((arguments[i__21394__auto___26702]));

var G__26703 = (i__21394__auto___26702 + (1));
i__21394__auto___26702 = G__26703;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26575__auto___26700))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26575__auto___26700){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26575__auto___26700),args);
});})(g__26575__auto___26700))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26575__auto___26700){
return (function (seq26631){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26631));
});})(g__26575__auto___26700))
;

var g__26588__auto___26725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26588__auto___26725){
return (function cljs$spec$impl$gen$any(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26726 = arguments.length;
var i__21394__auto___26727 = (0);
while(true){
if((i__21394__auto___26727 < len__21393__auto___26726)){
args__21400__auto__.push((arguments[i__21394__auto___26727]));

var G__26728 = (i__21394__auto___26727 + (1));
i__21394__auto___26727 = G__26728;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26725))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26725){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26725);
});})(g__26588__auto___26725))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26588__auto___26725){
return (function (seq26704){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26704));
});})(g__26588__auto___26725))
;


var g__26588__auto___26729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26588__auto___26729){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26730 = arguments.length;
var i__21394__auto___26731 = (0);
while(true){
if((i__21394__auto___26731 < len__21393__auto___26730)){
args__21400__auto__.push((arguments[i__21394__auto___26731]));

var G__26732 = (i__21394__auto___26731 + (1));
i__21394__auto___26731 = G__26732;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26729))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26729){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26729);
});})(g__26588__auto___26729))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26588__auto___26729){
return (function (seq26705){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26705));
});})(g__26588__auto___26729))
;


var g__26588__auto___26733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26588__auto___26733){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26734 = arguments.length;
var i__21394__auto___26735 = (0);
while(true){
if((i__21394__auto___26735 < len__21393__auto___26734)){
args__21400__auto__.push((arguments[i__21394__auto___26735]));

var G__26736 = (i__21394__auto___26735 + (1));
i__21394__auto___26735 = G__26736;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26733))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26733){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26733);
});})(g__26588__auto___26733))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26588__auto___26733){
return (function (seq26706){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26706));
});})(g__26588__auto___26733))
;


var g__26588__auto___26737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26588__auto___26737){
return (function cljs$spec$impl$gen$char(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26738 = arguments.length;
var i__21394__auto___26739 = (0);
while(true){
if((i__21394__auto___26739 < len__21393__auto___26738)){
args__21400__auto__.push((arguments[i__21394__auto___26739]));

var G__26740 = (i__21394__auto___26739 + (1));
i__21394__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26737))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26737){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26737);
});})(g__26588__auto___26737))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26588__auto___26737){
return (function (seq26707){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26707));
});})(g__26588__auto___26737))
;


var g__26588__auto___26741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26588__auto___26741){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26742 = arguments.length;
var i__21394__auto___26743 = (0);
while(true){
if((i__21394__auto___26743 < len__21393__auto___26742)){
args__21400__auto__.push((arguments[i__21394__auto___26743]));

var G__26744 = (i__21394__auto___26743 + (1));
i__21394__auto___26743 = G__26744;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26741))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26741){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26741);
});})(g__26588__auto___26741))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26588__auto___26741){
return (function (seq26708){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26708));
});})(g__26588__auto___26741))
;


var g__26588__auto___26745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26588__auto___26745){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26746 = arguments.length;
var i__21394__auto___26747 = (0);
while(true){
if((i__21394__auto___26747 < len__21393__auto___26746)){
args__21400__auto__.push((arguments[i__21394__auto___26747]));

var G__26748 = (i__21394__auto___26747 + (1));
i__21394__auto___26747 = G__26748;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26745))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26745){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26745);
});})(g__26588__auto___26745))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26588__auto___26745){
return (function (seq26709){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26709));
});})(g__26588__auto___26745))
;


var g__26588__auto___26749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26588__auto___26749){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26750 = arguments.length;
var i__21394__auto___26751 = (0);
while(true){
if((i__21394__auto___26751 < len__21393__auto___26750)){
args__21400__auto__.push((arguments[i__21394__auto___26751]));

var G__26752 = (i__21394__auto___26751 + (1));
i__21394__auto___26751 = G__26752;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26749))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26749){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26749);
});})(g__26588__auto___26749))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26588__auto___26749){
return (function (seq26710){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26710));
});})(g__26588__auto___26749))
;


var g__26588__auto___26753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26588__auto___26753){
return (function cljs$spec$impl$gen$double(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26754 = arguments.length;
var i__21394__auto___26755 = (0);
while(true){
if((i__21394__auto___26755 < len__21393__auto___26754)){
args__21400__auto__.push((arguments[i__21394__auto___26755]));

var G__26756 = (i__21394__auto___26755 + (1));
i__21394__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26753))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26753){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26753);
});})(g__26588__auto___26753))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26588__auto___26753){
return (function (seq26711){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26711));
});})(g__26588__auto___26753))
;


var g__26588__auto___26757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26588__auto___26757){
return (function cljs$spec$impl$gen$int(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26758 = arguments.length;
var i__21394__auto___26759 = (0);
while(true){
if((i__21394__auto___26759 < len__21393__auto___26758)){
args__21400__auto__.push((arguments[i__21394__auto___26759]));

var G__26760 = (i__21394__auto___26759 + (1));
i__21394__auto___26759 = G__26760;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26757))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26757){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26757);
});})(g__26588__auto___26757))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26588__auto___26757){
return (function (seq26712){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26712));
});})(g__26588__auto___26757))
;


var g__26588__auto___26761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26588__auto___26761){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26762 = arguments.length;
var i__21394__auto___26763 = (0);
while(true){
if((i__21394__auto___26763 < len__21393__auto___26762)){
args__21400__auto__.push((arguments[i__21394__auto___26763]));

var G__26764 = (i__21394__auto___26763 + (1));
i__21394__auto___26763 = G__26764;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26761))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26761){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26761);
});})(g__26588__auto___26761))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26588__auto___26761){
return (function (seq26713){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26713));
});})(g__26588__auto___26761))
;


var g__26588__auto___26765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26588__auto___26765){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26766 = arguments.length;
var i__21394__auto___26767 = (0);
while(true){
if((i__21394__auto___26767 < len__21393__auto___26766)){
args__21400__auto__.push((arguments[i__21394__auto___26767]));

var G__26768 = (i__21394__auto___26767 + (1));
i__21394__auto___26767 = G__26768;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26765))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26765){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26765);
});})(g__26588__auto___26765))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26588__auto___26765){
return (function (seq26714){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26714));
});})(g__26588__auto___26765))
;


var g__26588__auto___26769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26588__auto___26769){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26770 = arguments.length;
var i__21394__auto___26771 = (0);
while(true){
if((i__21394__auto___26771 < len__21393__auto___26770)){
args__21400__auto__.push((arguments[i__21394__auto___26771]));

var G__26772 = (i__21394__auto___26771 + (1));
i__21394__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26769))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26769){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26769);
});})(g__26588__auto___26769))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26588__auto___26769){
return (function (seq26715){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26715));
});})(g__26588__auto___26769))
;


var g__26588__auto___26773 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26588__auto___26773){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26774 = arguments.length;
var i__21394__auto___26775 = (0);
while(true){
if((i__21394__auto___26775 < len__21393__auto___26774)){
args__21400__auto__.push((arguments[i__21394__auto___26775]));

var G__26776 = (i__21394__auto___26775 + (1));
i__21394__auto___26775 = G__26776;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26773))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26773){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26773);
});})(g__26588__auto___26773))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26588__auto___26773){
return (function (seq26716){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26716));
});})(g__26588__auto___26773))
;


var g__26588__auto___26777 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26588__auto___26777){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26778 = arguments.length;
var i__21394__auto___26779 = (0);
while(true){
if((i__21394__auto___26779 < len__21393__auto___26778)){
args__21400__auto__.push((arguments[i__21394__auto___26779]));

var G__26780 = (i__21394__auto___26779 + (1));
i__21394__auto___26779 = G__26780;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26777))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26777){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26777);
});})(g__26588__auto___26777))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26588__auto___26777){
return (function (seq26717){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26717));
});})(g__26588__auto___26777))
;


var g__26588__auto___26781 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26588__auto___26781){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26782 = arguments.length;
var i__21394__auto___26783 = (0);
while(true){
if((i__21394__auto___26783 < len__21393__auto___26782)){
args__21400__auto__.push((arguments[i__21394__auto___26783]));

var G__26784 = (i__21394__auto___26783 + (1));
i__21394__auto___26783 = G__26784;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26781))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26781){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26781);
});})(g__26588__auto___26781))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26588__auto___26781){
return (function (seq26718){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26718));
});})(g__26588__auto___26781))
;


var g__26588__auto___26785 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26588__auto___26785){
return (function cljs$spec$impl$gen$string(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26786 = arguments.length;
var i__21394__auto___26787 = (0);
while(true){
if((i__21394__auto___26787 < len__21393__auto___26786)){
args__21400__auto__.push((arguments[i__21394__auto___26787]));

var G__26788 = (i__21394__auto___26787 + (1));
i__21394__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26785))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26785){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26785);
});})(g__26588__auto___26785))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26588__auto___26785){
return (function (seq26719){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26719));
});})(g__26588__auto___26785))
;


var g__26588__auto___26789 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26588__auto___26789){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26790 = arguments.length;
var i__21394__auto___26791 = (0);
while(true){
if((i__21394__auto___26791 < len__21393__auto___26790)){
args__21400__auto__.push((arguments[i__21394__auto___26791]));

var G__26792 = (i__21394__auto___26791 + (1));
i__21394__auto___26791 = G__26792;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26789))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26789){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26789);
});})(g__26588__auto___26789))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26588__auto___26789){
return (function (seq26720){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26720));
});})(g__26588__auto___26789))
;


var g__26588__auto___26793 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26588__auto___26793){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26794 = arguments.length;
var i__21394__auto___26795 = (0);
while(true){
if((i__21394__auto___26795 < len__21393__auto___26794)){
args__21400__auto__.push((arguments[i__21394__auto___26795]));

var G__26796 = (i__21394__auto___26795 + (1));
i__21394__auto___26795 = G__26796;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26793))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26793){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26793);
});})(g__26588__auto___26793))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26588__auto___26793){
return (function (seq26721){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26721));
});})(g__26588__auto___26793))
;


var g__26588__auto___26797 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26588__auto___26797){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26798 = arguments.length;
var i__21394__auto___26799 = (0);
while(true){
if((i__21394__auto___26799 < len__21393__auto___26798)){
args__21400__auto__.push((arguments[i__21394__auto___26799]));

var G__26800 = (i__21394__auto___26799 + (1));
i__21394__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26797))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26797){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26797);
});})(g__26588__auto___26797))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26588__auto___26797){
return (function (seq26722){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26722));
});})(g__26588__auto___26797))
;


var g__26588__auto___26801 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26588__auto___26801){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26802 = arguments.length;
var i__21394__auto___26803 = (0);
while(true){
if((i__21394__auto___26803 < len__21393__auto___26802)){
args__21400__auto__.push((arguments[i__21394__auto___26803]));

var G__26804 = (i__21394__auto___26803 + (1));
i__21394__auto___26803 = G__26804;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26801))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26801){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26801);
});})(g__26588__auto___26801))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26588__auto___26801){
return (function (seq26723){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26723));
});})(g__26588__auto___26801))
;


var g__26588__auto___26805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26588__auto___26805){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26806 = arguments.length;
var i__21394__auto___26807 = (0);
while(true){
if((i__21394__auto___26807 < len__21393__auto___26806)){
args__21400__auto__.push((arguments[i__21394__auto___26807]));

var G__26808 = (i__21394__auto___26807 + (1));
i__21394__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__26588__auto___26805))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26588__auto___26805){
return (function (args){
return cljs.core.deref.call(null,g__26588__auto___26805);
});})(g__26588__auto___26805))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26588__auto___26805){
return (function (seq26724){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26724));
});})(g__26588__auto___26805))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26811 = arguments.length;
var i__21394__auto___26812 = (0);
while(true){
if((i__21394__auto___26812 < len__21393__auto___26811)){
args__21400__auto__.push((arguments[i__21394__auto___26812]));

var G__26813 = (i__21394__auto___26812 + (1));
i__21394__auto___26812 = G__26813;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26809_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26809_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26810){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26810));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26814_SHARP_){
return (new Date(p1__26814_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1482468797164