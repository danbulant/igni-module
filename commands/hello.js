const commando = require("@iceprod/discord.js-commando");

module.exports = class hello extends commando.Command {
    constructor(client) {
        super(client, {
            name: "hello",
            memberName: "hello",
            group: "commands",
            description: "Say hello",
            args: [{
                key: "user",
                type: "user",
                prompt: "What's the user you want to say hello to?"
            }]
        });
    }

    run(msg, { user }) {
        return msg.say("Hello " + user.username);        
    }
};