export interface InfoI {
    title: string,
    list: InfoItemI[],
}

interface InfoItemI {
    title: string,
    from: string,
    to: string,
    works: string[],
}