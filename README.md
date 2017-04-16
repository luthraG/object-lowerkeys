# object-lowerkeys
It provides an API to convert the keys of the object into lowercase. Client of this API can specify if nested keys are also required to be converted to lowercase

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install object-lowerkeys --save
```

### Usage

```javascript
var lowercasekeys = require('object-lowerkeys');

var object = {
    'California' : 'CA',
    'Texas'      : 'TX',
    'NEW YORK'   : 'NY' 
};

lowercasekeys.toLowerCaseKeys(object);
//=> { 'california' : 'CA', 'texas' : 'TX', 'new york' : 'NY' }

var days = {
    'SUNDAY'    : 0,
    'MONDAY'    : 1,
    'TUESDAY'   : 2,
    'WEDNESDAY' : 3
};

lowercasekeys.toLowerCaseKeys(days);
//=> { 'sunday': 0, 'monday' : 1, 'tuesday' : 2, 'wednesday' : 3 }

```

### Clone the repo

git clone https://github.com/luthraG/object-lowerkeys.git

### API

#### toLowerCaseKeys(obj, [options])

This API takes two parameters:
1. Object whose keys to be converted to lowercase and
2. options object. This argument is optional


**Options**

Various options supported by this API are :
- **deep** - To specify if nested keys should also be converted to lowercase. Default is false.

**Example with options**

```javascript
var lowercasekeys = require('object-lowerkeys');

var days = {
    'Sunday'    : 0,
    'Monday'    : 1,
    'tuesday'   : 2,
    'wednesday' : 3,
    'weekend'  : {
        'Sunday' : 'Fun day',
        'Saturday' : {
            'Code' : {
                'Abbr' : 'sat'
            }
        }
    }
};

lowercasekeys.toLowerCaseKeys(days, { deep : true});
//=> { 'sunday': 0, 'monday' : 1, 'tuesday' : 2, 'wednesday' : 3, 'weekend' : 'sunday' : 'Fun day', 'saturday' : { 'code' : { 'abbr' : 'sat' } } }

```

### Related projects

You might also be interested in these projects:

* [lowercase-values](https://www.npmjs.com/package/lowercase-values): Convert the values of all the keys of an object into lowercase. | [homepage](https://github.com/luthraG/lowercase-values.git)
* [object-upperkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into uppercase. | [homepage](https://github.com/luthraG/object-upperkeys.git)
* [uppercase-values](https://www.npmjs.com/package/uppercase-values): Convert the values of all the keys of an object into uppercase. | [homepage](https://github.com/luthraG/uppercase-values.git)
* [objectvalues](https://www.npmjs.com/package/objectvalues): To get all the values of an object. It can also fetch the value of nested object of any depth. | [homepage](https://github.com/luthraG/objectvalues.git)

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)
