var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(`API is working properly`);
});
router.post('/',(req, res) => {
    var name=req.body.name;
    var address= req.body.address;
    var city = req.body.city;
    var phoneNo = req.body.phoneNo;
    
    console.log("User name = " +name,
                "address = " + address,
                "city="+ city,
                "phoneNo=" + phoneNo);

    res.send({UserName :name,
    Address : address,
    City: city,
    PhoneNo :  phoneNo});
  });

module.exports = router;