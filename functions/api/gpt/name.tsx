export async function onRequestPost(context) {
  const data = await context.request.json();
  const name = JSON.stringify(data);
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
      model: 'gpt-4-0125-preview',
      messages: [
        {
          role: 'system',
          content: `Your job is to determine if the name provided by the user is a real name that a human would have! Nice and simple. 

          Steps:
          1. If the name is real, return a blank string. 
          2. If the name is fake, then give a snide remark about it being fake.
          3. If the user doesnt enter a name (or tries to converse), just return a remark about how they need to enter a real name.
          `,
        },
        {
          role:"user",
          content: name
        }
      ],
    }),
  };

  return fetch(url, requestData)
    .then((response) => response.json())
    .then((data) => new Response(JSON.stringify(data)["choices"][0]["message"]["content"]))
    .catch((error) =>  error);
}
