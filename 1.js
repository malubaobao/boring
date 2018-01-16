(()=>{
	function task(){
		var a=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .show");
		var o=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .one");
		var t=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .two");
		var tr=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .three");
		var f=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .four");
		var fi=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .five");
		var s=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .six");		
			a.className="one";
			o.className="two";
			t.className="three";
			tr.className="four";
			f.className="five";
			fi.className="six";
			s.className="show";
	}
	var timer=setInterval(task,2000)
	var p=document.querySelector(".header_box_banner .header_box_shadow").lastElementChild.previousElementSibling;
	var s=document.querySelector(".header_box_banner .header_box_shadow").lastElementChild.previousElementSibling.previousElementSibling;
	var a=document.querySelector(".header_box_banner .header_box_shadow")
	a.onmouseover=function(){
		clearInterval(timer);
		timer=null;
		p.className="header_box_rt";
		s.className="header_box_lt";
	}
	a.onmouseout=function(){
		timer=setInterval(task,2000);
		p.className="";
		s.className="";
	}
	var t1=new Date().getTime();
	console.log(t1);
	p.onclick=function(){
		var a=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .show");
		var o=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .one");
		var t=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .two");
		var tr=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .three");
		var f=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .four");
		var fi=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .five");
		var s=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .six");		
			a.className="one";
			o.className="two";
			t.className="three";
			tr.className="four";
			f.className="five";
			fi.className="six";
			s.className="show";
		var t2 = new Date().getTime();
		if(t2-t1>200){
			t1=t2
		}else{
			document.querySelector(".header_box_banner .header_box_shadow").lastElementChild.className="header_box_stop";		
		}
	}
	s.onclick=function(){
		var a=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .show");
		var o=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .one");
		var t=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .two");
		var tr=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .three");
		var f=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .four");
		var fi=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .five");
		var s=document.querySelector(".header_box_banner .header_box_shadow .header_box_img .six");		
			a.className="six";
			o.className="show";
			t.className="one";
			tr.className="two";
			f.className="three";
			fi.className="four";
			s.className="five";
	}
	var a=document.querySelector(".header_box_banner .header_box_shadow").lastElementChild.children;
		for(b of a){
			b.onclick=function(e){
				var tar=e.target;
				tar.parentNode.className="";
			}
		}
})()