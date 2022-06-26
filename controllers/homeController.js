const BigPromise = require('../middleware/bigPromise')


exports.home = BigPromise(async(req, res) => {
    // const db = await something()
    res.status(200).json({
        success: true,
        greeting: 'greeting from API'
    })
})
exports.homeDummy = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            greeting: 'this is another dummy route'
        })
    } catch (error) {
        console.log(error);
        
    }
    
}