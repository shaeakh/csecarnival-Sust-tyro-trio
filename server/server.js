require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const app = express();
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(PORT);
console.log(OPENAI_API_KEY);
app.use(cors());
app.use(express.json());

app.get('/questions', async (req, res) => {
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    const model = 'gpt-4';
    const messages = [
      {
        role: "system",
        content: "You are an AI assistant designed to help student to give guideline to solve his/her problem.But dont give the actual solution.YOu can give the hint,resources and explain easily or give the example of same type problem but never give the actual solution.Dont give irrevalent answare and help him/her to give proper guideline of time and money management,develop skill if he/she ask. You understand and generate responses in multiple languages, use GPT-4 for generating responses, can search the web for information, can remember past interactions, and can generate creative content such as stories, poems, and more.",
      }, {
        role: "user",
        content: req.query.message,
      }
    ];
    const completion = await openai.chat.completions.create({
      model,
      messages,
    });
    const aiResponse = completion.choices[0].message.content;
    console.log(aiResponse);
    res.send({ text: aiResponse }); // Use 'text' instead of 'content'
  });

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})