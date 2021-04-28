"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _button = require("@react-aria/button");

/*
 * Copyright 2021 Pv Duc
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 */
const Button = (_ref) => {
  let {
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  const ref = (0, _react.useRef)();
  const buttonProps = (0, _button.useButton)(props, ref);
  return /*#__PURE__*/_react.default.createElement("button", buttonProps, children);
};

var _default = Button;
exports.default = _default;