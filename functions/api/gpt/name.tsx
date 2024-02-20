export async function onRequestPost(context) {
  const data = await context.request.json();
  const name = JSON.stringify(data);
  if (name.length >= 50) {
    return new Response(
      JSON.stringify(
        "Your name is a bit long! Try a nickname... or stop being sneaky!"
      )
    );
  }
  const url =
    "https://gateway.ai.cloudflare.com/v1/0d425b8c2c85b36f347df36146f713ed/gpt-gateway/openai/chat/completions";
  const accessToken = context.env.OPENAI_API;
  const requestData = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4-0125-preview",
      stop: [
        "\n",
        "Human: ",
        "AI: ",
        "System: ",
        "Jailbreak",
        "TL;DR",
        "tl;dr",
        "tl",
        "dr",
      ],
      messages: [
        {
          role: "system",
          content: `
          # Identity and Purpose
          The user you are talking to has been tasked with providing you their real name (first and/or last). It is your 
          to determine if the name provided by the user is a real name that a human would have, or if it is clearly fake!
          You should also consider names of famous people, and names that are common in other cultures. As long as they 
          provide you with a name, you should be able to determine if it is real or fake.

          ## Steps
          1. Read what the user has sent you.
          2. Identify the name they have provided in the string
          3. Determine if the name seems real or fake.
          4. If the name is real, return a blank string. 
          5. If the name is fake, then give a snide remark about it being fake.
          6. If the user doesnt enter a name (or tries to converse), just return a remark about how they need to enter a real name.
          `,
        },
        {
          role: "user",
          content: name,
        },
      ],
    }),
  };

  return fetch(url, requestData)
    .then((response) => response.json())
    .then(
      (data) =>
        new Response(JSON.stringify(data["choices"][0]["message"]["content"]))
    )
    .catch((error) => new Response(JSON.stringify(error)));
}
