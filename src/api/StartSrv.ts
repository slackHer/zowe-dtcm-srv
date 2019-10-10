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

import { AbstractSession, IHandlerParameters } from "@zowe/imperative";
import { Download, IDownloadOptions, IZosFilesResponse, SubmitJobs } from "@zowe/cli";
import { readFileSync } from "fs";

export class StartSrv {

    public static async start(session: AbstractSession, startDataSet: string, params: IHandlerParameters) {

        try {
            params.response.console.log("Submitting: " + startDataSet + "\n");
            SubmitJobs.submitJob(session, startDataSet);
        } catch (e) {
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
    }
}
