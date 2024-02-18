export async function onRequestPost(context) {
  const data = await context.request.json();
  const name = JSON.stringify(data)["name"];
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
          role: 'system',
          content: 'Your job is to determine if the name provided by the user is real or fake. If the name is real, return nothing. If the name is fake, then give a snide remark about it being fake.',
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
    .then((data) => new Response(`${JSON.stringify(data)} ${name} ${accessToken}`))
    .catch((error) =>  error);

  return new Response(`This is a local environment! ${context.env.TEST}`);
}
