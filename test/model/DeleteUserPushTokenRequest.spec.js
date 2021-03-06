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
    describe('DeleteUserPushTokenRequest', function() {
      beforeEach(function() {
        instance = new Caspianyes4TrackserviceApi.DeleteUserPushTokenRequest();
      });

      it('should create an instance of DeleteUserPushTokenRequest', function() {
        // TODO: update the code to test DeleteUserPushTokenRequest
        expect(instance).to.be.a(Caspianyes4TrackserviceApi.DeleteUserPushTokenRequest);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property deviceId (base name: "deviceId")', function() {
        // TODO: update the code to test the property deviceId
        expect(instance).to.have.property('deviceId');
        // expect(instance.deviceId).to.be(expectedValueLiteral);
      });

    });
  });

}));
