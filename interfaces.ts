interface HtmlOutputConfig {
    selector: string,
    template: string
}

interface TypeUser {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    position: string
}

export {HtmlOutputConfig, TypeUser}