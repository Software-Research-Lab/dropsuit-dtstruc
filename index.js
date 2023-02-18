//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(requests, tags, responses, dsout) {
  this.requests = requests;
  this.tags = tags;
  this.responses = responses;
  this.dsout = dsout;
}

//#endregion

//#region dtstruc

/**
 * @function dtstruc
 * @description - dtstruc() function - Data structure re-constructor.
 * Processes default object instance json key value
 * (this.requests: requests), (this.tags: tags), (this.responses: responses) array patterns.
 * @returns {array} - Return options
 * qa() QA data structure,
 * xy() XY train data structure,
 * id() IDx chain data structure.
 * Using split marks provides sentence boundary detection.
 */

Constructor.prototype.dtstruc = function () {
  let out = dtstruc_f(this.requests, this.tags, this.responses, this.dsout);
  return out;
};

//#endregion

//#region dtstruc_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

const dropsuit_clnarr = require("../dropsuit-clnarr/index.js");
var ds_clnarr = new dropsuit_clnarr(false);

/**
 * Data structure re-constructor
 * @param {array} requests - Requests pattern.
 * @param {array} tags - Tags.
 * @param {array} responses - Responses pattern.
 * @param {boolean} [dispout=false] - A flag to enable or disable
 * displaying processing output results in the terminal.
 * @returns {Object} - An object containing the following properties:
 * qa: QA data structure
 * xy: XY train data structure
 * id: IDx chain data structure
 * @example
 * let dtstruc_result = dtstruc(req_arr, tag_arr, res_arr, true);
 * console.log(dtstruc_result.qa);
 * console.log(dtstruc_result.xy);
 * console.log(dtstruc_result.id);
 */

function dtstruc_f(requests, tags, responses, dispout) {
  let XYtrainArrStruct = [];
  let QADTStuct = [];
  let IDxChainStuct = [];
  for (i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var pattern = requests[i];
    var response = responses[i];
    var patCont = "";
    var resCont = "";
    for (p = 0; p < pattern.length; p++) {
      let patSentence = ds_clnstr.clnstr(pattern[p]).txt();
      patSentence = patSentence.replace(/ /g, " ");
      XYtrainArrStruct.push([i + "+" + tag + "=" + patSentence]);
      patCont = patCont + "-" + patSentence;
    }
    for (r = 0; r < response.length; r++) {
      let responses = ds_clnstr.clnstr(response[r]).txt();
      resCont = resCont + "-" + responses;
    }
    patCont = patCont.slice(1);
    resCont = resCont.slice(1);
    var comb = i + ":" + tag + "/" + patCont + "=" + resCont;
    QADTStuct.push([comb]);
    var combQ = "Q=" + i + "+" + patCont;
    var combA = "A=" + i + "+" + resCont;
    IDxChainStuct.push(combQ);
    IDxChainStuct.push(combA);
  }
  let QADTS = ds_clnarr.clnarr(QADTStuct, 1);
  let XYTAS = ds_clnarr.clnarr(XYtrainArrStruct, 1);
  let IDXCS = ds_clnarr.clnarr(IDxChainStuct, 1);
  let outret = return_datsOut(QADTS, XYTAS, IDXCS);
  displayF0(dispout, requests, tags.length, tags, responses, outret); /// DISPLAY >>>
  return outret;
}

function return_datsOut(QADTS, XYTAS, IDXCS) {
  const tokObj = {
    qads: QADTS,
    xyds: XYTAS,
    idds: IDXCS,
    qa: function () {
      return this.qads;
    },
    xy: function () {
      return this.xyds;
    },
    id: function () {
      return this.idds;
    },
  };
  return tokObj;
}
//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function displayF0(dispout, requests, tagslength, tags, responses, outret) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:\n\nRequests pattern:\n\n",
      requests,
      "\n\nTags (",
      tagslength,
      "):\n\n",
      tags,
      "\n\nResponses pattern:\n\n",
      responses,
      "\n\nOutput:\n\n",
      outret,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
