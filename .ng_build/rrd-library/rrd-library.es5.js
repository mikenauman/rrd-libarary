import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: "\n    <header>\n      <div class=\"left\">\n        <svg class=\"rrd\" x=\"0px\" y=\"0px\" viewBox=\"0 0 572.5 172.6\"><g><polygon points=\"543.5,89.8 543.5,95.8 566.5,95.8 566.5,118.8 572.5,118.8 572.5,89.8 \"></polygon><path d=\"M259.3,4h-25c-0.4,0-0.7,0.3-0.7,0.7v98.4c0,21.9-17.7,39.6-39.6,39.6c-3.2,0-6.4-0.1-9.4-0.7c-0.1,0-0.1,0-0.2,0c-0.4-0.1-0.9-0.2-1.3-0.3c0,0-0.1,0-0.1,0c-0.5-0.1-1-0.3-1.4-0.4c0,0,0,0,0,0c-2.3-0.7-4.9-1.7-7.4-3l0,0c0,0-0.1,0-0.3-0.1c-0.8-0.4-3.1-1.6-6.1-3.7c-1.5-1.1-3-2.4-4.6-3.9c-0.5-0.5-1.3-0.2-1.5,0.4l-6.5,25.2c-0.2,0.6,0.1,1.3,0.6,1.8c1.6,1.2,3.1,2.3,4.5,2.9h0c5.8,3.3,17.4,8.5,32.8,8.5c0.3,0,0.6,0,0.9,0c14.9,0,28.6-4.9,39.6-13.2v12.5c0,0.4,0.3,0.7,0.7,0.7h25c0.4,0,0.7-0.3,0.7-0.7V4.7C260,4.3,259.7,4,259.3,4z\"></path><path d=\"M99.7,45.5L99.7,45.5C94,42.2,82.4,37,67,37c-0.3,0-0.6,0-0.9,0c-14.9,0-28.6,4.9-39.6,13.2V37.8c0-0.4-0.3-0.7-0.7-0.7h-25C0.3,37,0,37.4,0,37.8v130.7c0,0.4,0.3,0.7,0.7,0.7h25c0.4,0,0.7-0.3,0.7-0.7v-65.4c0-21.9,17.7-39.6,39.6-39.6c3.2,0,6.4,0.1,9.4,0.7c0.1,0,0.1,0,0.2,0c0.4,0.1,0.9,0.2,1.3,0.3c0,0,0.1,0,0.1,0c0.5,0.1,1,0.3,1.4,0.4c0,0,0,0,0,0c2.3,0.7,4.9,1.7,7.4,3l0,0c0,0,0.1,0,0.3,0.1c0.8,0.4,3.1,1.6,6.1,3.7c1.5,1.1,3,2.4,4.6,3.9c0.5,0.5,1.3,0.2,1.5-0.4l6.5-25.2c0.2-0.6-0.1-1.3-0.6-1.8C102.7,47.2,101.1,46.2,99.7,45.5z\"></path><path d=\"M184,63.5c3.2,0,6.4,0.1,9.4,0.7c0.1,0,0.1,0,0.2,0c0.4,0.1,0.9,0.2,1.3,0.3c0,0,0.1,0,0.1,0c0.5,0.1,1,0.3,1.4,0.4c0,0,0,0,0,0c2.3,0.7,4.9,1.7,7.4,3l0,0c0,0,0.1,0,0.3,0.1c0.8,0.4,3.1,1.6,6.1,3.7c1.5,1.1,3,2.4,4.6,3.9c0.5,0.5,1.3,0.2,1.5-0.4l6.5-25.2c0.2-0.6-0.1-1.3-0.6-1.8c-1.6-1.2-3.1-2.3-4.5-2.9l0,0C212,42.2,200.4,37,185,37c-0.3,0-0.6,0-0.9,0c-14.9,0-28.6,4.9-39.6,13.2V37.8c0-0.4-0.3-0.7-0.7-0.7h-25c-0.4,0-0.7,0.3-0.7,0.7v130.7c0,0.4,0.3,0.7,0.7,0.7h25c0.4,0,0.7-0.3,0.7-0.7v-65.4C144.4,81.2,162.2,63.5,184,63.5z\"></path><path d=\"M296.5,134.7c-3.7,0-6.6-2.9-6.6-6.5c0-3.6,2.9-6.5,6.6-6.5c1.9,0,3.8,0.9,5.2,2.4l1.8-2.3c-1.8-1.8-4.4-2.9-7-2.9c-5.5,0-9.7,4-9.7,9.3c0,5.3,4.2,9.4,9.6,9.4c2.6,0,5.3-1.2,7.2-3l-1.9-2.1C300.2,133.8,298.3,134.7,296.5,134.7z\"></path><path d=\"M314.8,118.9c-5.5,0-9.8,4-9.8,9.3c0,5.3,4.3,9.4,9.8,9.4c5.5,0,9.8-4.1,9.8-9.4C324.6,122.9,320.3,118.9,314.8,118.9z M314.8,134.8c-3.6,0-6.7-2.9-6.7-6.6s3-6.5,6.7-6.5c3.6,0,6.6,2.9,6.6,6.5S318.4,134.8,314.8,134.8z\"></path><polygon points=\"347.8,118.9 344.1,118.9 338,131.2 331.9,118.9 328.2,118.9 328.2,137.5 331.1,137.5 331.1,123.6 337,135.5 339,135.5 344.9,123.6 344.9,137.5 347.8,137.5 \"></polygon><polygon points=\"369.6,137.5 372.5,137.5 372.5,118.9 368.8,118.9 362.7,131.2 356.6,118.9 352.9,118.9 352.9,137.5 355.8,137.5 355.8,123.6 361.7,135.5 363.7,135.5 369.6,123.6 \"></polygon><path d=\"M393.4,129.8v-10.8h-3.1v10.8c0,3.1-1.9,5-4.9,5c-3,0-5-1.9-5-5v-10.8h-3.1v10.8c0,4.8,3.1,7.8,8.1,7.8S393.4,134.6,393.4,129.8z\"></path><polygon points=\"401.2,124.2 411.1,137.5 414.1,137.5 414.1,118.9 411.1,118.9 411.1,132.3 401.2,118.9 398.1,118.9 398.1,137.5 401.2,137.5 \"></polygon><rect x=\"419.3\" y=\"118.9\" width=\"3.1\" height=\"18.5\"></rect><path d=\"M435.8,134.7c-3.7,0-6.6-2.9-6.6-6.5c0-3.6,2.9-6.5,6.6-6.5c1.9,0,3.8,0.9,5.2,2.4l1.8-2.3c-1.8-1.8-4.4-2.9-7-2.9c-5.5,0-9.7,4-9.7,9.3c0,5.3,4.2,9.4,9.6,9.4c2.6,0,5.3-1.2,7.2-3l-1.9-2.1C439.5,133.8,437.6,134.7,435.8,134.7z\"></path><path d=\"M451.9,118.9l-8.2,18.5h3.3l1.8-4.2h9.3l1.8,4.2h3.3l-8.1-18.5H451.9z M449.9,130.5l3.5-8.2l3.5,8.2H449.9z\"></path><polygon points=\"461.9,121.8 467.7,121.8 467.7,137.5 470.8,137.5 470.8,121.8 476.7,121.8 476.7,118.9 461.9,118.9 \"></polygon><rect x=\"479.6\" y=\"118.9\" width=\"3.1\" height=\"18.5\"></rect><path d=\"M496.1,118.9c-5.5,0-9.8,4-9.8,9.3c0,5.3,4.3,9.4,9.8,9.4c5.5,0,9.8-4.1,9.8-9.4C506,122.9,501.7,118.9,496.1,118.9z M496.2,134.8c-3.6,0-6.7-2.9-6.7-6.6s3-6.5,6.7-6.5c3.6,0,6.6,2.9,6.6,6.5S499.8,134.8,496.2,134.8z\"></path><polygon points=\"522.5,132.3 512.6,118.9 509.5,118.9 509.5,137.5 512.7,137.5 512.7,124.2 522.5,137.5 525.6,137.5 525.6,118.9 522.5,118.9 \"></polygon><path d=\"M533.6,123.7c0-1.2,1.2-1.9,3-1.9c1.4,0,3.4,0.5,5.4,1.7l1.3-2.8c-1.7-1.1-4.1-1.9-6.5-1.9c-4,0-6.7,2-6.7,5.2c0,6.6,10,4.3,10,8.4c0,1.4-1.3,2.2-3.5,2.2c-2,0-4.4-1-6.3-2.7l-1.3,2.7c1.9,1.7,4.7,2.9,7.6,2.9c4.1,0,7-2,7-5.3C543.6,125.6,533.6,127.7,533.6,123.7z\"></path><polygon points=\"291.3,161.3 300.4,161.3 300.4,158.5 291.3,158.5 291.3,153.5 301.4,153.5 301.4,150.7 288.2,150.7 288.2,169.2 301.8,169.2 301.8,166.4 291.3,166.4 \"></polygon><polygon points=\"318.8,164 308.9,150.7 305.8,150.7 305.8,169.2 309,169.2 309,155.9 318.8,169.2 321.9,169.2 321.9,150.7 318.8,150.7 \"></polygon><path d=\"M332.8,150.7l-8.2,18.5h3.3l1.8-4.2h9.3l1.8,4.2h3.3l-8.1-18.5H332.8z M330.8,162.2l3.5-8.2l3.5,8.2H330.8z\"></path><path d=\"M357.8,159.4c2-0.5,3.3-2,3.3-4.1c0-2.9-2.4-4.6-6.2-4.6h-8v18.5h8.2c4.2,0,6.7-1.9,6.7-5.1C361.8,161.6,360.3,159.8,357.8,159.4z M349.9,153.4h4.8c2,0,3.2,0.8,3.2,2.4c0,1.6-1.2,2.5-3.2,2.5h-4.8V153.4z M354.7,166.4h-4.8v-5.3h4.8c2.4,0,3.9,1,3.9,2.6C358.6,165.5,357.1,166.4,354.7,166.4z\"></path><polygon points=\"368.9,150.7 365.7,150.7 365.7,169.2 376.9,169.2 376.9,166.4 368.9,166.4 \"></polygon><polygon points=\"383.2,161.3 392.3,161.3 392.3,158.5 383.2,158.5 383.2,153.5 393.3,153.5 393.3,150.7 380.1,150.7 380.1,169.2 393.7,169.2 393.7,166.4 383.2,166.4 \"></polygon><path d=\"M405.3,150.7h-7.6v18.5h7.5c5.6,0,9.7-3.9,9.7-9.3C414.9,154.6,410.9,150.7,405.3,150.7z M405.4,166.4h-4.5v-12.9h4.4c3.6,0,6.5,2.7,6.5,6.5C411.7,163.7,409,166.4,405.4,166.4z\"></path></g></svg>\n        <div class=\"title\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <div class=\"right\">\n        <svg class=\"menu\" x=\"0px\" y=\"0px\" viewBox=\"0 0 341.333 341.333\">\n        <g>\n        \t<g>\n        \t\t<g>\n        \t\t\t<rect x=\"128\" y=\"128\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"0\" y=\"0\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"128\" y=\"256\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"0\" y=\"128\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"0\" y=\"256\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"256\" y=\"0\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"128\" y=\"0\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"256\" y=\"128\" width=\"85.333\" height=\"85.333\"/>\n        \t\t\t<rect x=\"256\" y=\"256\" width=\"85.333\" height=\"85.333\"/>\n        \t\t</g>\n        \t</g>\n        </g>\n        </svg>\n        <img width=\"50\" class=\"logo\"\n          src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci\n          IHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzE\n          uOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aC\n          BmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyN\n          SAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEu\n          N2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE\n          3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n      </div>\n    </header>\n  ",
                styles: ["\n    header {\n      background-color: #0062b0;\n      color: #ffffff;\n      padding: 10px 20px;\n      height: 60px;\n    }\n\n    header svg {\n      fill: #ffffff;\n      height: 50px;\n    }\n\n    header .left {\n      float: left;\n    }\n    header .title {\n      display: inline-block;\n      padding-left: 40px;\n      font-size: 40px;\n      vertical-align: top;\n    }\n\n    header .right {\n      text-align: right;\n    }\n\n    header .right img.logo {\n      margin-top: 5px;\n      margin-left: 20px;\n    }\n\n    header .menu {\n      fill: #ffffff;\n      height: 18px;\n      margin-bottom: 14px;\n      cursor: pointer;\n    }\n    header .menu:hover {\n      fill: #ffc500;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return []; };
var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [HeaderComponent],
                exports: [
                    HeaderComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
HeaderModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=rrd-library.es5.js.map
