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

import { ICommandDefinition } from "@zowe/imperative";

export const ServerDefinition: ICommandDefinition = {
    name: "server",
    aliases: ["srv"],
    summary: "data sets with CA Datacom Server JCL",
    description: "JCl to start a CA Datacom Server Region",
    type: "command",
    handler: __dirname + "/Server.handler",
    positionals: [
        {
            name: "startDataSet",
            description: "The data set with the Server JCL",
            type: "string"
        }
    ],
    profile: {
        required: ["zosmf"]
    }
};
