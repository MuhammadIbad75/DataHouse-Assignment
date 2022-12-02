/**
* We can use this helper to calculate Score and Maximum value   
*/

/**
 * Calculate Maximum Value
 */
exports.calculateMaximumValue = ( team ) => {
    return new Promise(async (resolve, reject) => {
        try {
            let max = 0;
            team.forEach(teamMember => {
                if (teamMember["attributes"]["intelligence"] >= max) max = teamMember["attributes"]["intelligence"]
                if (teamMember["attributes"]["strength"] >= max) max = teamMember["attributes"]["strength"]
                if (teamMember["attributes"]["endurance"] >= max) max = teamMember["attributes"]["endurance"]
                if (teamMember["attributes"]["spicyFoodTolerance"] >= max) max = teamMember["attributes"]["spicyFoodTolerance"]
            });
            resolve(max)
        } catch (e) { reject(e) }
    });
}
