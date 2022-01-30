/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/football_game_bg.wasm": function() {
/******/ 			return {
/******/ 				"./snippets/football-game-4fb09c770bc62c46/js/rendering.js": {
/******/ 					"tick": function() {
/******/ 						return installedModules["../pkg/snippets/football-game-4fb09c770bc62c46/js/rendering.js"].exports["tick"]();
/******/ 					},
/******/ 					"hostSendState": function() {
/******/ 						return installedModules["../pkg/snippets/football-game-4fb09c770bc62c46/js/rendering.js"].exports["hostSendState"]();
/******/ 					},
/******/ 					"draw": function() {
/******/ 						return installedModules["../pkg/snippets/football-game-4fb09c770bc62c46/js/rendering.js"].exports["draw"]();
/******/ 					},
/******/ 					"gamerSendInput": function() {
/******/ 						return installedModules["../pkg/snippets/football-game-4fb09c770bc62c46/js/rendering.js"].exports["gamerSendInput"]();
/******/ 					}
/******/ 				},
/******/ 				"./football_game_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_e1a6b62f147a0b73": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_log_e1a6b62f147a0b73"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_initGame_9c885cdeda7fcf51": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_initGame_9c885cdeda7fcf51"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getPlayerInput_765e5d99fd0d0a28": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_getPlayerInput_765e5d99fd0d0a28"]();
/******/ 					},
/******/ 					"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_693216e109162396": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_new_693216e109162396"]();
/******/ 					},
/******/ 					"__wbg_stack_0ddaca5d1abfb52f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_stack_0ddaca5d1abfb52f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_09919627ac0992f5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_error_09919627ac0992f5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_3e46aa268da0fed1": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_getRandomValues_3e46aa268da0fed1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_59fcc2add91fe7b3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_randomFillSync_59fcc2add91fe7b3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_process_f2b73829dbd321da": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_process_f2b73829dbd321da"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_cd82f79c98672a9f": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_versions_cd82f79c98672a9f"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_ee3f6da4130bd35f": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_node_ee3f6da4130bd35f"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbg_modulerequire_0a83c0c31d12d2c7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_modulerequire_0a83c0c31d12d2c7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_9e3521ed42436d35": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_crypto_9e3521ed42436d35"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_c429c3f8f7a70bb5": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_msCrypto_c429c3f8f7a70bb5"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_c4b70662a0d2c5ec": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_instanceof_Window_c4b70662a0d2c5ec"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_71638ca922068239": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_requestAnimationFrame_71638ca922068239"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonopen_33b75427f7db7ce1": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonopen_33b75427f7db7ce1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonmessage_ca5f75e4a84134ef": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonmessage_ca5f75e4a84134ef"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setbinaryType_c9a67ad8bb4125af": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setbinaryType_c9a67ad8bb4125af"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_982fe22cd93d67f7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_new_982fe22cd93d67f7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_send_503c2e7652e95bf5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_send_503c2e7652e95bf5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_label_d6b0a47b2fa4df75": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_label_d6b0a47b2fa4df75"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonopen_f56e29074100787b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonopen_f56e29074100787b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonerror_5ba60c72b55e0a1a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonerror_5ba60c72b55e0a1a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonmessage_47bb9203968cc95c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonmessage_47bb9203968cc95c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_send_7956c2eea040f82a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_send_7956c2eea040f82a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_now_559193109055ebad": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_now_559193109055ebad"](p0i32);
/******/ 					},
/******/ 					"__wbg_candidate_d3ec9190d1a6a676": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_candidate_d3ec9190d1a6a676"](p0i32);
/******/ 					},
/******/ 					"__wbg_data_9e55e7d79ab13ef1": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_data_9e55e7d79ab13ef1"](p0i32);
/******/ 					},
/******/ 					"__wbg_iceGatheringState_4fa6c0cf399ba7f6": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_iceGatheringState_4fa6c0cf399ba7f6"](p0i32);
/******/ 					},
/******/ 					"__wbg_iceConnectionState_905bab998d998769": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_iceConnectionState_905bab998d998769"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonnegotiationneeded_7b1aaf7ecd3d1610": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonnegotiationneeded_7b1aaf7ecd3d1610"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonicecandidate_29ecd72fd6da709c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonicecandidate_29ecd72fd6da709c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setoniceconnectionstatechange_ed6cf764e1399e45": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setoniceconnectionstatechange_ed6cf764e1399e45"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonicegatheringstatechange_50a31513cc8935ee": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setonicegatheringstatechange_50a31513cc8935ee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setondatachannel_cab5b7e73da1ecf2": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setondatachannel_cab5b7e73da1ecf2"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithconfiguration_87824e8779344883": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_newwithconfiguration_87824e8779344883"](p0i32);
/******/ 					},
/******/ 					"__wbg_addIceCandidate_17b36fe71fbc8333": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_addIceCandidate_17b36fe71fbc8333"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createAnswer_673871c0d4e6a4f3": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_createAnswer_673871c0d4e6a4f3"](p0i32);
/******/ 					},
/******/ 					"__wbg_createDataChannel_381620d675795abf": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_createDataChannel_381620d675795abf"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createOffer_da5cf273d8f0249d": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_createOffer_da5cf273d8f0249d"](p0i32);
/******/ 					},
/******/ 					"__wbg_setLocalDescription_1370d7c0c79f7306": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setLocalDescription_1370d7c0c79f7306"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setRemoteDescription_da4c3103aa5af9ee": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_setRemoteDescription_da4c3103aa5af9ee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_channel_87d764c8ca5ceb4a": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_channel_87d764c8ca5ceb4a"](p0i32);
/******/ 					},
/******/ 					"__wbg_candidate_5b0dd80d3ef1a1e3": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_candidate_5b0dd80d3ef1a1e3"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_sdpMid_82c3e29d17f56150": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_sdpMid_82c3e29d17f56150"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_sdpMLineIndex_6f7631be00101379": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_sdpMLineIndex_6f7631be00101379"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_dc086a6509eb2969": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_new_dc086a6509eb2969"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_949bbc1147195c4e": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_new_949bbc1147195c4e"]();
/******/ 					},
/******/ 					"__wbg_newnoargs_be86524d73f67598": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_newnoargs_be86524d73f67598"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_4d0f21c2f823742e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_get_4d0f21c2f823742e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_888d259a5fefc347": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_call_888d259a5fefc347"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_0b83d3df67ecb33e": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_new_0b83d3df67ecb33e"]();
/******/ 					},
/******/ 					"__wbg_push_284486ca27c6aa8b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_push_284486ca27c6aa8b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_d23068002f584f22": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_resolve_d23068002f584f22"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_2fcac196782070cc": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_then_2fcac196782070cc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_8c2d62e8ae5978f7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_then_8c2d62e8ae5978f7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_c6fbdfc2918d5e58": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_self_c6fbdfc2918d5e58"]();
/******/ 					},
/******/ 					"__wbg_window_baec038b5ab35c54": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_window_baec038b5ab35c54"]();
/******/ 					},
/******/ 					"__wbg_globalThis_3f735a5746d41fbd": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_globalThis_3f735a5746d41fbd"]();
/******/ 					},
/******/ 					"__wbg_global_1bc0b39582740e95": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_global_1bc0b39582740e95"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_397eaa4d72ee94dd": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_buffer_397eaa4d72ee94dd"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_a7ce447f15ff496f": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_new_a7ce447f15ff496f"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_969ad0a60e51d320": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_set_969ad0a60e51d320"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_1eb8fc608a0d4cdb": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_length_1eb8fc608a0d4cdb"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_929232475839a482": function(p0i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_newwithlength_929232475839a482"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_8b658422a224f479": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_subarray_8b658422a224f479"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_82a4e8a85e31ac42": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbg_set_82a4e8a85e31ac42"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper368": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_closure_wrapper368"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper450": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_closure_wrapper450"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper452": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_closure_wrapper452"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper454": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_closure_wrapper454"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper657": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/football_game_bg.js"].exports["__wbindgen_closure_wrapper657"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/football_game_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/football_game_bg.wasm":"544590eca751aab099e6"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../js/helper */ \"../js/helper.js\"))\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });