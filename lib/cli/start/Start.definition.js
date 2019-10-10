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
const Server_definition_1 = require("./server/Server.definition");
const IssueDefinition = {
    name: "start",
    summary: "Start the Server with data-set content",
    description: "Starts a CA Datacom Server using JCL in a dataset",
    type: "group",
    children: [Server_definition_1.ServerDefinition]
};
module.exports = IssueDefinition;
//# sourceMappingURL=Start.definition.js.map