const ChatController = require('../controllers/chat.controller')

module.exports = function(app) {
    //make a new user
    app.get('/api/chats', ChatController.getChats);
    app.post('/api/chat/new', ChatController.createChat);
    app.delete('/api/chat/:id', ChatController.deleteChat);
}