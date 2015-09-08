// 'use strict';
// 
// create a module that exposes 2 functions
module.exports = function() {

  var secret = {};
  return {
    setValue : function (key, value){ //accepts two arguments key and value
      secret[key] = value; //value in vault identified by it's key
    },

    getValue : function (key){
      if (secret.hasOwnProperty(key)){ //determines whether an object has a property with the specified name, takes a string argument
        return secret[key];
      }else{
        return null;
      }
    }
  };
};


