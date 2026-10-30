(function(){
var K=KH2,ic=K.ic,av=K.av;
var chev='<span class="cv">'+ic('chev',18)+'</span>';
function bar(p,c){return '<span class="bar"><i style="width:'+p+'%'+(c?';background:'+c:'')+'"></i></span>';}
function band(k,t,s,r,extra){return '<header class="band"><div class="bt"><div><p class="k">'+k+'</p><h1 class="T">'+t+'</h1></div>'+(r||'')+'</div>'+(s?'<p class="bs">'+s+'</p>':'')+(extra||'')+'</header>';}
function nav(l,t,r){return '<div class="nav"><span>'+(l||'')+'</span><b>'+(t||'')+'</b><span>'+(r||'')+'</span></div>';}
function fld(l,v,extra,cls){return '<label class="fld'+(cls?' '+cls:'')+'"><small>'+l+'</small><span>'+v+'</span>'+(extra||'')+'</label>';}
function cs(t,n,w,a,cls){return '<li class="'+(cls||'')+'"><span class="t">'+t+'</span><span class="nm">'+n+(w?'<small>'+w+'</small>':'')+'</span>'+(a||'')+'</li>';}
function item(n,w,done,tag){return '<li class="itm'+(done?' done':'')+'"><span class="ck">'+(done?ic('check',14,2.6):'')+'</span><span class="nm">'+n+'<small>'+w+'</small></span>'+(tag||'')+'</li>';}
function steps(n){return '<div class="steps">'+[1,2,3].map(function(i){return '<i class="'+(i<=n?'on':'')+'"></i>';}).join('')+'</div>';}
var newBtn=function(l){return '<a class="bnew">'+ic('plus',17,2.2)+l+'</a>';};

function splash(){return '<div class="b-lb"></div><div class="b-splash">'+K.mark(68)+'<p>KinHolo</p></div><div class="b-lb"></div>';}

function welcome(){return '<div class="b-wtop"><div class="b-wlock">'+K.mark(26,1)+'<span>KinHolo</span></div><div class="b-screen"><image-slot id="v2b-welcome" shape="rounded" radius="8" placeholder="Photo: someone unpacking shopping while a child sets the table"></image-slot></div></div>'+
'<div class="p b-wb"><h1 class="T2">Share the running of your home.</h1><p class="le">Shopping, tasks and the monthly budget, with a separate login for everyone you live with.</p>'+
'<div class="stk"><button class="btn b1">Create a household</button><button class="btn b2">I have an invite code</button></div><p class="sm c">Already a member? <a>Sign in</a></p></div>';}

function signup(){return nav(ic('back',24),'','<span class="sm">1 of 3</span>')+'<div class="p">'+steps(1)+'<h1 class="T2 mt">Your account</h1><p class="le">Just for you. People you invite will make their own.</p>'+
'<div class="fgrp">'+fld('Full name','Adaeze Okafor')+fld('Email','adaeze.okafor@mail.com')+fld('Password','•••••••••••••','<b class="show">Show</b>','foc')+'</div>'+
'<p class="pw"><i></i><i></i><i></i><i class="off"></i><span>Strong password</span></p>'+
'<button class="btn b1 mt2">Continue</button><div class="or"><span>or</span></div><div class="stk s8"><button class="btn b2">Continue with Google</button><button class="btn b2">Continue with Apple</button></div>'+
'<p class="sm c mt">No ads. Your household’s data is never sold.</p></div>';}

function verify(){return nav(ic('back',24),'','<span class="sm">2 of 3</span>')+'<div class="p">'+steps(2)+'<h1 class="T2 mt">Enter the code</h1><p class="le">Sent to adaeze.okafor@mail.com</p>'+
'<div class="otp"><span>4</span><span>8</span><span>2</span><span class="cur"></span><span></span><span></span></div><div class="two-l"><span class="sm">Resend in 0:42</span><a class="sm">Change email</a></div></div><div class="grow"></div>'+K.keypad();}

function household(){return nav(ic('back',24),'','<span class="sm">3 of 3</span>')+'<div class="p">'+steps(3)+'<h1 class="T2 mt">Your household</h1><p class="le">This is the name everyone you invite will see.</p>'+
'<div class="fgrp">'+fld('Household name','The Okafor-Brandt house','','foc')+fld('Currency','Euro (€)',ic('chev',18))+'</div>'+
'<div class="b-hph"><image-slot id="v2b-hhphoto" shape="rounded" radius="16" placeholder="Add a household photo (optional)"></image-slot></div></div><div class="grow"></div><div class="p pb"><button class="btn b1">Create household</button></div>';}

function home(){return band('Thursday 30 October','Evening, Adaeze','Two things tonight. €316 left this month.',av('a',40))+
'<div class="sheet-top p"><a class="needs"><span class="dot"></span><span class="nm">Tom can’t find basmati rice<small>He’s at the shop now and asked you to pick a swap</small></span><b>Choose</b></a>'+
'<div class="h"><h2>Tonight</h2><a>All tasks</a></div><ul class="cs">'+
cs('18:42','<span class="now">Now</span>','','','nowrow')+
cs('19:00','Maths homework with Ife','Adaeze',av('i',28))+
cs('20:30','Put the bins out','Tom',av('t',28))+
cs('Fri','School trip money, €18','Adaeze, due tomorrow',av('a',28))+'</ul>'+
'<div class="duo"><a class="blk"><small>Saturday shop</small><b>4 left</b><span>Tom is shopping</span></a><a class="blk"><small>October budget</small><b>€316</b><span>left of €1,600</span></a></div></div>';}

function homeNew(){return band('Thursday 30 October','Welcome, Adaeze','The Okafor-Brandt house',av('a',40))+
'<div class="sheet-top p"><div class="h"><h2>Get the house set up</h2><span class="sm">1 of 4 done</span></div>'+bar(25)+
'<ol class="setup"><li class="done"><span class="n">'+ic('check',15,2.6)+'</span><span class="nm">Create your household<small>Done</small></span></li>'+
'<li class="cur"><span class="n">2</span><span class="nm">Invite the people you live with<small>Everyone gets their own login</small><button class="btn b1 sm3">Invite someone</button></span></li>'+
'<li><span class="n">3</span><span class="nm">Start a shopping list<small>Share it with whoever shops</small></span>'+chev+'</li>'+
'<li><span class="n">4</span><span class="nm">Add a first task<small>Chores, bills, appointments</small></span>'+chev+'</li></ol>'+
'<p class="sm c">You can skip any of these and come back later.</p></div>';}

function listsHub(){return band('Lists','4 lists','1 thing is waiting on you',newBtn('New'))+
'<div class="sheet-top p"><div class="srch">'+ic('search',19)+'<span>Search lists and items</span></div>'+
'<a class="needs"><span class="dot"></span><span class="nm">Basmati rice is out of stock<small>Saturday shop, Tom is asking</small></span><b>Choose</b></a>'+
'<ul class="lcards">'+
'<li><span class="nm">Saturday shop<small><span class="live">Tom is shopping now</span></small></span><b class="fr">7<i>/11</i></b>'+bar(64)+'</li>'+
'<li><span class="nm">Pharmacy<small>Adaeze, for this week</small></span><b class="fr">0<i>/3</i></b>'+bar(0)+'</li>'+
'<li><span class="nm">Ife’s school things<small>Shared with Ife</small></span><b class="fr">2<i>/5</i></b>'+bar(40)+'</li>'+
'<li><span class="nm">Christmas food<small>For 20 December</small></span><b class="fr">0<i>/18</i></b>'+bar(0)+'</li></ul></div>';}

function listBody(){return band('<span class="bk">'+ic('back',20)+'Lists</span>','Saturday shop','<span class="live lt">Tom is shopping now</span>','<span class="avs">'+av('t',30)+av('a',30)+'</span>')+
'<div class="sheet-top p"><div class="prg"><span><b>7</b> of 11 done</span>'+bar(64)+'</div>'+
'<h3 class="grp">Fruit and veg</h3><ul class="its">'+item('Plantain, 6','Adaeze',1)+item('Tomatoes, 1 kg','Ife',0)+'</ul>'+
'<h3 class="grp">Fridge</h3><ul class="its">'+item('Milk, 2 litres','Tom',1)+item('Greek yoghurt','Ife',0)+'</ul>'+
'<h3 class="grp">Cupboard</h3><ul class="its">'+item('Basmati rice, 5 kg','Adaeze',0,'<span class="oos">Out of stock</span>')+item('Palm oil, 1 litre','Adaeze',0)+'</ul></div>';}
function listDetail(){return listBody()+'<div class="grow"></div><div class="addbar"><span>Add an item</span><b>'+ic('plus',20,2.2)+'</b></div>';}

function newList(){return nav('<a>Cancel</a>','New list','')+'<div class="p"><p class="big-in">Pharmacy<i></i></p>'+
'<div class="h"><h2>Start from</h2></div><div class="tmpl"><span class="on"><b>Empty</b><small>Start fresh</small></span><span><b>Last run</b><small>3 things</small></span><span><b>Basics</b><small>8 things</small></span></div>'+
'<div class="h"><h2>Shared with</h2></div><ul class="tog">'+
[['a','You',1,1],['t','Tom',1],['i','Ife',0],['n','Nonna',0]].map(function(m){return '<li>'+av(m[0],32)+'<span class="nm">'+m[1]+'</span><span class="sw'+(m[2]?' on':'')+(m[3]?' lk':'')+'"><i></i></span></li>';}).join('')+'</ul>'+
'<div class="h"><h2>Shopping day</h2><span class="sm">Optional</span></div><div class="days">'+['M','T','W','T','F','S','S'].map(function(d,i){return '<span class="'+(i===5?'on':'')+'">'+d+'</span>';}).join('')+'</div></div><div class="grow"></div><div class="p pb"><button class="btn b1">Create list</button></div>';}

function oos(){return listBody()+'<div class="scrim"></div><div class="sheet"><span class="hdl"></span><p class="k2">Not on the shelf</p><h2 class="T3">Basmati rice, 5 kg</h2><p class="le">Adaeze added this on Tuesday. She’ll see what you choose.</p>'+
'<ul class="opts"><li class="on"><span class="rd"></span><span class="nm">Swap for jasmine rice, 5 kg<small>Same aisle, €8.49</small></span></li><li><span class="rd"></span><span class="nm">Keep it for next Saturday</span></li><li><span class="rd"></span><span class="nm">Ask Adaeze first<small>She gets both options</small></span></li></ul>'+
'<button class="btn b1">Swap it</button></div>';}

function tasksHub(){var d=[['Mon',27],['Tue',28],['Wed',29],['Thu',30,1],['Fri',31],['Sat',1],['Sun',2]];
return band('Tasks','6 open','1 due today. 1 nobody has taken yet.',newBtn('New'))+
'<div class="sheet-top p"><div class="week">'+d.map(function(x,i){return '<span class="'+(x[2]?'on':'')+'"><small>'+x[0]+'</small><b>'+x[1]+'</b><i class="'+([3,4,6].indexOf(i)>-1?'has':'')+'"></i></span>';}).join('')+'</div>'+
'<div class="seg"><span class="on">Everyone</span><span>Mine</span><span>Done</span></div>'+
'<h3 class="grp">Today</h3><ul class="its">'+item('Pay for the school trip, €18','Adaeze','','<span class="due">Today</span>')+item('Water the plants','Ife, every day',1)+'</ul>'+
'<h3 class="grp">Friday</h3><ul class="its">'+item('Book the boiler service','Tom',0)+'</ul>'+
'<h3 class="grp">Nobody yet</h3><ul class="its">'+item('Fix the bathroom light','Added by Tom',0,'<a class="take">Take it</a>')+'</ul>'+
'<a class="loadrow"><span class="nm">Your share this month<small>41% of finished tasks</small></span>'+chev+'</a></div>';}

function newTask(){return nav('<a>Cancel</a>','New task','')+'<div class="p"><p class="big-in">Book the boiler service<i></i></p>'+
'<div class="h"><h2>Who</h2></div><div class="whob">'+[['a','You'],['t','Tom',1],['i','Ife'],['n','Nonna']].map(function(m){return '<span class="'+(m[2]?'on':'')+'">'+av(m[0],26)+m[1]+'</span>';}).join('')+'</div>'+
'<div class="h"><h2>When</h2></div><div class="chips"><span>Today</span><span>Tomorrow</span><span class="on">Fri 31 Oct</span><span>'+ic('cal',16)+'Pick</span></div>'+
'<div class="h"><h2>Repeats</h2></div><div class="seg"><span>Never</span><span>Weekly</span><span>Monthly</span><span class="on">Yearly</span></div>'+
'<div class="fgrp mt">'+fld('Note','Ask for the 8am slot. Account number is on the last bill.')+fld('Who can see it','Everyone in the household',ic('chev',18))+'</div></div><div class="grow"></div><div class="p pb"><button class="btn b1">Add task</button></div>';}

function fair(){var p=[['a',41,'School, meals, paperwork'],['t',27,'Shopping, bins, repairs'],['i',18,'Plants, dishes'],['n',14,'Cooking on Sundays']];
return band('<span class="bk">'+ic('back',20)+'Tasks</span>','Shared load','Finished tasks and lists, last 4 weeks')+
'<div class="sheet-top p"><div class="stack">'+p.map(function(x){return '<i style="flex:'+x[1]+';background:'+K.P[x[0]][1]+'"></i>';}).join('')+'</div>'+
'<ul class="lg">'+p.map(function(x){return '<li>'+av(x[0],32)+'<span class="nm">'+K.P[x[0]][0]+'<small>'+x[2]+'</small></span><b>'+x[1]+'%</b></li>';}).join('')+'</ul>'+
'<div class="idea"><p class="k2">One idea</p><p class="lede2">Tom takes the Tuesday school run.</p><p class="sm">You’d be at 36% and Tom at 32%. Nothing changes unless Tom says yes.</p><div class="two"><button class="btn b1">Ask Tom</button><button class="btn b2">Not now</button></div></div>'+
'<p class="sm c">Only adults in the household see this.</p></div>';}

function budgets(){var c=[['Groceries',312,450],['Bills',410,420,1],['School',180,200],['Transport',96,150],['Eating out',286,380]];
return band('<span class="bk">'+ic('back',20)+'Home</span>','€316 left','of €1,600 for October. 1 day to go.','<a class="bnew">Edit</a>','<span class="bbar"><i style="width:80%"></i></span>')+
'<div class="sheet-top p"><a class="needs"><span class="dot"></span><span class="nm">Bills are at 98%<small>Gas usually leaves on the 2nd</small></span>'+chev+'</a>'+
'<ul class="cats">'+c.map(function(x){return '<li class="'+(x[3]?'w':'')+'"><span class="nm">'+x[0]+'</span><b>€'+x[1]+'<i> / €'+x[2]+'</i></b>'+bar(Math.round(x[1]/x[2]*100),x[3]?'#E2683C':'')+'</li>';}).join('')+'</ul>'+
'<button class="btn b1 mt">Log an expense</button></div>';}

function expense(){return nav('<a>Cancel</a>','New expense','')+'<p class="offl">'+ic('offline',17)+'Offline. Saved on this phone until you’re connected.</p><div class="p">'+
'<p class="amt">€23<span>.40</span><i></i></p><div class="cat">'+['Groceries','Eating out','Transport','School'].map(function(x,i){return '<span class="'+(i===0?'on':'')+'">'+x+'</span>';}).join('')+'</div>'+
'<div class="fgrp">'+fld('What for','Saturday market')+fld('Paid by','You, split with the household',ic('chev',18))+'</div></div><div class="grow"></div>'+K.keypad()+'<div class="p pb"><button class="btn b1">Save expense</button></div>';}

function settings(){function g(rows){return '<ul class="grpd">'+rows.map(function(r){return '<li>'+ic(r[0],20)+'<span class="nm">'+r[1]+'</span>'+(r[2]?'<span class="val">'+r[2]+'</span>':'')+(r[3]===0?'':chev)+'</li>';}).join('')+'</ul>';}
return band('Settings','Adaeze Okafor','Owner of the Okafor-Brandt house',av('a',46))+
'<div class="sheet-top p"><h3 class="grp">Household</h3>'+g([['people','People','4'],['home','Name and photo'],['eye','Who sees new things','Everyone']])+
'<h3 class="grp">You</h3>'+g([['face','Sign-in and Face ID','On'],['bell','Notifications','Evenings'],['globe','Language','English']])+
'<h3 class="grp">This phone</h3>'+g([['phone','Saved for offline','4.2 MB',0],['help','Help and feedback'],['out','<span class="so">Sign out</span>','',0]])+'</div>';}

function people(){var m=[['a','Adaeze','You. Owner','Everything, and manages money'],['t','Tom','Adult','Everything shared with the household'],['i','Ife','Child, 12','Her tasks, her lists, the calendar'],['n','Nonna','Guest','Shopping lists only']];
return band('People','4 people','1 invite waiting',newBtn('Invite'))+
'<div class="sheet-top p"><ul class="mems">'+m.map(function(x){return '<li>'+av(x[0],40)+'<span class="nm">'+x[1]+' <em>'+x[2]+'</em><small>Sees: '+x[3]+'</small></span>'+chev+'</li>';}).join('')+
'<li class="pend"><span class="av pnd">K</span><span class="nm">Kemi <em>Invited</em><small>Invited Monday</small></span><a class="take">Resend</a></li></ul>'+
'<div class="h"><h2>New things are seen by</h2></div><div class="seg"><span class="on">Everyone</span><span>Some people</span><span>Just me</span></div><p class="sm">Change this on any list, task or expense. Children never see money unless you choose.</p></div>';}

window.KH2B={splash:splash,welcome:welcome,signup:signup,verify:verify,household:household,home:home,homeNew:homeNew,listsHub:listsHub,listDetail:listDetail,newList:newList,oos:oos,tasksHub:tasksHub,newTask:newTask,fair:fair,budgets:budgets,expense:expense,settings:settings,people:people,band:band,cs:cs,bar:bar,chev:chev};
})();
