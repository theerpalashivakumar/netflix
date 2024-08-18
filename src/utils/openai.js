import OpenAI from 'openai';
// import { OPEN_AI_KEY } from './consonent';


const openai = new OpenAI({
    // apiKey: OPEN_AI_KEY || process.env.REACT_APP_OPEN_AI_KEY, 
    apiKey: process.env.REACT_APP_OPEN_AI_KEY, // This should pull from your .env file

    dangerouslyAllowBrowser:true
});

export default openai