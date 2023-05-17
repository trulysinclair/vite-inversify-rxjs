import { Container } from "inversify";
import testViteService from "./testService";
import { Services } from "./services";


export const container = new Container();

container.bind(Services.testViteService).to(testViteService)