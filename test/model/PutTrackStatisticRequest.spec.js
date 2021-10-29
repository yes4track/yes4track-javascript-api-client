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
    describe('PutTrackStatisticRequest', function() {
      beforeEach(function() {
        instance = new Caspianyes4TrackserviceApi.PutTrackStatisticRequest();
      });

      it('should create an instance of PutTrackStatisticRequest', function() {
        // TODO: update the code to test PutTrackStatisticRequest
        expect(instance).to.be.a(Caspianyes4TrackserviceApi.PutTrackStatisticRequest);
      });

      it('should have the property totalTime (base name: "totalTime")', function() {
        // TODO: update the code to test the property totalTime
        expect(instance).to.have.property('totalTime');
        // expect(instance.totalTime).to.be(expectedValueLiteral);
      });

      it('should have the property totalMovingTime (base name: "totalMovingTime")', function() {
        // TODO: update the code to test the property totalMovingTime
        expect(instance).to.have.property('totalMovingTime');
        // expect(instance.totalMovingTime).to.be(expectedValueLiteral);
      });

      it('should have the property totalDistance (base name: "totalDistance")', function() {
        // TODO: update the code to test the property totalDistance
        expect(instance).to.have.property('totalDistance');
        // expect(instance.totalDistance).to.be(expectedValueLiteral);
      });

      it('should have the property elevationGain (base name: "elevationGain")', function() {
        // TODO: update the code to test the property elevationGain
        expect(instance).to.have.property('elevationGain');
        // expect(instance.elevationGain).to.be(expectedValueLiteral);
      });

      it('should have the property speed (base name: "speed")', function() {
        // TODO: update the code to test the property speed
        expect(instance).to.have.property('speed');
        // expect(instance.speed).to.be(expectedValueLiteral);
      });

    });
  });

}));