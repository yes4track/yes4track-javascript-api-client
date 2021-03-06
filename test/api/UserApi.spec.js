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
    instance = new Caspianyes4TrackserviceApi.UserApi();
  });

  describe('(package)', function() {
    describe('UserApi', function() {
      describe('getByIdUser', function() {
        it('should call getByIdUser successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdUser call and complete the assertions
          /*
          var opts = {};

          instance.getByIdUser(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllUserResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1UsersAccesstokenPost', function() {
        it('should call yes4trackV1UsersAccesstokenPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersAccesstokenPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1UsersAccesstokenPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostUserAccessTokenResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1UsersGet', function() {
        it('should call yes4trackV1UsersGet successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersGet call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1UsersGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllPagedUserResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1UsersIdCompaniesCompanyIdDelete', function() {
        it('should call yes4trackV1UsersIdCompaniesCompanyIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdCompaniesCompanyIdDelete call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdCompaniesCompanyIdDelete(id, companyId, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdCompaniesCompanyIdPost', function() {
        it('should call yes4trackV1UsersIdCompaniesCompanyIdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdCompaniesCompanyIdPost call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdCompaniesCompanyIdPost(id, companyId, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdDelete', function() {
        it('should call yes4trackV1UsersIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdDelete call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdDelete(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdLocationPut', function() {
        it('should call yes4trackV1UsersIdLocationPut successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdLocationPut call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdLocationPut(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdPatch', function() {
        it('should call yes4trackV1UsersIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdPatch call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdPatch(body, id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdPhotoPut', function() {
        it('should call yes4trackV1UsersIdPhotoPut successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdPhotoPut call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdPhotoPut(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdPushtokenDelete', function() {
        it('should call yes4trackV1UsersIdPushtokenDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdPushtokenDelete call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdPushtokenDelete(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdPushtokenGet', function() {
        it('should call yes4trackV1UsersIdPushtokenGet successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdPushtokenGet call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1UsersIdPushtokenGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllUserPushTokenResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1UsersIdPushtokenPost', function() {
        it('should call yes4trackV1UsersIdPushtokenPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdPushtokenPost call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdPushtokenPost(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersIdPut', function() {
        it('should call yes4trackV1UsersIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersIdPut call
          /*
          var opts = {};

          instance.yes4trackV1UsersIdPut(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersPost', function() {
        it('should call yes4trackV1UsersPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1UsersPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostUserResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1UsersResendcodePost', function() {
        it('should call yes4trackV1UsersResendcodePost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersResendcodePost call
          /*
          var opts = {};

          instance.yes4trackV1UsersResendcodePost(opts, function(error, data, response) {
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
      describe('yes4trackV1UsersSetupangelPost', function() {
        it('should call yes4trackV1UsersSetupangelPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersSetupangelPost call
          /*
          var opts = {};

          instance.yes4trackV1UsersSetupangelPost(opts, function(error, data, response) {
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
      describe('yes4trackV1UsersSetupsponsorIdPost', function() {
        it('should call yes4trackV1UsersSetupsponsorIdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersSetupsponsorIdPost call
          /*
          var opts = {};

          instance.yes4trackV1UsersSetupsponsorIdPost(id, opts, function(error, data, response) {
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
      describe('yes4trackV1UsersSigninPost', function() {
        it('should call yes4trackV1UsersSigninPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersSigninPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1UsersSigninPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostUserSignInResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1UsersSignupPost', function() {
        it('should call yes4trackV1UsersSignupPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1UsersSignupPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1UsersSignupPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostUserResponse);

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
