const axios = require('axios')

const getJobDetail = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
        const jobDetail = await axios.get(url)

        console.log(jobDetail.data)
        res.json(jobDetail.data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getJobDetail;