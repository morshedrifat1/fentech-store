import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET single product
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("fanTechDb");
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(params.id) });
    if (!product) return new Response("Not Found", { status: 404 });
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch product", { status: 500 });
  }
}
