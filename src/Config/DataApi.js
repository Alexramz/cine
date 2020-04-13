class DataApi {
    /*constructor() {
        
      }*/
      
    constructor(rawData) {
      this.rawData = rawData;
    }
    mapIntoObject(arr) {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    }
    setImagenes(rawData) {
        this.rawData = rawData;
    }
    getImagenes() {
      return this.mapIntoObject(this.rawData);
    }
    
  }
  
  export default DataApi;
  