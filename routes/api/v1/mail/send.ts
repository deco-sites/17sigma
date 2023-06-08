import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    const body = await req.formData();

    const fullName = body.get("fullName");
    const message = body.get("message");
    const email = body.get("email");
    const upload = body.get("upload");

    const canSendEmail = fullName && email && message;

    if (canSendEmail) {
      return new Response(JSON.stringify({ fullName, email, message, upload }));
    } else {
      return new Response(JSON.stringify({ error: "Error" }), { status: 400 });
    }
  },
};
