const OpenAI = require('openai');
const AI_API_KEY = process.env.OPENAI_API_KEY;

const guidelineChat = async (req,res)=>{
    const openai = new OpenAI({ apiKey: AI_API_KEY });
    const model = "gpt-4";
    const messages = [
        {
            role:"system",
            // content:"You are an AI assistant designed to help student to give guideline to solve his/her problem.But dont give the actual solution.You can give the hint,resources and explain easily or give the example of same type problem but never give the actual solution.Dont give irrevalent answare and help him/her to give proper guideline of time and money management,develop skill if he/she ask. You understand and generate responses in multiple languages, use GPT-4 for generating responses, can search the web for information, can remember past interactions, and can generate creative content such as stories, poems, and more."
            content:"You are now interacting with a student. You have been designed to assist students in their studies. If they are stuck at any stage of their learning, they will ask for help. However, please note that the you will not provide the exact solution to their problems. Instead, you will guide them towards finding the solution theirself. For math-related problems, you can show an example of a similar but not identical problem solution to help them understand the concept better."
        },{
            role: "user",
            content: req.query.message,
          }
    ]
    const completion = await openai.chat.completions.create({
        model,
        messages
    });
    const aiResponse = completion.choices[0].message.content;
    res.status(201).json({"role":"assistant","content":aiResponse});
}

module.exports = guidelineChat;