[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-dtstruc.svg?style=flat)](https://www.npmjs.com/package/dropsuit-dtstruc) [![npm](https://img.shields.io/npm/dt/dropsuit-dtstruc.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-dtstruc) [![License](https://img.shields.io/npm/l/dropsuit-dtstruc.svg)](https://www.npmjs.com/package/dropsuit-dtstruc)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the dtstruc Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The dtstruc function is one of its modules, designed for restructuring input data into different data structures from JSON document keys and values which is requests, responses, and tags data array patterns, returning reconstructed Q/A data structure, XY train data structure, and IDX chain data structure. It is available under the Apache License 2.0.

## DropSuit NLP Method: dtstruc - A JavaScript and Node.js function for restructuring input data into different data structures

The dtstruc function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that restructures input data from JSON document keys and values which is requests, responses, and tags data array patterns, returning reconstructed Q/A data structure, XY train data structure, and IDX chain data structure. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-dtstruc
```

### Usage

Import the library in your project:

```
const dropsuit_dtstruc = require("dropsuit-dtstruc");

```

Process [intents.json](https://github.com/ladooniani/dropsuit-dtstruc/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-dtstruc/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");
```

Insert 'intentData' and set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsdtstruc = new dropsuit_dtstruc(intentData.req_arr, intentData.tag_arr, intentData.res_arr, false);
```

#### dtstruc()

- **array**: Processes default object instance json key value _(req_arr: requests)_, _(tag_arr: tags)_, _(res_arr: responses)_ array patterns.

#### Return option:

- **qa()** QA data structure.
- **xy()** XY train data structure.
- **id()** IDx chain data structure.

```
let out = dsdtstruc.dtstruc();
console.log(out);
```

The return object from the function shows the processed data, which includes three data structures - qa(), xy(), and id() - each with a different representation of the input request and response patterns.

```
Input:

Requests pattern:

 [
  [ 'Hi there, hi', 'Hello to you, hello' ],
  [ 'Take care, bye bye', "See you later, later I'll be around" ],
  [ 'Thanks a lot, thanks', 'Many thanks, thank you' ]
]

Tags ( 3 ):

 [ 'greeting', 'goodbye', 'thanks' ]

Responses pattern:

 [
  [ 'Hello!', 'Hi', 'Hey!' ],
  [
    'See you later, thanks for visiting',
    'Goodbye',
    'Have a nice day'
  ],
  [ 'Happy to help!', 'Any time!', 'My pleasure' ]
]
```
Output:

#### qa() QA data structure:

The QA data structure is a compact representation of questions and answers, where each element in the array consists of a tag value, question, and response separated by a delimiter. This structure is useful for quickly retrieving all relevant information for a particular question and answer, as it stores all data in a single string.

```
  qads: [
    '0: greeting/hi there hi-hello to you hello=hello-hi-hey',
    '1: goodbye/take care bye bye-see you later later ill be around=see you later thanks for visiting-goodbye-have a nice day',
    '2: thanks/thanks a lot thanks-many thanks thank you=happy to help-any time-my pleasure'
  ],
```

#### xy() XY train data structure:

The XY train data structure is similar to the QA data structure, but separates the tag value and question into separate strings, joined by a "+" symbol. This structure is useful for training machine learning algorithms, as it provides a clear representation of the input and output data.

```
xyds: [
  '0+greeting=hi there hi',
  '0+greeting=hello to you hello',
  '1+goodbye=take care bye bye',
  '1+goodbye=see you later later ill be around',
  '2+thanks=thanks a lot thanks',
  '2+thanks=many thanks thank you'
],

```

#### id() IDx chain data structure:

The IDx chain data structure is an array of strings where each string contains a question-answer pair in the format 'q=question' or 'a=answer'. This structure provides a direct mapping of questions to their corresponding answers and allows for incremental search through the list of pairs using string ids.

```
idds: [
  'q=0+hi there hi-hello to you hello',
  'a=0+hello-hi-hey',
  'q=1+take care bye bye-see you later later ill be around',
  'a=1+see you later thanks for visiting-goodbye-have a nice day',
  'q=2+thanks a lot thanks-many thanks thank you',
  'a=2+happy to help-any time-my pleasure'
],
```
```
qa: [Function: qa],
xy: [Function: xy],
id: [Function: id]
}
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-dtstruc

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)