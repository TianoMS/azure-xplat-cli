// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_13f5c562-676e-454d-bec2-af85f5e3da45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"33bde012-82ca-4a5a-8c9a-5d3728616ede\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:1bfb71b8-addf-41d3-b3f7-d62d1d416615',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-correlation-request-id': '9611404a-e38a-4747-942d-1f48ffcf7eb6',
  'x-ms-routing-request-id': 'WESTUS:20150826T003410Z:9611404a-e38a-4747-942d-1f48ffcf7eb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_13f5c562-676e-454d-bec2-af85f5e3da45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"33bde012-82ca-4a5a-8c9a-5d3728616ede\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:1bfb71b8-addf-41d3-b3f7-d62d1d416615',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-correlation-request-id': '9611404a-e38a-4747-942d-1f48ffcf7eb6',
  'x-ms-routing-request-id': 'WESTUS:20150826T003410Z:9611404a-e38a-4747-942d-1f48ffcf7eb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_13f5c562-676e-454d-bec2-af85f5e3da45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"33bde012-82ca-4a5a-8c9a-5d3728616ede\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:f28af126-a6bb-4fbb-baa1-261ba917cb3b',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': 'f4496c92-d945-4fba-aa17-fd0742179d0b',
  'x-ms-routing-request-id': 'WESTUS:20150826T003410Z:f4496c92-d945-4fba-aa17-fd0742179d0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_13f5c562-676e-454d-bec2-af85f5e3da45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"33bde012-82ca-4a5a-8c9a-5d3728616ede\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:f28af126-a6bb-4fbb-baa1-261ba917cb3b',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': 'f4496c92-d945-4fba-aa17-fd0742179d0b',
  'x-ms-routing-request-id': 'WESTUS:20150826T003410Z:f4496c92-d945-4fba-aa17-fd0742179d0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_13f5c562-676e-454d-bec2-af85f5e3da45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"33bde012-82ca-4a5a-8c9a-5d3728616ede\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:a9fd4d45-c58a-499c-a2f6-7388ed859e8e',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '54a9fd68-7526-47b9-9276-95dc4771fbcc',
  'x-ms-routing-request-id': 'WESTUS:20150826T003412Z:54a9fd68-7526-47b9-9276-95dc4771fbcc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_13f5c562-676e-454d-bec2-af85f5e3da45\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"33bde012-82ca-4a5a-8c9a-5d3728616ede\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:a9fd4d45-c58a-499c-a2f6-7388ed859e8e',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '54a9fd68-7526-47b9-9276-95dc4771fbcc',
  'x-ms-routing-request-id': 'WESTUS:20150826T003412Z:54a9fd68-7526-47b9-9276-95dc4771fbcc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionNotFound\",\"message\":\"The role definition '33bde012-82ca-4a5a-8c9a-5d3728616ede' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:095087ec-cd2c-47fb-9f9b-7918cf88c93c',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '3c7bb17d-750b-4687-9db5-777ac8c38e7d',
  'x-ms-routing-request-id': 'WESTUS:20150826T003412Z:3c7bb17d-750b-4687-9db5-777ac8c38e7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/33bde012-82ca-4a5a-8c9a-5d3728616ede?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionNotFound\",\"message\":\"The role definition '33bde012-82ca-4a5a-8c9a-5d3728616ede' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:095087ec-cd2c-47fb-9f9b-7918cf88c93c',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '3c7bb17d-750b-4687-9db5-777ac8c38e7d',
  'x-ms-routing-request-id': 'WESTUS:20150826T003412Z:3c7bb17d-750b-4687-9db5-777ac8c38e7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 26 Aug 2015 00:34:11 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['13f5c562-676e-454d-bec2-af85f5e3da45','33bde012-82ca-4a5a-8c9a-5d3728616ede'];};