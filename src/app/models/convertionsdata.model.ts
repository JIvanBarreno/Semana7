export class ConvetionData {
    private celcius: number = 0;
    private fahrenheit: number = 0;

    constructor (c: number, f: number) {
        this.celcius = c;
        this.fahrenheit = f;
    }

    getCelcius() {
        return this.celcius;
    }

    getFahrenheit() {
        return this.fahrenheit;
    }
}