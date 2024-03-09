"use server"

import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (message) => {
    const response = await openai.chat.completions.create({
        messages: [
            {role: "system", content: "you are a helpful assistant"},
            {role: "user", content: message}
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.5
    })
    console.log("data : ",response.choices[0].message)
    console.log("response : ",response)
    return "awesome"
}
