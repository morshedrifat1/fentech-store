import clientPromise from "@/lib/mongodb";

// GET all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("fanTechDb");
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch products", { status: 500 });
  }
}

// POST new product
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("fanTechDb");
    const data = await req.json();
    const result = await db.collection("products").insertOne(data);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    return new Response("Failed to create product", { status: 500 });
  }
}
