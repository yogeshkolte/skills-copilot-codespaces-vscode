function calculateNumbers(a, b) {
    return a + b;
}
function validateLatitude(lat) {
    return lat >= -90 && lat <= 90;
}
function validateLongitude(lon) {
    return lon >= -180 && lon <= 180;
}
function validateCoordinates(lat, lon) {    
    return validateLatitude(lat) && validateLongitude(lon);
}  
function calculateDistance(lat1, lon1, lat2, lon2) {
    if (!validateCoordinates(lat1, lon1) || !validateCoordinates(lat2, lon2)) {
        return -1;
    }
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));    
    return R * c;
}
    