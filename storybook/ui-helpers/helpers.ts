
export const GetProp = <T>(fun: () => T, fallback?: T) => {
    let value: T = null;
    try {
        value = fun();
    } catch (e) {
        //Ignore Error
    }
    return (value === null || value === undefined) ? fallback : value;
}

export function justWait(time: number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, time);
    })
}