function $(selector){
	var el;
	if (typeof selector === "string" || selector instanceof String) {
		el = document.querySelector(selector);
	} else {
		el = selector;
	}
	const self = {
		//element: document.querySelector(el),
		element: el,
		
		attr:(name, value) => {
			if(value == null){
				self.element.getAttribute(name);
			} else{
				self.element.setAttribute(name, value);
			}
		},
		
		hide:()=>{
			self.element.style.display = "none";
		},
		show:()=>{
			self.element.style.display = "block";
		},
		toggle:()=>{
			if(self.element.style.display == "none"){
				self.element.style.display = "block";
			} else {
				self.element.style.display = "none";
			}
		},
		val:(value)=> {
			if(value == null){
				return self.element.value;
			} else {
				self.element.value = value;
			}
		},
		html:(value) => {
			if(value == null){
				return self.element.innerHTML;
			} else {
				self.element.innerHTML = value;
			}
		},
		append:(value)=> {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML += value;
			}
		},
		remove:(value)=> {
			self.element.remove();
		},
		
		each:(fn) => {
			elements = document.querySelectorAll(selector);
			for (var i = 0; i < elements.length; i++){
				fn(elements[i]);
			}
		},
		
		on:(event, callback) => {
			self.element.addEventListener(event, callback);
		}
	}
	return self;
}
function openNav() {
  document.getElementById("leftside").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("leftside").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
var aGas = [];
var imgDir = '';
aGas['imgdir'] = [];
aGas['imgfile'] = [];
var kbId = '';
var imgCount = 0;

const fileUrl = 'ac_data.txt' // provide file location
fetch(fileUrl)
   .then( r => r.text() )
   .then( t => $('.data-txt').html(t) )
   
function caseSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("kbCase");
    filter = input.value.toUpperCase();
    ul = document.getElementById("caseList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$('.btn-back').on("click", function(){
	var cfno = $('.cfno').val();
	var cf = (parseInt(cfno)-1);
	if(cf > 0){
		$('.cfno').val(cf);
		$(".cf-"+cfno).hide();
		$(".cf-"+cf).show();
	}
});
$('.btn-next').on("click", function(){
	var cfCnt = document.querySelectorAll('.call-flow').length;
	var cfno = $('.cfno').val();
	var cf = (parseInt(cfno)+1);
	if(cf <= cfCnt){
		$('.cfno').val(cf);
		$(".cf-"+cfno).hide();
		$(".cf-"+cf).show();
	}
});
$('.btn-wrap').on("click", function(){
	$('.wrapup').toggle();
});

$('.bi-next').on("click", function(){
	var cfCnt = imgCount;
	var cfno = $('.cfno-img').val();
	var cf = (parseInt(cfno)+1);
	if(cf <= cfCnt){
		$('.cfno-img').val(cf);
		$("#img-"+cfno).hide();
		$("#img-"+cf).show();
	}
});
$('.bi-back').on("click", function(){
	var cfno = $('.cfno-img').val();
	var cf = (parseInt(cfno)-1);
	if(cf > 0){
		$('.cfno-img').val(cf);
		$("#img-"+cfno).hide();
		$("#img-"+cf).show();
	}
});
$('.btn-img-show').on("click", function(){
	//loadImages();
	$('.kb-images').show();
});

$('.btn-img-hide').on("click", function(){
	$('.kb-images').hide();
});
$('.btn-calc').on("click", function(){
	var iText = $('.cf-temp').val().split(' ');
	var ahtm = 0; var ahts = 0;
	for(var i = 0;i < iText.length;i++){
		var aht = iText[i].split('.');
		//alert();
		ahtm += parseInt(aht[0]) * 60;
		ahts += parseInt(aht[1]);
	}
	var secs = ahtm + ahts;
	var mins = (ahtm + ahts) / 60;
	// + Math.ceil(mins) + ' minutes'
	alert(ahtm +' + '+ ahts +' = '+ secs + ' seconds');
});


$('.btnLoadText').on("click", function(){
	$('#caseList').html('');
	var mCDid=''; var mTxt=''; var mTxtCnt = 0; var mTxtLink = '';
	var iText = $('.data-txt').val().split('\n');
	for(var i = 0;i < iText.length;i++){
		if(iText[i].trim() == '*Start:'){
			if(i > 0){
				$('#caseList').append('<li><a href="#" title="'+mCDid+'" onclick="kbShow(this)">'+ mTxtLink +'</a></li>');
				$('.cf-images').append('<div id="img-'+mCDid+'"></div>');
				//$('.kb-desc').append('<div id="'+mCDid+'" class="'+mCDid+'">'+mTxt+'</div>');
				$('.kb-desc').append('<textarea id="'+mCDid+'" class="kb-item '+mCDid+'">'+mTxt+'</textarea>');
				mTxt = ''; mCDid = ''; mTxtLink = '';
				//alert(i +' | '+ iText[i]);
			}
		} else {
			var ix = iText[i].split(':'); //alert(iText[i]);
			var ixa = ix[0].trim();
			if(ix.length > 1){
				var ixb = ix[1].trim();
			}
			
			switch(ixa) {
				case '*Issue':
					mTxtLink += ix[1].trim();
					mCDid = spaceToDash(ix[1].trim());
					break;
				case '*Case':
					mTxtLink += ' - ' + ix[1].trim();
					break;
			} 
			mTxt += iText[i] + '\n';
			
		}
	}
	$('.data-txt').val('');
});

function spaceToDash(str){
	if(typeof(str) != null || typeof(str) != 'undefined'){
		var iB = str.split(' ');
		var std = str;
		for(var a = 0; a < iB.length; a++){
			std = std.replace(' ', '_');
		}
		return std;
	}
}
function kbShow(el){
	var id = el.getAttribute('title');
	kbId = id;
	$('.kb-info').val($('.' + id).val());
	$('.kb-info').show();
	loadImages(id);	
}
$('.tab-btns').each(function(e){
	$(e).on("click", function(){
		alert(this.nodeName + " | " + this.innerHTML);
	});
});
function loadImages(id){
	var kbd = '';
	$('.kb-docs').html('');
	$('.kb-images').html('');
	$('.cfno-img').val(1);
	var iText = $('.kb-info').val().split('\n');
	for(var i = 0;i < iText.length;i++){
		var ix = iText[i].split(':'); //alert(iText[i]);
		var ixa = ix[0].trim();
		if(ix.length > 1){
			var ixb = ix[1].trim();
		}
		
		switch(ixa) {
			case '*Img-dir':
				imgDir = ix[1].trim();
				break;
			case '*Img-file':
				var imgs = ix[1].trim().split(',');
				$('.kb-images').html('');
				for(var x = 0; x < imgs.length; x++){
					$('.kb-images').append('<img src="'+ imgDir + '/' + imgs[x] +'" alt="img-'+x+'" class="kbimges" id="img-'+(x+1)+'" />');
					//alert('/' + imgDir + '/' + imgs[x]);
				}
				imgCount = imgs.length;
				$('#img-1').show();
				//alert(imgDir + "\n\n" + imgs);
				break;
			case '*Tab':
				$('.kb-docs').append("<span>"+ ix[1].trim().replace('=',':') + "</span><br />");
				break;
			default:
				kbd += iText[i] + '\n';
				break;
		}
	}
	$('.kb-info').val(kbd);
}

/*$('.btnJapi').on("click", function(){
	var el=''; var iCnt = 0;
	for(let i of jap){
		for(var k in i){
			//alert("Key is " + k + ", value is " + i[k]);
			var ks = k.trim();
			switch(k) {
			  case 'html':
			  case 'recno':
			  case 'appenTo':
			  case 'elem':
				break;			
			  default:
				el += k + '="' + i[k] + '" ';
				break;
			} 
		}
		iCnt++;
		if(typeof(i.html) != 'undefined'){
			var html = '<'+ i.elem +' '+ el +' >'+i.html+'</'+i.elem +'>';
			$(i.appenTo).append(html);
		} else {
			var html = '<'+i.elem+' '+ el +' />';
			$(i.appenTo).append(html);
		}
		//alert(html + ' \n' + el);
		el = '';
		
		//alert(i.recno + " - " + i.html + " - " + jap.length);
	}
});*/

function fxnTab(e){
	var tab = e.getAttribute('id');
	$('.tabs div').each(function(e){
		$(e).hide();
	})
	$('.'+tab).show();
}
function datas(e){
	var thisId = e.getAttribute('id');
	var dds = JSON.parse($(thisId).val());
	for(let i of dds){
		
	}
}

