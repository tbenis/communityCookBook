app.factory('userFactory', ['$http', function($http){
 var factory = {};
// console.log('in user fact');
 factory.index = function(callback){
   $http.get('/user').then(function(data){
     console.log(data);
      var thedata = data.data.results;
     callback(thedata);
   });
 }
 factory.login = function(user, callback){
   $http.post('/user', user).then(function(result){
    // console.log(result.data);
    var user = result.data
    callback(user)
   })
 }

 return factory;
}])
