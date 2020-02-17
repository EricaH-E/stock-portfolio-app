
const Stock = require('../models/stock');
const User = require('./user');


class Stocks {

    static addStock(req, res) {
        const { ticker, shares, latestPrice } = req.body;
        const { user } = req.params;

        if (!ticker || !shares || !user || !latestPrice) {
            return res.status(400).json({
                success: false,
                message: 'Bad Request: Missing required data',
            })
        }


        //  check if user already owns shares 
        Stock.findOne({ ticker, user })
            .then(stock => {
                if (stock) {
                    return res.status(409).json({
                        success: false,
                        message: "User already owns this stock",
                        data: stock.id,
                    })
                }
                //if not in db create
                const newStock = new Stock({
                    ticker,
                    shares,
                    user,
                    latestPrice,
                })

                newStock.save()
                    .then(s => res.status(200).json({
                        success: true,
                        message: " Stock saved successfully",
                        data: { ticker: s.ticker, shares: s.shares, latestPrice: s.latestPrice }, //dont send user id 
                    }))

            })
    }

    static updateStock(req, res) {
        const { user, stock } = req.params;
        const update = req.body;

        if (!stock || !user) {
            return res.status(400).json({
                success: false,
                message: 'Bad Request: Missing required data'
            })
        }

        Stock.findOneAndUpdate({ _id: stock, user: user }, req.body, { useFindAndModify: false, new: true })
            .then(update => {
                res.status(200).json({
                    success: true,
                    message: 'Stock updated successfully',
                    data: update,
                })
            })
            .catch(err => res.status(500).json({
                success: false,
                message: 'Failed to update stock',
            }))

    }

    //gets all stocks owned by current user
    static getPortfolio(req, res) {

        const { user } = req.params;

        Stock.find({ user })
            .then(portfolio => res.status(200).json({
                success: true,
                message: 'Stock query successful',
                data: portfolio,
            }))
            .catch(err => res.status(500).json({
                success: false,
                message: 'Error getting portfolio',
            }));

    }
}

module.exports = Stocks; 