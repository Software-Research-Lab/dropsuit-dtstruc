//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "DropSuit: https://github.com/ladooniani/DropSuit#readme\n" +
    "Copyright © 2016-" +
    getYear() +
    " Lado Oniani - DropSuit. All Rights Reserved.\n\n";
  const libName = "DropSuit NLP module library function:\n";
  const line =
    "\n———————————————————————————————————————————————————————————\n\n";
  const divider =
    "\n-----------------------------------------------------------\n";
  const libraryInformation = line + liblink + libName;
  const functionDescription = `${libraryInformation}
  dtstruc()
  Input: Default object instance json key value (req_arr: requests), (tag_arr: tags), (res_arr: responses) array patterns.

  Output:
    qa(): QA data structure.
    xy(): XY train data structure.
    id(): IDx chain data structure.
  ${divider}`;

  const displayInfoData = {
    descript: functionDescription,
    line: line,
  };

  return displayInfoData;
}

function getYear() {
  return new Date().getFullYear();
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
