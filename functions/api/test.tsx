export function onRequest(context) {
  return new Response(`This is a local environment! ${context.env.TEST}`);
}
