//#region dtstruc test

const assert = require("assert");
const dropsuit_dtstruc = require("../index.js");
const json_data = require("../jsobj.js");
const localFile = "./test/intents.json";

//#region  testing data

let expected_output_dtstruc_qa = [
  "0: greeting/hi there hi-hello to you hello=hello-hi-hey",
  "1: goodbye/take care bye bye-see you later later ill be around=see you later thanks for visiting-goodbye-have a nice day",
  "2: thanks/thanks a lot thanks-many thanks thank you=happy to help-any time-my pleasure",
];

let expected_output_dtstruc_xy = [
  "0+greeting=hi there hi",
  "0+greeting=hello to you hello",
  "1+goodbye=take care bye bye",
  "1+goodbye=see you later later ill be around",
  "2+thanks=thanks a lot thanks",
  "2+thanks=many thanks thank you",
];

let expected_output_dtstruc_id = [
  "q=0+hi there hi-hello to you hello",
  "a=0+hello-hi-hey",
  "q=1+take care bye bye-see you later later ill be around",
  "a=1+see you later thanks for visiting-goodbye-have a nice day",
  "q=2+thanks a lot thanks-many thanks thank you",
  "a=2+happy to help-any time-my pleasure",
];

//#endregion

describe("dropsuit-dtstruc", () => {
  let intentData = json_data.jsonIntStrct(localFile);
  let dsdtstruc = new dropsuit_dtstruc(
    intentData.req_arr,
    intentData.tag_arr,
    intentData.res_arr,
    false
  );

  it("should return QA, XY, ID data structure object", () => {
    let dtstruc_output = dsdtstruc.dtstruc();
    console.log("\n\ndtstruc output:", dtstruc_output, "\n\n");
  });
  it("should return QA data structure object", () => {
    let dtstruc_output_qa = dsdtstruc.dtstruc().qa();
    assert.deepEqual(dtstruc_output_qa, expected_output_dtstruc_qa);
    console.log("\n\ndtstruc output:", dtstruc_output_qa, "\n\n");
  });
  it("should return XY data structure object", () => {
    let dtstruc_output_xy = dsdtstruc.dtstruc().xy();
    assert.deepEqual(dtstruc_output_xy, expected_output_dtstruc_xy);
    console.log("\n\ndtstruc output:", dtstruc_output_xy, "\n\n");
  });
  it("should return ID data structure object", () => {
    let dtstruc_output_id = dsdtstruc.dtstruc().id();
    assert.deepEqual(dtstruc_output_id, expected_output_dtstruc_id);
    console.log("\n\ndtstruc output:", dtstruc_output_id, "\n\n");
  });
});

//#endregion
