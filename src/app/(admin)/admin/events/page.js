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

const events = [
  {
    title: "Birthday Girl",
    description: "Birthday of Baby Girl",
    location: "Karachi",
    thumbnail:
      "https://images.unsplash.com/flagged/photo-1553056011-7811272649cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBiYWJ5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Cycling Marathon",
    description: "All Community members will be have cycling Race",
    location: "Karachi",
    thumbnail:
      "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: new Date().toLocaleDateString(),
  },
];

export default function Events() {
  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between my-4 items-center">
        <h1 className="font-bold text-xl">Events</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">Thumbnail</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.title}>
              <TableCell className="text-right">
                <Image
                  src={event.thumbnail}
                  style={{ objectFit: "cover"}}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
