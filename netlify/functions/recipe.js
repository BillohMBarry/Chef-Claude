
import  {InferenceClient} from "@huggingface/inference"
export const handler = async (event, context) => {
    try {
        const { ingredients } = JSON.parse(event.body)
        let mistralai = process.env.MISTRAL_API_KEY
        if(!ingredients) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "please provide an ingredient" }),
            }
        }
        const hf = new InferenceClient(mistralai)
        const ingredientsString = ingredients.join(", ")
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page" },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "success",
                response: response.choices[0].message.content,
            })
            // response: response.choices[0].message.content
        }
    } catch (error) {
       console.error(error) 
       return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server error occurred" })
    };
    }
   
 }