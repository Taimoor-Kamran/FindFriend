import { ConnectDB } from "@/lib/db/ConnectDB";
import { CategoryModal } from "@/lib/models/Category";

export async function GET(request) {
  await ConnectDB();
  const Categories = await CategoryModal.find();
  return Response.json(
    {
      msg: "Categories Fetched Successfully",
    },
    { status: 200 }
  );
}

export async function POST(request){
    await ConnectDB() 
    const obj = await request.json()
    let newCategory = new CategoryModal(obj)
    await newCategory.save()
    
    return Response.json(
        {
            msg: "Category Added Successfully"
        },
        {
            status : 201
        }
    )
}

export async function PUT(request){}

export async function DELETE(request){}