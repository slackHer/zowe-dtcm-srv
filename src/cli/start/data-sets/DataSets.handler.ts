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

import { ICommandHandler, IHandlerParameters, TextUtils, Session } from "@zowe/imperative";
import { CheckStatus, ZosmfSession } from "@zowe/cli";
import { StartSrv } from "../../../api/StartSrv";

export default class DataSetsHandler implements ICommandHandler {
    public async process(params: IHandlerParameters): Promise<void> {

        try {
            // use the user's zosmf profile to create a session to the desired zosmf subsystem
            const profile = params.profiles.get("zosmf");
            const session = ZosmfSession.createBasicZosmfSession(profile);
            const zosResponse = await CheckStatus.getZosmfInfo(session);
            params.response.console.log("We just got a valid z/OSMF status response from system = " +
                zosResponse.zosmf_hostname + "\n"
            );

            try {
                const resp = await StartSrv.start(session, params.arguments.startDataSet, params);
                params.response.console.log(resp);
            } catch (except) {
                params.response.console.log("We just got an exception calling StartSrv.start().\n" +
                "Reason = " + except.message + "\n"
                );
            }


        } catch (except) {
            params.response.console.log("We just got an exception calling Zowe CLI's CheckStatus.getZosmfInfo API.\n" +
                "Reason = " + except.message +
                "\nWe will continue on anyway.\n"
            );
        }
    }
}
