const express = require('express');
const auth = require('../middleware/auth');
const { Notify } = require('../Model/Notify');
const router = express.Router();
router.get('/',auth,async function(req,res){
    try{
        let id_account = req.user.id
        let endDate = new Date().getFullYear() + "-" + new Date().getMonth()+1 + "-" + new Date().getDate()
        let priorDate = new Date(new Date().setDate(new Date().getDate() - 30));
        const startDate = priorDate.getFullYear() + "-" + priorDate.getMonth() + "-" + priorDate.getDate();
        const listnotify = await Notify.find({idAccount:id_account,createAt: {
            $gte: startDate,
            $lt: endDate,
          }})
        console.log(listnotify)
        res.status(200).send({message:'success',listNotify:listnotify})
    }catch(ex){
        res.status(400).send({message:'error'})
    }
})
module.exports = router;