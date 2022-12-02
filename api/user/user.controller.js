'use strict';

const _ = require('lodash');

const Helper = require('./user.helper');
const config = require('../../config/environment');
const { sendResponse, errReturned } = require('../../config/dto');
const { SUCCESS, BADREQUEST } = require('../../config/ResponseCodes');

/**
    * Compatibility Score 
**/
exports.calculateCompatibility = async (req, res) => {
  let { team, applicants } = req['body'];
  let result = [];
  if (!team || team === undefined || team === '' || team === null || team.length < 1 || !applicants || applicants === undefined || applicants === '' || applicants === null || applicants.length < 1)
    return sendResponse(res, BADREQUEST, "Please provide Team Members and Applicants")

  let max = await Helper.calculateMaximumValue(team);

  // Calculate Score
  applicants.forEach(applicant => {
    const score = ((applicant["attributes"]["intelligence"] + applicant["attributes"]["strength"] + applicant["attributes"]["endurance"] + applicant["attributes"]["spicyFoodTolerance"]) / (max * 4)).toFixed(1);
    let newObj = {
      name: applicant["name"],
      score
    }
    result.push(newObj);
  });

  return sendResponse(res, SUCCESS, "SUCCESS", result);
}

