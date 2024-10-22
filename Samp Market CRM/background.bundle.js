chrome.runtime.onInstalled.addListener((function(e) {
    "install" == e.reason || e.reason, chrome.tabs.query({
        url: "https://web.whatsapp.com/*"
    }, (function(e) {
        e.length > 0 ? chrome.tabs.reload(e[0].id) : chrome.tabs.create({
            url: "https://web.whatsapp.com",
            active: !0
        })
    }))
})); 

chrome.action.onClicked.addListener((function(e) {
    chrome.tabs.query({
        url: "https://web.whatsapp.com/*",
        currentWindow: !0
    }, (function(e) {
        e.length > 0 ? chrome.tabs.update(e[0].id, {
            highlighted: !0,
            selected: !0
        }) : chrome.tabs.create({
            url: "https://web.whatsapp.com"
        })
    }))
})); 

chrome.runtime.onMessage.addListener((function(e, t, n) {
    return "SET_UNINSTALL_URL" == e.subject ? (chrome.runtime.setUninstallURL(e.url), n({})) : "SEND_RICH_NOTIFICATION" == e.subject && (chrome.notifications.create(`${e.notificationId}$@$notification${Date.now()}`, {
        type: "basic",
        iconUrl: "icon-128.png",
        title: e.title,
        message: e.message
    }), n({})), !0
}));

chrome.notifications.onClicked.addListener((function(e) {
    chrome.tabs.query({
        url: "https://web.whatsapp.com/*"
    }, (function(t) {
        t.length > 0 ? (chrome.tabs.update(t[0].id, {
            selected: !0
        }), chrome.tabs.sendMessage(t[0].id, {
            subject: "ON_CLICK_RICH_NOTIFICATION",
            notifId: e
        }, (function() {}))) : chrome.tabs.create({
            url: "https://web.whatsapp.com",
            active: !0
        })
    }))
})); 

//////////////////////////////////////Terachat Extension////////////////////////////////

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	if (message.message == "request-view") {
		senderid = sender.tab.id
		fetch(message.server_link + "?function=request_view", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: 'number=' + message.number.replaceAll(/(\(|\)| |\+|-)/gi, "") + "&sheetviewerName=" + message.sheetviewerName + "&sheetid=" + message.fetcher + "&sheeteditorName=" + message.sheeteditorName
			})
			.then(response => response.json())
			.then(data => {
				if (data.rows.length == 1) {

					fetch(message.server_link + "?function=addNew", {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: 'rownumber=' + [message.number.replaceAll(/(\(|\)| |\+|-)/gi, "")] + "&sheetviewerName=" + message.sheeteditorName + "&sheetid=" + message.fetcher
						}).then(response => response.json())
						.then(data => {

						})
				}
				chrome.tabs.sendMessage(senderid, data, function(l) {

				})
			}).catch(error => {});
		sendResponse(true)
	} else if (message.message == "request_update") {
		fetch(message.server_link + "?function=update_sheet", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: 'rowNumber=' + message.rownum + '&rowData=' + message.encodedText + "&sheeteditorName=" + message.sheeteditorName + "&sheetid=" + message.fetcher
			})
			.then(response => response.json())
			.then(data => {

				chrome.tabs.sendMessage(senderid, true, function(l) {

				})
			}).catch(error => {

			})
		sendResponse(true)
	}
	if (message.action === "saveLogo") {
		saveLogoToExtensionFolder(message.imageData)
			.then(() => sendResponse({
				success: true
			}))
			.catch((error) => sendResponse({
				success: false,
				error: error.message
			}));

	}
	return true
});

async function saveLogoToExtensionFolder(imageData) {
	try {
		const rootDirectory = await new Promise((resolve, reject) => {
			chrome.runtime.getPackageDirectoryEntry(resolve, reject);
		});

		// Create or open the 'images' directory inside the root directory
		const imagesDirectory = await rootDirectory.getDirectory('images', {
			create: true
		});

		// Create a new FileHandle for the logo image
		const logoFileHandle = await imagesDirectory.getFileHandle('logo.png', {
			create: true
		});

		// Write the logo image data to the file
		const writable = await logoFileHandle.createWritable();
		await writable.write(imageData);
		await writable.close();
	} catch (error) {
		console.error('Error saving logo image to the extension folder:', error);
		throw error;
	}
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
const senderid = sender.tab.id
const url = "https://tera.chat/api/"
if (request.message == "addcontact") {
	const postData = new URLSearchParams({
		firstname: request.namef,
		lastname: request.namel,
		email: request.email,
		number: request.telefono
	});
	fetch(request.appscript + "?function=dopost", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: postData.toString()
		})
		.then(response => response.json())
		.then(data => {
			// Process the response data as needed
			chrome.tabs.sendMessage(senderid, {
				info: "contact-created"
			})
		})
		.catch(error => {
			chrome.tabs.sendMessage(senderid, {
				info: "contact-error"
			})
		});
	sendResponse({})
} else if (request.message == "validation_tera") {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	var urlencoded = new URLSearchParams();
	urlencoded.append("tera_token", request.token);
	urlencoded.append("function", "test_connection");
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow'
	};
	fetch(url, requestOptions)
		.then(response => response.json())
		.then(res => {
			console.log(res)
			if (res.length != 0) {
				chrome.tabs.sendMessage(senderid, {
					info: "validation_tera",
					data: res,
					token: request.token
				})
			} else {
				chrome.tabs.sendMessage(senderid, {
					info: "validation_tera",
					data: "false",
					token: ""
				})
			}
		})
		.catch(error => {
			console.log('error', error)
			chrome.tabs.sendMessage(senderid, {
				info: "validation_tera",
				data: "false",
				token: ""
			})

		});
	sendResponse({})
} else {
	chrome.storage.local.get('token', function(result) {
		var token = result.token;
		if (token) {
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
			if (request.message == "viewer_sheets_data") {
				var urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("function", "get_crm_data_from_phone_number");
				urlencoded.append("phone", request.number);
				urlencoded.append("sheetIndex", request.sheetIndex);
				urlencoded.append("instance_id", request.instance);
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						chrome.tabs.sendMessage(senderid, {
							info: "viewer_sheets_data",
							data: result
						})
					})
					.catch(error => console.log('error', error));
			} else if (request.message == "viewer_sheets") {
				var urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("function", "get_current_google_worksheet_sheets");
				urlencoded.append("instance_id", request.instance);
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						console.log("sent to info ");
						chrome.tabs.sendMessage(senderid, {
							info: "viewer_sheets",
							data: result
						})
					})
					.catch(error => console.log('error', error));
			} else if (request.message == "instances_update") {
				var urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("function", "test_connection");
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						console.log(result)

						chrome.tabs.sendMessage(senderid, {
							info: "update_instance",
							data: result
						})

					})
					.catch(error => console.log('error', error));
			} else if (request.message == "getData") {
				var urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("function", "get_variables_from_number");
				urlencoded.append("instance_id", request.instance);
				urlencoded.append("chat_id", request.number.replaceAll(/(\(|\)| |\+|-)/gi, ""));
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.data == "Number not found") {
							urlencoded.set("function", "set_variable_to_number");
							urlencoded.append("key_var", "# de teléfono");
							urlencoded.append("data_var", request.number.replaceAll(/(\(|\)| |\+|-)/gi, ""));
							var requestOptions = {
								method: 'POST',
								headers: myHeaders,
								body: urlencoded,
								redirect: 'follow'
							};
							fetch(url, requestOptions)
						}
						chrome.tabs.sendMessage(senderid, {
							info: "getdata",
							data: result.data
						})
					})
					.catch(error => {
						chrome.tabs.sendMessage(senderid, {
							info: "getdata",
							data: "Number not found"
						})
					});
			} else if (request.message == "update") {
				var urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("function", "set_variables_to_number");
				urlencoded.append("instance_id", request.instance);
				urlencoded.append("chat_id", request.number.replaceAll(/(\(|\)| |\+|-)/gi, ""));
				urlencoded.append("key_vars", JSON.stringify(request.rowkeys));
				urlencoded.append("data_vars", JSON.stringify(request.rowvalues));
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						chrome.tabs.sendMessage(senderid, {
							info: true
						})
					})
					.catch(error => console.log('error', error));
			} else if (request.message == "reminder") {

				const dataToSend = request.data;
				console.log(dataToSend);
				const urlencoded = new URLSearchParams();
				for (const key in dataToSend) {
					urlencoded.append(key, dataToSend[key]);
				}
				urlencoded.append("tera_token", token);
				urlencoded.append("function", "create_simple_reminder");
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						chrome.tabs.sendMessage(senderid, {
							info: "reminder_created",
							id: result.data,
							cachId: request.cachId
						})
					}).catch(error => console.log('error', error));
			} else if (request.message == "actions") {
				console.log(request);
				const urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("instance_id", request.instance);
				urlencoded.append("function", "scheduled_actions");
				urlencoded.append("chat_id", request.number.replaceAll(/(\(|\)| |\+|-)/gi, ""));
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						chrome.tabs.sendMessage(senderid, {
							info: "actions",
							data: result
						})
					}).catch(error => console.log('error', error));
			} else if (request.message == "cancel") {
				const urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("instance_id", request.instance);
				urlencoded.append("function", "delete_schedule");
				urlencoded.append("schedule_id", request.id);
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						chrome.tabs.sendMessage(senderid, {
							info: "cancel",
							id: request.id
						})
					}).catch(error => console.log('error', error));

			} else if (request.message == "update_contact") {
				const urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("instance_id", request.instance);
				urlencoded.append("function", "upsert_google_contact");
				var encodedContactData = btoa(unescape(encodeURIComponent(JSON.stringify(request.data))))
				urlencoded.append("rawData", encodedContactData);
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						chrome.tabs.sendMessage(senderid, {
							info: "contact_updated"
						})
					}).catch(error => console.log('error', error));
			} else if (request.message == "get_contact") {
				const urlencoded = new URLSearchParams();
				urlencoded.append("tera_token", token);
				urlencoded.append("instance_id", request.instance);
				urlencoded.append("function", "get_google_contact");
				urlencoded.append("name", "Lead | " + request.number.replaceAll(/(\(|\)| |\+|-)/gi, ""));
				urlencoded.append("createIfNotExists", request.status);
				urlencoded.append("phone", request.number.replaceAll(/(\(|\)| |\+|-)/gi, ""));
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow'
				};
				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						if (result == '""') {
							chrome.tabs.sendMessage(senderid, {
								info: "no_gg_contact"
							});
						} else {
							chrome.tabs.sendMessage(senderid, {
								info: "get_google_contact",
								data: result,
								number: request.number.replaceAll(/(\(|\)| |\+|-)/gi, "")
							});
						}
					}).catch(error => console.log('error', error));
			}
			sendResponse({
				status: "loggedIn"
			})
		} else {
			sendResponse({
				status: "loggedOut"
			})
		}
	});
}
return true
});

