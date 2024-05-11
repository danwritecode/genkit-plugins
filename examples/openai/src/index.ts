import 'dotenv/config';

import { generate } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { defineFlow, startFlowsServer } from '@genkit-ai/flow';

import { openAI } from 'genkitx-openai-plugin';

import * as z from 'zod';


configureGenkit({
  plugins: [
    /* Add your plugins here. */
    openAI({ apiKey: process.env.OPENAI_API_KEY }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const menuSuggestionFlow = defineFlow(
  {
    name: 'menuSuggestionFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (subject) => {
    const llmResponse = await generate({
      prompt: `Suggest an item for the menu of a ${subject} themed restaurant`,
      model: '' /* TODO: Set a model. */,
      config: {
        temperature: 1,
      },
    });

    return llmResponse.text();
  }
);

startFlowsServer();
