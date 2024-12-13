const { Configuration, OpenAI, ChatCompletionRequestMessageRoleEnum } = require("openai");
const { NextApiRequest, NextApiResponse } = require("next");

const openai = new OpenAI({
  apiKey: 'sk-gfEzUwwBc2ybxPeg56Ac07Ac371c495eB7E52f09883e32F3',
  baseURL: 'https://neuroapi.host/v1/chat/completions'
});

async function chatHandler(req, res) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: "You are a helpful assistant.",
      },
      
    ].concat(req.body.messages),
    temperature: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].message });
}

module.exports = chatHandler;
