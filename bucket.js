const ObsClient = require('esdk-obs-nodejs')
var obsClient = new ObsClient({
    access_key_id: 'C0BD0C1A93A3F91C2435', // Configure the AK.
    secret_access_key: '2ccKdiYORlMDBPuy3Osy4kgTDLMAAAF2k6P5HOMn', // Configure the SK.
    server: 'https://203.112.133.134', // Configure the endpoint.
    max_retry_count: 1,
    timeout: 20,
    ssl_verify: false,
    is_cname:false,
    long_conn_param: 0
});
 getObjectResult = obsClient.createSignedUrlSync({Method : 'GET', Bucket : 'penzyl', Key : '5feafe2629d14300067747a9-5fbf4d9cbe7ffc00120c5a1e.pdf'});
 console.log("🚀 ~ file: bucket.js ~ line 12 ~ getObjectResult", getObjectResult)

obsClient.getObjectMetadata({
    Bucket: 'penzyl',
    Key:'5feafe2629d14300067747a9-5fbf4d9cbe7ffc00120c5a1e.pdf'
    // owner: { ID: '0000017693A3F91C8107E0758546A461' },
    // Grants: [
    //     {
    //         Grantee: { Type: 'Group', URI: obsClient.enums.GroupLogDelivery }, Permission:
    //             obsClient.enums.AclPublicReadDelivered
    //     }
    // ]
}, (err, result) => {
    if (err) {
        console.error('Error-->' + err);
    } else {
        console.log("🚀 ~ file: bucket.js ~ line 18 ~ result", result)
        if (result.CommonMsg.Status < 300) {
            console.log( result.InterfaceResult.Grants);
            console.log('Policy-->' + result.InterfaceResult.Policy);
        } else {
            console.log('Code-->' + result.CommonMsg.Code);
            console.log('Message-->' + result.CommonMsg.Message);
        }
    }
});