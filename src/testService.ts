import { injectable } from "inversify";
import { Subject } from "rxjs";

@injectable()
class testViteService {
    name: string;

    readonly onDidChangeName = new Subject<string>();

    constructor() {
        this.name = 'testViteService';
    }
    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
        this.onDidChangeName.next(name);
    }
}

export default testViteService;