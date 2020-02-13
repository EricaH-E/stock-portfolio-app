
const Stock = require('../models/stock');
const Users = require('./user');


class Stocks{

     static addStock(req,res){
         const {name, ticker, shares} = req.body;
         const {user} = req.params; 

         if(!name || !ticker || !shares || !user){
             return res.status(400).json({
                 success: false,
                 message: 'Bad Request: Missing required data',
             })
         }


        //  check if user already owns shares 
        Stock.findOne({ticker, user})
        .then(stock => {
            if(stock){
                return res.status(409).json({
                    success: false,
                    message: "User already owns this stock",
                    data: stock.id, 
                })
            }
            //if not in db create
              const newStock = new Stock({
                  name,
                  ticker,
                  shares,
                  user,
              })

            newStock.save()
            .then(s => res.status(200).json({
                success: true,
                message:" Stock saved successfully",
                data: s,
            }))   
            
        })
     }

     static updateStock(req,res){
         const {id} = req.params;
         const {shares} =  req.body;

        if(!shares || !id){
            return res.status(400).json({
                 success: false, 
                 message: 'Bad Request: Missing required data'
             })
         }

         Stock.findOneAndUpdate({id}, {shares: shares}, {useFindAndModify: false, new: true})
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
    static getPortfolio(req,res){
        const {user} = req.params; 

        Stock.find({user})
        .then(portfolio => res.status(200).json({
            success: true,
            data: portfolio,
        }))
        .catch(err => res.status(500).json({
            success: false, 
            error: 'Error getting portfolio',
        })); 

    }
}

module.exports = Stocks; 