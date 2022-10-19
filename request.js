var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true)

request.send();

request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)
    for ( i=0; i<data.length;i++){
        console.log(data[i].flags)        //// FLAGS
        console.log(data[i].name.common)  /// NAME
        console.log(data[i].region)       ///REGION
        console.log(data[i].subregion)    /// SUBREGION
        console.log(data[i].population)   ///POPULATION
    }
} 