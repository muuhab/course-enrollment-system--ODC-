function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var hour = a.getHours() - 2;
  return hour;
}

const stringBetweenParentheses = (st) => {
  var regExp = /\(([^)]+)\)/;
  var matches = regExp.exec(st);
  return matches[1];
};
module.exports = { makeid, timeConverter, stringBetweenParentheses };
