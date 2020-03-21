/**
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */

export default function createChainedFunction(...functions: any) {
    return functions.reduce(
        (acc: (param1? : any, param2? : any, param3? : any) => any, func: any) => {
            if (func === null) {
                return acc;
            }

            return function chainedFunction(...args: any[]) {
                acc(...args);
                func(...args);
            }
        }
    )
}
