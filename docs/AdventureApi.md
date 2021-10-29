# Caspianyes4TrackserviceApi.AdventureApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdAdventure**](AdventureApi.md#getByIdAdventure) | **GET** /yes4track/v1/adventures/{id} | Get Adventure by id
[**getByIdAdventureCode**](AdventureApi.md#getByIdAdventureCode) | **GET** /yes4track/v1/adventures/{id}/code | Get Adventure Code by id
[**getByIdAdventureLikes**](AdventureApi.md#getByIdAdventureLikes) | **GET** /yes4track/v1/adventures/{id}/likes/{likeId} | Get Adventure Like by id
[**getUserLikedAdventure**](AdventureApi.md#getUserLikedAdventure) | **GET** /yes4track/v1/adventures/{id}/likes/userLiked | Get User Liked Adventure
[**yes4trackV1AdventuresGet**](AdventureApi.md#yes4trackV1AdventuresGet) | **GET** /yes4track/v1/adventures | Get All Adventure by filter with pagination
[**yes4trackV1AdventuresIdActivatePost**](AdventureApi.md#yes4trackV1AdventuresIdActivatePost) | **POST** /yes4track/v1/adventures/{id}/activate | Activate Adventure
[**yes4trackV1AdventuresIdCodeCodeCheckPost**](AdventureApi.md#yes4trackV1AdventuresIdCodeCodeCheckPost) | **POST** /yes4track/v1/adventures/{id}/code/{code}/check | Check Adventure Code
[**yes4trackV1AdventuresIdDelete**](AdventureApi.md#yes4trackV1AdventuresIdDelete) | **DELETE** /yes4track/v1/adventures/{id} | Delete Adventure by Id
[**yes4trackV1AdventuresIdExperiencesExperienceIdDelete**](AdventureApi.md#yes4trackV1AdventuresIdExperiencesExperienceIdDelete) | **DELETE** /yes4track/v1/adventures/{id}/experiences/{experienceId} | Delete Adventure Experience
[**yes4trackV1AdventuresIdExperiencesExperienceIdPost**](AdventureApi.md#yes4trackV1AdventuresIdExperiencesExperienceIdPost) | **POST** /yes4track/v1/adventures/{id}/experiences/{experienceId} | Add Adventure Experience
[**yes4trackV1AdventuresIdImagesImageIdDelete**](AdventureApi.md#yes4trackV1AdventuresIdImagesImageIdDelete) | **DELETE** /yes4track/v1/adventures/{id}/images/{imageId} | Delete Adventure by Id
[**yes4trackV1AdventuresIdImagesPost**](AdventureApi.md#yes4trackV1AdventuresIdImagesPost) | **POST** /yes4track/v1/adventures/{id}/images | Add images in adventure
[**yes4trackV1AdventuresIdLikesDelete**](AdventureApi.md#yes4trackV1AdventuresIdLikesDelete) | **DELETE** /yes4track/v1/adventures/{id}/likes | Delete Adventure Likes by Id
[**yes4trackV1AdventuresIdLikesGet**](AdventureApi.md#yes4trackV1AdventuresIdLikesGet) | **GET** /yes4track/v1/adventures/{id}/likes | Get All Adventure Likes by filter with pagination
[**yes4trackV1AdventuresIdLikesPost**](AdventureApi.md#yes4trackV1AdventuresIdLikesPost) | **POST** /yes4track/v1/adventures/{id}/likes | Create Adventure Likes
[**yes4trackV1AdventuresIdPatch**](AdventureApi.md#yes4trackV1AdventuresIdPatch) | **PATCH** /yes4track/v1/adventures/{id} | Update part of Adventure
[**yes4trackV1AdventuresIdPut**](AdventureApi.md#yes4trackV1AdventuresIdPut) | **PUT** /yes4track/v1/adventures/{id} | Update Adventure
[**yes4trackV1AdventuresIdVideosPost**](AdventureApi.md#yes4trackV1AdventuresIdVideosPost) | **POST** /yes4track/v1/adventures/{id}/videos | Add videos in adventure
[**yes4trackV1AdventuresIdVideosVideoIdDelete**](AdventureApi.md#yes4trackV1AdventuresIdVideosVideoIdDelete) | **DELETE** /yes4track/v1/adventures/{id}/videos/{videoId} | Delete Adventure by Id
[**yes4trackV1AdventuresPost**](AdventureApi.md#yes4trackV1AdventuresPost) | **POST** /yes4track/v1/adventures | Create Adventure

<a name="getByIdAdventure"></a>
# **getByIdAdventure**
> GetAllAdventureResponse getByIdAdventure(id, opts)

Get Adventure by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8de659dd-7f43-4dbb-8bc5-602a4c385d26" // String | CSRF Protection
};
apiInstance.getByIdAdventure(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8de659dd-7f43-4dbb-8bc5-602a4c385d26]

### Return type

[**GetAllAdventureResponse**](GetAllAdventureResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdAdventureCode"></a>
# **getByIdAdventureCode**
> GetByIdAdventureCodeResponse getByIdAdventureCode(id, opts)

Get Adventure Code by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "50ba16f5-c0c2-4270-9516-dc48cade9f72" // String | CSRF Protection
};
apiInstance.getByIdAdventureCode(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 50ba16f5-c0c2-4270-9516-dc48cade9f72]

### Return type

[**GetByIdAdventureCodeResponse**](GetByIdAdventureCodeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdAdventureLikes"></a>
# **getByIdAdventureLikes**
> GetAllAdventureLikesResponse getByIdAdventureLikes(id, likeId, opts)

Get Adventure Like by id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let likeId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Like Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a007d9d1-8bd9-4112-9d0b-8c4dccee0eef" // String | CSRF Protection
};
apiInstance.getByIdAdventureLikes(id, likeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **likeId** | [**String**](.md)| Adventure Like Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a007d9d1-8bd9-4112-9d0b-8c4dccee0eef]

### Return type

[**GetAllAdventureLikesResponse**](GetAllAdventureLikesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserLikedAdventure"></a>
# **getUserLikedAdventure**
> GetUserLikedAdventureResponse getUserLikedAdventure(id, opts)

Get User Liked Adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "dcd82667-cef9-4a67-be8c-e9697f8064b5" // String | CSRF Protection
};
apiInstance.getUserLikedAdventure(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to dcd82667-cef9-4a67-be8c-e9697f8064b5]

### Return type

[**GetUserLikedAdventureResponse**](GetUserLikedAdventureResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresGet"></a>
# **yes4trackV1AdventuresGet**
> GetAllPagedAdventureResponse yes4trackV1AdventuresGet(opts)

Get All Adventure by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let opts = { 
  'companyId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'level': new Caspianyes4TrackserviceApi.LevelType(), // LevelType | 
  'codeRequired': true, // Boolean | 
  'isActive': true, // Boolean | 
  'type': new Caspianyes4TrackserviceApi.AdventureType(), // AdventureType | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "293f108b-43b9-4c90-a16c-8cc187ee80b8" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**String**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **level** | [**LevelType**](.md)|  | [optional] 
 **codeRequired** | **Boolean**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **type** | [**AdventureType**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 293f108b-43b9-4c90-a16c-8cc187ee80b8]

### Return type

[**GetAllPagedAdventureResponse**](GetAllPagedAdventureResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdActivatePost"></a>
# **yes4trackV1AdventuresIdActivatePost**
> yes4trackV1AdventuresIdActivatePost(id, opts)

Activate Adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1c3ad5f3-987f-40e2-b93c-60e0eba341ea" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdActivatePost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1c3ad5f3-987f-40e2-b93c-60e0eba341ea]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdCodeCodeCheckPost"></a>
# **yes4trackV1AdventuresIdCodeCodeCheckPost**
> PostCheckAdventureCodeResponse yes4trackV1AdventuresIdCodeCodeCheckPost(id, code, opts)

Check Adventure Code

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let code = "code_example"; // String | Adventure Code
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d5098b54-b1db-4c8e-86e0-867481010aa5" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdCodeCodeCheckPost(id, code, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **code** | **String**| Adventure Code | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d5098b54-b1db-4c8e-86e0-867481010aa5]

### Return type

[**PostCheckAdventureCodeResponse**](PostCheckAdventureCodeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdDelete"></a>
# **yes4trackV1AdventuresIdDelete**
> yes4trackV1AdventuresIdDelete(id, opts)

Delete Adventure by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ca017de8-5bd2-4ca2-8504-a4fdd6ee610b" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ca017de8-5bd2-4ca2-8504-a4fdd6ee610b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdExperiencesExperienceIdDelete"></a>
# **yes4trackV1AdventuresIdExperiencesExperienceIdDelete**
> yes4trackV1AdventuresIdExperiencesExperienceIdDelete(id, experienceId, opts)

Delete Adventure Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id Adventure
let experienceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id Experience
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "76675660-9b97-44d1-a068-1f1a8e311694" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdExperiencesExperienceIdDelete(id, experienceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Id Adventure | 
 **experienceId** | [**String**](.md)| Id Experience | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 76675660-9b97-44d1-a068-1f1a8e311694]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdExperiencesExperienceIdPost"></a>
# **yes4trackV1AdventuresIdExperiencesExperienceIdPost**
> yes4trackV1AdventuresIdExperiencesExperienceIdPost(id, experienceId, opts)

Add Adventure Experience

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id Adventure
let experienceId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Id Experience
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "20318c52-b432-49e5-ae0b-a024d942d7e3" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdExperiencesExperienceIdPost(id, experienceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Id Adventure | 
 **experienceId** | [**String**](.md)| Id Experience | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 20318c52-b432-49e5-ae0b-a024d942d7e3]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdImagesImageIdDelete"></a>
# **yes4trackV1AdventuresIdImagesImageIdDelete**
> yes4trackV1AdventuresIdImagesImageIdDelete(id, imageId, opts)

Delete Adventure by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let imageId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Image id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "06949f43-d611-433a-8e3b-bab2445de6d0" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdImagesImageIdDelete(id, imageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **imageId** | [**String**](.md)| Adventure Image id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 06949f43-d611-433a-8e3b-bab2445de6d0]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdImagesPost"></a>
# **yes4trackV1AdventuresIdImagesPost**
> [&#x27;String&#x27;] yes4trackV1AdventuresIdImagesPost(id, opts)

Add images in adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'images': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3a134929-a442-46ee-ab0a-eae4a159e32a" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdImagesPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **images** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3a134929-a442-46ee-ab0a-eae4a159e32a]

### Return type

**[&#x27;String&#x27;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1AdventuresIdLikesDelete"></a>
# **yes4trackV1AdventuresIdLikesDelete**
> yes4trackV1AdventuresIdLikesDelete(id, opts)

Delete Adventure Likes by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ccc93434-f280-4c01-ac72-e50b246efa54" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdLikesDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ccc93434-f280-4c01-ac72-e50b246efa54]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdLikesGet"></a>
# **yes4trackV1AdventuresIdLikesGet**
> GetAllPagedAdventureLikesResponse yes4trackV1AdventuresIdLikesGet(id, opts)

Get All Adventure Likes by filter with pagination

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3e36b6c7-4077-4f71-8faf-3638cb6837ae" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdLikesGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3e36b6c7-4077-4f71-8faf-3638cb6837ae]

### Return type

[**GetAllPagedAdventureLikesResponse**](GetAllPagedAdventureLikesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdLikesPost"></a>
# **yes4trackV1AdventuresIdLikesPost**
> PostAdventureLikesResponse yes4trackV1AdventuresIdLikesPost(id, opts)

Create Adventure Likes

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "6e413a38-acf0-48f8-8bb9-681a79928ba3" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdLikesPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 6e413a38-acf0-48f8-8bb9-681a79928ba3]

### Return type

[**PostAdventureLikesResponse**](PostAdventureLikesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdPatch"></a>
# **yes4trackV1AdventuresIdPatch**
> yes4trackV1AdventuresIdPatch(body, id, opts)

Update part of Adventure

Sample request:                    PATCH /yes4track/v1/adventures/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let body = [new Caspianyes4TrackserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "cebce131-875d-407a-9f0e-cb6b7c3cfbae" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdPatch(body, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Operation]**](Operation.md)| Atributes values | 
 **id** | [**String**](.md)| Adventure id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to cebce131-875d-407a-9f0e-cb6b7c3cfbae]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdPut"></a>
# **yes4trackV1AdventuresIdPut**
> yes4trackV1AdventuresIdPut(id, opts)

Update Adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PutAdventureRequest(), // PutAdventureRequest | Adventure to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2e236817-578f-4c32-9f50-8e39db208aff" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **body** | [**PutAdventureRequest**](PutAdventureRequest.md)| Adventure to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2e236817-578f-4c32-9f50-8e39db208aff]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="yes4trackV1AdventuresIdVideosPost"></a>
# **yes4trackV1AdventuresIdVideosPost**
> [&#x27;String&#x27;] yes4trackV1AdventuresIdVideosPost(id, opts)

Add videos in adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Id
let opts = { 
  'videos': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "21022c7c-9dc3-4c4b-909c-fc82e41b8116" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdVideosPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure Id | 
 **videos** | [**[Blob]**](Blob.md)|  | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 21022c7c-9dc3-4c4b-909c-fc82e41b8116]

### Return type

**[&#x27;String&#x27;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

<a name="yes4trackV1AdventuresIdVideosVideoIdDelete"></a>
# **yes4trackV1AdventuresIdVideosVideoIdDelete**
> yes4trackV1AdventuresIdVideosVideoIdDelete(id, videoId, opts)

Delete Adventure by Id

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure id
let videoId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Adventure Video id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2029c840-b05d-4e8c-8fee-b746f606148c" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresIdVideosVideoIdDelete(id, videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Adventure id | 
 **videoId** | [**String**](.md)| Adventure Video id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2029c840-b05d-4e8c-8fee-b746f606148c]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="yes4trackV1AdventuresPost"></a>
# **yes4trackV1AdventuresPost**
> PostAdventureResponse yes4trackV1AdventuresPost(opts)

Create Adventure

### Example
```javascript
import {Caspianyes4TrackserviceApi} from 'caspianyes4_trackservice_api';
let defaultClient = Caspianyes4TrackserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Caspianyes4TrackserviceApi.AdventureApi();
let opts = { 
  'body': new Caspianyes4TrackserviceApi.PostAdventureRequest(), // PostAdventureRequest | Adventure to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "fd14ba87-99a2-4c9e-a7b8-34b0784e8350" // String | CSRF Protection
};
apiInstance.yes4trackV1AdventuresPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostAdventureRequest**](PostAdventureRequest.md)| Adventure to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to fd14ba87-99a2-4c9e-a7b8-34b0784e8350]

### Return type

[**PostAdventureResponse**](PostAdventureResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

