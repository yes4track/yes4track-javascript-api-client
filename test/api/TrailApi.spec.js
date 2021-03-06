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
    instance = new Caspianyes4TrackserviceApi.TrailApi();
  });

  describe('(package)', function() {
    describe('TrailApi', function() {
      describe('getByIdTrail', function() {
        it('should call getByIdTrail successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdTrail call and complete the assertions
          /*
          var opts = {};

          instance.getByIdTrail(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllTrailResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByIdTrailGeoData', function() {
        it('should call getByIdTrailGeoData successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdTrailGeoData call and complete the assertions
          /*
          var opts = {};

          instance.getByIdTrailGeoData(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetByIdTrailGeoDataResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getByIdTrailGeoLocation', function() {
        it('should call getByIdTrailGeoLocation successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdTrailGeoLocation call and complete the assertions
          /*
          var opts = {};

          instance.getByIdTrailGeoLocation(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.TrailGeoLocationDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1TrailsActiveByAngelGet', function() {
        it('should call yes4trackV1TrailsActiveByAngelGet successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsActiveByAngelGet call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1TrailsActiveByAngelGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllActiveTrailByAngelResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1TrailsGet', function() {
        it('should call yes4trackV1TrailsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsGet call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1TrailsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.GetAllPagedTrailResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1TrailsIdAngelAngelIdDelete', function() {
        it('should call yes4trackV1TrailsIdAngelAngelIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdAngelAngelIdDelete call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdAngelAngelIdDelete(id, angelId, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdAngelAngelIdPost', function() {
        it('should call yes4trackV1TrailsIdAngelAngelIdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdAngelAngelIdPost call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdAngelAngelIdPost(id, angelId, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdCompanyIdTrailtoadventurePost', function() {
        it('should call yes4trackV1TrailsIdCompanyIdTrailtoadventurePost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdCompanyIdTrailtoadventurePost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdCompanyIdTrailtoadventurePost(id, companyId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostAdventureResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1TrailsIdDelete', function() {
        it('should call yes4trackV1TrailsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdDelete call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdDelete(id, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdGeodataChunckPost', function() {
        it('should call yes4trackV1TrailsIdGeodataChunckPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdGeodataChunckPost call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdGeodataChunckPost(body, id, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdGeodataPost', function() {
        it('should call yes4trackV1TrailsIdGeodataPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdGeodataPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdGeodataPost(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostTrailGeoDataResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1TrailsIdImagesPost', function() {
        it('should call yes4trackV1TrailsIdImagesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdImagesPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdImagesPost(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Caspianyes4TrackserviceApi.PostTrailPhotosResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('yes4trackV1TrailsIdMapPhotoPut', function() {
        it('should call yes4trackV1TrailsIdMapPhotoPut successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdMapPhotoPut call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdMapPhotoPut(id, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdPatch', function() {
        it('should call yes4trackV1TrailsIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdPatch call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdPatch(body, id, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdPut', function() {
        it('should call yes4trackV1TrailsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdPut call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdPut(id, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdSponsorSponsorIdDelete', function() {
        it('should call yes4trackV1TrailsIdSponsorSponsorIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdSponsorSponsorIdDelete call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdSponsorSponsorIdDelete(id, sponsorId, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsIdSponsorSponsorIdPost', function() {
        it('should call yes4trackV1TrailsIdSponsorSponsorIdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsIdSponsorSponsorIdPost call
          /*
          var opts = {};

          instance.yes4trackV1TrailsIdSponsorSponsorIdPost(id, sponsorId, opts, function(error, data, response) {
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
      describe('yes4trackV1TrailsPost', function() {
        it('should call yes4trackV1TrailsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for yes4trackV1TrailsPost call and complete the assertions
          /*
          var opts = {};

          instance.yes4trackV1TrailsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Caspianyes4TrackserviceApi.PostTrailResponse);

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
