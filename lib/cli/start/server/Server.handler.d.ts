import { ICommandHandler, IHandlerParameters } from "@zowe/imperative";
export default class ServerHandler implements ICommandHandler {
    process(params: IHandlerParameters): Promise<void>;
}
