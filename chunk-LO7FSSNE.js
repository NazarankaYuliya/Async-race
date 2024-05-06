import{a as A,b as G,c as N,d as U}from"./chunk-72VVWTVT.js";import{a as L,b as D}from"./chunk-LBL36XMF.js";import{A as z,h as F,o as k,r as H,s as x,t as j}from"./chunk-L4GDQ2ZO.js";import{Bb as h,Cb as I,Da as S,Db as _,Eb as C,Ka as y,Na as o,Oa as w,Wb as B,Xb as $,cb as P,eb as d,hb as E,ib as O,jb as b,kb as M,la as u,lb as r,mb as n,nb as f,qb as g,rb as T,wb as p,xb as v,yb as W}from"./chunk-MRZXRVOG.js";function Q(i,e){if(i&1&&(r(0,"div",0)(1,"div"),p(2),n(),r(3,"div",1),f(4,"app-car-image",2),n(),r(5,"div"),p(6),n(),r(7,"div"),p(8),n(),r(9,"div"),p(10),n()()),i&2){let l=T();o(2),v(l.winner.id),o(2),d("car",l.car),o(2),v(l.car.name),o(2),v(l.winner.wins),o(2),v(l.winner.time)}}var J=(()=>{let e=class e{constructor(t){this.service=t}ngOnInit(){this.service.getCarById(this.winner.id).subscribe(t=>this.car=t)}};e.\u0275fac=function(s){return new(s||e)(w(z))},e.\u0275cmp=u({type:e,selectors:[["app-winner"]],inputs:{winner:"winner"},standalone:!0,features:[h],decls:1,vars:1,consts:[[1,"winner-container"],[1,"car-image"],[3,"car"]],template:function(s,a){s&1&&P(0,Q,11,5,"div",0),s&2&&E(0,a.winner&&a.winner.id&&a.car?0:-1)},dependencies:[D],styles:[".winner-container[_ngcontent-%COMP%]{width:100%;display:flex}.winner-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;text-align:center;display:flex;justify-content:center;align-items:center}app-car-image[_ngcontent-%COMP%]{width:50px;height:50px}"]});let i=e;return i})();function R(i,e){if(i&1&&f(0,"app-winner",5),i&2){let l=e.$implicit;d("winner",l)}}var K=(()=>{let e=class e{constructor(){this.winsSortOrder="asc",this.timeSortOrder="asc",this.winners=[],this.sortEvent=new S}sortWins(){this.winsSortOrder=this.winsSortOrder==="asc"?"desc":"asc",this.sortEvent.emit({type:"wins",order:this.winsSortOrder})}sortTime(){this.timeSortOrder=this.timeSortOrder==="asc"?"desc":"asc",this.sortEvent.emit({type:"time",order:this.timeSortOrder})}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=u({type:e,selectors:[["app-winners-list"]],inputs:{winners:"winners"},outputs:{sortEvent:"sortEvent"},standalone:!0,features:[h],decls:19,vars:2,consts:[[1,"winners-container"],[1,"table-header"],[3,"click"],[3,"innerHTML"],[1,"table-body"],[3,"winner"]],template:function(s,a){s&1&&(r(0,"div",0)(1,"div",1)(2,"div"),p(3,"Id"),n(),r(4,"div"),p(5,"Car"),n(),r(6,"div"),p(7,"Name"),n(),r(8,"div")(9,"button",2),g("click",function(){return a.sortWins()}),f(10,"span",3),n(),p(11," Wins "),n(),r(12,"div")(13,"button",2),g("click",function(){return a.sortTime()}),f(14,"span",3),n(),p(15," Best time (s) "),n()(),r(16,"div",4),b(17,R,1,1,"app-winner",5,O),n()()),s&2&&(o(10),d("innerHTML",a.winsSortOrder==="asc"?"\u25B2":"\u25BC",y),o(4),d("innerHTML",a.timeSortOrder==="asc"?"\u25B2":"\u25BC",y),o(3),M(a.winners))},dependencies:[J],styles:[".winners-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:20px;padding:20px}.table-header[_ngcontent-%COMP%]{width:100%;display:flex;padding:5px;text-transform:uppercase;border-bottom:2px solid;letter-spacing:.1rem}.table-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;text-align:center}.table-body[_ngcontent-%COMP%]{width:100%;padding:5px;text-transform:uppercase;border-bottom:2px solid}"]});let i=e;return i})();var X=()=>[],ge=(()=>{let e=class e{constructor(t){this.store=t}ngOnInit(){this.loadWinners()}loadWinners(){this.store.dispatch(k()),this.winners$=this.store.select(A),this.totalWinners$=this.store.select(G),this.currentPage$=this.store.select(N),this.pageSize$=this.store.select(U),this.totalWinners$.subscribe(t=>{this.calculateTotalPages(+t)})}calculateTotalPages(t){this.pageSize$.subscribe(s=>{this.totalPages=Math.ceil(t/s)})}goToPage(t){t>=1&&t<=this.totalPages&&(this.store.dispatch(H({page:t})),this.loadWinners())}sort(t){t.type==="wins"?this.store.dispatch(x({sort:"wins"})):t.type==="time"&&this.store.dispatch(x({sort:"time"})),this.store.dispatch(j({order:t.order})),this.loadWinners()}};e.\u0275fac=function(s){return new(s||e)(w(F))},e.\u0275cmp=u({type:e,selectors:[["app-winners"]],standalone:!0,features:[h],decls:10,vars:11,consts:[[1,"wrapper"],[1,"winners-container"],[3,"sortEvent","winners"],[1,"pagination-container"],[3,"pageChange","currentPage","totalPages"]],template:function(s,a){if(s&1&&(r(0,"div",0)(1,"div",1)(2,"app-winners-list",2),_(3,"async"),g("sortEvent",function(m){return a.sort(m)}),n()(),r(4,"div",3)(5,"div"),p(6),_(7,"async"),n(),r(8,"app-pagination",4),_(9,"async"),g("pageChange",function(m){return a.goToPage(m)}),n()()()),s&2){let c,m;o(2),d("winners",(c=C(3,4,a.winners$))!==null&&c!==void 0?c:I(10,X)),o(4),W("Winners (",C(7,6,a.totalWinners$),")"),o(2),d("currentPage",(m=C(9,8,a.currentPage$))!==null&&m!==void 0?m:0)("totalPages",a.totalPages)}},dependencies:[$,B,L,K],styles:[".wrapper[_ngcontent-%COMP%]{width:100%;margin:0 auto;padding:20px}.pagination-container[_ngcontent-%COMP%]{width:100%;display:flex;padding:20px;justify-content:space-between;text-transform:uppercase}"]});let i=e;return i})();export{ge as WinnersComponent};
