import { ICommandHandler, IHandlerParameters } from "@zowe/imperative";
export default class DataSetsHandler implements ICommandHandler {
    process(params: IHandlerParameters): Promise<void>;
}
