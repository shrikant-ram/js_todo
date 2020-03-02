(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create-user/create-user.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/create-user/create-user.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"add_user\">\n\n    <form [formGroup]=\"addForm\" (submit)=\"onSubmit(addForm)\">\n        <article>\n            <input type=\"file\" formControlName=\"avatar\" #file hidden (change)=\"setProfilePic($event)\" />\n            <button mat-icon-button (click)=\"file.click()\"><mat-icon>attach_file</mat-icon></button>\n            <figure #profilePic (click)=\"file.click()\">                \n            </figure>\n        </article>\n        <section>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"ID\" formControlName=\"id\" readonly required>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                <mat-error *ngIf=\"addForm.controls['email'].errors.email\">\n                    Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"addForm.controls['email'].errors.required\">\n                    Email is <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"First Name\" formControlName=\"first_name\" required>\n                <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                <mat-error *ngIf=\"addForm.controls['first_name'].errors.required\">\n                    Please enter a valid first name address\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Last Name\" formControlName=\"last_name\" required>\n                <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                <mat-error *ngIf=\"addForm.controls['last_name'].errors.required\">\n                    Please enter a valid first name address\n                </mat-error>\n            </mat-form-field>\n           <div class=\"btn-warpper\">\n                <button mat-raised-button color=\"accent\" [routerLink]=\"['/user', 'shrikantk3']\">Back</button>\n                <button mat-raised-button color=\"primary\">Save User</button>\n           </div>\n        </section>\n    </form>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/dashboard/dashboard.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<h4>Welcome to dashboard..</h4>\n<mat-form-field>\n    <input matInput type=\"text\" placeholder=\"Search by\" (keyup)=\"applyFilter($event.target.value)\" />\n</mat-form-field>\n<button mat-raised-button color=\"accent\" style=\"float:right\" [routerLink]=\"['/user/shrikantk3/add_user']\"><mat-icon >add_circle_outline</mat-icon> Add New User</button>\n<br>\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" >\n        <ng-container matColumnDef=\"avatar\">\n            <th mat-header-cell *matHeaderCellDef> user </th>\n            <td mat-cell *matCellDef=\"let element\"  style=\"width:120px\">\n                <figure>\n                    <img [src]=\"element.avatar\" alt=\"avatar\" />\n                </figure>    \n            </td>\n          </ng-container>\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"first_name\">\n        <th mat-header-cell *matHeaderCellDef> First Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.first_name}} </td>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"last_name\">\n        <th mat-header-cell *matHeaderCellDef> Last Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.last_name}} </td>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"Action\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let element\"> \n              <button mat-icon-button><mat-icon color=\"warn\" (click)=\"deleteUSer(element.id)\">restore_from_trash</mat-icon></button> \n              <button mat-icon-button><mat-icon color=\"primary\">visibility</mat-icon></button> \n          </td>\n        </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"viewDetails(row)\"></tr>\n    </table>\n    <p *ngIf=\"dataSource?.data?.length == 0\" style=\"display: flex; padding: 12px 25px;\"><mat-icon color=\"warn\">info</mat-icon> Empty Data.</p>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n<!-- <button mat-raised-button color=\"primary\">Save Here</button> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-details/user-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-details/user-details.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div [innerHTML]=\"details.innerHtml\"></div> -->\n<button mat-icon-button color=\"warn\" (click)=\"dialog.close()\">\n    <mat-icon>close</mat-icon>\n</button>\n<figure>\n    <img [src]='details.avatar' alt=\"asas\" />\n    <figcaption>\n        <h1>{{details.first_name}}&nbsp;{{details.last_name}}</h1>\n        <p>{{details.email}}</p>\n        <p>ID :{{details.id}}</p>\n    </figcaption>\n</figure>\n<div class=\"btn-wrapper\">\n        <button mat-raised-button color=\"warn\" [disabled]='(details.id - 1) == 0? true: false' (click)=\"getDetails(details.id - 1)\">Prev</button>\n        <button mat-raised-button color=\"primary\"  (click)=\"getDetails(details.id + 1)\">Next</button>\n</div>\n<!-- {{details.innerHtml}} -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"padding:15px\">\r\n        <router-outlet></router-outlet>\r\n</section>");

/***/ }),

/***/ "./src/app/user/create-user/create-user.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/create-user/create-user.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add_user form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.add_user form article {\n  background: #ddd;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 80vh;\n}\n.add_user form article figure {\n  border: 2px solid #cccccc;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-size: cover;\n  background: #fff;\n  overflow: hidden;\n  box-shadow: inset 0px -2px 16px 5px #dddddd;\n  position: relative;\n  background-position: center;\n}\n.add_user form article figure img {\n  position: absolute;\n}\n.add_user form section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  padding: 50px 40px;\n}\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jcmVhdGUtdXNlci9EOlxcUFJPSkVDVFNcXGluZm9UYXNrL3NyY1xcYXBwXFx1c2VyXFxjcmVhdGUtdXNlclxcY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNKLFlBQUE7QUNFSjtBRERRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRVo7QUREWTtFQUNJLGtCQUFBO0FDR2hCO0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdBO0VBQ0ksV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRfdXNlciBmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYXJ0aWNsZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNkZGQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICBmaWd1cmV7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTJweCAxNnB4IDVweCAjZGRkZGRkO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6NTBweCA0MHB4O1xyXG4gICAgfVxyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICBcclxufVxyXG5cclxuIiwiLmFkZF91c2VyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkX3VzZXIgZm9ybSBhcnRpY2xlIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG59XG4uYWRkX3VzZXIgZm9ybSBhcnRpY2xlIGZpZ3VyZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTJweCAxNnB4IDVweCAjZGRkZGRkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5hZGRfdXNlciBmb3JtIGFydGljbGUgZmlndXJlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hZGRfdXNlciBmb3JtIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTBweCA0MHB4O1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/create-user/create-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/create-user/create-user.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");




let CreateUserComponent = class CreateUserComponent {
    constructor(fb, _store) {
        this.fb = fb;
        this._store = _store;
        this.setImag = '';
    }
    ngOnInit() {
        this.addForm = this.fb.group({
            id: ['1231'],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            avatar: ['']
        });
        this.setProfilePic(null);
    }
    ngAfterViewInit() {
        // console.log("=================================================>",this.profilePic.nativeElement.setAttribute('style', `background-image:url('${this.setImag}');`))
    }
    setProfilePic(val) {
        if (val) {
            debugger;
            if (val.target.files && val.target.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    console.log('===========>', e);
                };
                reader.onerror = function (event) {
                    console.error("File could not be read! Code ");
                };
            }
            // this.addForm.controls['avatar'].setValue(val); 
            // this.profilePic.nativeElement.style('background-image', `url('${val.target.files[0]}');`);
        }
        else {
            this.setImag = '../../../assets/images/user.png';
        }
    }
    onSubmit(formAdd) {
        if (formAdd.valid) {
            // this._store.dispatch(new AddUser(formAdd.value))
        }
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profilePic', { static: true })
], CreateUserComponent.prototype, "profilePic", void 0);
CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create-user/create-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-user.component.scss */ "./src/app/user/create-user/create-user.component.scss")).default]
    })
], CreateUserComponent);



/***/ }),

/***/ "./src/app/user/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\ntable td:first-child {\n  text-align: left;\n}\ntable figure {\n  padding: 0;\n  margin: 4px 0;\n}\ntable figure img {\n  width: 43px;\n  height: 43px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kYXNoYm9hcmQvRDpcXFBST0pFQ1RTXFxpbmZvVGFzay9zcmNcXGFwcFxcdXNlclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENRO0VBQ0ksZ0JBQUE7QUNDWjtBREVJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGR7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaWd1cmV7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIG1hcmdpbjo0cHggMDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOjQzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0M3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJSA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRhYmxlIGZpZ3VyZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogNHB4IDA7XG59XG50YWJsZSBmaWd1cmUgaW1nIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-details/user-details.component */ "./src/app/user/user-details/user-details.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");










// import { EventEmitter } from 'events';
let DashboardComponent = class DashboardComponent {
    constructor(_router, _http, _dialog, dashboardElement, _toastr, _store) {
        this._router = _router;
        this._http = _http;
        this._dialog = _dialog;
        this.dashboardElement = dashboardElement;
        this._toastr = _toastr;
        this._store = _store;
        this.displayedColumns = ['avatar', 'id', 'email', 'first_name', 'last_name', 'Action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"];
        this.setColor = 'red';
        // console.log($location)
    }
    // loadUser$:Observable<userActionTypes[]> = this._store.select(state => state.userAction)
    ngOnInit() {
        this._store.dispatch({ type: '[USER] Load User' });
        this._store.subscribe((res) => {
            // console.log('=====================>', res.users);
            this.dataSource.data = Object.values(res.users);
            this.dataSource.paginator = this.paginator;
        });
        // this._http.get('https://reqres.in/api/users?page=1').subscribe((res:any)=>{
        //   this._toastr.success('User list loaded!','Succeful!')
        //   this.dataSource.data = res.data;     
        //   this.dataSource.paginator = this.paginator; 
        // });
    }
    ngAfterViewInit() {
        // console.log();
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this._router.navigate(['auth/login']);
    }
    applyFilter(filterValue) {
        console.log(filterValue);
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    viewDetails(data) {
        data.innerHtml = this.dashboardElement.nativeElement.innerHTML;
        this._dialog.open(_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"], { data: data });
    }
    deleteUSer(id) {
        window.confirm('Are tyou want to delete this user data?');
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DashboardComponent.prototype, "setColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], DashboardComponent.prototype, "paginator", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/user/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/user/user-details/user-details.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 200px;\n  width: 200px;\n  border-radius: 20px;\n}\n\n.btn-wrapper {\n  display: -webkit-box;\n  display: flex;\n}\n\n.btn-wrapper button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbHMvRDpcXFBST0pFQ1RTXFxpbmZvVGFzay9zcmNcXGFwcFxcdXNlclxcdXNlci1kZXRhaWxzXFx1c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0VKOztBRERJO0VBQ0ksV0FBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbn1cclxuLmJ0bi13cmFwcGVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ0bi13cmFwcGVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/user-details/user-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let UserDetailsComponent = class UserDetailsComponent {
    constructor(_data, _dialog, _http, _renderer, el, _store) {
        this._data = _data;
        this._dialog = _dialog;
        this._http = _http;
        this._renderer = _renderer;
        this.el = el;
        this._store = _store;
        this.details = _data;
        this.dialog = this._dialog;
        // console.log('Asasa=======================>',this._renderer.appendChild(this.el.nativeElement,'<p>HI I am Element!</p>'));
        this._store.dispatch({ type: '[USER] Load User' });
        this._store.subscribe(res => {
            this.data = Object.values(res.users);
            console.log(this.data);
        });
    }
    ngOnInit() {
        // this.dialog.close(
        // )
    }
    getDetails(id) {
        try {
            this.details = this.data[(id - 1)];
        }
        catch (error) {
            alert('No Data exits!');
        }
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-details/user-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.component.scss */ "./src/app/user/user-details/user-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: userRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRouterModule", function() { return userRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/user/dashboard/dashboard.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/user/create-user/create-user.component.ts");






const _routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_4__["userComponent"],
        children: [
            { path: ':id', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: ':id/add_user', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"] }
        ]
    }
];
let userRouterModule = class userRouterModule {
};
userRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], userRouterModule);



/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: userComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userComponent", function() { return userComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let userComponent = class userComponent {
};
userComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default
    })
], userComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/user/dashboard/dashboard.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _extra_extra_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extra/extra.module */ "./src/app/extra/extra.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user/user-details/user-details.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/user/create-user/create-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");













let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _user_component__WEBPACK_IMPORTED_MODULE_7__["userComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"], _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["userRouterModule"],
            _extra_extra_module__WEBPACK_IMPORTED_MODULE_5__["ExtraModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
        ],
        entryComponents: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"]],
        providers: []
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map