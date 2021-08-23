// Some array utilities.

// Dates helpers
export const indexOf = (array: any[], needle: any): any => {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var fun;

    if (!findNaN && typeof Array.prototype.indexOf === 'function') {
        fun = Array.prototype.indexOf;
    } else {
        fun = function(needle: any) {
            var i = -1, index = -1;

            for (i = 0; i < array.length; i++) {
                var item = array[i];

                if ((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return fun.call(array, needle)
};

// https://stackoverflow.com/a/1181586
export const contains = (array: any[], needle: any): boolean => {
    return indexOf(array, needle) > -1;
};

export const remove = (array: any[], item: any) => {
    let idx = indexOf(array, item);
    array.splice(idx, 1);    
}