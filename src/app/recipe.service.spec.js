"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var recipe_service_1 = require("./recipe.service");
describe('RecipeService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(recipe_service_1.RecipeService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
