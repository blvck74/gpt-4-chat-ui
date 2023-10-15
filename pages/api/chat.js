const { Configuration, OpenAI, ChatCompletionRequestMessageRoleEnum } = require("openai");
const { NextApiRequest, NextApiResponse } = require("next");

const openai = new OpenAI({
  apiKey: '',
  baseURL: 'https://neuroapi.host/v1'
});

async function chatHandler(req, res) {
  const completion = await openai.createChatCompletion({
    model: "gpt-4-32k",
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
