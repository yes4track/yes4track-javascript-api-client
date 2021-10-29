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
    describe('TrackSource', function() {
      beforeEach(function() {
        instance = Caspianyes4TrackserviceApi.TrackSource;
      });

      it('should create an instance of TrackSource', function() {
        // TODO: update the code to test TrackSource
        expect(instance).to.be.a('object');
      });

      it('should have the property _1', function() {
        expect(instance).to.have.property('_1');
        expect(instance._1).to.be(1);
      });

      it('should have the property _2', function() {
        expect(instance).to.have.property('_2');
        expect(instance._2).to.be(2);
      });

    });
  });

}));
