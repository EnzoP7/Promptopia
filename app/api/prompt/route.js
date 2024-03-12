import Prompt from "@/models/prompt";
import connectToDB from "../../../utils/database";
export const GET = async (req) => {
  //   const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    return new Response("Fail to get posts", { status: 500 });
  }
};
