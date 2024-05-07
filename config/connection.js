const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/JamesSocial', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Now Export 
module.exports = mongoose.connection