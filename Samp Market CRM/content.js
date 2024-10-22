const lin = chrome.runtime.getURL("stye.css");
const regex = /\/\/([^/]+)\//;
let server_link =
  "https://script.google.com/macros/s/AKfycbxVmbS21nvgokhWcc4JwnySuKRR13TbN5GRS-Em1MspcELa0rAQDqj9HWr9IJ6ED5E2/exec";
e();

function e() {
  link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL("style.css");
  document.body.appendChild(link);
  waitForElm('[data-icon="delete"]').then((elm) => {
    l();

    inckey();

    function inckey() {
      window.postMessage(
        {
          target: "triggered_main",
          message: {
            action: "triggered_main",
          },
        },
        "*"
      );
      setTimeout(function () {
        const divElement = document.querySelector('[data-icon="delete"]')
          .parentElement.parentElement.parentElement.parentElement;

        const ela = document.createElement("div");
        ela.innerHTML = reloaders;
        ela.id = "extensio";
        const firstsection = divElement.children[1];
        divElement.insertBefore(ela, firstsection);
        const elaV = document.createElement("div");
        elaV.innerHTML = reloadersV;
        elaV.id = "extensioV";
        elaV.style = "background-color: white;";
        const firstsectionV = divElement.children[1];
        divElement.insertBefore(elaV, firstsectionV);

        if (localStorage.getItem("child_sheets") != null) {
          data_child = JSON.parse(localStorage.getItem("child_sheets"));
          data_child.forEach(function (sheetname) {
            let optionEditor = document.createElement("option");
            optionEditor.value = sheetname;
            optionEditor.innerText = sheetname;
            document
              .querySelector("#editorselection")
              .appendChild(optionEditor);
            let optionViewer = document.createElement("option");
            optionViewer.value = sheetname;
            optionViewer.innerText = sheetname;
            document
              .querySelector("#viewerselection")
              .appendChild(optionViewer);
            let optionreply = document.createElement("option");
            optionreply.value = sheetname;
            optionreply.innerText = sheetname;
            document.querySelector("#replyselection").appendChild(optionreply);
          });
          localStorage.editorselection &&
            (document.querySelector("#editorselection").value =
              localStorage.editorselection);
          localStorage.viewerselection &&
            (document.querySelector("#viewerselection").value =
              localStorage.viewerselection);
          localStorage.replyselection &&
            (document.querySelector("#replyselection").value =
              localStorage.replyselection);
          if (
            localStorage.switcher == undefined ||
            localStorage.switcher == "undefined"
          ) {
            document
              .querySelector("#switch_role")
              .classList.remove("ant-switch-checked");

            document.querySelector("#switch_name").innerText = "off";
          }
        } else {
        }

        document.getElementById("appscript").value =
          localStorage.getItem("appscript") ?? "";
        document
          .getElementById("viewerselection")
          .addEventListener("change", function (event) {
            localStorage.setItem("viewerselection", this.value);
          });
        document
          .getElementById("editorselection")
          .addEventListener("change", function (event) {
            localStorage.setItem("editorselection", this.value);
          });
        document
          .getElementById("replyselection")
          .addEventListener("change", function (event) {
            localStorage.setItem("replyselection", this.value);
            fetch(server_link + "?function=get_collums", {
              mode: "no-cors",
              headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9,de;q=0.8,ar;q=0.7,fr;q=0.6",
                "content-type": "application/x-www-form-urlencoded",
              },
              body:
                "sheetid=" + localStorage.appscript + "&sheet=" + this.value,
              method: "POST",
            })
              .then((response) => response.json())

              .then(function (data) {
                //console.log(data);
                localStorage.setItem("reply_auto", JSON.stringify(data.data));
              })
              .catch((error) => {});
          });
        document.getElementById("clickEdit").onclick = function () {
          document.getElementById("edits").disabled = false;
          var tableElement = document.getElementById("table");
          var inputElements = tableElement.querySelectorAll("[editables]");
          for (var i = 0; i < inputElements.length; i++) {
            inputElements[i].readOnly = false;
          }
        };
        document.getElementById("edits").onclick = function () {
          if (edits.disabled != true) {
            edits.innerText = "Actualizando...";
            var tableElement = document.getElementById("table");
            var inputElements = tableElement.querySelectorAll("[editables]");

            var rowdata = Array.from(inputElements, function (input) {
              return input.value;
            });

            var encodedText = Array.from(JSON.stringify(rowdata).toString())
              .map(function (char) {
                if (char.length > 1) {
                  return (
                    "\\u" +
                    char.charCodeAt(0).toString(16) +
                    "\\u" +
                    char.charCodeAt(1).toString(16)
                  );
                } else {
                  return char;
                }
              })
              .join("");
            var encodedValue = encodeURIComponent(
              JSON.stringify(rowdata).toString()
            );

            //send that to background ,
            chrome.runtime.sendMessage(
              {
                message: "request_update",
                fetcher: localStorage.getItem("appscript"),
                server_link: server_link,
                sheeteditorName:
                  document.querySelector("#editorselection").value,
                encodedText: encodedValue,
                rownum: localStorage.rownum,
              },
              function (res) {
                //console.log(res)
              }
            );
          }
        };

        if (
          document.querySelector("#main > header")?.innerText.split("\n")[0] ==
          null
        ) {
        } else {
          function isPhoneNumber(string) {
            var pattern = /^\d{9,}$/;
            return pattern.test(string);
          }

          // Example usage:
          var phoneNumber = document
            .querySelector("#main > header")
            ?.innerText.split("\n")[0];
          var cleanedString = phoneNumber.replaceAll(/(\(|\)| |\+|-)/gi, "");

          if (isPhoneNumber(cleanedString)) {
            chrome.runtime.sendMessage(
              {
                message: "request-view",
                sheeteditorName:
                  document.querySelector("#editorselection").value,
                sheetviewerName:
                  document.querySelector("#viewerselection").value,
                server_link: server_link,
                fetcher: localStorage.getItem("appscript"),
                number: document
                  .querySelector("#main > header")
                  ?.innerText.split("\n")[0],
              },
              function (res) {
                //console.log(res)
              }
            );
          } else {
            setTimeout(function () {
              op = document.querySelectorAll(
                "[dir='auto'].selectable-text.copyable-text span"
              ).length;

              chrome.runtime.sendMessage(
                {
                  message: "request-view",
                  sheeteditorName:
                    document.querySelector("#editorselection").value,
                  sheetviewerName:
                    document.querySelector("#viewerselection").value,
                  server_link: server_link,
                  fetcher: localStorage.getItem("appscript"),
                  number: document.querySelectorAll(
                    "[dir='auto'].selectable-text.copyable-text span"
                  )[op - 1]?.innerText,
                  fetcher: localStorage.getItem("appscript"),
                },
                function (res) {
                  //console.log(res)
                }
              );
            }, 1000);
          }
        }
      }, 500);
    }
  });
}

checked = 0;

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (
      document.querySelector(selector) &&
      document.querySelector('[data-icon="lock"]')
    ) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (
        document.querySelector(selector) &&
        document.querySelector('[data-icon="lock"]')
      ) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function waitForRapid(selector) {
  return new Promise((resolve) => {
    if (
      document.querySelector("#quickReplayTitle") &&
      document.querySelector("#inputMessageId-campaign_0")
    ) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (
        document.querySelector("#quickReplayTitle") &&
        document.querySelector("#inputMessageId-campaign_0")
      ) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function waitForRapidGone(selector) {
  return new Promise((resolve) => {
    if (
      document.querySelector("#quickReplayTitle") &&
      !document.querySelector("#inputMessageId-campaign_0")
    ) {
      return resolve("");
    }

    const observer = new MutationObserver((mutations) => {
      if (
        document.querySelector("#quickReplayTitle") &&
        !document.querySelector("#inputMessageId-campaign_0")
      ) {
        resolve("");
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
window.addEventListener("change", function (event) {
  if (
    event.target.id == "tabs_selections" &&
    event.target.value != "" &&
    custom_tab_add.parentElement.classList.contains("ant-checkbox-checked")
  ) {
    WPRapidResponses.tabsADD = [event.target.value];
  } else if (
    event.target.id == "tabs_selections_remove" &&
    event.target.value != "" &&
    custom_tab_remove.parentElement.classList.contains("ant-checkbox-checked")
  ) {
    WPRapidResponses.tabsRemove = [event.target.value];
  } else if (
    event.target.id == "groups_selections" &&
    event.target.value != "" &&
    group_add.parentElement.classList.contains("ant-checkbox-checked")
  ) {
    WPRapidResponses.groupsADD = [event.target.value];
  } else if (
    event.target.id == "groups_selections_remove" &&
    event.target.value != "" &&
    group_remove.parentElement.classList.contains("ant-checkbox-checked")
  ) {
    WPRapidResponses.groupsRemove = [event.target.value];
  } else if (
    event.target.id == "labels_selections" &&
    event.target.value != "" &&
    custom_label_add.parentElement.classList.contains("ant-checkbox-checked")
  ) {
    WPRapidResponses.labelsADD = [event.target.value];
  } else if (
    event.target.id == "labels_selections_remove" &&
    event.target.value != "" &&
    custom_label_remove.parentElement.classList.contains("ant-checkbox-checked")
  ) {
    WPRapidResponses.labelsRemove = [event.target.value];
  }
});

window.addEventListener("click", function (event) {
  if (event.target.id == "btncopy") {
    var textarea = event.target.closest("button").nextElementSibling;
    if (textarea.tagName.toLowerCase() === "textarea") {
      const el = document.createElement("textarea");
      el.value = textarea.value;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      textarea.focus();
      textarea.select();
    }
  } else if (event.target.tagName.toLowerCase() === "textarea") {
    var textareaElement = event.target;
    try {
      document.getElementById("btncopy").remove();
    } catch (err) {}
    var buttonHTML = `<button id="btncopy" class="flex ml-auto gap-2 rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" style="
 padding: 2px;"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button>`;
    textareaElement.insertAdjacentHTML("beforebegin", buttonHTML);
  } else if (event.target.id == "loadsheet") {
    event.target.disabled = true;
    event.target.innerText = "Cargando...";
    var sh = document.querySelector("#appscript").value;
    document.getElementById("errorsheet").style.display = "none";
  }
});

function waitForElmRemoval(selector) {
  return new Promise((resolve) => {
    if (!document.querySelector(selector)) {
      return resolve();
    }

    const observer = new MutationObserver((mutations) => {
      if (!document.querySelector(selector)) {
        resolve();
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

// Usage example
function l() {
  waitForElmRemoval('[data-icon="delete"]').then(() => {
    e();
  });
}

function updatesucess() {
  edits.innerText = "Actualizado";
  document.getElementById("edits").disabled = true;
  //make all inputs to be editable , and when clicks the edits button it will get all infos and send them to spreadhseet
  // Get the table element by its ID
  var tableElement = document.getElementById("table");

  // Get all the input elements inside the table element
  var inputElements = tableElement.querySelectorAll("[editables]");

  // Loop through each input element and set the readOnly attribute to false
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = true;
    inputElements[i].setAttribute("editables", "true");
  }
}

function noresuts(view, data) {
  document.getElementById("svgloading").style.display = "none";
  document.getElementById("nodatasvg").style.display = "flex";
  if (view == false) {
    document.getElementById("svgloadingV").style.display = "none";
    document.getElementById("nodatasvgV").style.display = "flex";
  } else {
    viewonlyparser(data);
  }
}

function parseresults(data, view) {
  document.getElementById("svgloading").style.display = "none";
  document.getElementById("details").style.display = "block";
  localStorage.rownum = data.numberrows;

  var keys = data.rows[0].split(","); // Extract keys from the first row
  var values = data.rows[1].split(","); // Extract values from the second row

  var table = document.getElementById("table");

  for (var i = 0; i < keys.length; i++) {
    var keyCell = document.createElement("label");
    keyCell.textContent = keys[i];
    table.appendChild(keyCell);
    var valueCell = document.createElement("textarea");
    valueCell.readOnly = "true";
    var lines = values[i].split("\n").length;
    var lineHeight = 20; // Adjust this value based on your font and line height
    valueCell.style.height = lines * lineHeight + "px";
    valueCell.classList.add(
      "textarea-class",
      "l7jjieqr",
      "cw3vfol9",
      "_11JPr",
      "selectable-text",
      "copyable-text"
    );

    valueCell.textContent = values[i];

    valueCell.setAttribute("editables", "false");

    // Set the textarea height based on the number of lines

    table.appendChild(valueCell);
  }

  // Llamada a la función autosize() después de crear los textarea
  autosize();

  // Función para ajustar automáticamente la altura de los textarea
  function autosize() {
    var text = document.getElementsByClassName("textarea-class");

    for (var i = 0; i < text.length; i++) {
      text[i].setAttribute("rows", 1);
      resize(text[i]);
    }

    for (var i = 0; i < text.length; i++) {
      text[i].addEventListener("input", function () {
        resize(this);
      });
    }

    function resize($text) {
      $text.style.height = "auto";
      $text.style.height = $text.scrollHeight + "px";
    }
  }

  if (view == false) {
    document.getElementById("svgloadingV").style.display = "none";
    document.getElementById("nodatasvgV").style.display = "flex";
  } else {
    viewonlyparser(data);
  }
}

/*Funcion DIV VER*/
function viewonlyparser(data) {
  document.getElementById("svgloadingV").style.display = "none";
  document.getElementById("detailsV").style.display = "block";
  //view only special case
  var keys = data.rowsV[0].split(","); // Extract keys from the first row
  var values = data.rowsV[1].split(","); // Extract values from the second row

  var table = document.getElementById("tableV");

  for (var i = 0; i < keys.length; i++) {
    var keyCell = document.createElement("label");
    keyCell.textContent = keys[i];
    table.appendChild(keyCell);
    var valueCell = document.createElement("div");
    valueCell.style.userSelect = "text"; // Making the text selectable
    valueCell.readOnly = "true";
    /*  var lines = values[i].split("\n").length;
          var lineHeight = 20; // Adjust this value based on your font and line height
          valueCell.style.height = lines * lineHeight + "px";*/
    valueCell.classList.add(
      "textarea-class",
      "l7jjieqr",
      "cw3vfol9",
      "_11JPr",
      "selectable-text",
      "copyable-text"
    );
    // Crear un enlace dentro del div
    if (values[i].includes("http://") || values[i].includes("https://")) {
      var link = document.createElement("a");
      link.href = values[i];
      link.textContent = values[i];
      link.target = "_self"; // Abrir enlace en la misma página
      valueCell.appendChild(link);
    } else {
      var lines = values[i].split("\n");
      for (var j = 0; j < lines.length; j++) {
        valueCell.innerHTML += lines[j];
        if (j < lines.length - 1) {
          valueCell.innerHTML += "<br>";
        }
      }
    }
    table.appendChild(valueCell);
  }

  // Llamada a la función autosize() después de crear los textarea
  autosize();

  // Función para ajustar automáticamente la altura de los textarea
  function autosize() {
    var text = document.getElementsByClassName("textarea-class");

    for (var i = 0; i < text.length; i++) {
      text[i].setAttribute("rows", 1);
      resize(text[i]);
    }

    for (var i = 0; i < text.length; i++) {
      text[i].addEventListener("input", function () {
        resize(this);
      });
    }

    function resize($text) {
      $text.style.height = "auto";
      $text.style.height = $text.scrollHeight + "px";
    }
  }
}
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  view_status = true;
  if (message == false && !message.info) {
    noresuts(false);
  } else if (message == true && !message.info) {
    //updated with sucess
    updatesucess();
  } else if (!message.info) {
    if (message.rows.length == 1) {
      if (message.rowsV.length == 1) {
        view_status = false;
      }
      noresuts(view_status, message);
    } else {
      if (message.rowsV.length == 1) {
        view_status = false;
      }

      parseresults(message, view_status);
    }
  }
  sendResponse({});
  return true;
});

function waitForcode(selector) {
  return new Promise((resolve) => {
    if (
      document.querySelector("body").className.includes("WR1Y5AS_CODE_EXECUTE")
    ) {
      return resolve(true);
    }

    const observer = new MutationObserver((mutations) => {
      if (
        document
          .querySelector("body")
          .className.includes("WR1Y5AS_CODE_EXECUTE")
      ) {
        resolve(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

// waitForcode('body').then((elm) => {

//     wpps = document.createElement("script")
//     wpps.src = chrome.runtime.getURL("wppconnect-wa.js")
//     document.head.appendChild(wpps)
// })

// window.addEventListener('message', (event) => {
//     if (event.data.target == "get_replacement") {
//         fetch(server_link + "?function=get_replace_reply", {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'text/plain;charset=utf-8'

// 			},
// 			body: JSON.stringify(event.data.message)
// 		})

// 		.then(response => response.json())
// 		.then(data => {
// 			if (data.status == 200) {
// 				//console.log("sending back response")
// 				//console.log(data)
// 				body = event.data.message.body;
// 				user = event.data.message.numberspecial;
// 				wordToReplace = event.data.message.word;
// 				rep_msg = data.msg[event.data.message.collumnumber].toString();
// 				let regexPattern = new RegExp(`\\[${wordToReplace}\\]|\\{${wordToReplace}\\}|\"${wordToReplace}\"|\'${wordToReplace}\'`, 'gi');
// 				let replacedBody = body.replace(regexPattern, rep_msg);
// 				//console.log(replacedBody)
// 				window.postMessage({
// 					target: "get_answer",
// 					message: {
// 						msg: replacedBody,
// 						user: user
// 					}
// 				}, '*');
// 			}

// 		})
// 		.catch(error => {

// 		});
//     } else if (event.data.target == "get_reply_f") {
//         if (localStorage.switcher != undefined && localStorage.switcher != "undefined") {

//             fetch(server_link + "?function=get_auto_reply", {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'text/plain;charset=utf-8'

// 				},
// 				body: JSON.stringify(event.data.message)
// 			})

// 			.then(response => response.json())
// 			.then(data => {
// 				if (data.status == 200) {
// 					window.postMessage({
// 						target: "get_reply",
// 						message: data
// 					}, '*');
// 				}
// 			})
// 			.catch(error => {

// 			})
//         }

//     } else if (event.data.target == "back_ws_groups") {
//         //fill the data when its back
//         groups = JSON.parse(event.data.message);
//         console.log(groups)

//         //for each one create the options in all groups
//         selectab = document.querySelector("#groups_selections")
//         groups.forEach(obj => {
//             var optionElement = document.createElement("option");
//             optionElement.value = obj.id; // Set the value as needed
//             optionElement.textContent = obj.name; // Set the text content as needed
//             selectab.appendChild(optionElement);
//         });
//         selectabR = document.querySelector("#groups_selections_remove")
//         groups.forEach(obj => {
//             var optionElement = document.createElement("option");
//             optionElement.value = obj.id; // Set the value as needed
//             optionElement.textContent = obj.name; // Set the text content as needed
//             selectabR.appendChild(optionElement);
//         });

//     } else if (event.data.target == "back_ws_labels") {
//         labels = JSON.parse(event.data.message);
//         if (labels.length != 0) {
//             selectab = document.querySelector("#labels_selections")
//             labels.forEach(obj => {
//                 var optionElement = document.createElement("option");
//                 optionElement.value = obj.id;
//                 optionElement.textContent = obj.name;
//                 selectab.appendChild(optionElement);
//             });
//             selectabR = document.querySelector("#labels_selections_remove")
//             labels.forEach(obj => {
//                 var optionElement = document.createElement("option");
//                 optionElement.value = obj.id;
//                 optionElement.textContent = obj.name;
//                 selectabR.appendChild(optionElement);
//             });
//             document.querySelector("#buz_perso").style.display = "block"
//         } else {
//             document.querySelector("#buz_perso").style.display = "none"

//         }

//     } else if (event.data.type == "STORE_CAMPAIGN_DATA") {
//         if (event?.data?.data?.type == "quick_reply_inject") {
//             blank = {
//                 block: false,
//                 archive: false,
//                 unarchive: false,
//                 tabsADD: [],
//                 tabsRemove: [],
//                 groupsADD: [],
//                 labelsADD: [],
//                 labelsRemove: [],
//                 groupsRemove: [],
//                 delay: 1,
//                 id: ""
//             };
//             var isMatch = JSON.stringify(blank) === JSON.stringify(WPRapidResponses);

//             if (!isMatch) {
//                 WPRapidResponses.id = event?.data?.data?.data?.messages[0].id;
//                 id_delete = event?.data?.data?.data?.messages[0].id
//                 WPRapidResponses.delay = event?.data?.data?.data?.messages[0].maximumDelayValue;
//                 if (localStorage.getItem('WPRapidResponses')) {
//                     var existingData = JSON.parse(localStorage.getItem('WPRapidResponses'));
//                     updatedArray = existingData.filter(obj => obj.id !== id_delete);
//                     updatedArray.push(WPRapidResponses);
//                     localStorage.setItem('WPRapidResponses', JSON.stringify(updatedArray));
//                 } else {
//                     var newData = [];
//                     newData.push(WPRapidResponses)
//                     localStorage.setItem('WPRapidResponses', JSON.stringify(newData));
//                 }
//             } else {
//                 //ignore non selected rapids
//             }
//         }
//     } else if (event.data.type == "DELETE_CAMPAIGN_DATA") {

//         if (event?.data?.data?.type == "quick_reply_inject") {

//             id_delete = event?.data?.data?.data?.messages[0].id;
//             if (localStorage.getItem('WPRapidResponses')) {
//                 var existingData = JSON.parse(localStorage.getItem('WPRapidResponses'));
//                 const updatedArray = existingData.filter(obj => obj.id !== id_delete);
//                 localStorage.setItem('WPRapidResponses', JSON.stringify(updatedArray));

//             }

//         }

//     } else if (event.data.target == "copy_this") {

//         const el = document.createElement('textarea');
//         el.value = event.data.message;
//         el.setAttribute('readonly', '');
//         el.style.position = 'absolute';
//         el.style.left = '-9999px';
//         document.body.appendChild(el);
//         el.select();
//         document.execCommand('copy');
//         document.body.removeChild(el);

//     } else if (event.data.target == "add_to_tabs") {
//         chrome.storage.local.get('WR1Y5AStorage', function(result) {

//             const innerObject = result.WR1Y5AStorage;
//             const randomKey = Object.keys(innerObject)[0];
//             var tabs = innerObject[randomKey].tab_list

//             const special_tabid = event.data.actions[0];

//             const targetTab = tabs.find((tab) => tab.id === special_tabid);

//             if (targetTab) {
//                 no_dublicate = targetTab.ids.find((id) => id.id === event.data.message.phone);
//                 if (!no_dublicate) {
//                     targetTab.ids.push({
//                         id: event.data.message.phone,
//                         name: event.data.message.phone,
//                         selected: true,
//                         type: "individual"
//                     });
//                 }

//             } else {}
//             window.postMessage({
//                 type: "UPDATE_TAB_LIST",
//                 data: {
//                     key: randomKey,
//                     type: "tab_list",
//                     data: tabs
//                 }
//             }, '*');
//             setTimeout(function() {
//                 window.postMessage({
//                     type: "GET_STORAGE_DATA",
//                     data: randomKey
//                 }, '*');

//             }, 500)

//         });

//     } else if (event.data.target == "remove_from_tabs") {

//         chrome.storage.local.get('WR1Y5AStorage', function(result) {
//             const innerObject = result.WR1Y5AStorage;
//             const randomKey = Object.keys(innerObject)[0];
//             var tabs = innerObject[randomKey].tab_list

//             const special_tabid = event.data.actions[0];
//             const targetTab = tabs.find((tab) => tab.id === special_tabid);

//             if (targetTab) {
//                 no_dublicate = targetTab.ids.find((id) => id.id === event.data.message.phone);
//                 if (no_dublicate) {
//                     targetTab.ids = targetTab.ids.filter((idObj) => idObj.id !== event.data.message.phone);
//                 }
//             } else {
//                 console.error("Tab with ID", special_tabid, "not found in retrieved data.");
//             }
//             window.postMessage({
//                 type: "UPDATE_TAB_LIST",
//                 data: {
//                     key: randomKey,
//                     type: "tab_list",
//                     data: tabs
//                 }
//             }, '*');
//             setTimeout(function() {
//                 window.postMessage({
//                     type: "GET_STORAGE_DATA",
//                     data: randomKey
//                 }, '*');

//             }, 500)

//         });

//     }

// });

function customwaiter() {
  waitForRapid('[id="quickReplayTitle"]').then((elm) => {
    customwaiterGone();
    checked = 1;
    try {
      custom_rapid.remove();
    } catch (err) {}
    custom = document.createElement("div");
    custom.id = "custom_rapid";
    custom.innerHTML = rapid_replay;
    var closestElement = document.querySelector(
      ".ant-row .custom-quick-reply-collapse-section"
    );
    closestElement.parentElement.appendChild(custom);
    chrome.storage.local.get("WR1Y5AStorage", function (result) {
      WPRapidResponses = {
        block: false,
        archive: false,
        unarchive: false,
        tabsADD: [],
        tabsRemove: [],
        groupsADD: [],
        groupsRemove: [],
        labelsADD: [],
        labelsRemove: [],
        delay: 1,
        id: "",
      };

      const innerObject = result.WR1Y5AStorage;
      try {
        const randomKey = Object.keys(innerObject)[0];

        var tabs = innerObject[randomKey].tab_list.filter(function (obj) {
          return obj.type === "custom";
        });
      } catch (err) {
        tabs = [];
      }

      selectab = document.querySelector("#tabs_selections");
      tabs.forEach((obj) => {
        var optionElement = document.createElement("option");
        optionElement.value = obj.id; // Set the value as needed
        optionElement.textContent = obj.title; // Set the text content as needed
        selectab.appendChild(optionElement);
      });
      selectabR = document.querySelector("#tabs_selections_remove");
      tabs.forEach((obj) => {
        var optionElement = document.createElement("option");
        optionElement.value = obj.id; // Set the value as needed
        optionElement.textContent = obj.title; // Set the text content as needed
        selectabR.appendChild(optionElement);
      });
    });
    //
    window.postMessage(
      {
        target: "get_groups",
        message: {},
      },
      "*"
    );
    window.postMessage(
      {
        target: "get_labels",
        message: {},
      },
      "*"
    );
  });
}
customwaiter();

function customwaiterGone() {
  waitForRapidGone('[id="quickReplayTitle"]').then((elm) => {
    customwaiter();
  });
}

const rapid_replay = "";

// const rapid_replay = `<div class="ant-col"><div class="ant-col ant-col-12 border-right column-padding-common"><div class="ant-form-item custom-switch-layout custom-action-custom-spacing"><div class="ant-row ant-form-item-row" style="
// display: flex !important;
// align-content: center;
// justify-content: space-between;
// align-items: center;
// flex-wrap: nowrap;
// flex-direction: column;
// flex-direction: row;
// "><div class="ant-col ant-form-item-label"><button type="button" role="switch" aria-checked="false" class="ant-switch ant-switch-small" ant-click-animating="false" id="tab_switch"><div class="ant-switch-handle"></div><span class="ant-switch-inner"></span></button> <label class="" title="Custom Tab Actions">Acciones de Embudos</label></div></div></div><div class="ant-form-item custom-group-tab-reply-flex-section" id="div_tabs"><div class="ant-row ant-form-item-row"><div class="ant-col ant-form-item-control"><div class="ant-form-item-control-input"><div class="ant-form-item-control-input-content"><label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-in-form-item"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="custom_tab_add"><span class="ant-checkbox-inner"></span></span><span>Agregar a Embudo</span></label><div class="ant-select ant-select-in-form-item custom-custom-select custom-custom-select-spacing-left ant-select-multiple ant-select-allow-clear ant-select-show-search" style="margin: 5px 0px;">
// <select id="tabs_selections" style="margin: 5px;" class="ant-input">
// </select>
// </div><label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-in-form-item custom-label-spacing-remove"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="custom_tab_remove"><span class="ant-checkbox-inner"></span></span><span>Eliminar de Embudos</span></label><div class="ant-select ant-select-in-form-item custom-custom-select custom-custom-select-spacing-left ant-select-multiple ant-select-allow-clear ant-select-show-search" style="margin: 5px 0px;">
// <select id="tabs_selections_remove" style="margin: 5px;" class="ant-input">

// </select>
// </div></div></div></div></div></div><div class="ant-row ant-form-item-row" style="
// display: flex !important;
// align-content: center;
// justify-content: space-between;
// align-items: center;
// flex-wrap: nowrap;
// flex-direction: column;
// flex-direction: row;
// "><div class="ant-col ant-form-item-label"><button type="button" role="switch" aria-checked="false" class="ant-switch ant-switch-small" ant-click-animating="false" id="group_switch"><div class="ant-switch-handle"></div><span class="ant-switch-inner"></span></button> <label class="" title="Custom Tab Actions">Acciones de Grupos</label></div></div>
// <div class="ant-form-item custom-group-tab-reply-flex-section" style="margin-top: var(--custom-spacing-sm);" id="div_groups">
// <div class="ant-row ant-form-item-row">
// <span class="ant-typography ant-typography-secondary" style="display: block; line-height: 1.2; font-size: 12px;"><b>Nota :</b> Debe ser administrador de los grupos para realizar las siguientes acciones.</span>
// </br>
// <div class="ant-col ant-form-item-control"><div class="ant-form-item-control-input"><div class="ant-form-item-control-input-content"><label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-in-form-item"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="group_add"><span class="ant-checkbox-inner"></span></span><span>Agregar a Grupos</span></label><div class="ant-select ant-select-in-form-item custom-custom-select custom-custom-select-spacing-left ant-select-multiple ant-select-allow-clear ant-select-show-search" style="margin: 5px 0px;">
// <select id="groups_selections" style="margin: 5px;" class="ant-input">
// </select>
// </div><label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-in-form-item custom-label-spacing-remove"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="group_remove"><span class="ant-checkbox-inner"></span></span><span>Eliminar de Grupos</span></label><div class="ant-select ant-select-in-form-item custom-custom-select custom-custom-select-spacing-left ant-select-multiple ant-select-allow-clear ant-select-show-search" style="margin: 5px 0px;">
// <select id="groups_selections_remove" style="margin: 5px;" class="ant-input">
// </select>
// </div></div></div></div></div></div>
// <div id="buz_perso">
// <div class="ant-form-item custom-switch-layout custom-action-custom-spacing"><div class="ant-row ant-form-item-row" style="
// display: flex !important;
// align-content: center;
// justify-content: space-between;
// align-items: center;
// flex-wrap: nowrap;
// flex-direction: column;
// flex-direction: row;
// "><div class="ant-col ant-form-item-label"><button type="button" role="switch" aria-checked="false" class="ant-switch ant-switch-small" ant-click-animating="false" id="label_switch"><div class="ant-switch-handle"></div><span class="ant-switch-inner"></span></button> <label class="" title="Custom Tab Actions">Acciones de Etiquetas</label></div></div></div>
// <div class="ant-form-item custom-group-tab-reply-flex-section" id="div_labels"><div class="ant-row ant-form-item-row"><div class="ant-col ant-form-item-control"><div class="ant-form-item-control-input"><div class="ant-form-item-control-input-content"><label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-in-form-item"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="custom_label_add"><span class="ant-checkbox-inner"></span></span><span>Agregar Etiquetas</span></label><div class="ant-select ant-select-in-form-item custom-custom-select custom-custom-select-spacing-left ant-select-multiple ant-select-allow-clear ant-select-show-search" style="margin: 5px 0px;">
// <select id="labels_selections" style="margin: 5px;" class="ant-input">
// </select>
// </div><label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-in-form-item custom-label-spacing-remove"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="custom_label_remove"><span class="ant-checkbox-inner"></span></span><span>Eliminar Etiquetas</span></label><div class="ant-select ant-select-in-form-item custom-custom-select custom-custom-select-spacing-left ant-select-multiple ant-select-allow-clear ant-select-show-search" style="margin: 5px 0px;">
// <select id="labels_selections_remove" style="margin: 5px;" class="ant-input">

// </select>
// </div></div></div></div></div></div>
// </div>

// </div>
// <div class="ant-col ant-col-12 custom-status-switch-section column-padding-common">
// <div class="custom-combo-checkboxs"><div><label class="ant-checkbox-wrapper"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="archive_ex"><span class="ant-checkbox-inner"></span></span><span>Archivar Chat</span></label></div><div><label class="ant-checkbox-wrapper"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="unarchive_ex"><span class="ant-checkbox-inner"></span></span><span>Desarchivar Chat</span></label></div><div><label class="ant-checkbox-wrapper"><span class="ant-checkbox"><input class="ant-checkbox-input" type="checkbox" id="block_ex"><span class="ant-checkbox-inner"></span></span><span>Bloquear Chat</span></label></div></div>
// </div></div></div>`

const reloaders =
  `

<div class="credit">
<div class="form-header" style="
display: flex;
flex-wrap: wrap-reverse;
justify-content: center;
align-content: center;
align-items: flex-end;
">
    <img src="` +
  chrome.runtime.getURL("/images/sheets.png") +
  `" alt="Robot Face" style="
left: -5px;
top: -8px;
position: relative;
height: 39px;
width: 39px;
">
<h4 class="title" style="
display: grid;
/* align-items: center; */
justify-items: center;
">✏️ Editar CRM - Google Sheets</h4>
</div>



  <div id="groupNotFound" style="display:none;padding: 30px 30px 20px;">
    <p class="title">
      You need to open WhatsApp, click on one of your contacts to see details
    </p>
  </div>
  <div class="form-body" id="groupFound">




    <!-- Card Verification Field -->


    <!-- .buttons -->
     <div id="groupinfo" style="    align-content: space-around;
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     flex-direction: column;
     align-items: center;">
      <div class="l-section" id="details" style="display: none;">
        <h5 class="c-section__heading">Detalles</h5>
        <span class="c-link js-toggleForm" id="clickEdit">Editar</span>
        <div class="form" id="table">

        </div>
        <button type="submit" class="button" id="edits" disabled="">Actualizar</button>

      </div>
      <div id="nodatasvg" style="display:none;align-content: space-around;
      justify-content: space-evenly;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;" >
      <svg class="ant-empty-img-default" width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(24 31.67)"><ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse><path class="ant-empty-img-default-path-1" d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"></path><path class="ant-empty-img-default-path-2" d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" transform="translate(13.56)"></path><path class="ant-empty-img-default-path-3" d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path><path class="ant-empty-img-default-path-4" d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"></path></g><path class="ant-empty-img-default-path-5" d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"></path><g class="ant-empty-img-default-g" transform="translate(149.65 15.383)"><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path></g></g></svg>
    </br>
    <p>No se han encontrado resultados.</p>
    </div>


      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svgloading" style="margin:auto;background:transparent;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(30 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(60 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(90 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(120 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(150 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(180 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(210 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(240 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(270 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(300 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(330 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
</rect>
</g>
</svg>


  </div>



  </div>
</div>
`;

const reloadersV =
  `

<div class="credit" style="background-color: white;">


<div class="message_content-body" style="padding: 6px 10px;"><div class="d-flex align-items-center justify-content-between flex-wrap gap-md pb-md" style="
font-stretch: expanded;
"><div class="custom-search-layout d-flex align-items-center gap-md" style="width: 50%;">
<input placeholder="Introduzca el ID de spreadsheet" id="appscript" aria-required="true" class="ant-input ant-input-status-success" type="text" value="" aria-describedby="msg_help" style="
background-color: white;
"></div>
<button type="button" id="loadsheet" class="ant-btn ant-btn-primary d-flex align-items-center gap-sm">
<span role="img" aria-label="plus" class="anticon anticon-plus">
</span><span id="loadsheet" >Cargar Google Sheets</span></button>

</div>

<div id="errorsheet" class="ant-form-item-explain-error" style="display:none">Asegúrese de que su hoja de cálculo sea pública para compartir </div>
<div id="sucesssheet" class="ant-form-item-explain-success" style="color:#316474;display: none;">Felicidades! Su hoja de Spreadsheet conectada. Vuelva a abrir este perfil.</div>
<div style="
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ">

<select value="0" id="viewerselection" class="ant-input" style="margin: 5px;">
<option value="0" disabled>Select sheet for number info </option>
</select>

<select id="editorselection" style="margin: 5px;" class="ant-input">
<option value="0" disabled>Select sheet to edit number info</option>
</select>


<div style="
    display: none !important;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    width: 100%;
"><select id="replyselection" style="margin: 5px;" class="ant-input">

<option value="0" disabled>Select sheet to automatic reply messages</option>
</select>

<button id="get_u_collums" type="button" class="ant-btn ant-btn-default custom-contact-btn custom-borderless-btn"><span id="get_u_collums">Actualizar</span></button>
</div>
<br><div class="ant-form-item-control-input-content">
<span class="ant-typography custom-margin-right-4px" style="font-weight: bold;">
Procesar Variables desde Google Sheets</span>
<button type="button" role="switch" class="ant-switch ant-switch-checked" ant-click-animating="false" id="switch_role">
<div id="switch_role" class="ant-switch-handle"></div><span  class="ant-switch-inner" id="switch_name">on</span></button>
</div>

</div></div>
<div class="form-header" style="
display: flex;
flex-wrap: wrap-reverse;
justify-content: center;
align-content: center;
align-items: flex-end;
">
    <img src="` +
  chrome.runtime.getURL("/images/sheets.png") +
  `" alt="Robot Face" style="
left: -5px;
top: -8px;
position: relative;
height: 39px;
width: 39px;
">
<h4 class="title" style="
display: grid;
/* align-items: center; */
justify-items: center;
">🔍 Vista CRM - Google Sheets</h4>
</div>




  <div class="form-body" id="groupFound">

    <!-- Card Verification Field -->


    <!-- .buttons -->
     <div id="groupinfo" style="    align-content: space-around;
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     flex-direction: column;
     align-items: center;">
      <div class="l-section" id="detailsV" style="display: none;">
        <h5 class="c-section__heading">Detalles</h5>
        <div class="form" id="tableV">

        </div>
      </div>
      <div id="nodatasvgV" style="display:none;align-content: space-around;
      justify-content: space-evenly;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;" >
      <svg class="ant-empty-img-default" width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(24 31.67)"><ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse><path class="ant-empty-img-default-path-1" d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"></path><path class="ant-empty-img-default-path-2" d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" transform="translate(13.56)"></path><path class="ant-empty-img-default-path-3" d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path><path class="ant-empty-img-default-path-4" d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"></path></g><path class="ant-empty-img-default-path-5" d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"></path><g class="ant-empty-img-default-g" transform="translate(149.65 15.383)"><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path></g></g></svg>
    </br>
    <p>No se han encontrado resultados.</p>
    </div>


      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svgloadingV" style="margin:auto;background:transparent;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(30 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(60 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(90 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(120 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(150 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(180 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(210 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(240 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(270 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(300 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
</rect>
</g><g transform="rotate(330 50 50)">
<rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#316474">
<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
</rect>
</g>
</svg>


  </div>



  </div>
</div>
`;
var nkloads = "";
