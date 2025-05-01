"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#reset");
var turnO = true; // Player O starts
var newGameBtn = document.querySelector("#new-btn");
var msgContainer = document.querySelector(".msg-container");
var msg = document.querySelector("#msg");
var winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
      box.disabled = true;
      checkWinner();
    } else {
      box.innerText = "X";
      box.style.color = "black";
      turnO = true;
      box.disabled = true;
      checkWinner();
    }
  });
});
var enableBoxes = function enableBoxes() {
  var _iterator = _createForOfIteratorHelper(boxes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var box = _step.value;
      box.disabled = false;
      box.innerText = "";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var disableBoxes = function disableBoxes() {
  var _iterator2 = _createForOfIteratorHelper(boxes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var box = _step2.value;
      box.disabled = true;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var showWinner = function showWinner(winner) {
  msg.innerText = "Congratulations, Winner is ".concat(winner);
  msgContainer.classList.remove("hide");
  disableBoxes();
};
var checkWinner = function checkWinner() {
  var hasWin = false;
  for (var _i = 0, _winPatterns = winPatterns; _i < _winPatterns.length; _i++) {
    var pattern = _winPatterns[_i];
    var pos1Val = boxes[pattern[0]].innerText;
    var pos2Val = boxes[pattern[1]].innerText;
    var pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      hasWin = true;
      return;
    }
  }
  if (!hasWin) {
    var allBoxes = _toConsumableArray(boxes).every(function (box) {
      return box.innerText !== "";
    });
    if (allBoxes) {
      msgContainer.classList.remove("hide");
      msg.innerText = "Match Drawn";
    }
  }
};
var resetGame = function resetGame() {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);