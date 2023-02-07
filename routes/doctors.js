const router = require("express").Router();
const Doctor = require("../models/doctor");

// Save Materials

router.post('/save',(req,res) => {

    const docId = req.body.docId;
    const docName = req.body.docName;
    const docInfo = req.body.docInfo;

    const newDoctor = new Doctor({
        docId,
        docName,
        docInfo
    });

    newDoctor.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Doctor Save Successfully"
        });
    });
});

module.exports = router;