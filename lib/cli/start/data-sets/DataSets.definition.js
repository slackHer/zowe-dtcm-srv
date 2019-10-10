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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSetsDefinition = {
    name: "data-sets",
    aliases: ["ds"],
    summary: "data sets with CA Datacom Server JCL",
    description: "JCl to start a CA Datacom Server Region",
    type: "command",
    handler: __dirname + "/DataSets.handler",
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
//# sourceMappingURL=DataSets.definition.js.map