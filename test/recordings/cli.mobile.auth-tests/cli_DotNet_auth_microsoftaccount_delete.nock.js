// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet1969/authsettings')
  .reply(200, "[{\"packageSid\":\"123456789\",\"provider\":\"microsoft\",\"appId\":\"1234\",\"secret\":\"5678\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '82',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '1f26c3483ea5961e8c11cb7d464d89d3',
  date: 'Mon, 13 Apr 2015 23:09:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet1969/authsettings', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  server: '1.0.6198.216 (rd_rdfe_stable.150408-1309) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'c435262dfeed9d7d9e566930c21eb58e',
  date: 'Mon, 13 Apr 2015 23:09:47 GMT' });
 return result; }]];