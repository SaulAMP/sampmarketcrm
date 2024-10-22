var statusList = [];
if(!localStorage.instance_default){
  chrome.runtime.sendMessage({message:"instances_update"},function(res){
    })
}
chrome.runtime.sendMessage({message:"viewer_sheets",instance:localStorage.instance_default},function(res){
}) 


function waitForElm(selector) { //profile open event
  return new Promise(resolve => {
      if (document.querySelector(selector) && document.querySelector('[data-icon="lock"]') ) {
          return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector) && document.querySelector('[data-icon="lock"]')) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });
      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}
function waitForElmRemoval(selector) { //profile closed event
  return new Promise(resolve => {
    if (!document.querySelector(selector)) {
      return resolve();
    }
    const observer = new MutationObserver(mutations => {
      if (!document.querySelector(selector)) {
        resolve();
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
// function l(){
//   waitForElmRemoval('[data-icon="settings-blocked"]').then(() => {
//     e()
// });
// }
//  e()
// function e(){
link = document.createElement("link")
link.rel = "stylesheet"
link.href = chrome.runtime.getURL("style.css");
document.body.appendChild(link)
// waitForElm('[data-icon="settings-blocked"]').then((elm) => { 

  window.addEventListener('message', (event) => {

if(event.data.target=="triggered_main") 
// l()
setTimeout(function(){
groupchecker(true)
function groupchecker(groupcheck){
if(groupcheck==true){
  if(document.querySelector("#main > header")?.innerText.split("\n")[0] == null){
 }else{
    function isPhoneNumber(string) {
      var pattern =/^\d{9,}$/
      return pattern.test(string);
    }
    


    var phoneNumber =document.querySelector("#main > header")?.innerText.split("\n")[0]
    var cleanedString = phoneNumber.replaceAll(/(\(|\)| | |\+|-)/gi,"");
    if (isPhoneNumber(cleanedString)) {
groupchecker(false)
}else{
  setTimeout(function(){
    op = document.querySelectorAll("[dir='auto'].selectable-text.copyable-text span").length;
    number = document.querySelectorAll("[dir='auto'].selectable-text.copyable-text span")[op-1]?.innerText;
  
    if (isPhoneNumber(number.replaceAll(/(\(|\)| | |\+|-)/gi,""))){
 groupchecker(false)
    }
  
  },700)
    }
  }
}else{
proceed()
}
}


function proceed(){

  const divElement =document.querySelector('[data-icon="settings-blocked"]').parentElement.parentElement.parentElement.parentElement
  divp = document.querySelector("#extensio")
  const ela = document.createElement('div');
    ela.innerHTML = reloadersTera 
    divp.insertAdjacentElement('afterend', ela);
 elav = document.createElement('div');
 elav.innerHTML = reloadersTeraV
divp.insertAdjacentElement('afterend', elav);

if(!localStorage.instance_default){
  document.getElementById("groupFoundTera").style.display="none";
  document.getElementById("groupFoundTeraV").style.display="none";

  document.getElementById("groupNotFoundTera").style.display="flex";
  }else{
    instanceUpdate_tera(localStorage.instances,false,true)
  }
  select_instance = document.getElementById("select_instance");
  
  document.getElementById("instancesupdated").onclick = function(){
    chrome.runtime.sendMessage({message:"instances_update"},function(res){
      statusChcker_tera(res)
    })
  }
 
     
  



window.addEventListener("click",function(event){

  const nodatasvg_tera = document.getElementById('nodatasvg_tera')
  const noggsvg = this.document.getElementById("noggsvg")
  const detailsBtn = document.getElementById('details_showup');
  const reminderBtn = document.getElementById('reminder_showup');
  const ggcontactobtn = document.getElementById('gg-contacts');
  const ggcontact = document.getElementById("gg-div-contacto");
  const actb =  document.getElementById('pro-action');
  const detailsSection = document.getElementById('details');
  const reminderSection = document.getElementById('reminder');
  const actions = document.getElementById('actions');

if(event.target.id=="reminder_showup"){
  actions.style.display = "none";
    detailsSection.style.display = 'none';

  nodatasvg_tera.style.display = 'none';
  noggsvg.style.display = 'none';
 
reminderSection.style.display = 'block';
ggcontact.style.display = "none"


event.target.classList.add('selected-btn');

detailsBtn.classList.remove('selected-btn');
actb.classList.remove('selected-btn')
}else if(event.target.id=="details_showup"){
  actions.style.display = "none"
  if(localStorage.dataout=="true"){
    detailsSection.style.display = 'block';
  }else{
    nodatasvg_tera.style.display = 'flex';
   }
    noggsvg.style.display = 'none';
    reminderSection.style.display = 'none';
    ggcontact.style.display = "none"
    ggcontactobtn.classList.remove('selected-btn');

    event.target.classList.add('selected-btn');
    reminderBtn.classList.remove('selected-btn');
    actb.classList.remove('selected-btn')

}else if(event.target.id=="pro-action"){
      actions.style.display = "block"
detailsSection.style.display = 'none';
nodatasvg_tera.style.display = 'none';
noggsvg.style.display = 'none';

reminderSection.style.display = 'none';
ggcontact.style.display = "none"
 event.target.classList.add('selected-btn');
    detailsBtn.classList.remove('selected-btn');
    reminderBtn.classList.remove('selected-btn');
    ggcontactobtn.classList.remove('selected-btn');

}else if(event.target.id=="gg-contacts"){
 detailsSection.style.display = 'none';
 nodatasvg_tera.style.display = 'none';
 if(localStorage.dataContact=="true"){
  ggcontact.style.display = "block"

 }else{
  noggsvg.style.display = 'flex';

 }


actions.style.display = "none"
reminderSection.style.display = 'none';
event.target.classList.add('selected-btn');
detailsBtn.classList.remove('selected-btn');
reminderBtn.classList.remove('selected-btn');
actb.classList.remove('selected-btn')




}else if(event.target.id=="btncopy"){
 
 var textarea = event.target.closest("button").nextElementSibling;
 if (textarea.tagName.toLowerCase() === "textarea") {

  // document.execCommand('copy'); 
  const el = document.createElement('textarea');
  el.value = textarea.value;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  textarea.focus()
  textarea.select();



 }
}else if(event.target.id=="cancel"){
  var closestTR = event.target.closest('tr');
  
  chrome.runtime.sendMessage({message:"cancel",instance:localStorage.instance_default,id:closestTR.id},function(res){
    document.getElementById(closestTR.id).remove()
    statusChcker_tera(res)
    })
} else if (event.target.tagName.toLowerCase() === "textarea" && event.target.id !="APItoken" || event.target.tagName.toLowerCase() === "input" && event.target.id !="APItoken" &&  event.target.id !="birthday" ) {
  if(event.target.parentElement.parentElement.id=="user_defined" ||  event.target.parentElement.parentElement.id=="user_relation" || event.target.parentElement.parentElement.id=="user_websites" || event.target.parentElement.parentElement.id=="user_emails" || event.target.parentElement.parentElement.id=="user_events" ){
    div = event.target.parentElement

    if(event.target.parentElement===event.target.parentElement.parentElement.lastElementChild){
      try{
        document.querySelector(".remover").remove()
    
      }catch(err){
    
      }
if(div.querySelector("img")==null){
 adder = document.createElement("img");
  adder.src = chrome.runtime.getURL("images/add-symbol.svg");
  adder.style="width: 20px;cursor: pointer;"
  adder.className="adder"
  div.appendChild(adder)
  
}

    }else{
      if(div.querySelector("img")==null){
        try{
          document.querySelector(".remover").remove()

        }catch(err){

        }
        adder = document.createElement("img");
        adder.src = chrome.runtime.getURL("images/remove.svg");
        adder.style="width: 25px;cursor: pointer;"
        adder.className="remover"
        div.appendChild(adder)
        
      }

    }

  }else{
    var textareaElement = event.target;
    try{
        document.getElementById("btncopy").remove()
    }catch(err){}
    var buttonHTML = `<button id="btncopy" class="flex ml-auto gap-2 rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" style="
  padding: 2px;"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button>`;
    textareaElement.insertAdjacentHTML("beforebegin", buttonHTML);
  }
 
}else if(event.target.className=="remover"){
  parent = event.target.parentElement.remove()


}else if(event.target.className=="adder"){
//add new user_section to the parent element 
parent = event.target.parentElement.parentElement;
userSec = document.createElement("div");
defaultadder = `<textarea  placeholder="value" class="textarea-class" style="width: 40%;height: 25px;"></textarea>
<textarea class="textarea-class" placeholder="label" style="width: 40%;height: 25px;"></textarea>
<img src="`+chrome.runtime.getURL("images/add-symbol.svg")+`" class="adder" style="cursor: pointer;width: 20px;">`;
if(parent.id=="user_defined"){

  userSec.className = "custom_section";

}else if(parent.id=="user_relation"){
  userSec.className = "custom_relations";

}else if(parent.id=="user_websites"){
  userSec.className = "custom_websites";

}else if(parent.id=="user_emails"){
  userSec.className = "custom_emails";

}else{
  defaultadder = defaultadder = `<input  style="width: 170px;height: 29px;" type="date">

  </textarea>
  <textarea class="textarea-class" placeholder="label" style="width: 40%;height: 25px;"></textarea>
  <img src="`+chrome.runtime.getURL("images/add-symbol.svg")+`" class="adder" style="cursor: pointer;width: 20px;">`;

  userSec.className = "custom_events";
}
userSec.innerHTML =defaultadder
parent.appendChild(userSec);
event.target.remove();


}else if(event.target.id=="connect"){
document.getElementById("valid").style.display="none";
document.getElementById("invalid").style.display="none"

  //get the apitoken and send it to the background and see if u will get what u want ot no , if yes then save it and send back wht we want and u should e good 
  chrome.runtime.sendMessage({message:"validation_tera",token:document.getElementById("APItoken").value},function(res){
    document.getElementById("connect").disabled = true
document.getElementById("connect").innerText = "Conectando . . . "
  })

  
}else if(event.target.id=="disconnected"){
  chrome.storage.local.clear();
  document.getElementById("groupFoundTera").style.display="none";
  document.getElementById("groupFoundTeraV").style.display="none";

  document.getElementById("groupNotFoundTera").style.display="flex";

}
});
document.getElementById("reminder_send").onclick = function(){
  sendReminder()

}
function sendReminder() {
  const recieverNumber = document.getElementById('reciever_number').value;
  const customMessage = document.getElementById('custom_message').value;
  const sharedLink = document.getElementById('shared_link').value;
  const datetimePicker = document.getElementById('datetime-local');
  const selectedDateTime = new Date(datetimePicker.value);
  const timeToSend = selectedDateTime.getTime(); // Convert selected date to milliseconds
  const currenttime = new Date();
  const timeTocut = currenttime.getTime(); 
  const dataToSend = {
    instance_id:localStorage.instance_default,
    chat_id: recieverNumber.replaceAll(/(\(|\)| |\+|-)/gi,""),
    time: timeToSend-timeTocut,
    text: btoa(unescape(encodeURIComponent(customMessage))), // Base64 encode the custom message
    url: sharedLink || undefined, // Optional link
  };
  document.getElementById("reminder_send").innerText = "Creando . .";
  document.getElementById("reminder_send").disabled = true
  cachId=  Array.from({length: 4}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');


  chrome.runtime.sendMessage({ message: 'reminder', data: dataToSend ,cachId:cachId}, response => {
    statusChcker_tera(response)
    document.getElementById("no-hay-actions").style.display="none";
    tb =  document.getElementById("tbody-table");
  tr = document.createElement("tr")
  tr.id=cachId
  tr.innerHTML = `<td>${customMessage}</td><td>`+selectedDateTime.toISOString().replace('T', ' ').slice(0, 19)+`</td><td>
<img id="cancel" src="`+chrome.runtime.getURL("images/cancel.png")+`" style="cursor: pointer;top: 0px; width: 30px;">
</td>`;
  tb.appendChild(tr);

  });
}

const datetimePicker = document.querySelector("#datetime-local")
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const defaultDateTime = `${year}-${month}-${day}T00:00`;
  datetimePicker.value = defaultDateTime;
document.getElementById("clickEdit_tera").onclick = function(){
    var editor = document.getElementById("editor_form_tera");
    document.getElementById("actualizar_tera").disabled = false;
  var inputElements = editor.querySelectorAll("[editables]");
    for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = false;
  }
  }

  document.getElementById("editContact").onclick = function(){
    var editor = document.getElementById("contacts");
    document.getElementById("actu_contact").disabled = false;
  var inputElements = editor.querySelectorAll("textarea");
    for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = false;
  }
  var inputElements = editor.querySelectorAll("input");
  for (var i = 0; i < inputElements.length; i++) {
  inputElements[i].readOnly = false;
}
  }




  document.getElementById("actualizar_tera").onclick = function(){
  if(actualizar_tera.disabled!=true){
    actualizar_tera.innerText = "actualizando ..."
    var editor = document.getElementById("editor_form_tera");

    var inputElements = editor.querySelectorAll("[editables]");
    var labels = editor.querySelectorAll("label");
    var rowkeys = Array.from(labels, function(input) {
      return input.textContent;
    });
    var rowvalues = Array.from(inputElements, function(input) {
      return input.value;
    });
    function isPhoneNumber(string) {
      var pattern =/^\d{9,}$/
      return pattern.test(string);
    }
    var phoneNumber =document.querySelector("#main > header")?.innerText.split("\n")[0]
    var cleanedString = phoneNumber.replaceAll(/(\(|\)| | |\+|-)/gi,"");
    if (isPhoneNumber(cleanedString)) {
number  = document.querySelector("#main > header")?.innerText.split("\n")[0]
    }else{
      op = document.querySelectorAll("[dir='auto'].selectable-text.copyable-text span").length
      number = document.querySelectorAll("[dir='auto'].selectable-text.copyable-text span")[op-1]?.innerText
 }
    chrome.runtime.sendMessage({message:"update",instance:localStorage.instance_default,number:number,rowvalues:rowvalues,rowkeys:rowkeys},function(res){
      statusChcker_tera(res)
      })
  
  }
}





document.getElementById("actu_contact").onclick = function(){
   actualizar_tera =  document.getElementById("actu_contact")
  if(actualizar_tera.disabled!=true){
    actualizar_tera.innerText = "actualizando ..."
    actualizar_tera.disabled = true
      var info = {};
          var elements = document.querySelectorAll('#contacts *');
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        if ((element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') && element.value.trim().length >= 2 && element.parentElement.className!="custom_section" && element.parentElement.className!="custom_relations"  && element.parentElement.className!="custom_websites" && element.parentElement.className!="custom_emails" && element.parentElement.className!="custom_events" ) {
          info[element.id] = element.value;
        }
      }
 const newJson = {};

const customSections = document.querySelectorAll('.custom_section');
const jsonStructure = [];
customSections.forEach(section => {
const textareas = section.querySelectorAll('textarea');
if (textareas.length === 2 &&  textareas[0].value.trim().length >= 2 &&  textareas[1].value.trim().length >= 2) {
    const entry = {key: textareas[0].value.trim(),value: textareas[1].value.trim() };
    jsonStructure.push(entry);
  }
});



const relations = document.querySelectorAll('.custom_relations');
relationJSON = []
 relations.forEach(sectionR => {
const textareas = sectionR.querySelectorAll('textarea');
if (textareas.length === 2 &&  textareas[0].value.trim().length >= 2 &&  textareas[1].value.trim().length >= 2) {
    const entryR = {person: textareas[0].value.trim(),type: textareas[1].value.trim() };
    relationJSON.push(entryR);

  }
});


const websites = document.querySelectorAll('.custom_websites');
webjson = []
websites.forEach(sectionW => {
const textareas = sectionW.querySelectorAll('textarea');
if (textareas.length === 2 &&  textareas[0].value.trim().length >= 2 &&  textareas[1].value.trim().length >= 2) {
    const entryW = {value: textareas[0].value.trim(),type: textareas[1].value.trim() };
    webjson.push(entryW);
  }
});

const emails = document.querySelectorAll('.custom_emails');
jsonmails = [];
emails.forEach(sectionE=> {
const textareas = sectionE.querySelectorAll('textarea');
if (textareas.length === 2 &&  textareas[0].value.trim().length >= 2 &&  textareas[1].value.trim().length >= 2) {
    const entryE= {value: textareas[0].value.trim(),type: textareas[1].value.trim() };
    jsonmails.push(entryE);
  }
});

const events = document.querySelectorAll('.custom_events');
jsonevents = [];
events.forEach(sectionV=> {
const textareas = sectionV.querySelector('textarea');
const inputs = sectionV.querySelector('input');
if ( textareas.value.trim().length >= 2 &&  inputs.value.trim().length >= 2) {
const eventDate = new Date(inputs.value.trim());
  enrtyV = { 
    date:{
    day: eventDate.getDate(),
    month: eventDate.getMonth() + 1,
    year: eventDate.getFullYear()
  },
  type: textareas.value.trim()
    };
    jsonevents.push(enrtyV);
  }
});

newJson["events"] = jsonevents
newJson["emailAddresses"] = jsonmails
newJson["websites"] = webjson
newJson["relations"] = relationJSON
newJson["userDefined"] = jsonStructure
    const chart = {
      "givenName": "name",
      "familyName": "name",
      "honorificPrefix": "name",
      "honorificSuffix": "name",
      "organization": "organization",
      "title": "organization",
      "department": "organization",
      "jobDescription": "organization",
      "country": "addresses",
      "type":"addresses",
      "streetAddress": "addresses",
      "extendedAddress": "addresses",
      "region": "addresses",
      "city": "addresses",
      "postalCode": "addresses",
      "poBox": "addresses",
      "birthday":"birthday",

    };
  
    for (const key in info) {
      if (chart[key]) {
     
          
      
        
    if (key === "organization") {
        const category = chart[key];
        if (!newJson[category]) {
          newJson[category] = {};
        }        
        newJson["organization"]["name"] = info["organization"]
      
       } else if (key === "birthday") {
          const birthdayDate = new Date(info[key]);
          newJson[key] = {
            day: birthdayDate.getDate(),
            month: birthdayDate.getMonth() + 1,
            year: birthdayDate.getFullYear()
          };
        } else {
          const category = chart[key];
          if (!newJson[category]) {
            newJson[category] = {};
          }
          newJson[category][key] = info[key];
        }
      } else {
        if(key=="phone"){
          newJson[key] = info[key].replaceAll(/(\(|\)| |\+|-)/gi,"");

        }else{
          newJson[key] = info[key];

        }
      }
    }
    
    chrome.runtime.sendMessage({message:"update_contact",instance:localStorage.instance_default,data:newJson},function(res){
      statusChcker_tera(res)
      })
  
  }
}

function prop(number,ggContact){


if(!localStorage.sheetIndex){
  localStorage.sheetIndex = 1
  chrome.runtime.sendMessage({message:"viewer_sheets",instance:localStorage.instance_default},function(res){
   statusChcker_tera(res)
  }) 

}else{
  sheetsUpdate_tera(localStorage.sheets_view)
}
  chrome.runtime.sendMessage({message:"viewer_sheets_data",instance:localStorage.instance_default,number:number,sheetIndex:localStorage.sheetIndex},function(res){
    statusChcker_tera(res)
  })  // data sheets of view

  chrome.runtime.sendMessage({message:"getData",instance:localStorage.instance_default,number:number},function(res){
    statusChcker_tera(res)
  })

  chrome.runtime.sendMessage({message:"actions",instance:localStorage.instance_default,number:document.getElementById('reciever_number').value},function(res){
    statusChcker_tera(res)
  });
    if(statusList.includes(ggContact)){
    statusC = "0"
    }else{
      statusList.push(ggContact);
      statusC = "1"
     }
    chrome.runtime.sendMessage({message:"get_contact",instance:localStorage.instance_default,number:ggContact,status:statusC},function(res){
      statusChcker_tera(res)
    })

}

if(document.querySelector("#main > header")?.innerText.split("\n")[0] != null){
  function isPhoneNumber(string) {
    var pattern =/^\d{9,}$/
    return pattern.test(string);
  }
  var phoneNumber =document.querySelector("#main > header")?.innerText.split("\n")[0]
  var cleanedString = phoneNumber.replaceAll(/(\(|\)| | |\+|-)/gi,"");
  if (isPhoneNumber(cleanedString)) {
    number =  document.querySelector("#main > header")?.innerText.split("\n")[0].replaceAll(/(\(|\)| |\+|-)/gi,"")
    document.getElementById('reciever_number').value =number
prop(document.querySelector("#main > header")?.innerText.split("\n")[0],phoneNumber)

 }else{
setTimeout(function(){
  op = document.querySelectorAll("[dir='auto'].selectable-text.copyable-text span").length
  number = document.querySelectorAll("[dir='auto'].selectable-text.copyable-text span")[op-1]?.innerText

  if (isPhoneNumber(number.replaceAll(/(\(|\)| | |\+|-)/gi,""))){
    document.getElementById('reciever_number').value = number.replaceAll(/(\(|\)| |\+|-)/gi,"")
 prop( document.getElementById('reciever_number').value,number)




  }

},500)
  }
}
}






},500)
})
// }
function updatesucess_tera(){
  document.getElementById("actualizar_tera").innerText = "actualizar_tera"
  document.getElementById("actualizar_tera").disabled = true;
var editor = document.getElementById("editor_form_tera");
var inputElements = editor.querySelectorAll("[editables]");
for (var i = 0; i < inputElements.length; i++) {
  inputElements[i].readOnly = true;
  inputElements[i].setAttribute("editables","true")
}
}
function noresuts_tera(){
  document.getElementById("svgloading_tera").style.display = "none"
  document.getElementById("nodatasvg_tera").style.display = "flex"
};
function contactsparser(){


  var keys = data.varNames // Extract keys from the first row
  var values = data.varValues // Extract values from the second row
var editor = document.getElementById("editor_form_tera");
  for (var i = 0; i < keys.length; i++) {
    var keyCell = document.createElement("label");
    keyCell.textContent = keys[i]
    editor.appendChild(keyCell);
      var valueCell = document.createElement("textarea");
      valueCell.readOnly = "true"
      try{
        var lines =  values[i].split("\n").length 

      }catch(err){
        var lines =  1
      }   

      var lineHeight = 20; // Adjust this value based on your font and line height
      valueCell.style.height = lines * lineHeight + "px";
      valueCell.classList.add("textarea-class");
      valueCell.textContent = values[i] ? values[i]:""
      valueCell.setAttribute("editables","false")
 editor.appendChild(valueCell);
  }
 autosize();
 function autosize() {
   var text = document.querySelectorAll('[editables]');
   for (var i = 0; i < text.length; i++) {
     text[i].setAttribute("rows", 1);
     resize(text[i]);
   }
   for (var i = 0; i < text.length; i++) {
     text[i].addEventListener('input', function() {
       resize(this);
     });
   }
   function resize($text) {
     $text.style.height = 'auto';
     $text.style.height = $text.scrollHeight + 'px';
   }
 }





}
function parseresultstera(data){
document.getElementById("svgloading_tera").style.display = "none"
document.getElementById("details_tera").style.display = "block"
  var keys = data.varNames // Extract keys from the first row
    var values = data.varValues // Extract values from the second row
  var editor = document.getElementById("editor_form_tera");
    for (var i = 0; i < keys.length; i++) {
      var keyCell = document.createElement("label");
      keyCell.textContent = keys[i]
      editor.appendChild(keyCell);
        var valueCell = document.createElement("textarea");
        valueCell.readOnly = "true"

        try{
          var lines =  values[i].split("\n").length 

        }catch(err){
          var lines =  1
        }   
        var lineHeight = 20; // Adjust this value based on your font and line height
        valueCell.style.height = lines * lineHeight + "px";
        valueCell.classList.add("textarea-class");
        valueCell.textContent =values[i] ? values[i]:""
        valueCell.setAttribute("editables","false")
   editor.appendChild(valueCell);
    }
   autosize();
   function autosize() {
     var text = document.querySelectorAll('[editables]');
     for (var i = 0; i < text.length; i++) {
       text[i].setAttribute("rows", 1);
       resize(text[i]);
     }
     for (var i = 0; i < text.length; i++) {
       text[i].addEventListener('input', function() {
         resize(this);
       });
     }
     function resize($text) {
       $text.style.height = 'auto';
       $text.style.height = $text.scrollHeight + 'px';
     }
   }
}
function statusChcker_tera(res){
  if(res.status!="loggedIn"){
    document.getElementById("groupFoundTera").style.display="none";
    document.getElementById("groupFoundTeraV").style.display="none";
    document.getElementById("groupNotFoundTera").style.display="flex";
  }
}
function instanceUpdate_tera(data,time,inprofile){
localStorage.instances = data
if(inprofile==true){
select_instance = document.getElementById("select_instance");
JSON.parse(data).forEach(item => {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nombre;
  select_instance.appendChild(option);
});
select_instance.value = localStorage.instance_default
select_instance.addEventListener("change", function() {
  localStorage.instance_default =  this.value;
});
}
if(time==true){
  localStorage.instance_default = JSON.parse(data)[0].id
}
}










function viewonlyparser_tera(data){
data = JSON.parse(data)
  document.getElementById("svgloading_teraV").style.display = "none"
  document.getElementById("detailsV_tera").style.display = "block"
//view only special case 
var keys = data.headers// Extract keys from the first row
    var values = data.data[0] // Extract values from the second row

  var table = document.getElementById("tableV_tera");

    for (var i = 0; i < keys.length; i++) {

      var keyCell = document.createElement("label");
      keyCell.textContent = keys[i]
      table.appendChild(keyCell);
        var valueCell = document.createElement("textarea");
        valueCell.readOnly = "true"
        try{
          var lines =  values[i].split("\n").length 

        }catch(err){
          var lines =  1
        }   


        var lineHeight = 20; // Adjust this value based on your font and line height
        valueCell.style.height = lines * lineHeight + "px";
        valueCell.classList.add("textarea-class");

        valueCell.textContent = values[i] ? values[i]:""
   table.appendChild(valueCell);

    }

}







function parsetable_tera(data){
data.forEach(function(r){
 tb =  document.getElementById("tbody-table");
  tr = document.createElement("tr")
  tr.id=r.id
  tr.innerHTML = `<td>`+r.reminder+`</td><td>`+r.remaining+`</td><td  id="cancel">
  <img id="cancel" src="`+chrome.runtime.getURL("images/cancel.png")+`" style="cursor: pointer;top: 0px; width: 30px;">
  </td>`;
  tb.appendChild(tr);
})

}
function reminder_created(oldid,newid){
  try{
    document.getElementById("reminder_send").innerText = "Crear Recordatorio";
    document.getElementById("reminder_send").disabled = false

    document.getElementById(oldid).id = newid
  }catch(err){

  }

}



    // Function to populate a field
    function populateField(id, value) {
      try{
        emptyDefault =  ` <textarea readonly="" class="textarea-class" placeholder="Dato" style="width: 40%;height: 25px;"></textarea>
        <textarea readonly="" class="textarea-class"  placeholder="Etiqueta" style="width: 40%;height: 25px;"></textarea>`;
        var field = document.getElementById(id);
        if(id=="birthday"){
          var currentDate = new Date(value.year+'-'+value.month+'-'+value.day);
          var year = currentDate.getFullYear();
          var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
          var day = currentDate.getDate().toString().padStart(2, "0");
          var formattedDate = year + "-" + month + "-" + day;
        document.getElementById("birthday").value = formattedDate;


        }else if(id=="event"){

        parentsV = document.querySelector("#user_events");

        if(value.length!=0){
     
         value.forEach(function(data){
          
          var currentDate = new Date(data.date.year+'-'+data.date.month+'-'+data.date.day);
          var year = currentDate.getFullYear();
          var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
          var day = currentDate.getDate().toString().padStart(2, "0");
          var formattedDate = year + "-" + month + "-" + day;
       
           secV = document.createElement("div");
           secV.className = "custom_events";
           secV.innerHTML = ` <input style="width: 170px;height: 29px;" value=`+formattedDate+`  type="date">
           <textarea readonly="" class="textarea-class"  placeholder="Etiqueta"   style="width: 40%;height: 25px;">`+data.type+`</textarea>`
           parentsV.appendChild(secV)
         })
        }else{
         secV = document.createElement("div");
         secV.className = "custom_events";
         secV.innerHTML = ` <input style="width: 170px;height: 29px;" type="date">
         <textarea readonly="" class="textarea-class"  placeholder="label"   style="width: 40%;height: 25px;"></textarea>`
         parentsV.appendChild(secV)

        }



        }else if(id=="relation"){
          parentsR = document.querySelector("#user_relation");

          if(value.length!=0){
       
           value.forEach(function(data){
             secUR = document.createElement("div");
             secUR.className = "custom_relations";
             secUR.innerHTML = ` <textarea readonly="" class="textarea-class"  placeholder="Persona"  style="width: 40%;height: 25px;">`+data.person+`</textarea>
             <textarea readonly="" class="textarea-class"  placeholder="Relación"   style="width: 40%;height: 25px;">`+data.type+`</textarea>`
             parentsR.appendChild(secUR)
           })
          }else{
           //i need u to create a fake custom
           secUR = document.createElement("div");
           secUR.className = "custom_relations";
           secUR.innerHTML = emptyDefault
           parentsR.appendChild(secUR)
 
          }



        }else if(id=="website"){
          parentsR = document.querySelector("#user_websites");

          if(value.length!=0){
       
           value.forEach(function(data){
            secUW = document.createElement("div");
             secUW.className = "custom_websites";
             secUW.innerHTML = ` <textarea readonly="" placeholder="Sitio Web" class="textarea-class"  style="width: 40%;height: 25px;">`+data.value+`</textarea>
             <textarea readonly="" class="textarea-class" placeholder="Etiqueta (ej: blog, perfil)" style="width: 40%;height: 25px;">`+data.type+`</textarea>`
             parentsR.appendChild(secUW)
           })
          }else{
           //i need u to create a fake custom
           secUW = document.createElement("div");
           secUW.className = "custom_websites";
           secUW.innerHTML =emptyDefault
           parentsR.appendChild(secUW)
 
          }
        }else if(id=="user_defined"){
          parents = document.querySelector("#user_defined");

         if(value.length!=0){
      
          value.forEach(function(data){
            secU = document.createElement("div");
            secU.className = "custom_section";
            secU.innerHTML = ` <textarea readonly="" placeholder="value" class="textarea-class"  style="width: 40%;height: 25px;">`+data.value+`</textarea>
            <textarea readonly="" class="textarea-class"  placeholder="label" style="width: 40%;height: 25px;">`+data.key+`</textarea>`
            parents.appendChild(secU)
          })
         }else{
          //i need u to create a fake custom
          secU = document.createElement("div");
          secU.className = "custom_section";
          secU.innerHTML = emptyDefault
          parents.appendChild(secU)

         }
    
       

        }else if(id=="email"){
          parentsE = document.querySelector("#user_emails");

          if(value.length!=0){
       
           value.forEach(function(data){
            secUE = document.createElement("div");
            secUE.className = "custom_emails";
            secUE.innerHTML = ` <textarea readonly="" placeholder="Correo" class="textarea-class"  style="width: 40%;height: 25px;">`+data.value+`</textarea>
             <textarea readonly="" class="textarea-class" placeholder="Etiqueta (personal, trabajo)" style="width: 40%;height: 25px;">`+data.type+`</textarea>`
             parentsE.appendChild(secUE)
           })
          }else{
           //i need u to create a fake custom
           secUE = document.createElement("div");
           secUE.className = "custom_emails";
           secUE.innerHTML =emptyDefault
           parentsE.appendChild(secUE)
 
          }

      
        }else{
          if (field) {
            field.textContent = value;

          }
        }

        //back here
      }catch(err){

      }
      
  
    
    }


function validation_tera(data,APIkey){
if(data=="false"){
document.getElementById("invalid").style.display="contents";
document.getElementById("connect").innerText = "conectar"
document.getElementById("connect").disabled = false

}else{
  document.getElementById("valid").style.display="contents";
  document.getElementById("connect").innerText = "conectado";
  document.getElementById("connect").disabled = true

  chrome.storage.local.set({ 'token': APIkey }, function() {
  });


}
}

function no_views_tera(){

  document.getElementById("svgloading_teraV").style.display = "none"
  document.getElementById("detailsV_tera").style.display = "none"
  document.getElementById("nodatasvg_teraV").style.display = "flex"


}

function sheetsUpdate_tera(data){
  localStorage.sheets_view = data;
  try{
 
    select_instanceV = document.getElementById("select_instanceV");

    JSON.parse(data).forEach(item => {
      const option = document.createElement("option");
      option.value = item.sheetIndex;
      option.textContent = item.title;
      select_instanceV.appendChild(option);
    });

    select_instanceV.value = JSON.parse(data).filter(item => item.sheetIndex === parseFloat(localStorage.sheetIndex))[0].sheetIndex;

  
    select_instanceV.addEventListener("change", function() {
      localStorage.sheetIndex =  this.value;
    });
  }catch(err){
  }

  }



chrome.runtime.onMessage.addListener(function(message, sender) {
  
  if(message.info=="validation_tera"){
  validation_tera(message.data,message.token)
  }else if(message.info=="contact_updated"){
    var editor = document.getElementById("contacts");
    document.getElementById("actu_contact").disabled = false;
    document.getElementById("actu_contact").innerText = "actualizar_tera"
  var inputElements = editor.querySelectorAll("textarea");
    for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = true;
  }
  var inputElements = editor.querySelectorAll("input");
  for (var i = 0; i < inputElements.length; i++) {
  inputElements[i].readOnly = true;
}

}else if(message.info=="viewer_sheets_data"){
if(JSON.parse(message.data).headers.length==0){
  no_views_tera()

}else{
  viewonlyparser_tera(message.data)
  console.log(message.data)
}

}else if(message.info=="viewer_sheets"){
  if(JSON.parse(message.data).length==0){
    // no_views_tera()
    console.log("sorry for it ");
  }else{
    sheetsUpdate_tera(message.data)
  }


  }else if(message.info=="no_gg_contact"){
  localStorage.dataContact = "false"
 
  }else if(message.info=="get_google_contact"){
     statusList = statusList.filter(item => item !== message.number);
    localStorage.dataContact = "true";
    jsonData = JSON.parse(message.data)
    populateField("givenName", jsonData?.names?.[0]?.givenName);
    populateField("familyName", jsonData?.names?.[0]?.familyName);
    populateField("honorificSuffix", jsonData?.names?.[0]?.honorificSuffix);
    populateField("honorificPrefix", jsonData?.names?.[0]?.honorificPrefix);
    populateField("phone", jsonData?.phoneNumbers?.[0]?.value);
    populateField("organization", jsonData?.organizations?.[0]?.name);
    populateField("title", jsonData?.organizations?.[0]?.title);
    populateField("department", jsonData?.organizations?.[0]?.department);
    populateField("jobDescription", jsonData?.organizations?.[0]?.jobDescription);
    populateField("country", jsonData?.addresses?.[0]?.country);
    populateField("streetAddress", jsonData?.addresses?.[0]?.streetAddress);
    populateField("extendedAddress", jsonData?.addresses?.[0]?.extendedAddress);
    populateField("region", jsonData?.addresses?.[0]?.region);
    populateField("city", jsonData?.addresses?.[0]?.city);
    populateField("postalCode", jsonData?.addresses?.[0]?.postalCode);
    populateField("poBox", jsonData?.addresses?.[0]?.poBox);
    populateField("type", jsonData?.addresses?.[0]?.type);
    populateField("birthday", jsonData?.birthdays?.[0]?.date);
    populateField("notes", jsonData?.biographies?.[0]?.value);
    populateField("event", jsonData?.events ?? []);
    populateField("user_defined", jsonData?.userDefined ?? []);
    populateField("relation", jsonData?.relations ?? []);
    populateField("website", jsonData?.urls ?? []);
    populateField("email", jsonData?.emailAddresses ?? []);

}else if(message.info=="reminder_created"){

reminder_created(message.cachId,message.id)
  
}else if(message.info=="contact-error"){
document.getElementById("create-contacto").innerText = 'Inténtalo de nuevo más tarde';
setTimeout(function(){
  document.getElementById("create-contacto").disabled = false;
  document.getElementById("create-contacto").innerText = 'Crear Contacto';

},3000)

}else if(message.info=="contact-created"){

  document.getElementById("create-contacto").disabled = false;
  document.getElementById("create-contacto").innerText = 'Crear Contacto';

}else if(message.info=="actions"){
    if(message.data.length==0){
document.getElementById("no-hay-actions").style.display = "block";
    }else{
      document.getElementById("no-hay-actions").style.display = "none";
    parsetable_tera(message.data)

    }
  }else if(message.info=="update_instance"){
  if(message.data.length==0){
    no_login()
  }else{
    instanceUpdate_tera(message.data,true,false)
  }
}else if(message.info==false){
noresuts_tera(false)
  }else if(message.info==true){
    updatesucess_tera()
 
 
  }else if(message.info=="getdata"){
    if(message.data=="Number not found"){
      localStorage.dataout="false"
noresuts_tera()

    }else{
      localStorage.dataout="true"

      parseresultstera(message.data)
  }
}
});

const reloadersTera = `
<div class="credit"><div class="form-header" style="
display: none !important;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-content: center;
    align-items: center;"><img src="`+chrome.runtime.getURL("/images/logo.png")+`" alt="Robot Face" style="
left: -5px;
top: -3px;
position: relative;
height: 39px;
width: 39px;"> <h4 class="title" style="
display: grid;
justify-items: center;
">Tera.chat CRM</h4>
</div>
  <div id="groupNotFoundTera" style="display: none;padding: 30px 30px 20px;align-items: center;align-content: stretch;flex-wrap: wrap;justify-content: space-around;">
  <div id="groupconnection" style="align-content: space-around;display: none !important;justify-content: space-evenly;flex-wrap: wrap;flex-direction: column;align-items: center;width: 100%;">

  <div class="l-section" id="" style="display: flex;/* display: block; */flex-direction: column;align-content: stretch;align-items: center;justify-content: space-evenly;flex-wrap: wrap;">
      <h5 class="c-section__heading">🔥 Vincular 🔥</h5>
      
      <div class="form" style="
  text-align: center;
  ">
  <i id="valid" style="color: green;font-size: 11px;font-weight: bold;margin-bottom: 1.5em;float: left;width: 45%;display: none;
  ">succes : congrat ! you api key is valid , please reload this page</i>
  <i id="invalid" style="color: red;font-size: 11px;font-weight: bold;margin-bottom: 1.5em;float: left;width: 45%;display: none;
  ">Info : please enter a valid Tera API key </i>
  <textarea class="textarea-class" rows="1" style="width: 300px; height: 36px !important;" id="APItoken" placeholder="Ingrese su Tera-Token"></textarea></div>
      <button type="submit" class="button" id="connect" style="
  width: 300px;     margin-top: 15px; 
  ">Conectar</button>
    </div>
  </div>
   </div>

  <div class="form-body" id="groupFoundTera">

  <div class="form-header" style="
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-content: center;
  align-items: center;">

<div class="tab selected-btn" id="details_showup">✏️ Detalles</div>
<div class="tab" id="reminder_showup">🔔 Recordatorios</div>
<div class="tab" id="pro-action">📋 Programados</div>
<div class="tab" id="gg-contacts">👤 Agregar contacto</div>
</div>
<div style="   display: flex;flex-direction: row;margin-bottom: 50px;flex-wrap: wrap;justify-content: center;column-gap: 20px;">
      <label class="select" for="select_instance">
        <select id="select_instance" required="required"></select>
      </label>
      </select>
      <span class="c-link js-toggleForm" id="instancesupdated">Actualizar</span>
      <span class="c-link js-toggleForm" id="disconnected" style="color: #d21919;">Desconectar</span>
    </div>
    <div id="groupinfotera" style="    align-content: space-around;display: flex;justify-content: space-evenly;flex-wrap: wrap;flex-direction: column;align-items: center;">
<div class="l-section" id="actions" style="display: none;">
<div class="form" id="actions_info">
<table class="tablep" id="tablep">
  <thead>
    <tr>
      <th>Recordatorio</th>
      <th>Restante</th>
      <th></th>
    </tr>
  </thead>
  </br>
  </br>
<tbody id="tbody-table">
 <tr id="no-hay-actions" style="display:none">
      <td>No hay trabajos programados en espera</td>
  </tr>
 </tbody>
</table>
  
</div>

</div>

<div class="l-section" id="gg-div-contacto" style="display: none;">
<h5 class="c-section__heading">Contact</h5>
<span class="c-link js-toggleForm" id="editContact">Editar</span>
<div class="form" id="contacts">
  <label for="givenName">Nombres</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="givenName"></textarea>

   <label for="familyName">Apellidos</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="familyName"></textarea>

   <label for="honorificPrefix">Prefijo (ej: Sr.)</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="honorificPrefix"></textarea>

   <label for="honorificSuffix">Sufijo (ej: jr.)</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="honorificSuffix"></textarea>

   <label for="phone">Teléfono</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="phone"></textarea>

   <label for="user_emails">Correos Electrónicos</label>
   <div id="user_emails">
      
   </div>
   <label for="organization">Empresa</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="organization"></textarea>

   <label for="title">Puesto de Trabajo</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="title"></textarea>

   <label for="department">Departmento</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="department"></textarea>

   <label for="jobDescription">Descripción de trabajo</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="jobDescription"></textarea>

   <label for="country">País</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="country"></textarea>

   <label for="streetAddress">Dirección Línea 1</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="streetAddress"></textarea>

   <label for="extendedAddress">Dirección Línea 2</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="extendedAddress"></textarea>

   <label for="region">Estado/Departamento/Provincia</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="region"></textarea>

   <label for="city">Ciudad</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="city"></textarea>

   <label for="postalCode">Código Postal</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="postalCode"></textarea>

   <label for="poBox">Apartado Postal</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="poBox"></textarea>

   <label for="label">Etiqueta (ej: casa, trabajo)</label>
   <textarea readonly="" class="textarea-class"  style="height: 29px;" id="type"></textarea>

   <label for="birthday">Cumpleaños</label>
</br>
</br>
<input  id="birthday" style="width: 400px;height: 29px;" type="date">
</br>
</br>
<label for="event">Fechas Especiales</label>
<div id="user_events">
   
</div>

   <label for="notes">Notas</label>
<textarea readonly="" class="textarea-class"  style="height: 29px;" id="notes"></textarea>
<label for="user_websites">Sitios web</label>
<div id="user_websites">
   
</div>






   <label for="relation">Personas Relacionadas</label>
   <div id="user_relation">
   
   </div>


   <label for="user_defined">Campos Personalizados</label>

   <div id="user_defined">
  
 </div>
   </div>





<button type="submit" class="button" id="actu_contact" disabled="">actualizar_tera</button>
</div>


    <div class="l-section" id="reminder" style="display: none;">
        <div class="form" id="reminder_editor">
        <label>WhatsApp</label>
        <textarea id="reciever_number" rows="1" style="height: 29px;"></textarea>
        <label>Mensaje</label>
        <textarea id="custom_message"  rows="1" style="height: 135px; width: -webkit-fill-available;"></textarea>
        <label>Enlace (opcional)</label>
        <textarea id="shared_link"  rows="1" style="height: 29px;"></textarea>

<br>
<label>Fecha (en local)</label><br>
<br>
<input id="datetime-local" style="height: 29px;" type="datetime-local">
</div>
<button type="submit" class="button" id="reminder_send">Crear Recordatorio</button>
      </div>



    
    <div class="l-section" id="details_tera" style="display: none;">
        <h5 class="c-section__heading">Detalles</h5>
        <span class="c-link js-toggleForm" id="clickEdit_tera">Editar</span>
        <div class="form" id="editor_form_tera"></div>
        <button type="submit" class="button" id="actualizar_tera" disabled="">actualizar_tera</button>
      </div>
      <div id="nodatasvg_tera" style="display:none;align-content: space-around;justify-content: space-evenly;flex-wrap: wrap;flex-direction: column;align-items: center;">
       <img src="`+chrome.runtime.getURL("/images/no_results.svg")+`">
        </br>
        <p>No se han encontrado resultados. Por favor, vuelva más tarde.</p>
      </div>
      <div id="noggsvg" style="display: none;place-content: space-around space-evenly;flex-flow: column wrap;align-items: center;">
       <br><img src="`+chrome.runtime.getURL("/images/no_contact.png")+`" style="
    height: 90px;
    width: 90px;
">
        <br>
        <p>Agregaremos automáticamente este número a sus contactos. lo haremos, pronto.</p>
      </div>
      <img id="svgloading_tera" style="margin:auto;display:block;"  src="`+chrome.runtime.getURL("/images/loading.svg")+`">
    </div>
  </div>
</div>
`



const reloadersTeraV = `
<div class="credit" id="groupFoundTeraV">
<div class="form-header" style="
display: flex;
flex-wrap: wrap-reverse;
justify-content: center;
align-content: center;
align-items: flex-end;
">
    <img src="`+chrome.runtime.getURL("/images/logo.png")+`" alt="Robot Face" style="
left: -5px;
top: -10px;
position: relative;
height: 39px;
width: 39px;
">
<h4 class="title" style="
display: grid;justify-items: center;">🔍 Vista CRM - Google Sheets - Tera.Chat</h4>
</div>



  
  <div class="form-body">
  <div style="display: flex;align-items: center;justify-content: space-evenly;flex-direction: row;flex-wrap: nowrap;align-content: center;">

  <label class="select" for="select_instanceV">
    <select id="select_instanceV" required="required"></select>
  </label>
  
  
  
  
</div>


     <div id="groupinfoteraV" style="    align-content: space-around;
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     flex-direction: column;
     align-items: center;">


      <div class="l-section" id="detailsV_tera" style="display: none;">
        <h5 class="c-section__heading">Detalles</h5>
        <div class="form" id="tableV_tera">
        
        </div>
      </div>
      <div id="nodatasvg_teraV" style="display:none;align-content: space-around;
      justify-content: space-evenly;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;" >
      <svg xmlns="http://www.w3.org/2000/svg" width="209" height="151.722" viewBox="0 0 209 151.722">
      <g id="Group_249" data-name="Group 249" transform="translate(-452.788 -483.523)">
        <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="66" cy="66.5" rx="66" ry="66.5" transform="translate(490.788 490.392)" fill="#6880eb"></ellipse>
        <g id="Group_248" data-name="Group 248" transform="translate(478.753 518.343)">
          <g id="Group_245" data-name="Group 245" transform="translate(9.2)">
            <g id="Path_598" data-name="Path 598" transform="translate(98.886 23.798)" fill="#fff">
              <path d="M 22.44985389709473 58.42581939697266 L 0.4498538970947266 46.94755935668945 L 0.4498538970947266 -8.955975532531738 L 22.44985389709473 1.565763235092163 L 22.44985389709473 58.42581939697266 Z" stroke="none"></path>
              <path d="M 0.9498538970947266 -8.162609100341797 L 0.9498538970947266 46.64446640014648 L 21.94985389709473 57.60099029541016 L 21.94985389709473 1.880867004394531 L 0.9498538970947266 -8.162609100341797 M -0.05014610290527344 -9.749351501464844 L 22.94985389709473 1.250648498535156 L 22.94985389709473 59.25064849853516 L -0.05014610290527344 47.25064849853516 L -0.05014610290527344 -9.749351501464844 Z" stroke="none" fill="#707070"></path>
            </g>
            <g id="Rectangle_175" data-name="Rectangle 175" transform="translate(13.836 14.049)" fill="#fff" stroke="#707070" stroke-width="1">
              <rect width="86" height="57" stroke="none"></rect>
              <rect x="0.5" y="0.5" width="85" height="56" fill="none"></rect>
            </g>
            <g id="Rectangle_174" data-name="Rectangle 174" transform="translate(35.836 25.049)" fill="#fff" stroke="#707070" stroke-width="1">
              <rect width="86" height="58" stroke="none"></rect>
              <rect x="0.5" y="0.5" width="85" height="57" fill="none"></rect>
            </g>
            <g id="Path_600" data-name="Path 600" transform="translate(101.886 20.45)" fill="#e8ecfd">
              <path d="M 19.77691459655762 5.099191665649414 L 19.0678768157959 5.099191665649414 L -2.153003931045532 -5.51124906539917 L 11.0184440612793 -16.80106163024902 L 33.03216171264648 -5.315643787384033 L 19.77691459655762 5.099191665649414 Z" stroke="none"></path>
              <path d="M 11.08703231811523 -16.20131301879883 L -1.255857467651367 -5.621695518493652 L 19.1859188079834 4.599191665649414 L 19.60398483276367 4.599191665649414 L 32.11447143554688 -5.230475902557373 L 11.08703231811523 -16.20131301879883 M 10.94985008239746 -17.40080833435059 L 33.94984817504883 -5.400808334350586 L 19.94984817504883 5.599191665649414 L 18.94984817504883 5.599191665649414 L -3.050149917602539 -5.400808334350586 L 10.94985008239746 -17.40080833435059 Z" stroke="none" fill="#707070"></path>
            </g>
            <g id="Path_599" data-name="Path 599" transform="translate(44.495 25.296)" fill="#e8ecfd">
              <path d="M 86.35401916503906 14.25226783752441 L 1.594092011451721 14.25226783752441 L -8.672574996948242 0.2522678375244141 L 76.08734893798828 0.2522678375244141 L 86.35401916503906 14.25226783752441 Z" stroke="none"></path>
              <path d="M -7.685882568359375 0.7522678375244141 L 1.847450256347656 13.75226783752441 L 85.36732482910156 13.75226783752441 L 75.83399200439453 0.7522678375244141 L -7.685882568359375 0.7522678375244141 M -9.659278869628906 -0.2477321624755859 L 76.34072113037109 -0.2477321624755859 L 87.34072113037109 14.75226783752441 L 1.340721130371094 14.75226783752441 L -9.659278869628906 -0.2477321624755859 Z" stroke="none" fill="#707070"></path>
            </g>
            <g id="Path_602" data-name="Path 602" transform="translate(12.3)" fill="#e8ecfd">
              <path d="M 86.54946136474609 14.5487060546875 L 1.776480793952942 14.5487060546875 L -9.423519134521484 0.5487060546875 L 76.28279113769531 0.5487060546875 L 86.54946136474609 14.5487060546875 Z" stroke="none"></path>
              <path d="M 85.56276702880859 14.0487060546875 L 76.02943420410156 1.0487060546875 L -8.383214950561523 1.0487060546875 L 2.01678466796875 14.0487060546875 L 85.56276702880859 14.0487060546875 M 87.53616333007812 15.0487060546875 L 1.536163330078125 15.0487060546875 L -10.46383666992188 0.0487060546875 L 76.53616333007812 0.0487060546875 L 87.53616333007812 15.0487060546875 Z" stroke="none" fill="#707070"></path>
            </g>
            <g id="Path_603" data-name="Path 603" transform="translate(13.798 23.798)" fill="#fff">
              <path d="M 22.53779029846191 58.42581939697266 L 0.5377902984619141 46.94755935668945 L 0.5377902984619141 -8.955975532531738 L 22.53779029846191 1.565763235092163 L 22.53779029846191 58.42581939697266 Z" stroke="none"></path>
              <path d="M 1.037790298461914 -8.162609100341797 L 1.037790298461914 46.64446640014648 L 22.03779029846191 57.60099029541016 L 22.03779029846191 1.880867004394531 L 1.037790298461914 -8.162609100341797 M 0.03779029846191406 -9.749351501464844 L 23.03779029846191 1.250648498535156 L 23.03779029846191 59.25064849853516 L 0.03779029846191406 47.25064849853516 L 0.03779029846191406 -9.749351501464844 Z" stroke="none" fill="#707070"></path>
            </g>
            <g id="Path_604" data-name="Path 604" transform="translate(3 30.798)" fill="#e8ecfd">
              <path d="M 19.76723670959473 5.650899410247803 L -2.246479511260986 -5.834517955780029 L 11.00876522064209 -16.24935340881348 L 11.71780395507812 -16.24935340881348 L 32.93868637084961 -5.638912677764893 L 19.76723670959473 5.650899410247803 Z" stroke="none"></path>
              <path d="M 19.69865036010742 5.051152229309082 L 32.04153823852539 -5.52846622467041 L 11.59976387023926 -15.74935340881348 L 11.18169689178467 -15.74935340881348 L -1.328788757324219 -5.919685840606689 L 19.69865036010742 5.051152229309082 M 19.83583450317383 6.250646591186523 L -3.164166450500488 -5.749353408813477 L 10.83583354949951 -16.74935340881348 L 11.83583354949951 -16.74935340881348 L 33.83583450317383 -5.749353408813477 L 19.83583450317383 6.250646591186523 Z" stroke="none" fill="#707070"></path>
            </g>
          </g>
          <g id="Group_246" data-name="Group 246" transform="translate(76.287 50.988)">
            <path id="Path_585" data-name="Path 585" d="M392.487,752.947a13.209,13.209,0,0,1,12-8c5.271,0,9.068,3.433,11,8" transform="translate(-392.238 -732.387)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" fill-rule="evenodd"></path>
            <circle id="Ellipse_21" data-name="Ellipse 21" cx="2.5" cy="2.5" r="2.5" transform="translate(-0.251 0.061)" fill="#717171"></circle>
            <circle id="Ellipse_22" data-name="Ellipse 22" cx="2.5" cy="2.5" r="2.5" transform="translate(18.749 0.061)" fill="#717171"></circle>
          </g>
          <g id="Group_38" data-name="Group 38" transform="translate(130.692 45.854)">
            <path id="Path_587" data-name="Path 587" d="M466.344,747.674l1,7-10-12a44.479,44.479,0,0,1-4-7l-1-1a10.528,10.528,0,0,1-1-5v-2h0a86.457,86.457,0,0,0,11,15A44.6,44.6,0,0,1,466.344,747.674Z" transform="translate(-451.5 -727.98)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
            <g id="Group_37" data-name="Group 37" transform="translate(10.913 17.208)">
              <circle id="Ellipse_23" data-name="Ellipse 23" cx="6.5" cy="6.5" r="6.5" transform="translate(-0.068 0.486)" fill="#e8ecfd" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></circle>
              <path id="Path_588" data-name="Path 588" d="M466.616,763.543c-.29-4.834,1.134-8.7,7-10,6.746-1.5,9.719,1.281,11,0s4.079-4.921,6-3a4.494,4.494,0,0,1-1,7c-3.452,1.748-4.68,2.119-5,5s-1,10.719-1,12-.719,4.36-2,5a2.047,2.047,0,0,1-1,3,4.112,4.112,0,0,1-3,0s-1.759.522-4-3S466.807,766.739,466.616,763.543Z" transform="translate(-465.684 -750.057)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
              <path id="Path_589" data-name="Path 589" d="M483.43,774.99s.354,2.256,1,5c.388,1.652.858,4.062,1,5" transform="translate(-469.499 -755.503)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
              <path id="Path_590" data-name="Path 590" d="M480.01,788.7a4.284,4.284,0,0,0,1-6,30.425,30.425,0,0,0-4-5" transform="translate(-468.079 -756.212)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
              <path id="Path_591" data-name="Path 591" d="M478.294,758.405s2.8,1.881,3,4c.257,2.718-2,5-2,5" transform="translate(-468.362 -751.919)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
            </g>
          </g>
          <g id="Group_40" data-name="Group 40" transform="translate(0 44.224)">
            <path id="Path_592" data-name="Path 592" d="M346.443,748.161l-1,7a96.983,96.983,0,0,0,10-13c3.873-6.379,8.245-15.171,7-14s-7.956,9.531-12,14A27,27,0,0,0,346.443,748.161Z" transform="translate(-323.908 -727.837)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
            <g id="Group_39" data-name="Group 39" transform="translate(0 17.32)">
              <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="6.5" cy="7" rx="6.5" ry="7" transform="translate(13.536 0.004)" fill="#e8ecfd" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></ellipse>
              <path id="Path_593" data-name="Path 593" d="M343.3,764.061c.29-4.834-1.134-9.7-7-11-6.746-1.5-9.719,1.281-11,0s-4.079-3.921-6-2a4.494,4.494,0,0,0,1,7c3.451,1.748,4.68,1.119,5,4s1,10.719,1,12-.281,4.36,1,5c0,0-.169,3,2,4,1.431.662,3-1,3-1s1.759.522,4-3S343.107,767.257,343.3,764.061Z" transform="translate(-317.763 -750.057)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
              <path id="Path_594" data-name="Path 594" d="M333.067,774.508a58.282,58.282,0,0,1-1,6c-.388,1.652-1.858,3.062-2,4" transform="translate(-320.531 -755.503)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
              <path id="Path_595" data-name="Path 595" d="M335.791,788.216s-3.34-1.332-1-5a30.427,30.427,0,0,1,4-5" transform="translate(-321.255 -756.212)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
              <path id="Path_596" data-name="Path 596" d="M338,758.923s-2.8.881-3,3a15.887,15.887,0,0,0,1,6" transform="translate(-321.467 -751.919)" fill="#fff" stroke="#717171" stroke-miterlimit="10" stroke-width="1"></path>
            </g>
          </g>
        </g>
        <g id="Group_247" data-name="Group 247" transform="translate(581.289 506.57)">
          <g id="Group_41" data-name="Group 41" transform="matrix(0.966, -0.259, 0.259, 0.966, 0, 3.674)">
            <line id="Line_26" data-name="Line 26" y1="6.692" x2="5.934" transform="translate(3.557 3.213)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"></line>
            <line id="Line_27" data-name="Line 27" x1="0.12" y1="7.279" transform="translate(0.091 -0.341)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"></line>
            <line id="Line_28" data-name="Line 28" y1="0.12" x2="7.279" transform="translate(6.903 12.752)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"></line>
          </g>
        </g>
        <circle id="Ellipse_25" data-name="Ellipse 25" cx="3" cy="3" r="3" transform="translate(452.788 541.392)" fill="#717171" opacity="0.1"></circle>
        <circle id="Ellipse_26" data-name="Ellipse 26" cx="3" cy="3" r="3" transform="translate(626.788 503.392)" fill="#717171" opacity="0.1"></circle>
        <ellipse id="Ellipse_27" data-name="Ellipse 27" cx="7.5" cy="7" rx="7.5" ry="7" transform="translate(646.288 549.892)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" opacity="0.1"></ellipse>
        <circle id="Ellipse_28" data-name="Ellipse 28" cx="5" cy="5" r="5" transform="translate(503.288 613.892)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" opacity="0.2"></circle>
        <line id="Line_29" data-name="Line 29" x1="12" y2="11" transform="translate(482.288 483.892)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" opacity="0.4"></line>
        <line id="Line_30" data-name="Line 30" x1="12" y1="11" transform="translate(482.288 483.892)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" opacity="0.4"></line>
        <g id="Group_43" data-name="Group 43" transform="translate(585.973 626.43)">
          <line id="Line_31" data-name="Line 31" x1="8" y2="8" transform="translate(0.316 0.461)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" opacity="0.4"></line>
          <line id="Line_32" data-name="Line 32" x1="8" y1="8" transform="translate(0.316 0.461)" fill="none" stroke="#717171" stroke-miterlimit="10" stroke-width="1" opacity="0.4"></line>
        </g>
      </g>
    </svg>
    </br>
    <p>No se han encontrado resultados. Por favor, vuelva más tarde.</p>
    </div>


      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svgloading_teraV" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(30 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(60 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(90 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(120 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(150 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(180 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(210 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(240 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(270 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(300 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(330 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
</rect>
</g>
</svg>


  </div>



  </div>
</div>
`