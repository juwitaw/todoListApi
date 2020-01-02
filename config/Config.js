
module.exports = {
    // ubah DB dengan host mongodb masing-masing
    DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:Sementara3@learnit-sandbox-5c8vm.mongodb.net/learnit-react?retryWrites=true&w=majority',
    APP_PORT: process.env.PORT ? process.env.PORT : 80,
  };
