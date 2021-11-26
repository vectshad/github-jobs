const axios = require('axios')

const getJobList = async (req, res) => {
    try {
        url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
        const jobList = await axios.get(url)

        console.log(jobList.data)
        res.json(jobList.data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getJobListSearch = async (req, res) => {
    try {
        const description = req.params.description;
        const location = req.params.location;
        const fulltime = req.params.fulltime || true;
        console.log(description, location, fulltime)
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}`;
        const jobList = await axios.get(url)

        console.log(jobList.data)
        res.json(jobList.data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { getJobList, getJobListSearch };

