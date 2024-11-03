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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AddCategory } from "@/components/AddCategory/AddCategory";

const categories = [
  {
    title: "Birthday",
    thumbnail:
      "https://images.unsplash.com/flagged/photo-1553056011-7811272649cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBiYWJ5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    description: "All your Birthday Events",
  },
  {
    title: "Sports",
    description: "All Community members will be have cycling Race",
    thumbnail:
      "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Indoor Sports",
    thumbnail:
      "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description: "All Community members will be have cycling Race",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between my-4 items-center">
        <h1 className="font-bold text-xl">Categories</h1>
        <AddCategory />
      </div>
      <Table>
        <TableCaption>A list of your recent Categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.title}>
              <TableCell className="text-right">
                <Image
                  src={category.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
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
