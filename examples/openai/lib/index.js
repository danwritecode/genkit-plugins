"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const dotprompt_1 = require("@genkit-ai/dotprompt");
const ai_1 = require("@genkit-ai/ai");
const core_1 = require("@genkit-ai/core");
//import { defineFlow, startFlowsServer } from '@genkit-ai/flow';
const genkitx_openai_plugin_1 = require("genkitx-openai-plugin");
const z = __importStar(require("zod"));
(0, core_1.configureGenkit)({
    plugins: [
        /* Add your plugins here. */
        (0, genkitx_openai_plugin_1.openAI)({ apiKey: process.env.OPENAI_API_KEY }),
        (0, dotprompt_1.dotprompt)(),
    ],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});
// export const menuSuggestionFlow = defineFlow(
//   {
//     name: 'menuSuggestionFlow',
//     inputSchema: z.string(),
//     outputSchema: z.string(),
//   },
//   async (subject) => {
//     const llmResponse = await generate({
//       prompt: `Suggest an item for the menu of a ${subject} themed restaurant`,
//       model: '' /* TODO: Set a model. */,
//       config: {
//         temperature: 1,
//       },
//     });
//     return llmResponse.text();
//   }
// );
// startFlowsServer();
const ai_2 = require("@genkit-ai/ai");
const helloPrompt = (0, ai_2.definePrompt)({
    name: 'helloPrompt',
    inputSchema: z.object({ name: z.string() }),
}, async (input) => {
    const promptText = `You are a helpful AI assistant named Walt.
    Say hello to ${input.name}.`;
    return {
        messages: [{ role: 'user', content: [{ text: promptText }] }],
        config: { temperature: 0.3 }
    };
});
(0, ai_1.generate)((0, ai_1.renderPrompt)({
    prompt: helloPrompt,
    input: { name: 'Fred' },
    model: 'openai/gpt-3.5-turbo',
}));
//# sourceMappingURL=index.js.map