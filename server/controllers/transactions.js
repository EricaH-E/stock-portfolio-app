const Transaction = require('../models/transaction');

class Transactions{
    static addTransaction(req,res){
        const {user}= req.params;
        const {ticker, action, shares, cost} = req.body;


        if(!user || !ticker || !action || !shares || !cost){
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
            cost,
        })

        newTrans.save()
        .then(trans => res.status(200).json({
            success: true,
            message: 'Transaction saved!',
            data: trans, 
        }));
    }

    static getTransaction(req,res){
        const {user} = req.params; 
        Transaction.find({user})
        .then( trans => res.status(200).json({
            success: true,
            message: 'Transaction query successful',
            data: trans,
        }))
        .catch(err => res.status(500).json({
            succes: false,
            message: 'Error getting transactions',
        }))
    }
}

module.exports = Transactions; 