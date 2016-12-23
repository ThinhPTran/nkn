// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30029 = [];
var len__21393__auto___30032 = arguments.length;
var i__21394__auto___30033 = (0);
while(true){
if((i__21394__auto___30033 < len__21393__auto___30032)){
args30029.push((arguments[i__21394__auto___30033]));

var G__30034 = (i__21394__auto___30033 + (1));
i__21394__auto___30033 = G__30034;
continue;
} else {
}
break;
}

var G__30031 = args30029.length;
switch (G__30031) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30029.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21400__auto__ = [];
var len__21393__auto___30037 = arguments.length;
var i__21394__auto___30038 = (0);
while(true){
if((i__21394__auto___30038 < len__21393__auto___30037)){
args__21400__auto__.push((arguments[i__21394__auto___30038]));

var G__30039 = (i__21394__auto___30038 + (1));
i__21394__auto___30038 = G__30039;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30036){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30036));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21400__auto__ = [];
var len__21393__auto___30041 = arguments.length;
var i__21394__auto___30042 = (0);
while(true){
if((i__21394__auto___30042 < len__21393__auto___30041)){
args__21400__auto__.push((arguments[i__21394__auto___30042]));

var G__30043 = (i__21394__auto___30042 + (1));
i__21394__auto___30042 = G__30043;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30040){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30040));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30044 = cljs.core._EQ_;
var expr__30045 = (function (){var or__20285__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30048){if((e30048 instanceof Error)){
var e = e30048;
return false;
} else {
throw e30048;

}
}})();
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30044.call(null,"true",expr__30045))){
return true;
} else {
if(cljs.core.truth_(pred__30044.call(null,"false",expr__30045))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30045)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30050){if((e30050 instanceof Error)){
var e = e30050;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30050;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30051){
var map__30054 = p__30051;
var map__30054__$1 = ((((!((map__30054 == null)))?((((map__30054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);
var message = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20285__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20273__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20273__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20273__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22490__auto___30216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___30216,ch){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___30216,ch){
return (function (state_30185){
var state_val_30186 = (state_30185[(1)]);
if((state_val_30186 === (7))){
var inst_30181 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
var statearr_30187_30217 = state_30185__$1;
(statearr_30187_30217[(2)] = inst_30181);

(statearr_30187_30217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (1))){
var state_30185__$1 = state_30185;
var statearr_30188_30218 = state_30185__$1;
(statearr_30188_30218[(2)] = null);

(statearr_30188_30218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (4))){
var inst_30138 = (state_30185[(7)]);
var inst_30138__$1 = (state_30185[(2)]);
var state_30185__$1 = (function (){var statearr_30189 = state_30185;
(statearr_30189[(7)] = inst_30138__$1);

return statearr_30189;
})();
if(cljs.core.truth_(inst_30138__$1)){
var statearr_30190_30219 = state_30185__$1;
(statearr_30190_30219[(1)] = (5));

} else {
var statearr_30191_30220 = state_30185__$1;
(statearr_30191_30220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (15))){
var inst_30145 = (state_30185[(8)]);
var inst_30160 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30145);
var inst_30161 = cljs.core.first.call(null,inst_30160);
var inst_30162 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30161);
var inst_30163 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30162)].join('');
var inst_30164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30163);
var state_30185__$1 = state_30185;
var statearr_30192_30221 = state_30185__$1;
(statearr_30192_30221[(2)] = inst_30164);

(statearr_30192_30221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (13))){
var inst_30169 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
var statearr_30193_30222 = state_30185__$1;
(statearr_30193_30222[(2)] = inst_30169);

(statearr_30193_30222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (6))){
var state_30185__$1 = state_30185;
var statearr_30194_30223 = state_30185__$1;
(statearr_30194_30223[(2)] = null);

(statearr_30194_30223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (17))){
var inst_30167 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
var statearr_30195_30224 = state_30185__$1;
(statearr_30195_30224[(2)] = inst_30167);

(statearr_30195_30224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (3))){
var inst_30183 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30185__$1,inst_30183);
} else {
if((state_val_30186 === (12))){
var inst_30144 = (state_30185[(9)]);
var inst_30158 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30144,opts);
var state_30185__$1 = state_30185;
if(cljs.core.truth_(inst_30158)){
var statearr_30196_30225 = state_30185__$1;
(statearr_30196_30225[(1)] = (15));

} else {
var statearr_30197_30226 = state_30185__$1;
(statearr_30197_30226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (2))){
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30185__$1,(4),ch);
} else {
if((state_val_30186 === (11))){
var inst_30145 = (state_30185[(8)]);
var inst_30150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30151 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30145);
var inst_30152 = cljs.core.async.timeout.call(null,(1000));
var inst_30153 = [inst_30151,inst_30152];
var inst_30154 = (new cljs.core.PersistentVector(null,2,(5),inst_30150,inst_30153,null));
var state_30185__$1 = state_30185;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30185__$1,(14),inst_30154);
} else {
if((state_val_30186 === (9))){
var inst_30145 = (state_30185[(8)]);
var inst_30171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30172 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30145);
var inst_30173 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30172);
var inst_30174 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30173)].join('');
var inst_30175 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30174);
var state_30185__$1 = (function (){var statearr_30198 = state_30185;
(statearr_30198[(10)] = inst_30171);

return statearr_30198;
})();
var statearr_30199_30227 = state_30185__$1;
(statearr_30199_30227[(2)] = inst_30175);

(statearr_30199_30227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (5))){
var inst_30138 = (state_30185[(7)]);
var inst_30140 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30141 = (new cljs.core.PersistentArrayMap(null,2,inst_30140,null));
var inst_30142 = (new cljs.core.PersistentHashSet(null,inst_30141,null));
var inst_30143 = figwheel.client.focus_msgs.call(null,inst_30142,inst_30138);
var inst_30144 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30143);
var inst_30145 = cljs.core.first.call(null,inst_30143);
var inst_30146 = figwheel.client.autoload_QMARK_.call(null);
var state_30185__$1 = (function (){var statearr_30200 = state_30185;
(statearr_30200[(8)] = inst_30145);

(statearr_30200[(9)] = inst_30144);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30146)){
var statearr_30201_30228 = state_30185__$1;
(statearr_30201_30228[(1)] = (8));

} else {
var statearr_30202_30229 = state_30185__$1;
(statearr_30202_30229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (14))){
var inst_30156 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
var statearr_30203_30230 = state_30185__$1;
(statearr_30203_30230[(2)] = inst_30156);

(statearr_30203_30230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (16))){
var state_30185__$1 = state_30185;
var statearr_30204_30231 = state_30185__$1;
(statearr_30204_30231[(2)] = null);

(statearr_30204_30231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (10))){
var inst_30177 = (state_30185[(2)]);
var state_30185__$1 = (function (){var statearr_30205 = state_30185;
(statearr_30205[(11)] = inst_30177);

return statearr_30205;
})();
var statearr_30206_30232 = state_30185__$1;
(statearr_30206_30232[(2)] = null);

(statearr_30206_30232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (8))){
var inst_30144 = (state_30185[(9)]);
var inst_30148 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30144,opts);
var state_30185__$1 = state_30185;
if(cljs.core.truth_(inst_30148)){
var statearr_30207_30233 = state_30185__$1;
(statearr_30207_30233[(1)] = (11));

} else {
var statearr_30208_30234 = state_30185__$1;
(statearr_30208_30234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22490__auto___30216,ch))
;
return ((function (switch__22378__auto__,c__22490__auto___30216,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22379__auto____0 = (function (){
var statearr_30212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30212[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22379__auto__);

(statearr_30212[(1)] = (1));

return statearr_30212;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22379__auto____1 = (function (state_30185){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_30185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e30213){if((e30213 instanceof Object)){
var ex__22382__auto__ = e30213;
var statearr_30214_30235 = state_30185;
(statearr_30214_30235[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30236 = state_30185;
state_30185 = G__30236;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22379__auto__ = function(state_30185){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22379__auto____1.call(this,state_30185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22379__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22379__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___30216,ch))
})();
var state__22492__auto__ = (function (){var statearr_30215 = f__22491__auto__.call(null);
(statearr_30215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___30216);

return statearr_30215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___30216,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30237_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30237_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30240 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30240){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30239){if((e30239 instanceof Error)){
var e = e30239;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30240], null));
} else {
var e = e30239;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30240))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30241){
var map__30250 = p__30241;
var map__30250__$1 = ((((!((map__30250 == null)))?((((map__30250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30250):map__30250);
var opts = map__30250__$1;
var build_id = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30250,map__30250__$1,opts,build_id){
return (function (p__30252){
var vec__30253 = p__30252;
var seq__30254 = cljs.core.seq.call(null,vec__30253);
var first__30255 = cljs.core.first.call(null,seq__30254);
var seq__30254__$1 = cljs.core.next.call(null,seq__30254);
var map__30256 = first__30255;
var map__30256__$1 = ((((!((map__30256 == null)))?((((map__30256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30256):map__30256);
var msg = map__30256__$1;
var msg_name = cljs.core.get.call(null,map__30256__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30254__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30253,seq__30254,first__30255,seq__30254__$1,map__30256,map__30256__$1,msg,msg_name,_,map__30250,map__30250__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30253,seq__30254,first__30255,seq__30254__$1,map__30256,map__30256__$1,msg,msg_name,_,map__30250,map__30250__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30250,map__30250__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30264){
var vec__30265 = p__30264;
var seq__30266 = cljs.core.seq.call(null,vec__30265);
var first__30267 = cljs.core.first.call(null,seq__30266);
var seq__30266__$1 = cljs.core.next.call(null,seq__30266);
var map__30268 = first__30267;
var map__30268__$1 = ((((!((map__30268 == null)))?((((map__30268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30268):map__30268);
var msg = map__30268__$1;
var msg_name = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30266__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30270){
var map__30282 = p__30270;
var map__30282__$1 = ((((!((map__30282 == null)))?((((map__30282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);
var on_compile_warning = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30282,map__30282__$1,on_compile_warning,on_compile_fail){
return (function (p__30284){
var vec__30285 = p__30284;
var seq__30286 = cljs.core.seq.call(null,vec__30285);
var first__30287 = cljs.core.first.call(null,seq__30286);
var seq__30286__$1 = cljs.core.next.call(null,seq__30286);
var map__30288 = first__30287;
var map__30288__$1 = ((((!((map__30288 == null)))?((((map__30288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30288):map__30288);
var msg = map__30288__$1;
var msg_name = cljs.core.get.call(null,map__30288__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30286__$1;
var pred__30290 = cljs.core._EQ_;
var expr__30291 = msg_name;
if(cljs.core.truth_(pred__30290.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30291))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30290.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30291))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30282,map__30282__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,msg_hist,msg_names,msg){
return (function (state_30499){
var state_val_30500 = (state_30499[(1)]);
if((state_val_30500 === (7))){
var inst_30427 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30427)){
var statearr_30501_30547 = state_30499__$1;
(statearr_30501_30547[(1)] = (8));

} else {
var statearr_30502_30548 = state_30499__$1;
(statearr_30502_30548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (20))){
var inst_30493 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30503_30549 = state_30499__$1;
(statearr_30503_30549[(2)] = inst_30493);

(statearr_30503_30549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (27))){
var inst_30489 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30504_30550 = state_30499__$1;
(statearr_30504_30550[(2)] = inst_30489);

(statearr_30504_30550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (1))){
var inst_30420 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30420)){
var statearr_30505_30551 = state_30499__$1;
(statearr_30505_30551[(1)] = (2));

} else {
var statearr_30506_30552 = state_30499__$1;
(statearr_30506_30552[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (24))){
var inst_30491 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30507_30553 = state_30499__$1;
(statearr_30507_30553[(2)] = inst_30491);

(statearr_30507_30553[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (4))){
var inst_30497 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30499__$1,inst_30497);
} else {
if((state_val_30500 === (15))){
var inst_30495 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30508_30554 = state_30499__$1;
(statearr_30508_30554[(2)] = inst_30495);

(statearr_30508_30554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (21))){
var inst_30454 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30509_30555 = state_30499__$1;
(statearr_30509_30555[(2)] = inst_30454);

(statearr_30509_30555[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (31))){
var inst_30478 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30478)){
var statearr_30510_30556 = state_30499__$1;
(statearr_30510_30556[(1)] = (34));

} else {
var statearr_30511_30557 = state_30499__$1;
(statearr_30511_30557[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (32))){
var inst_30487 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30512_30558 = state_30499__$1;
(statearr_30512_30558[(2)] = inst_30487);

(statearr_30512_30558[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (33))){
var inst_30476 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30513_30559 = state_30499__$1;
(statearr_30513_30559[(2)] = inst_30476);

(statearr_30513_30559[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (13))){
var inst_30441 = figwheel.client.heads_up.clear.call(null);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(16),inst_30441);
} else {
if((state_val_30500 === (22))){
var inst_30458 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30459 = figwheel.client.heads_up.append_warning_message.call(null,inst_30458);
var state_30499__$1 = state_30499;
var statearr_30514_30560 = state_30499__$1;
(statearr_30514_30560[(2)] = inst_30459);

(statearr_30514_30560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (36))){
var inst_30485 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30515_30561 = state_30499__$1;
(statearr_30515_30561[(2)] = inst_30485);

(statearr_30515_30561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (29))){
var inst_30469 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30516_30562 = state_30499__$1;
(statearr_30516_30562[(2)] = inst_30469);

(statearr_30516_30562[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (6))){
var inst_30422 = (state_30499[(7)]);
var state_30499__$1 = state_30499;
var statearr_30517_30563 = state_30499__$1;
(statearr_30517_30563[(2)] = inst_30422);

(statearr_30517_30563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (28))){
var inst_30465 = (state_30499[(2)]);
var inst_30466 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30467 = figwheel.client.heads_up.display_warning.call(null,inst_30466);
var state_30499__$1 = (function (){var statearr_30518 = state_30499;
(statearr_30518[(8)] = inst_30465);

return statearr_30518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(29),inst_30467);
} else {
if((state_val_30500 === (25))){
var inst_30463 = figwheel.client.heads_up.clear.call(null);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(28),inst_30463);
} else {
if((state_val_30500 === (34))){
var inst_30480 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(37),inst_30480);
} else {
if((state_val_30500 === (17))){
var inst_30447 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30519_30564 = state_30499__$1;
(statearr_30519_30564[(2)] = inst_30447);

(statearr_30519_30564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (3))){
var inst_30439 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30439)){
var statearr_30520_30565 = state_30499__$1;
(statearr_30520_30565[(1)] = (13));

} else {
var statearr_30521_30566 = state_30499__$1;
(statearr_30521_30566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (12))){
var inst_30435 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30522_30567 = state_30499__$1;
(statearr_30522_30567[(2)] = inst_30435);

(statearr_30522_30567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (2))){
var inst_30422 = (state_30499[(7)]);
var inst_30422__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30499__$1 = (function (){var statearr_30523 = state_30499;
(statearr_30523[(7)] = inst_30422__$1);

return statearr_30523;
})();
if(cljs.core.truth_(inst_30422__$1)){
var statearr_30524_30568 = state_30499__$1;
(statearr_30524_30568[(1)] = (5));

} else {
var statearr_30525_30569 = state_30499__$1;
(statearr_30525_30569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (23))){
var inst_30461 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30461)){
var statearr_30526_30570 = state_30499__$1;
(statearr_30526_30570[(1)] = (25));

} else {
var statearr_30527_30571 = state_30499__$1;
(statearr_30527_30571[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (35))){
var state_30499__$1 = state_30499;
var statearr_30528_30572 = state_30499__$1;
(statearr_30528_30572[(2)] = null);

(statearr_30528_30572[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (19))){
var inst_30456 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30456)){
var statearr_30529_30573 = state_30499__$1;
(statearr_30529_30573[(1)] = (22));

} else {
var statearr_30530_30574 = state_30499__$1;
(statearr_30530_30574[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (11))){
var inst_30431 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30531_30575 = state_30499__$1;
(statearr_30531_30575[(2)] = inst_30431);

(statearr_30531_30575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (9))){
var inst_30433 = figwheel.client.heads_up.clear.call(null);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(12),inst_30433);
} else {
if((state_val_30500 === (5))){
var inst_30424 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30499__$1 = state_30499;
var statearr_30532_30576 = state_30499__$1;
(statearr_30532_30576[(2)] = inst_30424);

(statearr_30532_30576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (14))){
var inst_30449 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30449)){
var statearr_30533_30577 = state_30499__$1;
(statearr_30533_30577[(1)] = (18));

} else {
var statearr_30534_30578 = state_30499__$1;
(statearr_30534_30578[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (26))){
var inst_30471 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30499__$1 = state_30499;
if(cljs.core.truth_(inst_30471)){
var statearr_30535_30579 = state_30499__$1;
(statearr_30535_30579[(1)] = (30));

} else {
var statearr_30536_30580 = state_30499__$1;
(statearr_30536_30580[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (16))){
var inst_30443 = (state_30499[(2)]);
var inst_30444 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30445 = figwheel.client.heads_up.display_exception.call(null,inst_30444);
var state_30499__$1 = (function (){var statearr_30537 = state_30499;
(statearr_30537[(9)] = inst_30443);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(17),inst_30445);
} else {
if((state_val_30500 === (30))){
var inst_30473 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30474 = figwheel.client.heads_up.display_warning.call(null,inst_30473);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(33),inst_30474);
} else {
if((state_val_30500 === (10))){
var inst_30437 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30538_30581 = state_30499__$1;
(statearr_30538_30581[(2)] = inst_30437);

(statearr_30538_30581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (18))){
var inst_30451 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30452 = figwheel.client.heads_up.display_exception.call(null,inst_30451);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(21),inst_30452);
} else {
if((state_val_30500 === (37))){
var inst_30482 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30539_30582 = state_30499__$1;
(statearr_30539_30582[(2)] = inst_30482);

(statearr_30539_30582[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (8))){
var inst_30429 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(11),inst_30429);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22490__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22378__auto__,c__22490__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto____0 = (function (){
var statearr_30543 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30543[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto__);

(statearr_30543[(1)] = (1));

return statearr_30543;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto____1 = (function (state_30499){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_30499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e30544){if((e30544 instanceof Object)){
var ex__22382__auto__ = e30544;
var statearr_30545_30583 = state_30499;
(statearr_30545_30583[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30584 = state_30499;
state_30499 = G__30584;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto__ = function(state_30499){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto____1.call(this,state_30499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,msg_hist,msg_names,msg))
})();
var state__22492__auto__ = (function (){var statearr_30546 = f__22491__auto__.call(null);
(statearr_30546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_30546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,msg_hist,msg_names,msg))
);

return c__22490__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22490__auto___30647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___30647,ch){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___30647,ch){
return (function (state_30630){
var state_val_30631 = (state_30630[(1)]);
if((state_val_30631 === (1))){
var state_30630__$1 = state_30630;
var statearr_30632_30648 = state_30630__$1;
(statearr_30632_30648[(2)] = null);

(statearr_30632_30648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (2))){
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30630__$1,(4),ch);
} else {
if((state_val_30631 === (3))){
var inst_30628 = (state_30630[(2)]);
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30630__$1,inst_30628);
} else {
if((state_val_30631 === (4))){
var inst_30618 = (state_30630[(7)]);
var inst_30618__$1 = (state_30630[(2)]);
var state_30630__$1 = (function (){var statearr_30633 = state_30630;
(statearr_30633[(7)] = inst_30618__$1);

return statearr_30633;
})();
if(cljs.core.truth_(inst_30618__$1)){
var statearr_30634_30649 = state_30630__$1;
(statearr_30634_30649[(1)] = (5));

} else {
var statearr_30635_30650 = state_30630__$1;
(statearr_30635_30650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (5))){
var inst_30618 = (state_30630[(7)]);
var inst_30620 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30618);
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30630__$1,(8),inst_30620);
} else {
if((state_val_30631 === (6))){
var state_30630__$1 = state_30630;
var statearr_30636_30651 = state_30630__$1;
(statearr_30636_30651[(2)] = null);

(statearr_30636_30651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (7))){
var inst_30626 = (state_30630[(2)]);
var state_30630__$1 = state_30630;
var statearr_30637_30652 = state_30630__$1;
(statearr_30637_30652[(2)] = inst_30626);

(statearr_30637_30652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (8))){
var inst_30622 = (state_30630[(2)]);
var state_30630__$1 = (function (){var statearr_30638 = state_30630;
(statearr_30638[(8)] = inst_30622);

return statearr_30638;
})();
var statearr_30639_30653 = state_30630__$1;
(statearr_30639_30653[(2)] = null);

(statearr_30639_30653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22490__auto___30647,ch))
;
return ((function (switch__22378__auto__,c__22490__auto___30647,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22379__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22379__auto____0 = (function (){
var statearr_30643 = [null,null,null,null,null,null,null,null,null];
(statearr_30643[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22379__auto__);

(statearr_30643[(1)] = (1));

return statearr_30643;
});
var figwheel$client$heads_up_plugin_$_state_machine__22379__auto____1 = (function (state_30630){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_30630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e30644){if((e30644 instanceof Object)){
var ex__22382__auto__ = e30644;
var statearr_30645_30654 = state_30630;
(statearr_30645_30654[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30655 = state_30630;
state_30630 = G__30655;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22379__auto__ = function(state_30630){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22379__auto____1.call(this,state_30630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22379__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22379__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___30647,ch))
})();
var state__22492__auto__ = (function (){var statearr_30646 = f__22491__auto__.call(null);
(statearr_30646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___30647);

return statearr_30646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___30647,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_30676){
var state_val_30677 = (state_30676[(1)]);
if((state_val_30677 === (1))){
var inst_30671 = cljs.core.async.timeout.call(null,(3000));
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30676__$1,(2),inst_30671);
} else {
if((state_val_30677 === (2))){
var inst_30673 = (state_30676[(2)]);
var inst_30674 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30676__$1 = (function (){var statearr_30678 = state_30676;
(statearr_30678[(7)] = inst_30673);

return statearr_30678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30676__$1,inst_30674);
} else {
return null;
}
}
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22379__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22379__auto____0 = (function (){
var statearr_30682 = [null,null,null,null,null,null,null,null];
(statearr_30682[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22379__auto__);

(statearr_30682[(1)] = (1));

return statearr_30682;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22379__auto____1 = (function (state_30676){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_30676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e30683){if((e30683 instanceof Object)){
var ex__22382__auto__ = e30683;
var statearr_30684_30686 = state_30676;
(statearr_30684_30686[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30687 = state_30676;
state_30676 = G__30687;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22379__auto__ = function(state_30676){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22379__auto____1.call(this,state_30676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22379__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22379__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_30685 = f__22491__auto__.call(null);
(statearr_30685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_30685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30710){
var state_val_30711 = (state_30710[(1)]);
if((state_val_30711 === (1))){
var inst_30704 = cljs.core.async.timeout.call(null,(2000));
var state_30710__$1 = state_30710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30710__$1,(2),inst_30704);
} else {
if((state_val_30711 === (2))){
var inst_30706 = (state_30710[(2)]);
var inst_30707 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30708 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30707);
var state_30710__$1 = (function (){var statearr_30712 = state_30710;
(statearr_30712[(7)] = inst_30706);

return statearr_30712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30710__$1,inst_30708);
} else {
return null;
}
}
});})(c__22490__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto____0 = (function (){
var statearr_30716 = [null,null,null,null,null,null,null,null];
(statearr_30716[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto__);

(statearr_30716[(1)] = (1));

return statearr_30716;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto____1 = (function (state_30710){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_30710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e30717){if((e30717 instanceof Object)){
var ex__22382__auto__ = e30717;
var statearr_30718_30720 = state_30710;
(statearr_30718_30720[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30721 = state_30710;
state_30710 = G__30721;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto__ = function(state_30710){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto____1.call(this,state_30710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22492__auto__ = (function (){var statearr_30719 = f__22491__auto__.call(null);
(statearr_30719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_30719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,figwheel_version,temp__4657__auto__))
);

return c__22490__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30722){
var map__30726 = p__30722;
var map__30726__$1 = ((((!((map__30726 == null)))?((((map__30726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var file = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30728 = "";
var G__30728__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30728),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30728);
var G__30728__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30728__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30728__$1);
if(cljs.core.truth_((function (){var and__20273__auto__ = line;
if(cljs.core.truth_(and__20273__auto__)){
return column;
} else {
return and__20273__auto__;
}
})())){
return [cljs.core.str(G__30728__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30728__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30729){
var map__30736 = p__30729;
var map__30736__$1 = ((((!((map__30736 == null)))?((((map__30736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30736):map__30736);
var ed = map__30736__$1;
var formatted_exception = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30738_30742 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30739_30743 = null;
var count__30740_30744 = (0);
var i__30741_30745 = (0);
while(true){
if((i__30741_30745 < count__30740_30744)){
var msg_30746 = cljs.core._nth.call(null,chunk__30739_30743,i__30741_30745);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30746);

var G__30747 = seq__30738_30742;
var G__30748 = chunk__30739_30743;
var G__30749 = count__30740_30744;
var G__30750 = (i__30741_30745 + (1));
seq__30738_30742 = G__30747;
chunk__30739_30743 = G__30748;
count__30740_30744 = G__30749;
i__30741_30745 = G__30750;
continue;
} else {
var temp__4657__auto___30751 = cljs.core.seq.call(null,seq__30738_30742);
if(temp__4657__auto___30751){
var seq__30738_30752__$1 = temp__4657__auto___30751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30738_30752__$1)){
var c__21099__auto___30753 = cljs.core.chunk_first.call(null,seq__30738_30752__$1);
var G__30754 = cljs.core.chunk_rest.call(null,seq__30738_30752__$1);
var G__30755 = c__21099__auto___30753;
var G__30756 = cljs.core.count.call(null,c__21099__auto___30753);
var G__30757 = (0);
seq__30738_30742 = G__30754;
chunk__30739_30743 = G__30755;
count__30740_30744 = G__30756;
i__30741_30745 = G__30757;
continue;
} else {
var msg_30758 = cljs.core.first.call(null,seq__30738_30752__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30758);

var G__30759 = cljs.core.next.call(null,seq__30738_30752__$1);
var G__30760 = null;
var G__30761 = (0);
var G__30762 = (0);
seq__30738_30742 = G__30759;
chunk__30739_30743 = G__30760;
count__30740_30744 = G__30761;
i__30741_30745 = G__30762;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30763){
var map__30766 = p__30763;
var map__30766__$1 = ((((!((map__30766 == null)))?((((map__30766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30766):map__30766);
var w = map__30766__$1;
var message = cljs.core.get.call(null,map__30766__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\out\\figwheel\\client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\out\\figwheel\\client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20273__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20273__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20273__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30778 = cljs.core.seq.call(null,plugins);
var chunk__30779 = null;
var count__30780 = (0);
var i__30781 = (0);
while(true){
if((i__30781 < count__30780)){
var vec__30782 = cljs.core._nth.call(null,chunk__30779,i__30781);
var k = cljs.core.nth.call(null,vec__30782,(0),null);
var plugin = cljs.core.nth.call(null,vec__30782,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30788 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30778,chunk__30779,count__30780,i__30781,pl_30788,vec__30782,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30788.call(null,msg_hist);
});})(seq__30778,chunk__30779,count__30780,i__30781,pl_30788,vec__30782,k,plugin))
);
} else {
}

var G__30789 = seq__30778;
var G__30790 = chunk__30779;
var G__30791 = count__30780;
var G__30792 = (i__30781 + (1));
seq__30778 = G__30789;
chunk__30779 = G__30790;
count__30780 = G__30791;
i__30781 = G__30792;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30778);
if(temp__4657__auto__){
var seq__30778__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30778__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__30778__$1);
var G__30793 = cljs.core.chunk_rest.call(null,seq__30778__$1);
var G__30794 = c__21099__auto__;
var G__30795 = cljs.core.count.call(null,c__21099__auto__);
var G__30796 = (0);
seq__30778 = G__30793;
chunk__30779 = G__30794;
count__30780 = G__30795;
i__30781 = G__30796;
continue;
} else {
var vec__30785 = cljs.core.first.call(null,seq__30778__$1);
var k = cljs.core.nth.call(null,vec__30785,(0),null);
var plugin = cljs.core.nth.call(null,vec__30785,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30797 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30778,chunk__30779,count__30780,i__30781,pl_30797,vec__30785,k,plugin,seq__30778__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30797.call(null,msg_hist);
});})(seq__30778,chunk__30779,count__30780,i__30781,pl_30797,vec__30785,k,plugin,seq__30778__$1,temp__4657__auto__))
);
} else {
}

var G__30798 = cljs.core.next.call(null,seq__30778__$1);
var G__30799 = null;
var G__30800 = (0);
var G__30801 = (0);
seq__30778 = G__30798;
chunk__30779 = G__30799;
count__30780 = G__30800;
i__30781 = G__30801;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30802 = [];
var len__21393__auto___30809 = arguments.length;
var i__21394__auto___30810 = (0);
while(true){
if((i__21394__auto___30810 < len__21393__auto___30809)){
args30802.push((arguments[i__21394__auto___30810]));

var G__30811 = (i__21394__auto___30810 + (1));
i__21394__auto___30810 = G__30811;
continue;
} else {
}
break;
}

var G__30804 = args30802.length;
switch (G__30804) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30802.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30805_30813 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30806_30814 = null;
var count__30807_30815 = (0);
var i__30808_30816 = (0);
while(true){
if((i__30808_30816 < count__30807_30815)){
var msg_30817 = cljs.core._nth.call(null,chunk__30806_30814,i__30808_30816);
figwheel.client.socket.handle_incoming_message.call(null,msg_30817);

var G__30818 = seq__30805_30813;
var G__30819 = chunk__30806_30814;
var G__30820 = count__30807_30815;
var G__30821 = (i__30808_30816 + (1));
seq__30805_30813 = G__30818;
chunk__30806_30814 = G__30819;
count__30807_30815 = G__30820;
i__30808_30816 = G__30821;
continue;
} else {
var temp__4657__auto___30822 = cljs.core.seq.call(null,seq__30805_30813);
if(temp__4657__auto___30822){
var seq__30805_30823__$1 = temp__4657__auto___30822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30805_30823__$1)){
var c__21099__auto___30824 = cljs.core.chunk_first.call(null,seq__30805_30823__$1);
var G__30825 = cljs.core.chunk_rest.call(null,seq__30805_30823__$1);
var G__30826 = c__21099__auto___30824;
var G__30827 = cljs.core.count.call(null,c__21099__auto___30824);
var G__30828 = (0);
seq__30805_30813 = G__30825;
chunk__30806_30814 = G__30826;
count__30807_30815 = G__30827;
i__30808_30816 = G__30828;
continue;
} else {
var msg_30829 = cljs.core.first.call(null,seq__30805_30823__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30829);

var G__30830 = cljs.core.next.call(null,seq__30805_30823__$1);
var G__30831 = null;
var G__30832 = (0);
var G__30833 = (0);
seq__30805_30813 = G__30830;
chunk__30806_30814 = G__30831;
count__30807_30815 = G__30832;
i__30808_30816 = G__30833;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21400__auto__ = [];
var len__21393__auto___30838 = arguments.length;
var i__21394__auto___30839 = (0);
while(true){
if((i__21394__auto___30839 < len__21393__auto___30838)){
args__21400__auto__.push((arguments[i__21394__auto___30839]));

var G__30840 = (i__21394__auto___30839 + (1));
i__21394__auto___30839 = G__30840;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30835){
var map__30836 = p__30835;
var map__30836__$1 = ((((!((map__30836 == null)))?((((map__30836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30836):map__30836);
var opts = map__30836__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30834){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30834));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30842){if((e30842 instanceof Error)){
var e = e30842;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30842;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30846){
var map__30847 = p__30846;
var map__30847__$1 = ((((!((map__30847 == null)))?((((map__30847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30847):map__30847);
var msg_name = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1482468812155