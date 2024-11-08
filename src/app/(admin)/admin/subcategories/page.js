import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const subcategories = [
  {
    title: "Cricket",
    category: "Sports",
    description: "All Community members will be have cycling Race",
    thumbnail:
      "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Football",
    category: "Sports",
    description: "All Community members will be have cycling Race",
    thumbnail:
      "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Tennis",
    category: "Sports",
    description: "All Community members will be have cycling Race",
    thumbnail:
      "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between my-4 items-center">
        <h1 className="font-bold text-xl">SubCategories</h1>
        <AddSubCategory />
      </div>
      <Table>
        <TableCaption>A list of your recent SubCategories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategories.map((category) => (
            <TableRow key={category.title}>
              <TableCell className="text-right">
                <Image
                  src={category.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{category.category}</TableCell>
              <TableCell className="font-medium">{category.title}</TableCell>
              <TableCell className="font-medium">
                {category.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
