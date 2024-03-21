export class ImgData {
    private value: number = 0;
    private name: string = "";
    private src: string = "";

    constructor (val: number, n: string, src : string) {
        this.value = val;
        this.name = n;
        this.src = src;
    }

    getValue() {
        return this.value;
    }

    getName() {
        return this.name;
    }

    getSource() {
        return this.src;
    }
}