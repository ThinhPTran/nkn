// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27881){
var map__27906 = p__27881;
var map__27906__$1 = ((((!((map__27906 == null)))?((((map__27906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27906):map__27906);
var m = map__27906__$1;
var n = cljs.core.get.call(null,map__27906__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27908_27930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27909_27931 = null;
var count__27910_27932 = (0);
var i__27911_27933 = (0);
while(true){
if((i__27911_27933 < count__27910_27932)){
var f_27934 = cljs.core._nth.call(null,chunk__27909_27931,i__27911_27933);
cljs.core.println.call(null,"  ",f_27934);

var G__27935 = seq__27908_27930;
var G__27936 = chunk__27909_27931;
var G__27937 = count__27910_27932;
var G__27938 = (i__27911_27933 + (1));
seq__27908_27930 = G__27935;
chunk__27909_27931 = G__27936;
count__27910_27932 = G__27937;
i__27911_27933 = G__27938;
continue;
} else {
var temp__4657__auto___27939 = cljs.core.seq.call(null,seq__27908_27930);
if(temp__4657__auto___27939){
var seq__27908_27940__$1 = temp__4657__auto___27939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27908_27940__$1)){
var c__21099__auto___27941 = cljs.core.chunk_first.call(null,seq__27908_27940__$1);
var G__27942 = cljs.core.chunk_rest.call(null,seq__27908_27940__$1);
var G__27943 = c__21099__auto___27941;
var G__27944 = cljs.core.count.call(null,c__21099__auto___27941);
var G__27945 = (0);
seq__27908_27930 = G__27942;
chunk__27909_27931 = G__27943;
count__27910_27932 = G__27944;
i__27911_27933 = G__27945;
continue;
} else {
var f_27946 = cljs.core.first.call(null,seq__27908_27940__$1);
cljs.core.println.call(null,"  ",f_27946);

var G__27947 = cljs.core.next.call(null,seq__27908_27940__$1);
var G__27948 = null;
var G__27949 = (0);
var G__27950 = (0);
seq__27908_27930 = G__27947;
chunk__27909_27931 = G__27948;
count__27910_27932 = G__27949;
i__27911_27933 = G__27950;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27951 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20285__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27951);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27951)))?cljs.core.second.call(null,arglists_27951):arglists_27951));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27912_27952 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27913_27953 = null;
var count__27914_27954 = (0);
var i__27915_27955 = (0);
while(true){
if((i__27915_27955 < count__27914_27954)){
var vec__27916_27956 = cljs.core._nth.call(null,chunk__27913_27953,i__27915_27955);
var name_27957 = cljs.core.nth.call(null,vec__27916_27956,(0),null);
var map__27919_27958 = cljs.core.nth.call(null,vec__27916_27956,(1),null);
var map__27919_27959__$1 = ((((!((map__27919_27958 == null)))?((((map__27919_27958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27919_27958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919_27958):map__27919_27958);
var doc_27960 = cljs.core.get.call(null,map__27919_27959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27961 = cljs.core.get.call(null,map__27919_27959__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27957);

cljs.core.println.call(null," ",arglists_27961);

if(cljs.core.truth_(doc_27960)){
cljs.core.println.call(null," ",doc_27960);
} else {
}

var G__27962 = seq__27912_27952;
var G__27963 = chunk__27913_27953;
var G__27964 = count__27914_27954;
var G__27965 = (i__27915_27955 + (1));
seq__27912_27952 = G__27962;
chunk__27913_27953 = G__27963;
count__27914_27954 = G__27964;
i__27915_27955 = G__27965;
continue;
} else {
var temp__4657__auto___27966 = cljs.core.seq.call(null,seq__27912_27952);
if(temp__4657__auto___27966){
var seq__27912_27967__$1 = temp__4657__auto___27966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27912_27967__$1)){
var c__21099__auto___27968 = cljs.core.chunk_first.call(null,seq__27912_27967__$1);
var G__27969 = cljs.core.chunk_rest.call(null,seq__27912_27967__$1);
var G__27970 = c__21099__auto___27968;
var G__27971 = cljs.core.count.call(null,c__21099__auto___27968);
var G__27972 = (0);
seq__27912_27952 = G__27969;
chunk__27913_27953 = G__27970;
count__27914_27954 = G__27971;
i__27915_27955 = G__27972;
continue;
} else {
var vec__27921_27973 = cljs.core.first.call(null,seq__27912_27967__$1);
var name_27974 = cljs.core.nth.call(null,vec__27921_27973,(0),null);
var map__27924_27975 = cljs.core.nth.call(null,vec__27921_27973,(1),null);
var map__27924_27976__$1 = ((((!((map__27924_27975 == null)))?((((map__27924_27975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27924_27975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27924_27975):map__27924_27975);
var doc_27977 = cljs.core.get.call(null,map__27924_27976__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27978 = cljs.core.get.call(null,map__27924_27976__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27974);

cljs.core.println.call(null," ",arglists_27978);

if(cljs.core.truth_(doc_27977)){
cljs.core.println.call(null," ",doc_27977);
} else {
}

var G__27979 = cljs.core.next.call(null,seq__27912_27967__$1);
var G__27980 = null;
var G__27981 = (0);
var G__27982 = (0);
seq__27912_27952 = G__27979;
chunk__27913_27953 = G__27980;
count__27914_27954 = G__27981;
i__27915_27955 = G__27982;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__27926 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27927 = null;
var count__27928 = (0);
var i__27929 = (0);
while(true){
if((i__27929 < count__27928)){
var role = cljs.core._nth.call(null,chunk__27927,i__27929);
var temp__4657__auto___27983__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27983__$1)){
var spec_27984 = temp__4657__auto___27983__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27984));
} else {
}

var G__27985 = seq__27926;
var G__27986 = chunk__27927;
var G__27987 = count__27928;
var G__27988 = (i__27929 + (1));
seq__27926 = G__27985;
chunk__27927 = G__27986;
count__27928 = G__27987;
i__27929 = G__27988;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27926);
if(temp__4657__auto____$1){
var seq__27926__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27926__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__27926__$1);
var G__27989 = cljs.core.chunk_rest.call(null,seq__27926__$1);
var G__27990 = c__21099__auto__;
var G__27991 = cljs.core.count.call(null,c__21099__auto__);
var G__27992 = (0);
seq__27926 = G__27989;
chunk__27927 = G__27990;
count__27928 = G__27991;
i__27929 = G__27992;
continue;
} else {
var role = cljs.core.first.call(null,seq__27926__$1);
var temp__4657__auto___27993__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27993__$2)){
var spec_27994 = temp__4657__auto___27993__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27994));
} else {
}

var G__27995 = cljs.core.next.call(null,seq__27926__$1);
var G__27996 = null;
var G__27997 = (0);
var G__27998 = (0);
seq__27926 = G__27995;
chunk__27927 = G__27996;
count__27928 = G__27997;
i__27929 = G__27998;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1482468802078