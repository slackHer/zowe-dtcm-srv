import { Logger } from "@zowe/imperative";
declare const _default: {
    new (service: string, displayName: string): {
        consoleLog: Logger;
        deleteCredentials(account: string): Promise<void>;
        loadCredentials(account: string): Promise<string>;
        saveCredentials(account: string, credentials: string): Promise<void>;
        initialize?(): Promise<void>;
        readonly service: string;
        displayName: any;
        readonly name: string;
        delete(account: string): Promise<void>;
        load(account: string): Promise<string>;
        save(account: string, secureValue: string): Promise<void>;
    };
};
export = _default;
