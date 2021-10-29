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
    describe('GetAllActiveTrailByAngelResponse', function() {
      beforeEach(function() {
        instance = new Caspianyes4TrackserviceApi.GetAllActiveTrailByAngelResponse();
      });

      it('should create an instance of GetAllActiveTrailByAngelResponse', function() {
        // TODO: update the code to test GetAllActiveTrailByAngelResponse
        expect(instance).to.be.a(Caspianyes4TrackserviceApi.GetAllActiveTrailByAngelResponse);
      });

      it('should have the property trails (base name: "trails")', function() {
        // TODO: update the code to test the property trails
        expect(instance).to.have.property('trails');
        // expect(instance.trails).to.be(expectedValueLiteral);
      });

      it('should have the property mapCoordinate (base name: "mapCoordinate")', function() {
        // TODO: update the code to test the property mapCoordinate
        expect(instance).to.have.property('mapCoordinate');
        // expect(instance.mapCoordinate).to.be(expectedValueLiteral);
      });

    });
  });

}));
