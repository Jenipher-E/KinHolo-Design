(function(){
var K=KH2,B=KH2B,A=KH2A,ic=K.ic,av=K.av;
var PH='src="https://images.unsplash.com/photo-1548289161-f1088e9f559f?w=1200&amp;q=70&amp;auto=format&amp;fit=crop" credit="Photo by Derek Owens on Unsplash" credit-href="https://unsplash.com/@derekowensheart"';
var MB='<span class="mbtn" role="button" aria-label="Open menu">'+ic('menu',24,1.9)+'</span>';
var chev=B.chev;
function ids(h){return h.split('v2b-').join('v2c-').split('v2a-').join('v2c-');}
function withMenu(h){
if(h.indexOf('<p class="k">')>-1)return h.replace('<p class="k">','<p class="k">'+MB);
return h.replace(/<div class="nav"><span><a>Cancel<\/a><\/span><b>([^<]*)<\/b><span><\/span><\/div>/,'<div class="nav"><span>'+MB+'</span><b>$1</b><span><a>Cancel</a></span></div>');}
function c(fn,menu,fix){return function(){var h=ids(fn());if(fix)h=fix(h);if(menu)h=withMenu(h);return h;};}
function msg(who,where,when,text,a1,a2){return '<div class="msg"><div class="mh">'+av(who,30)+'<span><b>'+K.P[who][0]+'</b> '+where+'</span><small>'+when+'</small></div><p>'+text+'</p><div class="ma"><button class="btn mb1">'+a1+'</button><button class="btn mb2">'+a2+'</button></div></div>';}
var riceMsg=msg('t','at Rewe','2 min ago','Basmati rice is sold out. Is jasmine rice OK instead?','Yes, get jasmine','See options');
var NEEDS=/<a class="needs">[\s\S]*?<\/a>/;

function splash(){return '<div class="b-lb"></div><div class="b-splash">'+K.mark(68)+'<p>KinHolo</p><p class="tag">Everything for your Kin</p></div><div class="b-lb"></div>';}
function welcome(){return '<div class="b-wtop"><div class="b-wlock">'+K.mark(26,1)+'<span>KinHolo</span></div><div class="b-screen"><image-slot id="v2c-welcome" shape="rounded" radius="10" '+PH+' placeholder="Tap to add a photo"></image-slot></div></div>'+
'<div class="p b-wb"><h1 class="T2">Run the house together.</h1><p class="le">Shared lists, tasks and monthly budget.<br>With a separate login for everyone in the household.</p>'+
'<div class="stk"><button class="btn b1">Create a household</button><button class="btn b2">I have an invite code</button></div><p class="sm c">Already a member? <a>Sign in</a></p></div>';}
function household(){return A.household().replace('<image-slot id="v2a-hhphoto"','<image-slot id="v2a-hhphoto" '+PH).replace('Photo, if you like','Household photo, if you like').replace('Everyone you invite will see this name.','Everyone you invite will see this name. The photo sits behind the headers in the app.');}

var home=c(B.home,1,function(h){return h.replace(NEEDS,riceMsg).replace(/<li class=""><span class="t">Fri<\/span>[\s\S]*?<\/li>/,'');});
var listsHub=c(B.listsHub,1,function(h){return h.replace(/<div class="srch">[\s\S]*?<\/div>/,'').replace(NEEDS,riceMsg).replace(/<li><span class="nm">Christmas food[\s\S]*?<\/li>/,'');});
var budgets=c(B.budgets,1,function(h){return h.replace(NEEDS,'<div class="msg"><div class="mh"><span class="mi">'+ic('wallet',18)+'</span><span><b>Bills</b> are at 98%</span><small>Today</small></div><p class="last">€410 of €420 spent. Gas usually leaves on the 2nd, so November may start tight.</p></div>');});

function homeNew(np){var row=function(i,t,s){return '<li>'+ic(i,22)+'<span class="nm">'+t+'<small>'+s+'</small></span>'+chev+'</li>';};
var ed='<a class="phedit" role="button" aria-label="'+(np?'Add a household photo':'Change household photo')+'" title="'+(np?'Add a household photo':'Change household photo')+'">'+ic('cam',18)+'</a>';
return B.band('Thursday 30 October','Welcome, Adaeze','The Okafor-Brandt house',av('a',40),ed).replace('<header class="band"',np?'<header class="band nophoto"':'<header class="band"')+
'<div class="sheet-top p"><div class="h"><h2>Get the house set up</h2><span class="sm">1 of 4 done</span></div>'+B.bar(25)+
'<div class="va-in"><h2 class="t2">It’s just you for now.</h2><p class="le">Start wherever suits you. Nothing here is required.</p><ul class="ln ico">'+
row('people','Invite the people you live with','Each person gets their own login')+row('lists','Start a shopping list','Share it with whoever does the shop')+row('tasks','Add a first task','Chores, bills, appointments')+row('wallet','Set a monthly budget','Only adults can see money')+'</ul></div></div>';}

function calendar(){var d=[['Mon',27],['Tue',28],['Wed',29],['Thu',30,1],['Fri',31],['Sat',1],['Sun',2]];
return B.band(MB+'October','This week','3 things today, 2 tomorrow','<a class="bnew">'+ic('plus',17,2.2)+'Add</a>')+
'<div class="sheet-top p"><div class="week">'+d.map(function(x,i){return '<span class="'+(x[2]?'on':'')+'"><small>'+x[0]+'</small><b>'+x[1]+'</b><i class="'+([1,3,4,5].indexOf(i)>-1?'has':'')+'"></i></span>';}).join('')+'</div>'+
'<div class="h"><h2>Today</h2><span class="sm">Thursday</span></div><ul class="cs">'+
B.cs('07:30','School drop-off','Tom',av('t',28))+B.cs('15:30','Ife’s football','Adaeze picks up',av('a',28))+B.cs('18:42','<span class="now">Now</span>','','','nowrow')+B.cs('19:00','Maths homework','Adaeze and Ife',av('i',28))+'</ul>'+
'<div class="h"><h2>Tomorrow</h2><span class="sm">Friday</span></div><ul class="cs">'+B.cs('08:00','Boiler service','Tom is home for it',av('t',28))+B.cs('20:30','Put the bins out','Tom',av('t',28))+'</ul></div>';}

function activity(){var r=[['t','Tom ticked off milk','Saturday shop','18:31'],['t','Tom started shopping','At Rewe on Hauptstraße','18:12'],['i','Ife finished watering the plants','Every day','17:40'],['a','You logged €23.40','Saturday market. Sent when you were back online','12:05'],['n','Nonna added tea bags','Saturday shop','Wed'],['a','You invited Kemi','As a guest','Mon']];
return B.band(MB+'Activity','What’s been happening','Everything shared with you, newest first')+
'<div class="sheet-top p"><div class="seg"><span class="on">All</span><span>Lists</span><span>Tasks</span><span>Money</span></div><ul class="feed">'+
r.map(function(x){return '<li>'+av(x[0],34)+'<span class="nm">'+x[1]+'<small>'+x[2]+'</small></span><span class="tm3">'+x[3]+'</span></li>';}).join('')+'</ul></div>';}

function menuOpen(){var g1=[['home','Home','',1],['tasks','Tasks','6 open'],['lists','Lists','1 needs you'],['wallet','Budgets and expenses','€316 left'],['cal2','Calendar','3 today']],
g2=[['people','People','4'],['act','Activity',''],['bell','Notifications','2 new']],
g3=[['doc','Documents','Soon',0,1],['meal','Meals','Soon',0,1]];
function g(t,rows){return '<h3 class="dg">'+t+'</h3><ul class="dl">'+rows.map(function(r){return '<li class="'+(r[3]?'cur':'')+(r[4]?' soon':'')+'">'+ic(r[0],21)+'<span class="nm">'+r[1]+'</span><span class="dv">'+r[2]+'</span></li>';}).join('')+'</ul>';}
return home()+K.tabs('home')+'<div class="scrim"></div><aside class="drawer"><div class="dh"><span class="dlock">'+K.mark(30)+'<span><b>The Okafor-Brandt house</b><small>4 people</small></span></span><span class="dx" role="button" aria-label="Close menu">'+ic('close',22)+'</span></div>'+
g('Everyday',g1)+g('Household',g2)+g('On the way',g3)+
'<ul class="dl bt2"><li>'+ic('settings',21)+'<span class="nm">Settings</span></li><li>'+ic('help',21)+'<span class="nm">Help and feedback</span></li></ul>'+
'<div class="dme">'+av('a',34)+'<span class="nm">Adaeze Okafor<small>Owner</small></span></div></aside>';}

var L='C',VA='va vc-a';
K.render('rowC1','vb vc',[['01','First screen',splash,null,'lbx'],['02','Welcome',welcome,null,'dk'],['03','Create account',c(A.signup),null,'',VA],['04','Check your email',c(A.verify),null,'',VA],['05','Name your household',c(household),null,'',VA],['06','Home, busy evening',home,'home','dk'],['07','Home, new household',c(homeNew,1),'home','dk'],['08','Home, new household, no photo',c(function(){return homeNew(1);},1),'home','dk']],L);
K.render('rowC2','vb vc',[['09','Menu open',menuOpen,null,'dk mo'],['10','Lists',listsHub,'lists','dk'],['11','Shopping list',c(B.listDetail,1),'lists','dk'],['12','New list',c(B.newList,1),null],['13','Out of stock',c(B.oos,1),null,'dk'],['14','Tasks',c(B.tasksHub,1),'tasks','dk'],['15','New task',c(B.newTask,1),null]],L);
K.render('rowC3','vb vc',[['16','Shared load',c(B.fair,1),'tasks','dk'],['17','Budgets and expenses',budgets,'home','dk'],['18','Log an expense, offline',c(B.expense,1),null],['19','Calendar, from the menu',calendar,'none','dk'],['20','Activity, from the menu',activity,'none','dk'],['21','Settings',c(B.settings,1),'settings','dk'],['22','People and privacy',c(B.people,1),'people','dk']],L);

var scrs=[].slice.call(document.querySelectorAll('.vc .band:not(.nophoto)')).map(function(b){return b.closest('.scr');});
var last=null;
function sync(){var s=document.getElementById('v2c-hhphoto'),img=s&&s.shadowRoot&&s.shadowRoot.querySelector('.frame img');
var url=(s&&s.hasAttribute('data-filled')&&img&&(img.currentSrc||img.src))||'';if(url===last)return;last=url;
scrs.forEach(function(x){x.classList.toggle('hasph',!!url);var b=x.querySelector('.band');b.style.backgroundImage=url?'url("'+url+'")':'';});}
sync();setInterval(sync,700);
})();
