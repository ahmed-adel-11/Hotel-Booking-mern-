import user from "../models/users.js";
import { Webhook } from "svix";

const clerkWebHook = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body, headers));

    const { data, type } = req.body;
    const userData = {
      _id: data.id,
      email: data.emailaddresses[0].emailaddress,
      userName: data.first_name + " " + data.first_name,
      image: data.image_url,
    };

    switch (type) {
      case "user.created": {
        await user.create(userData);
        break;
      }
      case "user.updated": {
        await user.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "user.created": {
        await user.findByIdAndDelete(data.id);
        break;
      }
      default:
        break;
    }

    res.json({ success: true, message: "Webhook Received" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebHook;
