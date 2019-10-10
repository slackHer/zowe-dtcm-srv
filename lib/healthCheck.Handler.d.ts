import { ICommandHandler, IHandlerParameters } from "@zowe/imperative";
export default class HealthCheckHandler implements ICommandHandler {
    process(params: IHandlerParameters): Promise<void>;
}
