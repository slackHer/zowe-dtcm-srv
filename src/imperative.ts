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

import { IImperativeConfig } from "@zowe/imperative";

const config: IImperativeConfig = {
    commandModuleGlobs: ["**/cli/*/*.definition!(.d).*s"],
    rootCommandDescription: "CA Datacom Server plugin for Zowe CLI",
    envVariablePrefix: "DTCM_SRV_PLUGIN",
    defaultHome: "~/.dtcm_srv_plugin",
    productDisplayName: "CA Datacom Server Plugin",
    name: "zowe-dtcm-srv",
    pluginAliases: ["zds", "dtcm-srv"]
};

export = config;
