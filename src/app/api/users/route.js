import { ConnectDB } from "@/lib/db/ConnectDB";
import { UserModal } from "@/lib/models/User";

export async function GET(request) {
  await ConnectDB();
  const users = await UserModal.find();
  return Response.json(
    {
      msg: "Users Fetched SuccessFully", users}, { status: 200 }
  );
}

export async function POST(request) {
  await ConnectDB();
  try {
    const obj = await request.json(); // Attempt to parse JSON body
    console.log("Received JSON object:", obj); // Log the parsed JSON

    const newUser = new UserModal(obj);
    await newUser.save();

    return Response.json(
      { msg: "User Added Successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("JSON Parsing or Saving Error:", error);
    return Response.json(
      { msg: "Error Adding User", error: error.message },
      { status: 500 }
    );
  }
}
