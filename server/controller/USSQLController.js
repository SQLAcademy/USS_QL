const { query, json } = require("express");

const USSQLController = {};

USSQLController.checkSelectSyntax = (req, res, next) => {
  //Check the queryString and confirm it is the right syntax
  //Sample syntax 'SELECT contents FROM intel WHERE latitude = 'A' AND longitude = 2
    const query = req.body.queryString;

    const responseObj = {};

    const latitudeInput = query.slice(45, 46);
    const longitudeInput = query.slice(64, 65);
    responseObj.coordinates = latitudeInput.concat(longitudeInput);

    if (query === `SELECT contents FROM intel WHERE latitude = '${latitudeInput}' AND longitude = ${longitudeInput}`){
      responseObj.goodSyntax = true;
    } else {
      responseObj.goodSyntax = false;
    }
    res.locals.responseObj = responseObj;
    return next();
};

USSQLController.checkUpdateSyntax = (req, res, next) => {
  //Check the queryString and confirm it is the right syntax
  //Sample syntax 'UPDATE intel SET contents = 'missile' WHERE latitude = 'A' AND longitude = 2
    const query = req.body.queryString;

    const responseObj = {};
    
    const latitudeInput = query.slice(56, 57);
    const longitudeInput = query.slice(75, 76);
    responseObj.coordinates = latitudeInput.concat(longitudeInput);

    if (query === `UPDATE intel SET contents = 'missile' WHERE latitude = '${latitudeInput}' AND longitude = ${longitudeInput}`){
      responseObj.goodSyntax = true;
    } else {
      responseObj.goodSyntax = false;
    }
    res.locals.responseObj = responseObj;
    return next();
};

module.exports = USSQLController;