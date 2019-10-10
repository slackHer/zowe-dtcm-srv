import { AbstractSession, IHandlerParameters } from "@zowe/imperative";
export declare class StartSrv {
    static start(session: AbstractSession, startDataSet: string, params: IHandlerParameters): Promise<string>;
}
