
var Tenant=require('./tenantRoute.js');
var Landlord=require('./landlordRoute.js');
var Information=require('./HinfoRoute.js');
function route(req,res){
  var reg=/^\/(\w+)\/(\w+)/;
  var result=req.url.match(reg);
  switch(result[1]){
    case "tenant":
      Tenant[result[2]](req,res);
      break;
    case "landlord":
      Landlord[result[2]](req,res);
      break;
    case 'information':
      Information[result[2]](req,res);
      break;
    default:break;
  }
}
module.exports=route;