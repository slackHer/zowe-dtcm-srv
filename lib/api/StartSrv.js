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
class StartSrv {
    static start(session, startDataSet, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                params.response.console.log("Submitting: " + startDataSet + "\n");
                cli_1.SubmitJobs.submitJob(session, startDataSet);
            }
            catch (e) {
                params.response.console.log("Error: " + e.message + "\n");
                throw e;
            }
            // let error;
            // let response: IZosFilesResponse;
            // const options: IDownloadOptions = {
            //     extension: "dat",
            // };
            // try {
            //     response = await Download.dataSet(session, startDataSet, options);
            // } catch (err) {
            //     error = "srvJCL: " + err;
            //     throw error;
            // }
            // const regex = /\.|\(/gi; // Replace . and ( with /
            // const regex2 = /\)/gi;   // Replace ) with .
            // // convert the old data set name to use as a path/file
            // let file = dataset.replace(regex, "/");
            // file = file.replace(regex2, ".") + "dat";
            // // Load the downloaded contents of 'oldDataSet'
            // const servJCL = readFileSync(`${file}`).toString();
            return "true";
        });
    }
}
exports.StartSrv = StartSrv;
//# sourceMappingURL=StartSrv.js.map