let jap = [
{
	elem: "button",
	appenTo: "#tab-btn",
	id: "tab-btn-0",
	class: "tab-btns call-flow",
	html: "Call Flow"
},
{
	elem: "button",
	appenTo: "#tab-btn",
	id: "tab-btn-1",
	class: "tab-btns call-flows",
	onclick: "fxnTab(this)",
	html: "Call Flows"
},
{
	elem: "div",
	appenTo: "#tabs",
	id: "tabs-1",
	class: "tabs-item tab-btn-1",
	html: "tabs-1"
},
{
	elem: "button",
	appenTo: "#tab-btn",
	id: "tab-btn-2",
	class: "tab-btns call-driver-images",
	onclick: "fxnTab(this)",
	html: "Call Driver Images"
},
{
	elem: "div",
	appenTo: "#tabs",
	id: "tabs-2",
	class: "tabs-item tab-btn-2",
	html: "tabs-2"
},
{
	elem: "div",
	appenTo: "#tab-callflow",
	id: "cf-opening",
	class: "call-flow cf-1 cf-opening",
	html: '<span class="header">Opening:</span> \n<span class="spiel">Thank you for calling AmeriGas, my name is "Jeremias".</span> \n<span class="spiel">How may I help you, today?</span> \n<textarea name="cf-discover" class="cf-textarea cf-data cf-discover" data-name="discovery"></textarea> \n<span class="spiel"><b>Paraphrase: ......</b></span>'
},
{
	elem: "div",
	appenTo: "#tab-callflow",
	id: "cf-pulling",
	class: "call-flow cf-2 cf-pulling",
	html: '<span class="header">Account Pull-up:</span>\n <span class="spiel">May I have your <b>Account#</b> OR <b>Phone#</b>, please?</span> \n<textarea name="cf-accphone" class="cf-textarea cf-data cf-accphone" data-name="account"></textarea>'
},
{
	elem: "div",
	appenTo: "#tab-callflow",
	id: "cf-verify",
	class: "call-flow cf-3 cf-verify",
	html: '<span class="header">Account Verify:</span>\n<span class="spiel">Would you please verify your <b>Name</b> AND <b>Delivery Address</b> on the account, please?</span>'
},
{
	elem: "div",
	appenTo: "#tab-callflow",
	id: "cf-confirm",
	class: "call-flow cf-4 cf-confirm",
	html: '<span class="header">Account Confirmation:</span>\n<span class="spiel">For confirmation purposes, would you please confirm your <b>Mobile #</b> AND your <b>Email Address</b>, please?</span>'
},

]

/*let jap = [
{
	recno: 1,
	id: "tab-btn-1",
	clas: "tab-btns call-flow",
	elem: "button",
	html: "Call Flow"
},
	recno: 2,
	id: "tab-btn-2",
	clas: "tab-btns call-driver-images",
	elem: "button",
	html: "Call Driver Images"
},	
{
	recno: 100,
	id: "",
	clas: "",
	elem: "button",
	html: "End"
	title: "",
	type: "",
	value: ""
}
]*/

/*let japi = {
	"element": [
	{
		"recno": 1,
		"id":"tab-btn-1",
		"class": "tab-btns call-flow",
		"element": "button",
		"html": "Call Flow"
	},
		"recno": 2,
		"id":"tab-btn-2",
		"class": "tab-btns call-driver-images",
		"element": "button",
		"html": "Call Driver Images"
	},	
	{
		"recno": 100,
		"id":"",
		"class": "",
		"title": "",
		"type": "",
		"value": ""
	}
	
	],
	"kb":[]
}
*/

let cdList = [
{
	id: 1,
	issue: "Make Payment",
	case: "Sold To",
	caseType: "",
	caseSubType: "",
	process: ""
},
{
	id: 1,
	issue: "Down Payment",
	case: "Sold To",
	caseType: "",
	caseSubType: "",
	process: ""
},
{
	id: 1,
	issue: "Reverse / Refund Payment",
	case: "Sold To",
	caseType: "Billing A/R",
	caseSubType: "Refund",
	process: ""
},

]
/*
	{
	id: 1,
	issue: "",
	case: "",
	caseType: "",
	caseSubType: "",
	notes: "",
	process: ""
	},

*/
const cdTodo = [
]
