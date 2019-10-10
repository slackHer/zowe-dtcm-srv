"use strict";
/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("@zowe/cli");
const StartSrv_1 = require("../../../api/StartSrv");
class DataSetsHandler {
    process(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use the user's zosmf profile to create a session to the desired zosmf subsystem
                const profile = params.profiles.get("zosmf");
                const session = cli_1.ZosmfSession.createBasicZosmfSession(profile);
                const zosResponse = yield cli_1.CheckStatus.getZosmfInfo(session);
                params.response.console.log("We just got a valid z/OSMF status response from system = " +
                    zosResponse.zosmf_hostname + "\n");
                try {
                    const resp = yield StartSrv_1.StartSrv.start(session, params.arguments.startDataSet, params);
                    params.response.console.log(resp);
                }
                catch (except) {
                    params.response.console.log("We just got an exception calling StartSrv.start().\n" +
                        "Reason = " + except.message + "\n");
                }
            }
            catch (except) {
                params.response.console.log("We just got an exception calling Zowe CLI's CheckStatus.getZosmfInfo API.\n" +
                    "Reason = " + except.message +
                    "\nWe will continue on anyway.\n");
            }
        });
    }
}
exports.default = DataSetsHandler;
//# sourceMappingURL=DataSets.handler.js.map