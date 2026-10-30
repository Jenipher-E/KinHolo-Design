(function(){
var P={a:['Adaeze','#1C6E78'],t:['Tom','#2E5A87'],i:['Ife','#E2683C'],n:['Nonna','#2E8C5A'],k:['Kemi','#74B7C0']};
var IC={
home:'<path d="M4 11l8-6.5 8 6.5M6.5 9.5V20h11V9.5"/>',
tasks:'<rect x="4" y="4" width="16" height="16" rx="4.5"/><path d="M8.5 12.2l2.4 2.4 4.6-5"/>',
people:'<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0111 0"/><circle cx="17" cy="9.5" r="2.4"/><path d="M15.8 14.5A4.6 4.6 0 0121 19"/>',
lists:'<path d="M9.5 7H20M9.5 12H20M9.5 17H20"/><circle cx="5" cy="7" r="1.1"/><circle cx="5" cy="12" r="1.1"/><circle cx="5" cy="17" r="1.1"/>',
settings:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.1"/><circle cx="9" cy="17" r="2.1"/>',
chev:'<path d="M9.5 5.5L16 12l-6.5 6.5"/>',back:'<path d="M15 5l-7 7 7 7"/>',plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',bell:'<path d="M6.5 16v-5a5.5 5.5 0 0111 0v5l1.5 2h-14z"/><path d="M10 20.5h4"/>',
offline:'<path d="M3 3l18 18M8.5 16.4a5 5 0 016.5-.3M5 12.5a10 10 0 014-2.2M12 5c3.6 0 7 1.4 9.5 3.8M2.5 8.8A15 15 0 016.5 6"/><path d="M12 19.5h.01"/>',
cal:'<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/>',repeat:'<path d="M5 11a7 7 0 0112-4.5L19 8.5M19 13a7 7 0 01-12 4.5L5 15.5M19 4v4.5h-4.5M5 20v-4.5h4.5"/>',
eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',wallet:'<rect x="3.5" y="6" width="17" height="13" rx="3"/><path d="M3.5 10h17M16 14.5h.01"/>',
note:'<path d="M6 4h12v16H6z"/><path d="M9 9h6M9 13h6M9 17h3"/>',del:'<path d="M9 6l-6 6 6 6h11V6z"/><path d="M12.5 9.5l5 5M17.5 9.5l-5 5"/>',share:'<path d="M12 4v11M8 8l4-4 4 4M6 13v6h12v-6"/>',
clock:'<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',store:'<path d="M4 9l1.5-4h13L20 9M5 9v10h14V9M4 9h16"/>',face:'<path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2M9 9.5v1M15 9.5v1M9.5 15c1.5 1.2 3.5 1.2 5 0"/>',
globe:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5s1.2-6.2 3.5-8.5z"/>',cam:'<path d="M4 8.5h3l1.5-2.5h7L17 8.5h3V19H4z"/><circle cx="12" cy="13.5" r="3.3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h11"/>',cal2:'<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M8.5 3v4M15.5 3v4M8 14h2M14 14h2"/>',act:'<path d="M3 12h4l3-7 4 14 3-7h4"/>',doc:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',meal:'<path d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10M16 3c-2 1.5-2.5 4-2.5 7H17V3zM17 10v11"/>',help:'<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 014.8.8c0 1.7-2.4 2-2.4 3.7M12 17h.01"/>',phone:'<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',out:'<path d="M14 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M10 16l-4-4 4-4M6 12h10"/>'
};
function ic(n,s,w){s=s||22;return '<svg class="ic" viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="none" stroke="currentColor" stroke-width="'+(w||1.7)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[n]+'</svg>';}
function mark(z,dark){var r=dark?'#FFFFFF':'#1C6E78',st=dark?'#7FA8D0':'#2E5A87',w=Math.round(z*326/248);return '<svg viewBox="0 0 326 248" width="'+w+'" height="'+z+'" role="img" aria-label="KinHolo"><g fill="none" stroke-linecap="round" stroke-width="36"><circle cx="125" cy="124" r="106" stroke="'+r+'"></circle><path d="M233.5 27L233.5 220" stroke="'+st+'"></path><path d="M242 105L307 32" stroke="#E2683C"></path><path d="M234 124L307 220" stroke="#2E8C5A"></path></g></svg>';}
function sb(){return '<div class="sb"><span>9:41</span><span class="sbr"><i></i><i></i><i></i><i></i><b></b></span></div>';}
function av(k,s){var p=P[k];s=s||32;return '<span class="av" style="--c:'+p[1]+';width:'+s+'px;height:'+s+'px;font-size:'+Math.round(s*.42)+'px" aria-label="'+p[0]+'">'+p[0][0]+'</span>';}
function tabs(a){return '<nav class="tabs">'+[['home','Home'],['tasks','Tasks'],['people','People'],['lists','Lists'],['settings','Settings']].map(function(t){return '<a class="'+(t[0]===a?'on':'')+'">'+ic(t[0],23)+'<span>'+t[1]+'</span></a>';}).join('')+'</nav>';}
function keypad(){return '<div class="kp">'+['1','2','3','4','5','6','7','8','9',',','0','del'].map(function(k){return '<span>'+(k==='del'?ic('del',22):k)+'</span>';}).join('')+'</div>';}
function render(id,cls,list,lab){var el=document.getElementById(id);if(!el)return;el.innerHTML=list.map(function(x){return '<figure class="cell"><figcaption><b>'+x[0]+'</b>'+x[1]+'</figcaption><div class="scr '+(x[5]||cls)+(x[4]?' '+x[4]:'')+'" data-screen-label="'+(lab||cls.toUpperCase())+' '+x[0]+' '+x[1]+'">'+sb()+'<div class="bd">'+x[2]()+'</div>'+(x[3]?tabs(x[3]):'<div class="hi"><i></i></div>')+'</div></figure>';}).join('');}
window.KH2={tabs:tabs,ic:ic,mark:mark,av:av,keypad:keypad,render:render,P:P};
})();
