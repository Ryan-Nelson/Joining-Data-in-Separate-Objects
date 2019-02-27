(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createEmployee = employeeData => {
  return `
    <article class="employee">
        <header class="employee__name">
            <h1>${employeeData.first_name} ${employeeData.last_name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${employeeData.department.dept_name} department
        </section>
        <section class="employee__computer">
            Currently using a ${employeeData.computer.make} ${employeeData.computer.model}
        </section>
    </article>
    `;
};

var _default = createEmployee;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=computer&_expand=department").then(r => r.json());
};

var _default = getEmployees;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _dataManager = _interopRequireDefault(require("./dataManager"));

var _createEmployees = _interopRequireDefault(require("./createEmployees"));

var _printToDom = _interopRequireDefault(require("./printToDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dataManager.default)().then(employees => {
  employees.forEach(employee => {
    const html = (0, _createEmployees.default)(employee);
    (0, _printToDom.default)(html, "#employeeList");
  });
});

},{"./createEmployees":1,"./dataManager":2,"./printToDom":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const printToDOM = (what, where) => {
  document.querySelector(where).innerHTML += what;
};

var _default = printToDOM;
exports.default = _default;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZUVtcGxveWVlcy5qcyIsIi4uL3NjcmlwdHMvZGF0YU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3ByaW50VG9Eb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsTUFBTSxjQUFjLEdBQUksWUFBRCxJQUFrQjtBQUNyQyxTQUFROzs7a0JBR00sWUFBWSxDQUFDLFVBQVcsSUFBRyxZQUFZLENBQUMsU0FBVTs7OzJCQUd6QyxZQUFZLENBQUMsVUFBYixDQUF3QixTQUFVOzs7Z0NBRzdCLFlBQVksQ0FBQyxRQUFiLENBQXNCLElBQUssSUFBRyxZQUFZLENBQUMsUUFBYixDQUFzQixLQUFNOzs7S0FUdEY7QUFhSCxDQWREOztlQWdCZSxjOzs7Ozs7Ozs7OztBQ2hCZixNQUFNLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFNBQU8sS0FBSyxDQUFDLHFFQUFELENBQUwsQ0FDRixJQURFLENBQ0csQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFGLEVBRFIsQ0FBUDtBQUVILENBSEQ7O2VBS2UsWTs7Ozs7O0FDTGY7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSw0QkFDSyxJQURMLENBQ1UsU0FBUyxJQUFJO0FBQ2YsRUFBQSxTQUFTLENBQUMsT0FBVixDQUFrQixRQUFRLElBQUk7QUFDMUIsVUFBTSxJQUFJLEdBQUcsOEJBQWUsUUFBZixDQUFiO0FBQ0EsNkJBQVcsSUFBWCxFQUFpQixlQUFqQjtBQUNILEdBSEQ7QUFJSCxDQU5MOzs7Ozs7Ozs7O0FDSkEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFELEVBQU8sS0FBUCxLQUFpQjtBQUNoQyxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLEVBQThCLFNBQTlCLElBQTJDLElBQTNDO0FBQ0gsQ0FGRDs7ZUFJZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAoZW1wbG95ZWVEYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGFydGljbGUgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJlbXBsb3llZV9fbmFtZVwiPlxyXG4gICAgICAgICAgICA8aDE+JHtlbXBsb3llZURhdGEuZmlyc3RfbmFtZX0gJHtlbXBsb3llZURhdGEubGFzdF9uYW1lfTwvaDE+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fZGVwYXJ0bWVudFwiPlxyXG4gICAgICAgICAgICBXb3JrcyBpbiB0aGUgJHtlbXBsb3llZURhdGEuZGVwYXJ0bWVudC5kZXB0X25hbWV9IGRlcGFydG1lbnRcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fY29tcHV0ZXJcIj5cclxuICAgICAgICAgICAgQ3VycmVudGx5IHVzaW5nIGEgJHtlbXBsb3llZURhdGEuY29tcHV0ZXIubWFrZX0gJHtlbXBsb3llZURhdGEuY29tcHV0ZXIubW9kZWx9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgYFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbXBsb3llZSIsImNvbnN0IGdldEVtcGxveWVlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1jb21wdXRlciZfZXhwYW5kPWRlcGFydG1lbnRcIilcclxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRFbXBsb3llZXMiLCJpbXBvcnQgZ2V0RW1wbG95ZWVzIGZyb20gXCIuL2RhdGFNYW5hZ2VyXCJcclxuaW1wb3J0IGNyZWF0ZUVtcGxveWVlIGZyb20gXCIuL2NyZWF0ZUVtcGxveWVlc1wiXHJcbmltcG9ydCBwcmludFRvRE9NIGZyb20gXCIuL3ByaW50VG9Eb21cIlxyXG5cclxuZ2V0RW1wbG95ZWVzKClcclxuICAgIC50aGVuKGVtcGxveWVlcyA9PiB7XHJcbiAgICAgICAgZW1wbG95ZWVzLmZvckVhY2goZW1wbG95ZWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gY3JlYXRlRW1wbG95ZWUoZW1wbG95ZWUpXHJcbiAgICAgICAgICAgIHByaW50VG9ET00oaHRtbCwgXCIjZW1wbG95ZWVMaXN0XCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgIiwiY29uc3QgcHJpbnRUb0RPTSA9ICh3aGF0LCB3aGVyZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aGVyZSkuaW5uZXJIVE1MICs9IHdoYXRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRUb0RPTVxyXG4iXX0=
