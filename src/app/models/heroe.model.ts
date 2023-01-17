
export class HeroeModel {
    id!: string;
    nombre!: string;
    poder: string | undefined;
    vivo: boolean;
 
    constructor() {
        this.vivo= true;
    }

}