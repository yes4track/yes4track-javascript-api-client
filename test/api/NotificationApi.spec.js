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

  beforeEach(function() {
    instance = new Caspianyes4TrackserviceApi.NotificationApi();
  });

  describe('(package)', function() {
    describe('NotificationApi', function() {
      describe('getByIdNotification', function() {
        it('should call getByIdNotification successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdNotification call and complete the assertions
          /*
          var opts = {};

          instance.getByIdNotification(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllNotificationResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1NotificationsGet', function() {
        it('should call yes4trackV1NotificationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1NotificationsGet call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1NotificationsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllPagedNotificationResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1NotificationsIdDelete', function() {
        it('should call yes4trackV1NotificationsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1NotificationsIdDelete call
          /*
          var opts = {};

          instance.yes4trackV1NotificationsIdDelete(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1NotificationsIdPatch', function() {
        it('should call yes4trackV1NotificationsIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1NotificationsIdPatch call
          /*
          var opts = {};

          instance.yes4trackV1NotificationsIdPatch(body, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1NotificationsIdPut', function() {
        it('should call yes4trackV1NotificationsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1NotificationsIdPut call
          /*
          var opts = {};

          instance.yes4trackV1NotificationsIdPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1NotificationsPost', function() {
        it('should call yes4trackV1NotificationsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1NotificationsPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1NotificationsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostNotificationResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
