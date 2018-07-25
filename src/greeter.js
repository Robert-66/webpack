export class Greeter {
    prefix = 'GREETER:';

    greet(greeting, object) {
        return `${this.prefix}, ${greeting}, ${object}!`;
    }
}