var NODE_RATIFY = require('node-ratify');

function toLowercaseKeys(obj, deep) {
    var retObj;
    if (NODE_RATIFY.isObject(obj)) {
        retObj = {};

        // Get the object keys
        var objKeys = Object.keys(Object(obj));

        for (var idx = 0; idx < objKeys.length; idx++) {
            if (deep && NODE_RATIFY.isObject(obj[objKeys[idx]])) {
                retObj[objKeys[idx].toLowerCase()] = toLowercaseKeys(obj[objKeys[idx]], deep);
            } else {
                retObj[objKeys[idx].toLowerCase()] = obj[objKeys[idx]];
            }
        }
    } else {
        retObj = obj;
    }

    return retObj;
}

exports = module.exports = {
    toLowerCaseKeys      : function (obj, opts) {
        if (!opts || !NODE_RATIFY.isObject(opts))
            opts = {
                deep : false
            };

        var retObj,
            deep = opts['deep'];

        retObj = toLowercaseKeys(obj, deep);

        return retObj;
    }
};