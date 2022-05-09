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
		prepend:(value)=> {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML = value + self.element.innerHTML;
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
var kbId=''; var kbText='';
let ab = []; ab.fxn = {};
const fileUrl = 'zdata.txt' // provide file location
fetch(fileUrl)
   .then( r => r.text() )
   .then( t => $('.tmp-a').html(t) )

function spaceToDash(str){
	if(typeof(str) != null || typeof(str) != 'undefined'){
		var iB = str.split(' ');
		var std = str;
		for(var a = 0; a < iB.length; a++){
			std = std.replace(' ', '_');
		}
		return std;
	}
}function isClass(e, c){
	if (typeof e === "string" || e instanceof String) {
		return false;
	} else {
		var str = e.getAttribute('class').indexOf(c);
		if(str > 0){
			return true;
		} else {
			return false;
		}
	}
}
function isText(e, c){
	if(e.length > 0){
		var str = e.indexOf(c);
		if(str > 0){
			return true;
		} else {
			return false;
		}		
	}
}
function isplit(x,y){
	var ix = x.split(y);
	var ixa = ix[0].trim();
	return ix;
}
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
		$('#caseList').show();
    }
}

function clickBtn(){
	$('.btns').each(function(e){
		$(e).on('click', function(){
			if(isClass(e, 'btn-icons')){
				loadData();
			} else if(isClass(e, 'btn-ab')){
				//alert(JSON.stringify(ab.fxn));
				alert(JSON.stringify(ab.fxn) +'\n'+ $('.scripts').html());
			} else if(isClass(e, 'btn-iprev')){
				alert($('.left-icons').html());
			} else {
				//alert(e.getAttribute('class'));
			}
		})
	});
}
clickBtn();
function loadData(){
	var isTo = ''; var fxName = ''; var xfxn = '';
	var iText = $('.tmp-a').val().split('\n');
	for(var i = 0;i < iText.length;i++){
		var ito = iText[i].trim().toLowerCase();
		switch(ito){
			case '*empty':
				isTo = ito;
				//$(ix[1].trim()).append(ix[2]);
				break;
			case '*end-kb':
				$('.tmp').append('<textarea class="kbText '+kbId+'" id="'+kbId+'">'+kbText+'</textarea>');
				kbId=''; kbText='';
				break;
			case '*end-process':
			case '*end-html':
			case '*end-css':
			case '*end-empty':
				isTo = ito;
				break;
			case '*kb':
			case '*html':
			case '*css':
				isTo = ito;
				break;
			case '*fxn':
				isTo = ito;
				$('.tmp-fxn').html('');
				break;
			case '*end-fxn':
				isTo = ito;
				//ab.fxn.ito = fxName +' | '+ $('.tmp-fxn').val();
				ab.fxn[fxName] =  new Function("e", ab.fxn[xfxn]);
				break;
			case '*element':
				isTo = ito;
				ab['el'] = {};
				break;
			case '*end-element':
				isTo = ito;
				isEl(isTo);
				break;
			default:
				switch(isTo){
					case '*element':
						var ix = isplit(iText[i],'>>');
						var ixa = ix[0].trim();
						ab['el'][ixa] = ix[1].trim();
						break;
					case '*empty':
						var el = iText[i].trim();
						$(el).html('');
						break;
					case '*kb':
						isKb(iText[i]);
						break;
					case '*fxn':
						if(isText(iText[i], 'fxn-name')){
							var ix = isplit(iText[i],':');
							fxName = ix[1].trim();
							xfxn = 'xx' + fxName;
							ab.fxn[xfxn] = '';
						} else {
							$('.tmp-fxn').append(iText[i].trim());
							ab.fxn[xfxn] += iText[i];
						}
						break;
					case '*html':
						var ix = isplit(iText[i],'|');
						var ixa = ix[0].trim();
						if(ix[1].trim() == 'append'){
							$(ixa).append(ix[2]);
						} else if(ix[1].trim() == 'prepend'){
							$(ixa).prepend(ix[2]);
						}
						break;
					case '*css':
						var ix = isplit(iText[i],'|');
						var ixa = ix[0].trim();
						if(ix[1].trim() == 'add'){
							$(ixa).attr('style', ix[2]);
						} else if(ix[1].trim() == 'replace'){
							$(ixa).attr('style', ix[2]);
						}
						break;
					default:
						break;
				}
				break;
		} 
	}
	clickBtn();
}
function isKb(e){
	var eo = e;
	if(isText('*'+e, 'Issue:')){
		eo = eo.replace('Issue:','').trim();
		kbId = spaceToDash(eo);
		$('#caseList').append('<li><a href="#" class="kb-issue" title="'+kbId+'" onclick="ab.fxn.kbShow(this)">'+ eo.trim() +'</a></li>');
	} else {
		kbText += e + '\n';
	}
}
function isEl(e){
	//alert(e +'\n'+ JSON.stringify(ab['el']));
	if(typeof(ab.el['children']) != 'undefined'){
		isChild();
	} else if(typeof(ab.el['no-child']) != 'undefined'){
		noChild();
	}
}
function noChild(){
	var isE = ''; var isEs = '';
	for (const key in ab.el) {
		switch(key) {
			case 'appendTo':
			case 'button':
				break;
			default:
				isE += " " + key +'="'+ ab.el[key] + '"';
				break;
		}
	}
	if(ab.el['type'] == 'input'){
		isEs = "<br /><" + ab.el.type + isE + " />";
	} else {
		isEs = "<" + ab.el.type + isE + "></" + ab.el.type + ">";
	}
	$(ab.el.appendTo).append(isEs);
	isE = ''; isEs = '';
}
function isChild(){
	var isE = ''; var isEs = '';
	var ica = ab.el['children'].split('|');
	for(var c = 0; c < ica.length; c++){
		var icas = ica[c].split(':');
		for (const key in ab.el) {
			switch(key) {
				case 'appendTo':
				case 'children':
				case 'button':
					break;
				case 'class':
					isE += " " + key +'="'+ ab.el[key] +' '+ icas[1] + '"';
					break;
				case 'title':
					isE += " " + key +'="'+ icas[0] + '"';
					break;
				default:
					isE += " " + key +'="'+ ab.el[key] + '"';
					break;
			}
		}
		isEs = "<" + ab.el.type + isE + "></" + ab.el.type + ">";
		$(ab.el.appendTo).append(isEs);
		isE = '';
	}	
	isEs = '';
}

