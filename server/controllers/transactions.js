const Transaction = require('../models/transaction');

class Transactions{
    static addTransaction(req,res){
        const {user, ticker, action, shares} = req.body;

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
        const user = req.params.body;
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