"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Book Type
var Book = (function () {
    function Book() {
    }
    return Book;
}());
exports.Book = Book;
// TODO: Category Type
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var AppComponent = (function () {
    function AppComponent() {
        this.books = []; // use mocks data instead
        this.categories = ['All', 'Web']; // use mocks data instead
        this.navClosed = true;
    }
    AppComponent.prototype.clicked = function () {
        console.log('Will be implemented in the next section');
    };
    AppComponent.prototype.search = function () { };
    AppComponent.prototype.toggleSideBar = function () {
        this.navClosed = !this.navClosed;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bookstore',
            // template: ``,
            templateUrl: '../app/app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map