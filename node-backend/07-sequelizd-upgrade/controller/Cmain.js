const {Customer, Orders, Sequelize} = require("../model")
const Op = Sequelize.Op

exports.main = async(req, res) => {
    const cust = await Customer.findAll({
        attributes:["custid", "custname","birth"],
        where: {birth:{ [Op.gte]:"2000-01-01" }},
        include: [
            {
                model: Orders,
                attributes:{exclude: ["custid"]},
            }
        ],
        raw:true,
    })

    res.send(cust);
}