/**
 * Created by Mohamed on 27/07/2016.
 */
var nodeController = require('../controller');
describe("IsConnected", function(){
    it("should connected by user", function () {
        var connected = nodeController.IsConnected2();
        expect(connected).toBe(false);
    })
})
