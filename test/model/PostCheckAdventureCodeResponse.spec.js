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
    describe('PostCheckAdventureCodeResponse', function() {
      beforeEach(function() {
        instance = new Caspianyes4TrackserviceApi.PostCheckAdventureCodeResponse();
      });

      it('should create an instance of PostCheckAdventureCodeResponse', function() {
        // TODO: update the code to test PostCheckAdventureCodeResponse
        expect(instance).to.be.a(Caspianyes4TrackserviceApi.PostCheckAdventureCodeResponse);
      });

      it('should have the property isSuccess (base name: "isSuccess")', function() {
        // TODO: update the code to test the property isSuccess
        expect(instance).to.have.property('isSuccess');
        // expect(instance.isSuccess).to.be(expectedValueLiteral);
      });

    });
  });

}));
