const Transaction = require('../models/transaction');

class Transactions{
    static addTransaction(req,res){
        const {user}= req.params;
        const {ticker, action, shares} = req.body;


        if(!user || !ticker || !action || !shares){
            return res.status(400).json({
                success: false,
                message: 'Bad Request: Missing required data',
            })
        }

        const newTrans = new Transaction({
            user,
            ticker,
            action,
            shares,
        })

        newTrans.save()
        .then(trans => res.status(200).json({
            success: true,
            data: trans, 
        }))
        .catch(err => res.status(500).json({
            success: true,
            error: err, 
            
        }))
    }

    static getTransaction(req,res){
        const {user} = req.params; 
        Transaction.find({user})
        .then( trans => res.status(200).json({
            success: true,
            data: trans,
        }))
        .catch(err => res.status(500).json({
            succes: false,
            error: err,
        }))
    }
}

module.exports = Transactions; 