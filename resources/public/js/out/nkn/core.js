// Compiled by ClojureScript 1.9.293 {}
goog.provide('nkn.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
nkn.core.floor = (function nkn$core$floor(x){
return Math.floor(x);
});
nkn.core.translate = (function nkn$core$translate(start_pos,vel,time){
return nkn.core.floor.call(null,(start_pos + (time * vel)));
});
nkn.core.hor_vel = -0.128;
nkn.core.gravity = 0.0225;
nkn.core.jump_vel = (12);
nkn.core.start_y = (312);
nkn.core.bottom_y = (561);
nkn.core.flyer_x = (212);
nkn.core.flyer_width = (81);
nkn.core.flyer_height = (29);
nkn.core.pillar_spacing = (400);
nkn.core.pillar_gap = (160);
nkn.core.pillar_width = (80);
nkn.core.starting_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(0),new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),(0),new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"flyer-start-time","flyer-start-time",532051152),(0),new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261),nkn.core.start_y,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(900),new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),(900),new cljs.core.Keyword(null,"gap-top","gap-top",246258531),(200)], null)], null)], null);
nkn.core.reset_state = (function nkn$core$reset_state(_,cur_time){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,nkn.core.starting_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pls){
return cljs.core.map.call(null,(function (p1__31678_SHARP_){
return cljs.core.assoc.call(null,p1__31678_SHARP_,new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time);
}),pls);
})),new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"flyer-start-time","flyer-start-time",532051152),cur_time,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),true);
});
if(typeof nkn.core.flr_state !== 'undefined'){
} else {
nkn.core.flr_state = cljs.core.atom.call(null,nkn.core.starting_state);
}
nkn.core.curr_pillar_pos = (function nkn$core$curr_pillar_pos(cur_time,p__31679){
var map__31682 = p__31679;
var map__31682__$1 = ((((!((map__31682 == null)))?((((map__31682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);
var pos_x = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var start_time = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
return nkn.core.translate.call(null,pos_x,nkn.core.hor_vel,(cur_time - start_time));
});
nkn.core.in_pillar_QMARK_ = (function nkn$core$in_pillar_QMARK_(p__31684){
var map__31687 = p__31684;
var map__31687__$1 = ((((!((map__31687 == null)))?((((map__31687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31687):map__31687);
var cur_x = cljs.core.get.call(null,map__31687__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
return (((nkn.core.flyer_x + nkn.core.flyer_width) >= cur_x)) && ((nkn.core.flyer_x < (cur_x + nkn.core.pillar_width)));
});
nkn.core.in_pillar_gap_QMARK_ = (function nkn$core$in_pillar_gap_QMARK_(p__31689,p__31690){
var map__31695 = p__31689;
var map__31695__$1 = ((((!((map__31695 == null)))?((((map__31695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31695):map__31695);
var flyer_y = cljs.core.get.call(null,map__31695__$1,new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261));
var map__31696 = p__31690;
var map__31696__$1 = ((((!((map__31696 == null)))?((((map__31696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31696):map__31696);
var gap_top = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return ((gap_top < flyer_y)) && (((gap_top + nkn.core.pillar_gap) > (flyer_y + nkn.core.flyer_height)));
});
nkn.core.bottom_collision_QMARK_ = (function nkn$core$bottom_collision_QMARK_(p__31699){
var map__31702 = p__31699;
var map__31702__$1 = ((((!((map__31702 == null)))?((((map__31702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702):map__31702);
var flyer_y = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261));
return (flyer_y >= (nkn.core.bottom_y - nkn.core.flyer_height));
});
nkn.core.collision_QMARK_ = (function nkn$core$collision_QMARK_(p__31705){
var map__31708 = p__31705;
var map__31708__$1 = ((((!((map__31708 == null)))?((((map__31708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31708):map__31708);
var st = map__31708__$1;
var pillar_list = cljs.core.get.call(null,map__31708__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
if(cljs.core.truth_(cljs.core.some.call(null,((function (map__31708,map__31708__$1,st,pillar_list){
return (function (p1__31704_SHARP_){
var or__20285__auto__ = (function (){var and__20273__auto__ = nkn.core.in_pillar_QMARK_.call(null,p1__31704_SHARP_);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.not.call(null,nkn.core.in_pillar_gap_QMARK_.call(null,st,p1__31704_SHARP_));
} else {
return and__20273__auto__;
}
})();
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return nkn.core.bottom_collision_QMARK_.call(null,st);
}
});})(map__31708,map__31708__$1,st,pillar_list))
,pillar_list))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false);
} else {
return st;
}
});
nkn.core.new_pillar = (function nkn$core$new_pillar(cur_time,pos_x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),pos_x,new cljs.core.Keyword(null,"gap-top","gap-top",246258531),((60) + cljs.core.rand_int.call(null,((nkn.core.bottom_y - (120)) - nkn.core.pillar_gap)))], null);
});
nkn.core.update_pillars = (function nkn$core$update_pillars(p__31712){
var map__31715 = p__31712;
var map__31715__$1 = ((((!((map__31715 == null)))?((((map__31715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31715):map__31715);
var st = map__31715__$1;
var pillar_list = cljs.core.get.call(null,map__31715__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
var cur_time = cljs.core.get.call(null,map__31715__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var pillars_with_pos = cljs.core.map.call(null,((function (map__31715,map__31715__$1,st,pillar_list,cur_time){
return (function (p1__31710_SHARP_){
return cljs.core.assoc.call(null,p1__31710_SHARP_,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),nkn.core.curr_pillar_pos.call(null,cur_time,p1__31710_SHARP_));
});})(map__31715,map__31715__$1,st,pillar_list,cur_time))
,pillar_list);
var pillars_in_world = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),cljs.core.filter.call(null,((function (pillars_with_pos,map__31715,map__31715__$1,st,pillar_list,cur_time){
return (function (p1__31711_SHARP_){
return (new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(p1__31711_SHARP_) > (- nkn.core.pillar_width));
});})(pillars_with_pos,map__31715,map__31715__$1,st,pillar_list,cur_time))
,pillars_with_pos));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),(((cljs.core.count.call(null,pillars_in_world) < (3)))?cljs.core.conj.call(null,pillars_in_world,nkn.core.new_pillar.call(null,cur_time,(nkn.core.pillar_spacing + new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pillars_in_world))))):pillars_in_world));
});
nkn.core.sine_wave = (function nkn$core$sine_wave(st){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261),(nkn.core.start_y + ((30) * Math.sin((new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875).cljs$core$IFn$_invoke$arity$1(st) / (300))))));
});
nkn.core.update_flyer = (function nkn$core$update_flyer(p__31717){
var map__31720 = p__31717;
var map__31720__$1 = ((((!((map__31720 == null)))?((((map__31720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31720):map__31720);
var st = map__31720__$1;
var time_delta = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875));
var initial_vel = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882));
var flyer_y = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261));
var jump_count = cljs.core.get.call(null,map__31720__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
if((jump_count > (0))){
var cur_vel = (initial_vel - (time_delta * nkn.core.gravity));
var new_y = (flyer_y - cur_vel);
var new_y__$1 = (((new_y > (nkn.core.bottom_y - nkn.core.flyer_height)))?(nkn.core.bottom_y - nkn.core.flyer_height):new_y);
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261),new_y__$1);
} else {
return nkn.core.sine_wave.call(null,st);
}
});
nkn.core.score = (function nkn$core$score(p__31722){
var map__31725 = p__31722;
var map__31725__$1 = ((((!((map__31725 == null)))?((((map__31725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31725):map__31725);
var st = map__31725__$1;
var cur_time = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var start_time = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var score = (Math.abs(nkn.core.floor.call(null,((((cur_time - start_time) * nkn.core.hor_vel) - (544)) / nkn.core.pillar_spacing))) - (4));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"score","score",-1963588780),(((score < (0)))?(0):score));
});
nkn.core.time_update = (function nkn$core$time_update(timestamp,state){
return nkn.core.score.call(null,nkn.core.collision_QMARK_.call(null,nkn.core.update_pillars.call(null,nkn.core.update_flyer.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cur-time","cur-time",518931125),timestamp,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875),(timestamp - new cljs.core.Keyword(null,"flyer-start-time","flyer-start-time",532051152).cljs$core$IFn$_invoke$arity$1(state)))))));
});
nkn.core.jump = (function nkn$core$jump(p__31727){
var map__31730 = p__31727;
var map__31730__$1 = ((((!((map__31730 == null)))?((((map__31730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31730):map__31730);
var state = map__31730__$1;
var cur_time = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(jump_count + (1)),new cljs.core.Keyword(null,"flyer-start-time","flyer-start-time",532051152),cur_time,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),nkn.core.jump_vel);
});
nkn.core.border = (function nkn$core$border(p__31732){
var map__31735 = p__31732;
var map__31735__$1 = ((((!((map__31735 == null)))?((((map__31735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735):map__31735);
var state = map__31735__$1;
var cur_time = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875),cljs.core.mod.call(null,nkn.core.translate.call(null,(0),nkn.core.hor_vel,cur_time),(23)));
});
nkn.core.pillar_offset = (function nkn$core$pillar_offset(p__31737){
var map__31740 = p__31737;
var map__31740__$1 = ((((!((map__31740 == null)))?((((map__31740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31740):map__31740);
var p = map__31740__$1;
var gap_top = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372),gap_top,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583),((nkn.core.bottom_y - gap_top) - nkn.core.pillar_gap));
});
nkn.core.pillar_offsets = (function nkn$core$pillar_offsets(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pillar_list){
return cljs.core.map.call(null,nkn.core.pillar_offset,pillar_list);
}));
});
nkn.core.world = (function nkn$core$world(state){
return nkn.core.pillar_offsets.call(null,nkn.core.border.call(null,state));
});
nkn.core.px = (function nkn$core$px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
nkn.core.pillar = (function nkn$core$pillar(p__31742){
var map__31745 = p__31742;
var map__31745__$1 = ((((!((map__31745 == null)))?((((map__31745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31745):map__31745);
var cur_x = cljs.core.get.call(null,map__31745__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
var pos_x = cljs.core.get.call(null,map__31745__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var upper_height = cljs.core.get.call(null,map__31745__$1,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372));
var lower_height = cljs.core.get.call(null,map__31745__$1,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",-1469617576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",596294660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),nkn.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),upper_height], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",-1227306575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),nkn.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),lower_height], null)], null)], null)], null);
});
nkn.core.time_loop = (function nkn$core$time_loop(time){
var new_state = cljs.core.swap_BANG_.call(null,nkn.core.flr_state,cljs.core.partial.call(null,nkn.core.time_update,time));
if(cljs.core.truth_(new cljs.core.Keyword(null,"timer-running","timer-running",1190718961).cljs$core$IFn$_invoke$arity$1(new_state))){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,new_state){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,new_state){
return (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (1))){
var inst_31762 = cljs.core.async.timeout.call(null,(30));
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31767__$1,(2),inst_31762);
} else {
if((state_val_31768 === (2))){
var inst_31764 = (state_31767[(2)]);
var inst_31765 = window.requestAnimationFrame(nkn.core.time_loop);
var state_31767__$1 = (function (){var statearr_31769 = state_31767;
(statearr_31769[(7)] = inst_31764);

return statearr_31769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31767__$1,inst_31765);
} else {
return null;
}
}
});})(c__22490__auto__,new_state))
;
return ((function (switch__22378__auto__,c__22490__auto__,new_state){
return (function() {
var nkn$core$time_loop_$_state_machine__22379__auto__ = null;
var nkn$core$time_loop_$_state_machine__22379__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null,null];
(statearr_31773[(0)] = nkn$core$time_loop_$_state_machine__22379__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var nkn$core$time_loop_$_state_machine__22379__auto____1 = (function (state_31767){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_31767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e31774){if((e31774 instanceof Object)){
var ex__22382__auto__ = e31774;
var statearr_31775_31777 = state_31767;
(statearr_31775_31777[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31778 = state_31767;
state_31767 = G__31778;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
nkn$core$time_loop_$_state_machine__22379__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return nkn$core$time_loop_$_state_machine__22379__auto____0.call(this);
case 1:
return nkn$core$time_loop_$_state_machine__22379__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nkn$core$time_loop_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = nkn$core$time_loop_$_state_machine__22379__auto____0;
nkn$core$time_loop_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = nkn$core$time_loop_$_state_machine__22379__auto____1;
return nkn$core$time_loop_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,new_state))
})();
var state__22492__auto__ = (function (){var statearr_31776 = f__22491__auto__.call(null);
(statearr_31776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,new_state))
);

return c__22490__auto__;
} else {
return null;
}
});
nkn.core.start_game = (function nkn$core$start_game(){
return window.requestAnimationFrame((function (time){
cljs.core.reset_BANG_.call(null,nkn.core.flr_state,nkn.core.reset_state.call(null,cljs.core.deref.call(null,nkn.core.flr_state),time));

return nkn.core.time_loop.call(null,time);
}));
});
nkn.core.main_template = (function nkn$core$main_template(p__31779){
var map__31784 = p__31779;
var map__31784__$1 = ((((!((map__31784 == null)))?((((map__31784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31784):map__31784);
var score = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var cur_time = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
var timer_running = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961));
var border_pos = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875));
var flyer_y = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"flyer-y","flyer-y",-1647068261));
var pillar_list = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
return React.createElement("div",({"onMouseDown": ((function (map__31784,map__31784__$1,score,cur_time,jump_count,timer_running,border_pos,flyer_y,pillar_list){
return (function (e){
cljs.core.swap_BANG_.call(null,nkn.core.flr_state,nkn.core.jump);

return e.preventDefault();
});})(map__31784,map__31784__$1,score,cur_time,jump_count,timer_running,border_pos,flyer_y,pillar_list))
, "className": "board"}),(function (){var attrs31786 = score;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs31786))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs31786)):({"className": "score"})),((cljs.core.map_QMARK_.call(null,attrs31786))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31786)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,timer_running))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.start-button","a.start-button",255836936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__31784,map__31784__$1,score,cur_time,jump_count,timer_running,border_pos,flyer_y,pillar_list){
return (function (){
return nkn.core.start_game.call(null);
});})(map__31784,map__31784__$1,score,cur_time,jump_count,timer_running,border_pos,flyer_y,pillar_list))
], null),((((1) < jump_count))?"RESTART":"START")], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))),(function (){var attrs31787 = cljs.core.map.call(null,nkn.core.pillar,pillar_list);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31787))?sablono.interpreter.attributes.call(null,attrs31787):null),((cljs.core.map_QMARK_.call(null,attrs31787))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31787)], null)));
})(),React.createElement("div",({"style": ({"top": nkn.core.px.call(null,flyer_y)}), "className": "flyer"})),React.createElement("div",({"style": ({"backgroundPositionX": nkn.core.px.call(null,border_pos)}), "className": "scrolling-border"})));
});
var node_31788 = document.getElementById("board-area");
nkn.core.renderer = ((function (node_31788){
return (function nkn$core$renderer(full_state){
return ReactDOM.render(nkn.core.main_template.call(null,full_state),node_31788);
});})(node_31788))
;
cljs.core.add_watch.call(null,nkn.core.flr_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (_,___$1,___$2,n){
return nkn.core.renderer.call(null,nkn.core.world.call(null,n));
}));
cljs.core.reset_BANG_.call(null,nkn.core.flr_state,cljs.core.deref.call(null,nkn.core.flr_state));

//# sourceMappingURL=core.js.map?rel=1482468814729