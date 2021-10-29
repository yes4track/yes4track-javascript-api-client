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
import {ApiClient} from './ApiClient';
import {ActionType} from './model/ActionType';
import {ActiveTrailResponse} from './model/ActiveTrailResponse';
import {Address} from './model/Address';
import {AdventureResponse} from './model/AdventureResponse';
import {AdventureType} from './model/AdventureType';
import {CompanyType} from './model/CompanyType';
import {DeleteUserPushTokenRequest} from './model/DeleteUserPushTokenRequest';
import {DocumentVersion} from './model/DocumentVersion';
import {ErrorDetails} from './model/ErrorDetails';
import {GeoLocation} from './model/GeoLocation';
import {GetAllActiveTrailByAngelResponse} from './model/GetAllActiveTrailByAngelResponse';
import {GetAllAdventureLikesResponse} from './model/GetAllAdventureLikesResponse';
import {GetAllAdventureResponse} from './model/GetAllAdventureResponse';
import {GetAllAuditResponse} from './model/GetAllAuditResponse';
import {GetAllCompanyResponse} from './model/GetAllCompanyResponse';
import {GetAllExperienceResponse} from './model/GetAllExperienceResponse';
import {GetAllNotificationResponse} from './model/GetAllNotificationResponse';
import {GetAllPagedAdventureLikesResponse} from './model/GetAllPagedAdventureLikesResponse';
import {GetAllPagedAdventureResponse} from './model/GetAllPagedAdventureResponse';
import {GetAllPagedAuditResponse} from './model/GetAllPagedAuditResponse';
import {GetAllPagedCompanyResponse} from './model/GetAllPagedCompanyResponse';
import {GetAllPagedExperienceResponse} from './model/GetAllPagedExperienceResponse';
import {GetAllPagedNotificationResponse} from './model/GetAllPagedNotificationResponse';
import {GetAllPagedSponsorResponse} from './model/GetAllPagedSponsorResponse';
import {GetAllPagedTemplateResponse} from './model/GetAllPagedTemplateResponse';
import {GetAllPagedTrackResponse} from './model/GetAllPagedTrackResponse';
import {GetAllPagedTrailResponse} from './model/GetAllPagedTrailResponse';
import {GetAllPagedUserResponse} from './model/GetAllPagedUserResponse';
import {GetAllSponsorResponse} from './model/GetAllSponsorResponse';
import {GetAllTemplateResponse} from './model/GetAllTemplateResponse';
import {GetAllTrackResponse} from './model/GetAllTrackResponse';
import {GetAllTrailResponse} from './model/GetAllTrailResponse';
import {GetAllUserPushTokenResponse} from './model/GetAllUserPushTokenResponse';
import {GetAllUserResponse} from './model/GetAllUserResponse';
import {GetByIdAdventureCodeResponse} from './model/GetByIdAdventureCodeResponse';
import {GetByIdExperienceCodeResponse} from './model/GetByIdExperienceCodeResponse';
import {GetByIdTrailGeoDataResponse} from './model/GetByIdTrailGeoDataResponse';
import {GetUserLikedAdventureResponse} from './model/GetUserLikedAdventureResponse';
import {IdGeodataBody} from './model/IdGeodataBody';
import {IdGeodataBody1} from './model/IdGeodataBody1';
import {IdImagesBody} from './model/IdImagesBody';
import {IdImagesBody1} from './model/IdImagesBody1';
import {IdImagesBody2} from './model/IdImagesBody2';
import {IdVideosBody} from './model/IdVideosBody';
import {IdVideosBody1} from './model/IdVideosBody1';
import {ImageUrl} from './model/ImageUrl';
import {LevelType} from './model/LevelType';
import {MapCoordinate} from './model/MapCoordinate';
import {NotificationChannel} from './model/NotificationChannel';
import {NotificationType} from './model/NotificationType';
import {Operation} from './model/Operation';
import {OperationType} from './model/OperationType';
import {PhotosUploadBody} from './model/PhotosUploadBody';
import {PostAdventureLikesResponse} from './model/PostAdventureLikesResponse';
import {PostAdventureRequest} from './model/PostAdventureRequest';
import {PostAdventureResponse} from './model/PostAdventureResponse';
import {PostCheckAdventureCodeResponse} from './model/PostCheckAdventureCodeResponse';
import {PostCheckExperienceCodeResponse} from './model/PostCheckExperienceCodeResponse';
import {PostCompanyRequest} from './model/PostCompanyRequest';
import {PostCompanyResponse} from './model/PostCompanyResponse';
import {PostExperienceRequest} from './model/PostExperienceRequest';
import {PostExperienceResponse} from './model/PostExperienceResponse';
import {PostNotificationRequest} from './model/PostNotificationRequest';
import {PostNotificationResponse} from './model/PostNotificationResponse';
import {PostPostUserResendCodeRequest} from './model/PostPostUserResendCodeRequest';
import {PostSponsorRequest} from './model/PostSponsorRequest';
import {PostSponsorResponse} from './model/PostSponsorResponse';
import {PostTemplateRequest} from './model/PostTemplateRequest';
import {PostTemplateResponse} from './model/PostTemplateResponse';
import {PostTrackGeoDataResponse} from './model/PostTrackGeoDataResponse';
import {PostTrackRequest} from './model/PostTrackRequest';
import {PostTrackResponse} from './model/PostTrackResponse';
import {PostTrailChunckGeoDataRequest} from './model/PostTrailChunckGeoDataRequest';
import {PostTrailGeoDataResponse} from './model/PostTrailGeoDataResponse';
import {PostTrailPhotosResponse} from './model/PostTrailPhotosResponse';
import {PostTrailRequest} from './model/PostTrailRequest';
import {PostTrailResponse} from './model/PostTrailResponse';
import {PostUserAccessTokenRequest} from './model/PostUserAccessTokenRequest';
import {PostUserAccessTokenResponse} from './model/PostUserAccessTokenResponse';
import {PostUserPushTokenRequest} from './model/PostUserPushTokenRequest';
import {PostUserRequest} from './model/PostUserRequest';
import {PostUserResponse} from './model/PostUserResponse';
import {PostUserSetupAngelRequest} from './model/PostUserSetupAngelRequest';
import {PostUserSignInRequest} from './model/PostUserSignInRequest';
import {PostUserSignInResponse} from './model/PostUserSignInResponse';
import {ProfilePhotoRequest} from './model/ProfilePhotoRequest';
import {PushToken} from './model/PushToken';
import {PutAdventureRequest} from './model/PutAdventureRequest';
import {PutCompanyRequest} from './model/PutCompanyRequest';
import {PutExperienceRequest} from './model/PutExperienceRequest';
import {PutNotificationRequest} from './model/PutNotificationRequest';
import {PutSponsorRequest} from './model/PutSponsorRequest';
import {PutTemplateRequest} from './model/PutTemplateRequest';
import {PutTrackRequest} from './model/PutTrackRequest';
import {PutTrackStatisticRequest} from './model/PutTrackStatisticRequest';
import {PutTrailRequest} from './model/PutTrailRequest';
import {PutUserLocationRequest} from './model/PutUserLocationRequest';
import {PutUserRequest} from './model/PutUserRequest';
import {RegistrationType} from './model/RegistrationType';
import {SponsorContact} from './model/SponsorContact';
import {Statistic} from './model/Statistic';
import {TrackGeoLocationDto} from './model/TrackGeoLocationDto';
import {TrackSource} from './model/TrackSource';
import {TrailGeoDataRequest} from './model/TrailGeoDataRequest';
import {TrailGeoLocationDto} from './model/TrailGeoLocationDto';
import {TrailResponse} from './model/TrailResponse';
import {TrailType} from './model/TrailType';
import {User} from './model/User';
import {UserResponse} from './model/UserResponse';
import {UserTrailStatusResponse} from './model/UserTrailStatusResponse';
import {VideoUrl} from './model/VideoUrl';
import {Waypoint} from './model/Waypoint';
import {WaypointType} from './model/WaypointType';
import {AdventureApi} from './api/AdventureApi';
import {AuditApi} from './api/AuditApi';
import {CompanyApi} from './api/CompanyApi';
import {ExperienceApi} from './api/ExperienceApi';
import {GeolocationApi} from './api/GeolocationApi';
import {NotificationApi} from './api/NotificationApi';
import {SponsorApi} from './api/SponsorApi';
import {TemplateApi} from './api/TemplateApi';
import {TrackApi} from './api/TrackApi';
import {TrailApi} from './api/TrailApi';
import {UserApi} from './api/UserApi';
import {VersionApi} from './api/VersionApi';

/**
* Caspian_Yes4Track_Service_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Caspianyes4TrackserviceApi = require('index'); // See note below*.
* var xxxSvc = new Caspianyes4TrackserviceApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Caspianyes4TrackserviceApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Caspianyes4TrackserviceApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Caspianyes4TrackserviceApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ActionType model constructor.
     * @property {module:model/ActionType}
     */
    ActionType,

    /**
     * The ActiveTrailResponse model constructor.
     * @property {module:model/ActiveTrailResponse}
     */
    ActiveTrailResponse,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The AdventureResponse model constructor.
     * @property {module:model/AdventureResponse}
     */
    AdventureResponse,

    /**
     * The AdventureType model constructor.
     * @property {module:model/AdventureType}
     */
    AdventureType,

    /**
     * The CompanyType model constructor.
     * @property {module:model/CompanyType}
     */
    CompanyType,

    /**
     * The DeleteUserPushTokenRequest model constructor.
     * @property {module:model/DeleteUserPushTokenRequest}
     */
    DeleteUserPushTokenRequest,

    /**
     * The DocumentVersion model constructor.
     * @property {module:model/DocumentVersion}
     */
    DocumentVersion,

    /**
     * The ErrorDetails model constructor.
     * @property {module:model/ErrorDetails}
     */
    ErrorDetails,

    /**
     * The GeoLocation model constructor.
     * @property {module:model/GeoLocation}
     */
    GeoLocation,

    /**
     * The GetAllActiveTrailByAngelResponse model constructor.
     * @property {module:model/GetAllActiveTrailByAngelResponse}
     */
    GetAllActiveTrailByAngelResponse,

    /**
     * The GetAllAdventureLikesResponse model constructor.
     * @property {module:model/GetAllAdventureLikesResponse}
     */
    GetAllAdventureLikesResponse,

    /**
     * The GetAllAdventureResponse model constructor.
     * @property {module:model/GetAllAdventureResponse}
     */
    GetAllAdventureResponse,

    /**
     * The GetAllAuditResponse model constructor.
     * @property {module:model/GetAllAuditResponse}
     */
    GetAllAuditResponse,

    /**
     * The GetAllCompanyResponse model constructor.
     * @property {module:model/GetAllCompanyResponse}
     */
    GetAllCompanyResponse,

    /**
     * The GetAllExperienceResponse model constructor.
     * @property {module:model/GetAllExperienceResponse}
     */
    GetAllExperienceResponse,

    /**
     * The GetAllNotificationResponse model constructor.
     * @property {module:model/GetAllNotificationResponse}
     */
    GetAllNotificationResponse,

    /**
     * The GetAllPagedAdventureLikesResponse model constructor.
     * @property {module:model/GetAllPagedAdventureLikesResponse}
     */
    GetAllPagedAdventureLikesResponse,

    /**
     * The GetAllPagedAdventureResponse model constructor.
     * @property {module:model/GetAllPagedAdventureResponse}
     */
    GetAllPagedAdventureResponse,

    /**
     * The GetAllPagedAuditResponse model constructor.
     * @property {module:model/GetAllPagedAuditResponse}
     */
    GetAllPagedAuditResponse,

    /**
     * The GetAllPagedCompanyResponse model constructor.
     * @property {module:model/GetAllPagedCompanyResponse}
     */
    GetAllPagedCompanyResponse,

    /**
     * The GetAllPagedExperienceResponse model constructor.
     * @property {module:model/GetAllPagedExperienceResponse}
     */
    GetAllPagedExperienceResponse,

    /**
     * The GetAllPagedNotificationResponse model constructor.
     * @property {module:model/GetAllPagedNotificationResponse}
     */
    GetAllPagedNotificationResponse,

    /**
     * The GetAllPagedSponsorResponse model constructor.
     * @property {module:model/GetAllPagedSponsorResponse}
     */
    GetAllPagedSponsorResponse,

    /**
     * The GetAllPagedTemplateResponse model constructor.
     * @property {module:model/GetAllPagedTemplateResponse}
     */
    GetAllPagedTemplateResponse,

    /**
     * The GetAllPagedTrackResponse model constructor.
     * @property {module:model/GetAllPagedTrackResponse}
     */
    GetAllPagedTrackResponse,

    /**
     * The GetAllPagedTrailResponse model constructor.
     * @property {module:model/GetAllPagedTrailResponse}
     */
    GetAllPagedTrailResponse,

    /**
     * The GetAllPagedUserResponse model constructor.
     * @property {module:model/GetAllPagedUserResponse}
     */
    GetAllPagedUserResponse,

    /**
     * The GetAllSponsorResponse model constructor.
     * @property {module:model/GetAllSponsorResponse}
     */
    GetAllSponsorResponse,

    /**
     * The GetAllTemplateResponse model constructor.
     * @property {module:model/GetAllTemplateResponse}
     */
    GetAllTemplateResponse,

    /**
     * The GetAllTrackResponse model constructor.
     * @property {module:model/GetAllTrackResponse}
     */
    GetAllTrackResponse,

    /**
     * The GetAllTrailResponse model constructor.
     * @property {module:model/GetAllTrailResponse}
     */
    GetAllTrailResponse,

    /**
     * The GetAllUserPushTokenResponse model constructor.
     * @property {module:model/GetAllUserPushTokenResponse}
     */
    GetAllUserPushTokenResponse,

    /**
     * The GetAllUserResponse model constructor.
     * @property {module:model/GetAllUserResponse}
     */
    GetAllUserResponse,

    /**
     * The GetByIdAdventureCodeResponse model constructor.
     * @property {module:model/GetByIdAdventureCodeResponse}
     */
    GetByIdAdventureCodeResponse,

    /**
     * The GetByIdExperienceCodeResponse model constructor.
     * @property {module:model/GetByIdExperienceCodeResponse}
     */
    GetByIdExperienceCodeResponse,

    /**
     * The GetByIdTrailGeoDataResponse model constructor.
     * @property {module:model/GetByIdTrailGeoDataResponse}
     */
    GetByIdTrailGeoDataResponse,

    /**
     * The GetUserLikedAdventureResponse model constructor.
     * @property {module:model/GetUserLikedAdventureResponse}
     */
    GetUserLikedAdventureResponse,

    /**
     * The IdGeodataBody model constructor.
     * @property {module:model/IdGeodataBody}
     */
    IdGeodataBody,

    /**
     * The IdGeodataBody1 model constructor.
     * @property {module:model/IdGeodataBody1}
     */
    IdGeodataBody1,

    /**
     * The IdImagesBody model constructor.
     * @property {module:model/IdImagesBody}
     */
    IdImagesBody,

    /**
     * The IdImagesBody1 model constructor.
     * @property {module:model/IdImagesBody1}
     */
    IdImagesBody1,

    /**
     * The IdImagesBody2 model constructor.
     * @property {module:model/IdImagesBody2}
     */
    IdImagesBody2,

    /**
     * The IdVideosBody model constructor.
     * @property {module:model/IdVideosBody}
     */
    IdVideosBody,

    /**
     * The IdVideosBody1 model constructor.
     * @property {module:model/IdVideosBody1}
     */
    IdVideosBody1,

    /**
     * The ImageUrl model constructor.
     * @property {module:model/ImageUrl}
     */
    ImageUrl,

    /**
     * The LevelType model constructor.
     * @property {module:model/LevelType}
     */
    LevelType,

    /**
     * The MapCoordinate model constructor.
     * @property {module:model/MapCoordinate}
     */
    MapCoordinate,

    /**
     * The NotificationChannel model constructor.
     * @property {module:model/NotificationChannel}
     */
    NotificationChannel,

    /**
     * The NotificationType model constructor.
     * @property {module:model/NotificationType}
     */
    NotificationType,

    /**
     * The Operation model constructor.
     * @property {module:model/Operation}
     */
    Operation,

    /**
     * The OperationType model constructor.
     * @property {module:model/OperationType}
     */
    OperationType,

    /**
     * The PhotosUploadBody model constructor.
     * @property {module:model/PhotosUploadBody}
     */
    PhotosUploadBody,

    /**
     * The PostAdventureLikesResponse model constructor.
     * @property {module:model/PostAdventureLikesResponse}
     */
    PostAdventureLikesResponse,

    /**
     * The PostAdventureRequest model constructor.
     * @property {module:model/PostAdventureRequest}
     */
    PostAdventureRequest,

    /**
     * The PostAdventureResponse model constructor.
     * @property {module:model/PostAdventureResponse}
     */
    PostAdventureResponse,

    /**
     * The PostCheckAdventureCodeResponse model constructor.
     * @property {module:model/PostCheckAdventureCodeResponse}
     */
    PostCheckAdventureCodeResponse,

    /**
     * The PostCheckExperienceCodeResponse model constructor.
     * @property {module:model/PostCheckExperienceCodeResponse}
     */
    PostCheckExperienceCodeResponse,

    /**
     * The PostCompanyRequest model constructor.
     * @property {module:model/PostCompanyRequest}
     */
    PostCompanyRequest,

    /**
     * The PostCompanyResponse model constructor.
     * @property {module:model/PostCompanyResponse}
     */
    PostCompanyResponse,

    /**
     * The PostExperienceRequest model constructor.
     * @property {module:model/PostExperienceRequest}
     */
    PostExperienceRequest,

    /**
     * The PostExperienceResponse model constructor.
     * @property {module:model/PostExperienceResponse}
     */
    PostExperienceResponse,

    /**
     * The PostNotificationRequest model constructor.
     * @property {module:model/PostNotificationRequest}
     */
    PostNotificationRequest,

    /**
     * The PostNotificationResponse model constructor.
     * @property {module:model/PostNotificationResponse}
     */
    PostNotificationResponse,

    /**
     * The PostPostUserResendCodeRequest model constructor.
     * @property {module:model/PostPostUserResendCodeRequest}
     */
    PostPostUserResendCodeRequest,

    /**
     * The PostSponsorRequest model constructor.
     * @property {module:model/PostSponsorRequest}
     */
    PostSponsorRequest,

    /**
     * The PostSponsorResponse model constructor.
     * @property {module:model/PostSponsorResponse}
     */
    PostSponsorResponse,

    /**
     * The PostTemplateRequest model constructor.
     * @property {module:model/PostTemplateRequest}
     */
    PostTemplateRequest,

    /**
     * The PostTemplateResponse model constructor.
     * @property {module:model/PostTemplateResponse}
     */
    PostTemplateResponse,

    /**
     * The PostTrackGeoDataResponse model constructor.
     * @property {module:model/PostTrackGeoDataResponse}
     */
    PostTrackGeoDataResponse,

    /**
     * The PostTrackRequest model constructor.
     * @property {module:model/PostTrackRequest}
     */
    PostTrackRequest,

    /**
     * The PostTrackResponse model constructor.
     * @property {module:model/PostTrackResponse}
     */
    PostTrackResponse,

    /**
     * The PostTrailChunckGeoDataRequest model constructor.
     * @property {module:model/PostTrailChunckGeoDataRequest}
     */
    PostTrailChunckGeoDataRequest,

    /**
     * The PostTrailGeoDataResponse model constructor.
     * @property {module:model/PostTrailGeoDataResponse}
     */
    PostTrailGeoDataResponse,

    /**
     * The PostTrailPhotosResponse model constructor.
     * @property {module:model/PostTrailPhotosResponse}
     */
    PostTrailPhotosResponse,

    /**
     * The PostTrailRequest model constructor.
     * @property {module:model/PostTrailRequest}
     */
    PostTrailRequest,

    /**
     * The PostTrailResponse model constructor.
     * @property {module:model/PostTrailResponse}
     */
    PostTrailResponse,

    /**
     * The PostUserAccessTokenRequest model constructor.
     * @property {module:model/PostUserAccessTokenRequest}
     */
    PostUserAccessTokenRequest,

    /**
     * The PostUserAccessTokenResponse model constructor.
     * @property {module:model/PostUserAccessTokenResponse}
     */
    PostUserAccessTokenResponse,

    /**
     * The PostUserPushTokenRequest model constructor.
     * @property {module:model/PostUserPushTokenRequest}
     */
    PostUserPushTokenRequest,

    /**
     * The PostUserRequest model constructor.
     * @property {module:model/PostUserRequest}
     */
    PostUserRequest,

    /**
     * The PostUserResponse model constructor.
     * @property {module:model/PostUserResponse}
     */
    PostUserResponse,

    /**
     * The PostUserSetupAngelRequest model constructor.
     * @property {module:model/PostUserSetupAngelRequest}
     */
    PostUserSetupAngelRequest,

    /**
     * The PostUserSignInRequest model constructor.
     * @property {module:model/PostUserSignInRequest}
     */
    PostUserSignInRequest,

    /**
     * The PostUserSignInResponse model constructor.
     * @property {module:model/PostUserSignInResponse}
     */
    PostUserSignInResponse,

    /**
     * The ProfilePhotoRequest model constructor.
     * @property {module:model/ProfilePhotoRequest}
     */
    ProfilePhotoRequest,

    /**
     * The PushToken model constructor.
     * @property {module:model/PushToken}
     */
    PushToken,

    /**
     * The PutAdventureRequest model constructor.
     * @property {module:model/PutAdventureRequest}
     */
    PutAdventureRequest,

    /**
     * The PutCompanyRequest model constructor.
     * @property {module:model/PutCompanyRequest}
     */
    PutCompanyRequest,

    /**
     * The PutExperienceRequest model constructor.
     * @property {module:model/PutExperienceRequest}
     */
    PutExperienceRequest,

    /**
     * The PutNotificationRequest model constructor.
     * @property {module:model/PutNotificationRequest}
     */
    PutNotificationRequest,

    /**
     * The PutSponsorRequest model constructor.
     * @property {module:model/PutSponsorRequest}
     */
    PutSponsorRequest,

    /**
     * The PutTemplateRequest model constructor.
     * @property {module:model/PutTemplateRequest}
     */
    PutTemplateRequest,

    /**
     * The PutTrackRequest model constructor.
     * @property {module:model/PutTrackRequest}
     */
    PutTrackRequest,

    /**
     * The PutTrackStatisticRequest model constructor.
     * @property {module:model/PutTrackStatisticRequest}
     */
    PutTrackStatisticRequest,

    /**
     * The PutTrailRequest model constructor.
     * @property {module:model/PutTrailRequest}
     */
    PutTrailRequest,

    /**
     * The PutUserLocationRequest model constructor.
     * @property {module:model/PutUserLocationRequest}
     */
    PutUserLocationRequest,

    /**
     * The PutUserRequest model constructor.
     * @property {module:model/PutUserRequest}
     */
    PutUserRequest,

    /**
     * The RegistrationType model constructor.
     * @property {module:model/RegistrationType}
     */
    RegistrationType,

    /**
     * The SponsorContact model constructor.
     * @property {module:model/SponsorContact}
     */
    SponsorContact,

    /**
     * The Statistic model constructor.
     * @property {module:model/Statistic}
     */
    Statistic,

    /**
     * The TrackGeoLocationDto model constructor.
     * @property {module:model/TrackGeoLocationDto}
     */
    TrackGeoLocationDto,

    /**
     * The TrackSource model constructor.
     * @property {module:model/TrackSource}
     */
    TrackSource,

    /**
     * The TrailGeoDataRequest model constructor.
     * @property {module:model/TrailGeoDataRequest}
     */
    TrailGeoDataRequest,

    /**
     * The TrailGeoLocationDto model constructor.
     * @property {module:model/TrailGeoLocationDto}
     */
    TrailGeoLocationDto,

    /**
     * The TrailResponse model constructor.
     * @property {module:model/TrailResponse}
     */
    TrailResponse,

    /**
     * The TrailType model constructor.
     * @property {module:model/TrailType}
     */
    TrailType,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse,

    /**
     * The UserTrailStatusResponse model constructor.
     * @property {module:model/UserTrailStatusResponse}
     */
    UserTrailStatusResponse,

    /**
     * The VideoUrl model constructor.
     * @property {module:model/VideoUrl}
     */
    VideoUrl,

    /**
     * The Waypoint model constructor.
     * @property {module:model/Waypoint}
     */
    Waypoint,

    /**
     * The WaypointType model constructor.
     * @property {module:model/WaypointType}
     */
    WaypointType,

    /**
    * The AdventureApi service constructor.
    * @property {module:api/AdventureApi}
    */
    AdventureApi,

    /**
    * The AuditApi service constructor.
    * @property {module:api/AuditApi}
    */
    AuditApi,

    /**
    * The CompanyApi service constructor.
    * @property {module:api/CompanyApi}
    */
    CompanyApi,

    /**
    * The ExperienceApi service constructor.
    * @property {module:api/ExperienceApi}
    */
    ExperienceApi,

    /**
    * The GeolocationApi service constructor.
    * @property {module:api/GeolocationApi}
    */
    GeolocationApi,

    /**
    * The NotificationApi service constructor.
    * @property {module:api/NotificationApi}
    */
    NotificationApi,

    /**
    * The SponsorApi service constructor.
    * @property {module:api/SponsorApi}
    */
    SponsorApi,

    /**
    * The TemplateApi service constructor.
    * @property {module:api/TemplateApi}
    */
    TemplateApi,

    /**
    * The TrackApi service constructor.
    * @property {module:api/TrackApi}
    */
    TrackApi,

    /**
    * The TrailApi service constructor.
    * @property {module:api/TrailApi}
    */
    TrailApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VersionApi service constructor.
    * @property {module:api/VersionApi}
    */
    VersionApi
};
