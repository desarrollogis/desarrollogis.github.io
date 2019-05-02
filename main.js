(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <app-cube>\n  </app-cube>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'elevator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cube_cube_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cube/cube.component */ "./src/app/cube/cube.component.ts");
/* harmony import */ var _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elevator/elevator.component */ "./src/app/elevator/elevator.component.ts");
/* harmony import */ var _internal_button_internal_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal-button/internal-button.component */ "./src/app/internal-button/internal-button.component.ts");
/* harmony import */ var _external_button_external_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./external-button/external-button.component */ "./src/app/external-button/external-button.component.ts");
/* harmony import */ var _floor_indicator_floor_indicator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./floor-indicator/floor-indicator.component */ "./src/app/floor-indicator/floor-indicator.component.ts");
/* harmony import */ var _door_door_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./door/door.component */ "./src/app/door/door.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _cube_cube_component__WEBPACK_IMPORTED_MODULE_4__["CubeComponent"],
                _elevator_elevator_component__WEBPACK_IMPORTED_MODULE_5__["ElevatorComponent"],
                _internal_button_internal_button_component__WEBPACK_IMPORTED_MODULE_6__["InternalButtonComponent"],
                _external_button_external_button_component__WEBPACK_IMPORTED_MODULE_7__["ExternalButtonComponent"],
                _floor_indicator_floor_indicator_component__WEBPACK_IMPORTED_MODULE_8__["FloorIndicatorComponent"],
                _door_door_component__WEBPACK_IMPORTED_MODULE_9__["DoorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/controller.service.ts":
/*!***************************************!*\
  !*** ./src/app/controller.service.ts ***!
  \***************************************/
/*! exports provided: ControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerService", function() { return ControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ControllerService = /** @class */ (function () {
    function ControllerService() {
        this._doorStatus = 'closed';
        this._goals = [];
        this._currentFloor = 0;
        this._transitionFloor = 0;
    }
    ControllerService.prototype.doorEvent = function () {
        var _this = this;
        if (this._doorStatus === 'opening') {
            this._doorStatus = 'open';
            setTimeout(function () {
                if (_this._doorStatus === 'open') {
                    _this._doorStatus = 'closing';
                }
            }, 3000);
            return;
        }
        if (this._doorStatus === 'closing') {
            this._doorStatus = 'closed';
        }
    };
    ControllerService.prototype.open = function () {
        if (this._doorStatus === 'open') {
            return;
        }
        if (this._transitionFloor !== this._currentFloor) {
            return;
        }
        this._doorStatus = 'opening';
    };
    ControllerService.prototype.close = function () {
        if (this._doorStatus === 'closed') {
            return;
        }
        this._doorStatus = 'closing';
    };
    ControllerService.prototype._move = function () {
        if (this._goals.length < 1) {
            return;
        }
        if (this._doorStatus !== 'closed') {
            return;
        }
        if (this._transitionFloor !== this._currentFloor) {
            return;
        }
        var nextGoal = this._goals[0];
        if (nextGoal === this._currentFloor) {
            this._goals.shift();
            this.open();
            return;
        }
        if (nextGoal < this._currentFloor) {
            this._transitionFloor = this._currentFloor - 1;
        }
        else {
            this._transitionFloor = this._currentFloor + 1;
        }
    };
    ControllerService.prototype.arrivedToFloor = function () {
        this._currentFloor = this._transitionFloor;
        this._move();
    };
    ControllerService.prototype._addGoal = function (floor) {
        if (this._goals.findIndex(function (element) { return (element === floor); }) > -1) {
            return;
        }
        this._goals.push(floor);
    };
    ControllerService.prototype.go = function (floor) {
        var nFloor = parseInt(floor, 10);
        switch (nFloor) {
            case 0:
            case 1:
            case 2:
            case 3:
                if (nFloor === this._currentFloor) {
                    this.open();
                }
                else {
                    this._addGoal(nFloor);
                    this._move();
                }
                break;
        }
    };
    ControllerService.prototype.getTransitionFloor = function () {
        return this._transitionFloor;
    };
    ControllerService.prototype.getDoorStatus = function () {
        return this._doorStatus;
    };
    ControllerService.prototype.getCurrentFloor = function () {
        return this._currentFloor;
    };
    ControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControllerService);
    return ControllerService;
}());



/***/ }),

/***/ "./src/app/cube/cube.component.html":
/*!******************************************!*\
  !*** ./src/app/cube/cube.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cube\">\n  <div style=\"width: 150px; height: 100%; float: left;\">\n    <app-elevator></app-elevator>\n  </div>\n  <div style=\"width: 50px; height: 100%; float: right;\">\n    <div class=\"floor\">\n      <app-floor-indicator></app-floor-indicator>\n      <app-external-button floor=\"3\" type=\"down\"></app-external-button>\n    </div>\n    <div class=\"floor\">\n      <app-floor-indicator></app-floor-indicator>\n      <app-external-button floor=\"2\" type=\"up\"></app-external-button>\n      <app-external-button floor=\"2\" type=\"down\"></app-external-button>\n    </div>\n    <div class=\"floor\">\n      <app-floor-indicator></app-floor-indicator>\n      <app-external-button floor=\"1\" type=\"up\"></app-external-button>\n      <app-external-button floor=\"1\" type=\"down\"></app-external-button>\n    </div>\n    <div class=\"floor\">\n      <app-floor-indicator></app-floor-indicator>\n      <app-external-button floor=\"0\" type=\"up\"></app-external-button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cube/cube.component.scss":
/*!******************************************!*\
  !*** ./src/app/cube/cube.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.cube {\n  position: absolute;\n  background-color: black;\n  height: 600px;\n  width: 220px;\n  padding: 10px; }\n  div.cube div.floor {\n    height: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZvYnJlZ29uL3Byb2plY3RzL3BlcnNvbmFsL2VsZXZhdG9yL3NyYy9hcHAvY3ViZS9jdWJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWEsRUFBQTtFQUxkO0lBT0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3ViZS9jdWJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmN1YmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRoZWlnaHQ6IDYwMHB4O1xuXHR3aWR0aDogMjIwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdCYgZGl2LmZsb29yIHtcblx0XHRoZWlnaHQ6IDI1JTtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/cube/cube.component.ts":
/*!****************************************!*\
  !*** ./src/app/cube/cube.component.ts ***!
  \****************************************/
/*! exports provided: CubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeComponent", function() { return CubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller.service */ "./src/app/controller.service.ts");



var CubeComponent = /** @class */ (function () {
    function CubeComponent(controllerService) {
        this.controllerService = controllerService;
    }
    CubeComponent.prototype.ngOnInit = function () {
    };
    CubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cube',
            template: __webpack_require__(/*! ./cube.component.html */ "./src/app/cube/cube.component.html"),
            styles: [__webpack_require__(/*! ./cube.component.scss */ "./src/app/cube/cube.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"]])
    ], CubeComponent);
    return CubeComponent;
}());



/***/ }),

/***/ "./src/app/door/door.component.html":
/*!******************************************!*\
  !*** ./src/app/door/door.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"door {{this.controllerService.getDoorStatus()}}\">\n</div>\n"

/***/ }),

/***/ "./src/app/door/door.component.scss":
/*!******************************************!*\
  !*** ./src/app/door/door.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.door {\n  background-color: yellow;\n  margin-left: 10px;\n  width: 150px;\n  height: 110px; }\n  div.door.opening {\n    width: 30px;\n    transition: width 1s ease 0s; }\n  div.door.open {\n    width: 30px; }\n  div.door.closing {\n    width: 150px;\n    transition: width 1s ease 0s; }\n  div.door.closed {\n    width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZvYnJlZ29uL3Byb2plY3RzL3BlcnNvbmFsL2VsZXZhdG9yL3NyYy9hcHAvZG9vci9kb29yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYSxFQUFBO0VBSmQ7SUFNRSxXQUFXO0lBQ1gsNEJBQTRCLEVBQUE7RUFQOUI7SUFVRSxXQUFXLEVBQUE7RUFWYjtJQWFFLFlBQVk7SUFDWiw0QkFBNEIsRUFBQTtFQWQ5QjtJQWlCRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kb29yL2Rvb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZG9vciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdHdpZHRoOiAxNTBweDtcblx0aGVpZ2h0OiAxMTBweDtcblx0Ji5vcGVuaW5nIHtcblx0XHR3aWR0aDogMzBweDtcblx0XHR0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlIDBzO1xuXHR9XG5cdCYub3BlbiB7XG5cdFx0d2lkdGg6IDMwcHg7XG5cdH1cblx0Ji5jbG9zaW5nIHtcblx0XHR3aWR0aDogMTUwcHg7XG5cdFx0dHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZSAwcztcblx0fVxuXHQmLmNsb3NlZCB7XG5cdFx0d2lkdGg6IDE1MHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/door/door.component.ts":
/*!****************************************!*\
  !*** ./src/app/door/door.component.ts ***!
  \****************************************/
/*! exports provided: DoorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorComponent", function() { return DoorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller.service */ "./src/app/controller.service.ts");



var DoorComponent = /** @class */ (function () {
    function DoorComponent(controllerService) {
        this.controllerService = controllerService;
        this.events = false;
    }
    DoorComponent.prototype.ngOnInit = function () {
    };
    DoorComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.events) {
            return;
        }
        var elements = document.getElementsByClassName('door');
        for (var i = 0, m = elements.length; i < m; ++i) {
            this.events = true;
            elements[i].addEventListener('transitionend', function () {
                _this.controllerService.doorEvent();
            });
        }
    };
    DoorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-door',
            template: __webpack_require__(/*! ./door.component.html */ "./src/app/door/door.component.html"),
            styles: [__webpack_require__(/*! ./door.component.scss */ "./src/app/door/door.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"]])
    ], DoorComponent);
    return DoorComponent;
}());



/***/ }),

/***/ "./src/app/elevator/elevator.component.html":
/*!**************************************************!*\
  !*** ./src/app/elevator/elevator.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"elevator floor-{{this.controllerService.getTransitionFloor()}}\">\n  <app-internal-button floor=\"0\"></app-internal-button>\n  <app-internal-button floor=\"1\"></app-internal-button>\n  <app-internal-button floor=\"2\"></app-internal-button>\n  <app-internal-button floor=\"3\"></app-internal-button>\n  <app-internal-button floor=\"-1\"></app-internal-button>\n  <app-internal-button floor=\"-2\"></app-internal-button>\n  <app-door></app-door>\n</div>\n"

/***/ }),

/***/ "./src/app/elevator/elevator.component.scss":
/*!**************************************************!*\
  !*** ./src/app/elevator/elevator.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.elevator {\n  background-color: brown;\n  width: 170px;\n  height: 25%;\n  padding-top: 10px;\n  position: relative;\n  top: 450px;\n  transition: top 1s linear 0s; }\n  div.elevator.floor-0 {\n    top: 450px; }\n  div.elevator.floor-1 {\n    top: 300px; }\n  div.elevator.floor-2 {\n    top: 150px; }\n  div.elevator.floor-3 {\n    top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZvYnJlZ29uL3Byb2plY3RzL3BlcnNvbmFsL2VsZXZhdG9yL3NyYy9hcHAvZWxldmF0b3IvZWxldmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0QkFBNEIsRUFBQTtFQVA3QjtJQVNFLFVBQVUsRUFBQTtFQVRaO0lBWUUsVUFBVSxFQUFBO0VBWlo7SUFlRSxVQUFVLEVBQUE7RUFmWjtJQWtCRSxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbGV2YXRvci9lbGV2YXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5lbGV2YXRvciB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuXHR3aWR0aDogMTcwcHg7XG5cdGhlaWdodDogMjUlO1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDQ1MHB4O1xuXHR0cmFuc2l0aW9uOiB0b3AgMXMgbGluZWFyIDBzO1xuXHQmLmZsb29yLTAge1xuXHRcdHRvcDogNDUwcHg7XG5cdH1cblx0Ji5mbG9vci0xIHtcblx0XHR0b3A6IDMwMHB4O1xuXHR9XG5cdCYuZmxvb3ItMiB7XG5cdFx0dG9wOiAxNTBweDtcblx0fVxuXHQmLmZsb29yLTMge1xuXHRcdHRvcDogMHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/elevator/elevator.component.ts":
/*!************************************************!*\
  !*** ./src/app/elevator/elevator.component.ts ***!
  \************************************************/
/*! exports provided: ElevatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevatorComponent", function() { return ElevatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller.service */ "./src/app/controller.service.ts");



var ElevatorComponent = /** @class */ (function () {
    function ElevatorComponent(controllerService) {
        this.controllerService = controllerService;
        this.events = false;
    }
    ElevatorComponent.prototype.ngOnInit = function () {
    };
    ElevatorComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.events) {
            return;
        }
        var elements = document.getElementsByClassName('elevator');
        for (var i = 0, m = elements.length; i < m; ++i) {
            this.events = true;
            elements[i].addEventListener('transitionend', function () {
                _this.controllerService.arrivedToFloor();
            });
        }
    };
    ElevatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-elevator',
            template: __webpack_require__(/*! ./elevator.component.html */ "./src/app/elevator/elevator.component.html"),
            styles: [__webpack_require__(/*! ./elevator.component.scss */ "./src/app/elevator/elevator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"]])
    ], ElevatorComponent);
    return ElevatorComponent;
}());



/***/ }),

/***/ "./src/app/external-button/external-button.component.html":
/*!****************************************************************!*\
  !*** ./src/app/external-button/external-button.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"external floor-{{this.floor}} floor-{{this.type}}\" (click)=\"this.click()\">\n  {{this.type}}\n</button>\n"

/***/ }),

/***/ "./src/app/external-button/external-button.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/external-button/external-button.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsLWJ1dHRvbi9leHRlcm5hbC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/external-button/external-button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/external-button/external-button.component.ts ***!
  \**************************************************************/
/*! exports provided: ExternalButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalButtonComponent", function() { return ExternalButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller.service */ "./src/app/controller.service.ts");



var ExternalButtonComponent = /** @class */ (function () {
    function ExternalButtonComponent(controllerService) {
        this.controllerService = controllerService;
        this.floor = '0';
        this.type = '';
    }
    ExternalButtonComponent.prototype.ngOnInit = function () {
    };
    ExternalButtonComponent.prototype.click = function () {
        this.controllerService.go(this.floor);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExternalButtonComponent.prototype, "floor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExternalButtonComponent.prototype, "type", void 0);
    ExternalButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-external-button',
            template: __webpack_require__(/*! ./external-button.component.html */ "./src/app/external-button/external-button.component.html"),
            styles: [__webpack_require__(/*! ./external-button.component.scss */ "./src/app/external-button/external-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"]])
    ], ExternalButtonComponent);
    return ExternalButtonComponent;
}());



/***/ }),

/***/ "./src/app/floor-indicator/floor-indicator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/floor-indicator/floor-indicator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floor-indicator floor-{{this.controllerService.getCurrentFloor()}}\">\n  {{this.controllerService.getCurrentFloor()}}\n</div>\n"

/***/ }),

/***/ "./src/app/floor-indicator/floor-indicator.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/floor-indicator/floor-indicator.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.floor-indicator {\n  background-color: silver;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZvYnJlZ29uL3Byb2plY3RzL3BlcnNvbmFsL2VsZXZhdG9yL3NyYy9hcHAvZmxvb3ItaW5kaWNhdG9yL2Zsb29yLWluZGljYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUF3QjtFQUN4QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mbG9vci1pbmRpY2F0b3IvZmxvb3ItaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmZsb29yLWluZGljYXRvciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcblx0Y29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/floor-indicator/floor-indicator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/floor-indicator/floor-indicator.component.ts ***!
  \**************************************************************/
/*! exports provided: FloorIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorIndicatorComponent", function() { return FloorIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller.service */ "./src/app/controller.service.ts");



var FloorIndicatorComponent = /** @class */ (function () {
    function FloorIndicatorComponent(controllerService) {
        this.controllerService = controllerService;
    }
    FloorIndicatorComponent.prototype.ngOnInit = function () {
    };
    FloorIndicatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-floor-indicator',
            template: __webpack_require__(/*! ./floor-indicator.component.html */ "./src/app/floor-indicator/floor-indicator.component.html"),
            styles: [__webpack_require__(/*! ./floor-indicator.component.scss */ "./src/app/floor-indicator/floor-indicator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"]])
    ], FloorIndicatorComponent);
    return FloorIndicatorComponent;
}());



/***/ }),

/***/ "./src/app/internal-button/internal-button.component.html":
/*!****************************************************************!*\
  !*** ./src/app/internal-button/internal-button.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"internal floor-{{this.floor}}\" (click)=\"this.click()\">\n  {{this.label}}\n</button>\n"

/***/ }),

/***/ "./src/app/internal-button/internal-button.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/internal-button/internal-button.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVybmFsLWJ1dHRvbi9pbnRlcm5hbC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/internal-button/internal-button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/internal-button/internal-button.component.ts ***!
  \**************************************************************/
/*! exports provided: InternalButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalButtonComponent", function() { return InternalButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller.service */ "./src/app/controller.service.ts");



var InternalButtonComponent = /** @class */ (function () {
    function InternalButtonComponent(controllerService) {
        this.controllerService = controllerService;
        this.floor = '';
        this.label = '';
    }
    InternalButtonComponent.prototype.ngOnInit = function () {
        switch (this.floor) {
            case '-2':
                this.label = '><';
                break;
            case '-1':
                this.label = '<>';
                break;
            default:
                this.label = this.floor;
                break;
        }
    };
    InternalButtonComponent.prototype.click = function () {
        switch (this.floor) {
            case '-2':
                this.controllerService.close();
                break;
            case '-1':
                this.controllerService.open();
                break;
            case '0':
            case '1':
            case '2':
            case '3':
                this.controllerService.go(this.floor);
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InternalButtonComponent.prototype, "floor", void 0);
    InternalButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-internal-button',
            template: __webpack_require__(/*! ./internal-button.component.html */ "./src/app/internal-button/internal-button.component.html"),
            styles: [__webpack_require__(/*! ./internal-button.component.scss */ "./src/app/internal-button/internal-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"]])
    ], InternalButtonComponent);
    return InternalButtonComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vobregon/projects/personal/elevator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map