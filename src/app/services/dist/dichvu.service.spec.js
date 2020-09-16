"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dichvu_service_1 = require("./dichvu.service");
describe('DichVuService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(dichvu_service_1.DichvuService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
