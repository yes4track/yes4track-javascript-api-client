/*
 * Caspian.Yes4Track.Service API
 * Caspian.Yes4Track.Service API
 *
 * OpenAPI spec version: v1
 * Contact: admin@yes4track.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Caspianyes4TrackserviceApi);
  }
}(this, function(expect, Caspianyes4TrackserviceApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetAllPagedExperienceResponse', function() {
      beforeEach(function() {
        instance = new Caspianyes4TrackserviceApi.GetAllPagedExperienceResponse();
      });

      it('should create an instance of GetAllPagedExperienceResponse', function() {
        // TODO: update the code to test GetAllPagedExperienceResponse
        expect(instance).to.be.a(Caspianyes4TrackserviceApi.GetAllPagedExperienceResponse);
      });

      it('should have the property currentPage (base name: "currentPage")', function() {
        // TODO: update the code to test the property currentPage
        expect(instance).to.have.property('currentPage');
        // expect(instance.currentPage).to.be(expectedValueLiteral);
      });

      it('should have the property pageCount (base name: "pageCount")', function() {
        // TODO: update the code to test the property pageCount
        expect(instance).to.have.property('pageCount');
        // expect(instance.pageCount).to.be(expectedValueLiteral);
      });

      it('should have the property pageSize (base name: "pageSize")', function() {
        // TODO: update the code to test the property pageSize
        expect(instance).to.have.property('pageSize');
        // expect(instance.pageSize).to.be(expectedValueLiteral);
      });

      it('should have the property rowCount (base name: "rowCount")', function() {
        // TODO: update the code to test the property rowCount
        expect(instance).to.have.property('rowCount');
        // expect(instance.rowCount).to.be(expectedValueLiteral);
      });

      it('should have the property firstRowOnPage (base name: "firstRowOnPage")', function() {
        // TODO: update the code to test the property firstRowOnPage
        expect(instance).to.have.property('firstRowOnPage');
        // expect(instance.firstRowOnPage).to.be(expectedValueLiteral);
      });

      it('should have the property lastRowOnPage (base name: "lastRowOnPage")', function() {
        // TODO: update the code to test the property lastRowOnPage
        expect(instance).to.have.property('lastRowOnPage');
        // expect(instance.lastRowOnPage).to.be(expectedValueLiteral);
      });

      it('should have the property results (base name: "results")', function() {
        // TODO: update the code to test the property results
        expect(instance).to.have.property('results');
        // expect(instance.results).to.be(expectedValueLiteral);
      });

    });
  });

}));
