// Code your solution here

function findMatching(namesArray, driverName) {
    let results = namesArray.filter((sName) => { 
        return sName.toLowerCase() === driverName.toLowerCase();
    })

    return results
}


function fuzzyMatch(namesArray, driverNameBegin) {
    let results = namesArray.filter((sName) => {  
        return sName.substring(0, 1) === driverNameBegin.substring(0, 1);
    })
    
    return results
}


function matchName(namesArray, driverName) {
    const returnArray = []

    namesArray.forEach(nameSet => {
        if (nameSet.name == driverName) {
            returnArray.push(nameSet)
        }  
    });

    return returnArray
}