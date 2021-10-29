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
    describe('PostUserResponse', function() {
      beforeEach(function() {
        instance = new Caspianyes4TrackserviceApi.PostUserResponse();
      });

      it('should create an instance of PostUserResponse', function() {
        // TODO: update the code to test PostUserResponse
        expect(instance).to.be.a(Caspianyes4TrackserviceApi.PostUserResponse);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property userCreated (base name: "userCreated")', function() {
        // TODO: update the code to test the property userCreated
        expect(instance).to.have.property('userCreated');
        // expect(instance.userCreated).to.be(expectedValueLiteral);
      });

      it('should have the property userUpdated (base name: "userUpdated")', function() {
        // TODO: update the code to test the property userUpdated
        expect(instance).to.have.property('userUpdated');
        // expect(instance.userUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property photoUrl (base name: "photoUrl")', function() {
        // TODO: update the code to test the property photoUrl
        expect(instance).to.have.property('photoUrl');
        // expect(instance.photoUrl).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "isActive")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property isAdmin (base name: "isAdmin")', function() {
        // TODO: update the code to test the property isAdmin
        expect(instance).to.have.property('isAdmin');
        // expect(instance.isAdmin).to.be(expectedValueLiteral);
      });

      it('should have the property isSuperAdmin (base name: "isSuperAdmin")', function() {
        // TODO: update the code to test the property isSuperAdmin
        expect(instance).to.have.property('isSuperAdmin');
        // expect(instance.isSuperAdmin).to.be(expectedValueLiteral);
      });

      it('should have the property isAngel (base name: "isAngel")', function() {
        // TODO: update the code to test the property isAngel
        expect(instance).to.have.property('isAngel');
        // expect(instance.isAngel).to.be(expectedValueLiteral);
      });

      it('should have the property isExplorer (base name: "isExplorer")', function() {
        // TODO: update the code to test the property isExplorer
        expect(instance).to.have.property('isExplorer');
        // expect(instance.isExplorer).to.be(expectedValueLiteral);
      });

      it('should have the property defaultAngel (base name: "defaultAngel")', function() {
        // TODO: update the code to test the property defaultAngel
        expect(instance).to.have.property('defaultAngel');
        // expect(instance.defaultAngel).to.be(expectedValueLiteral);
      });

      it('should have the property defaultSponsor (base name: "defaultSponsor")', function() {
        // TODO: update the code to test the property defaultSponsor
        expect(instance).to.have.property('defaultSponsor');
        // expect(instance.defaultSponsor).to.be(expectedValueLiteral);
      });

    });
  });

}));