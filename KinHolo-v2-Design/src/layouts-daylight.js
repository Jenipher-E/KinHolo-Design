(function(){
var K=KH2,ic=K.ic,av=K.av;
function top(l,mid,r){return '<div class="top"><span class="tl">'+(l||'')+'</span><span class="tm">'+(mid||'')+'</span><span class="tr">'+(r||'')+'</span></div>';}
var back=ic('back',24);
function fld(l,v,extra,cls){return '<label class="fld"><span>'+l+'</span><span class="in'+(cls?' '+cls:'')+'">'+v+(extra||'')+'</span></label>';}
function row(a,b,c,d){return '<li>'+(a||'')+'<span class="nm">'+b+(c?'<small>'+c+'</small>':'')+'</span>'+(d||'')+'</li>';}
function item(n,w,done,tag){return '<li class="itm'+(done?' done':'')+'"><span class="ck">'+(done?ic('check',14,2.4):'')+'</span><span class="nm">'+n+'<small>'+w+'</small></span>'+(tag||'')+'</li>';}
var chev='<span class="cv">'+ic('chev',18)+'</span>';
function bar(p,c){return '<span class="bar"><i style="width:'+p+'%'+(c?';background:'+c:'')+'"></i></span>';}

function splash(){return '<div class="a-splash"><div class="a-splash-m">'+K.mark(76)+'<p>KinHolo</p></div><p class="a-splash-f">For the people you live with</p></div>';}

function welcome(){return '<div class="a-wph"><image-slot id="v2a-welcome" shape="rect" placeholder="Photo: a household at the kitchen table, late afternoon light"></image-slot></div>'+
'<div class="p a-wb"><div class="lock">'+K.mark(24)+'<span>KinHolo</span></div><h1 class="t1">Run the house together.</h1><p class="le">Lists, tasks and money, shared with the people you live with. Everyone has their own login.</p>'+
'<div class="stk"><button class="btn b1">Create a household</button><button class="btn b2">Join with an invite code</button></div><p class="sm c">Already have an account? <a>Sign in</a></p></div>';}

function signup(){return top(back,'Step 1 of 3')+'<div class="prog"><i style="width:33%"></i></div><div class="p">'+
'<h1 class="t1 mt">Create your account.</h1><p class="le">This login is yours alone. Everyone you invite gets their own.</p>'+
fld('Your name','Adaeze Okafor')+fld('Email','adaeze.okafor@mail.com')+fld('Password','•••••••••••••','<b>Show</b>','foc')+
'<div class="pw">'+bar(75,'#2E8C5A')+'<small>Strong. A short sentence works well too.</small></div>'+
'<button class="btn b1 mt2">Continue</button><p class="or">or continue with</p><div class="two"><button class="btn b2">Google</button><button class="btn b2">Apple</button></div></div>';}

function verify(){return top(back,'Step 2 of 3')+'<div class="prog"><i style="width:66%"></i></div><div class="p">'+
'<h1 class="t1 mt">Check your email.</h1><p class="le">We sent a 6-digit code to adaeze.okafor@mail.com. It works for 10 minutes.</p>'+
'<div class="otp"><span>4</span><span>8</span><span>2</span><span class="cur"></span><span></span><span></span></div>'+
'<p class="sm">Nothing yet? You can send a new code in 0:42.</p><p class="sm"><a>Use a different email</a></p></div><div class="grow"></div>'+K.keypad();}

function household(){return top(back,'Step 3 of 3')+'<div class="prog"><i style="width:100%"></i></div><div class="p">'+
'<h1 class="t1 mt">Name your household.</h1><p class="le">Everyone you invite will see this name.</p>'+fld('Household name','The Okafor-Brandt house','','foc')+
'<div class="fld"><span>Photo, if you like</span><div class="a-hph"><image-slot id="v2a-hhphoto" shape="rounded" radius="16" placeholder="Household photo"></image-slot></div></div>'+
fld('Currency','Euro (€)',ic('chev',18))+'</div><div class="grow"></div><div class="p pb"><button class="btn b1">Continue</button><p class="sm c">Next, you can invite the people you live with.</p></div>';}

function home(){return '<div class="p a-home"><div class="a-hd"><div><p class="sm">Thursday 30 October</p><h1 class="t1">Evening, Adaeze.</h1></div><span class="a-hda">'+ic('bell',23)+av('a',36)+'</span></div>'+
'<div class="a-cover"><image-slot id="v2a-cover" shape="rounded" radius="18" placeholder="Household photo"></image-slot></div>'+
'<ul class="ln need">'+row('<span class="dot"></span>','Tom can’t find basmati rice','He is at the shop and asked you to choose a swap',chev)+'</ul>'+
'<div class="h"><h2>Tonight</h2><a>All tasks</a></div><ul class="ln tl">'+
row('<span class="tm2">19:00</span>','Maths homework with Ife','Adaeze',av('i',26))+
row('<span class="tm2">20:30</span>','Put the bins out','Tom',av('t',26))+'</ul>'+
'<div class="h"><h2>This month</h2><a>Budgets</a></div><ul class="ln">'+row('','€316 left of €1,600','October ends tomorrow'+bar(80),'')+'</ul></div>';}

function homeNew(){return '<div class="p a-home"><div class="a-hd"><div><p class="sm">Thursday 30 October</p><h1 class="t1">Welcome, Adaeze.</h1></div><span class="a-hda">'+av('a',36)+'</span></div>'+
'<div class="a-cover tall"><image-slot id="v2a-cover-new" shape="rounded" radius="18" placeholder="Add a photo of your household"></image-slot></div>'+
'<h2 class="t2">It’s just you for now.</h2><p class="le">Start wherever suits you. Nothing here is required.</p><ul class="ln ico">'+
row(ic('people',22),'Invite the people you live with','Each person gets their own login',chev)+
row(ic('lists',22),'Start a shopping list','Share it with whoever does the shop',chev)+
row(ic('tasks',22),'Add a first task','Chores, bills, appointments',chev)+
row(ic('wallet',22),'Set a monthly budget','Only adults can see money',chev)+'</ul></div>';}

function listsHub(){return '<div class="p"><div class="a-hd2"><h1 class="t1">Lists</h1><a class="act">'+ic('plus',18,2)+'New list</a></div>'+
'<div class="srch">'+ic('search',19)+'<span>Search lists and items</span></div>'+
'<ul class="ln need">'+row('<span class="dot"></span>','Waiting on you','Basmati rice is out of stock at Rewe',chev)+'</ul>'+
'<ul class="ln lst">'+
row('','Saturday shop','<span class="live">Tom is shopping now</span>'+bar(64),'<span class="ct">7 of 11</span>')+
row('','Pharmacy','Adaeze, 3 things'+bar(0),'<span class="ct">0 of 3</span>')+
row('','Ife’s school things','Shared with Ife'+bar(40),'<span class="ct">2 of 5</span>')+
row('','Christmas food','For 20 December'+bar(0),'<span class="ct">0 of 18</span>')+'</ul>'+
'<div class="h"><h2>Finished this week</h2></div><ul class="ln">'+row('','Wednesday top-up','Finished by Tom yesterday','<span class="ct">6 of 6</span>')+'</ul></div>';}

function listBody(){return top(back,'',ic('share',21))+'<div class="p"><h1 class="t1 sm1">Saturday shop</h1><p class="sm"><span class="live">Tom is shopping now</span>. 7 of 11 done</p>'+
'<h3 class="grp">Fruit and veg</h3><ul class="its">'+item('Plantain, 6','Adaeze',1)+item('Spinach, 2 bags','Tom',1)+item('Tomatoes, 1 kg','Ife',0)+'</ul>'+
'<h3 class="grp">Fridge</h3><ul class="its">'+item('Milk, 2 litres','Tom',1)+item('Greek yoghurt','Ife',0)+'</ul>'+
'<h3 class="grp">Cupboard</h3><ul class="its">'+item('Basmati rice, 5 kg','Adaeze',0,'<span class="oos">Out of stock</span>')+item('Palm oil, 1 litre','Adaeze',0)+'</ul></div>';}
function listDetail(){return listBody()+'<div class="grow"></div><div class="addbar"><span>'+ic('plus',20,2)+'</span>Add an item</div>';}

function newList(){return top('<a>Cancel</a>','New list','')+'<div class="p">'+fld('Name','Pharmacy','','foc')+
'<div class="fld"><span>Who can see it</span><div class="who">'+
[['a',1,'You'],['t',1,'Tom'],['i',0,'Ife'],['n',0,'Nonna']].map(function(m){return '<span class="'+(m[1]?'on':'')+'">'+av(m[0],44)+(m[1]?'<i>'+ic('check',12,3)+'</i>':'')+'<small>'+m[2]+'</small></span>';}).join('')+'</div></div>'+
'<div class="fld"><span>Start from</span><ul class="rad">'+
'<li class="on"><span class="rd"></span><span class="nm">An empty list</span></li>'+
'<li><span class="rd"></span><span class="nm">Last pharmacy run<small>3 things, from 12 October</small></span></li>'+
'<li><span class="rd"></span><span class="nm">Weekly basics<small>8 things you buy most weeks</small></span></li></ul></div>'+
fld('Shop','Any shop',ic('chev',18))+'</div><div class="grow"></div><div class="p pb"><button class="btn b1">Create list</button></div>';}

function oos(){return listBody()+'<div class="scrim"></div><div class="sheet"><span class="hdl"></span><h2 class="t2">Basmati rice isn’t on the shelf.</h2><p class="le">Adaeze added it on Tuesday. She’ll see what you choose.</p>'+
'<ul class="rad">'+
'<li class="on"><span class="rd"></span><span class="nm">Swap for jasmine rice, 5 kg<small>Same aisle, €8.49</small></span></li>'+
'<li><span class="rd"></span><span class="nm">Keep it for next Saturday</span></li>'+
'<li><span class="rd"></span><span class="nm">Ask Adaeze first<small>She gets both options</small></span></li></ul>'+
'<button class="btn b1">Swap it</button><button class="btn b3">Cancel</button></div>';}

function tasksHub(){return '<div class="p"><div class="a-hd2"><h1 class="t1">Tasks</h1><a class="act">'+ic('plus',18,2)+'New task</a></div>'+
'<div class="seg"><span class="on">Everyone</span><span>Mine</span><span>Done</span></div>'+
'<ul class="ln">'+row('','You did 41% of tasks this month','See how it’s shared',chev)+'</ul>'+
'<h3 class="grp">Today</h3><ul class="its">'+item('Pay for the school trip, €18','Adaeze','','<span class="due">Due today</span>')+item('Water the plants','Ife, every day',1)+'</ul>'+
'<h3 class="grp">Friday</h3><ul class="its">'+item('Book the boiler service','Tom',0)+item('Put the bins out','Tom, every Friday',0)+'</ul>'+
'<h3 class="grp">Sunday</h3><ul class="its">'+item('Call Nonna about Christmas','Adaeze',0)+'</ul>'+
'<h3 class="grp">Nobody yet</h3><ul class="its">'+item('Fix the bathroom light','Added by Tom',0,'<a class="take">I’ll do it</a>')+'</ul></div>';}

function newTask(){return top('<a>Cancel</a>','New task','')+'<div class="p"><p class="big-in">Book the boiler service<i></i></p>'+
'<div class="fld"><span>Who’s doing it</span><div class="who sm2">'+[['a',0,'You'],['t',1,'Tom'],['i',0,'Ife'],['n',0,'Nonna']].map(function(m){return '<span class="'+(m[1]?'on':'')+'">'+av(m[0],40)+(m[1]?'<i>'+ic('check',11,3)+'</i>':'')+'<small>'+m[2]+'</small></span>';}).join('')+'<span class="any"><b>?</b><small>Anyone</small></span></div></div>'+
'<ul class="ln ico set">'+row(ic('cal',21),'When','','<span class="val">Fri 31 October</span>')+row(ic('repeat',21),'Repeats','','<span class="val">Every year</span>')+row(ic('eye',21),'Who can see it','','<span class="val">Everyone</span>')+'</ul>'+
fld('Note','Ask for the 8am slot. The account number is on the last bill.','','ta')+'</div><div class="grow"></div><div class="p pb"><button class="btn b1">Add task</button></div>';}

function fair(){var p=[['a',41,38],['t',27,25],['i',18,17],['n',14,13]];
return top(back)+'<div class="p"><h1 class="t1 sm1">Who did what</h1><p class="sm">Finished tasks and lists, last 4 weeks</p><ul class="ln fair">'+
p.map(function(x){return row(av(x[0],32),K.P[x[0]][0]+'<em>'+x[1]+'%</em>',x[2]+' things'+bar(x[1]*2,K.P[x[0]][1]),'');}).join('')+'</ul>'+
'<div class="idea"><h2 class="t2">One idea</h2><p class="le">If Tom takes the Tuesday school run, you would be at 36% and Tom at 32%.</p><div class="two"><button class="btn b1">Suggest it to Tom</button><button class="btn b2">Not now</button></div></div>'+
'<p class="sm foot">Only the adults in the household can see this page.</p></div>';}

function budgets(){var c=[['Groceries',312,450],['Bills',410,420,1],['School',180,200],['Transport',96,150],['Eating out',286,380]];
return top(back,'','<a>Edit</a>')+'<div class="p"><p class="sm">October</p><p class="a-amt">€1,284</p><p class="le">spent of €1,600. €316 left, with 1 day to go.</p>'+bar(80)+
'<ul class="ln need mt">'+row('<span class="dot"></span>','Bills are at 98%','The gas payment usually leaves on the 2nd',chev)+'</ul>'+
'<ul class="ln cats">'+c.map(function(x){return row('',x[0]+'<em>€'+x[1]+' of €'+x[2]+'</em>','',bar(Math.round(x[1]/x[2]*100),x[3]?'#E2683C':''));}).join('')+'</ul>'+
'<button class="btn b1 mt">Log an expense</button></div>';}

function expense(){return top('<a>Cancel</a>','New expense','')+'<p class="offl">'+ic('offline',17)+'No signal. This saves on your phone and sends later.</p><div class="p">'+
'<p class="a-amt c">€23.40<i></i></p>'+fld('What for','Saturday market')+
'<div class="chips"><span class="on">Groceries</span><span>Eating out</span><span>Transport</span><span>School</span></div>'+
'<ul class="ln set">'+row('','Paid by','','<span class="val">'+av('a',22)+'You</span>')+'</ul></div><div class="grow"></div>'+K.keypad()+'<div class="p pb"><button class="btn b1">Save</button></div>';}

function settings(){return '<div class="p"><h1 class="t1">Settings</h1><ul class="ln prof">'+row(av('a',48),'Adaeze Okafor','adaeze.okafor@mail.com',chev)+'</ul>'+
'<h3 class="grp">Household</h3><ul class="ln set">'+row('','People','','<span class="val">4</span>'+chev)+row('','Name and photo','','<span class="val">Okafor-Brandt</span>'+chev)+row('','Who sees new things','','<span class="val">Everyone</span>'+chev)+'</ul>'+
'<h3 class="grp">You</h3><ul class="ln set">'+row('','Sign-in and Face ID','','<span class="val">On</span>'+chev)+row('','Notifications','','<span class="val">Evening summary</span>'+chev)+row('','Language','','<span class="val">English</span>'+chev)+'</ul>'+
'<h3 class="grp">This phone</h3><ul class="ln set">'+row('','Saved for offline use','','<span class="val">4.2 MB</span>')+row('','Help and feedback','',chev)+row('','<span class="so">Sign out</span>','','')+'</ul></div>';}

function people(){var m=[['a','Adaeze, you','Owner. Manages people and money'],['t','Tom','Adult. Sees everything shared'],['i','Ife, 12','Child. Her tasks, lists and the calendar'],['n','Nonna','Guest. Lists only']];
return '<div class="p"><h1 class="t1">People</h1><p class="sm">The Okafor-Brandt house</p><ul class="ln mem">'+m.map(function(x){return row(av(x[0],40),x[1],x[2],chev);}).join('')+
row('<span class="av pend">K</span>','Kemi','Invited Monday. Not joined yet','<a class="take">Resend</a>')+'</ul>'+
'<button class="btn b2 mt">'+ic('plus',18,2)+'Invite someone</button>'+
'<h3 class="grp">New things you add are seen by</h3><div class="seg"><span class="on">Everyone</span><span>Some people</span><span>Just me</span></div><p class="sm">You can change this on any list, task or expense. Children never see money unless you choose.</p></div>';}

window.KH2A={signup:signup,verify:verify,household:household,homeNew:homeNew};
})();
