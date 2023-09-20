import type { MetaFunction } from "@remix-run/node";
import Table from "~/components/Table";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-xl font-bold">Welcome to Remix & Strapi Lesson 1</h1>
      <Table />
    </div>
  );
}
