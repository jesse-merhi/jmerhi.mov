export function onRequestPost(context) {
  const fetch = require('node-fetch');
  return new Response(`${context.request}`);
  const url =
    'https://gateway.ai.cloudflare.com/v1/0d425b8c2c85b36f347df36146f713ed/gpt-gateway/openai/chat/completions';
  const accessToken = context.env.OPENAI_API;
  const requestData = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'What is Cloudflare?',
        },
      ],
    }),
  };

  fetch(url, requestData)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

  return new Response(`This is a local environment! ${context.env.TEST}`);
}
