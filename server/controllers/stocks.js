
const Stock = require('../models/stock');


class Stocks{

     static addStock(req,res){
        //  const {name, ticker, shares} = req.body;
        //  const {user} = req.params; 

         //check if user already owns shares 
        // findOne({ticker, user})
        // .then(stock => {
        //     if(stock){
        //         return res.status(409).json({
        //             success: false,
        //             stock : stock.id, 
        //         })
        //     }
        //     //if not in db creates
        //       const newStock = new Stock({
        //           name,
        //           ticker,
        //           shares,
        //           user,
        //       })

        //     newStock.save()
        //     .then(s => res.status(200).json({
        //         success: true,
        //         data: s,
        //     }))   
            
        // })

        res.status(200).json({
            success: true,
            message:' Hitting endpoint',
        })
     }

     static updateStock(req,res){
         const {id} = query.params;
         const {shares} =  req.body;

         Stock.findOneAndUpdate({id}, {shares})
         .then(update => res.status(200).json({
             success: true,
             data: update, 
         }))
         .catch( err => res.status(500).json({
             success: false,
             error: 'Failed to update stock',
         }))

     }

    //gets all stocks owned by current user
    static getPortfolio(res,req){
        const {user} = req.params; 

        Stock.find({user})
        .then(portfolio => res.status(200).json({
            success: true,
            data: portfolio,
        })
        .catch(err => res.status(500).json({
            success: false, 
            error: 'Error getting portfolio',
        }))); 

    }
}

module.exports = Stocks; 