import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Table from "~/components/Table";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const res = await fetch("http://localhost:1337/api/debts");
  const data = await res.json();
  return json(data);
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-xl font-bold">Welcome to Remix & Strapi Lesson 1</h1>
      <Table data={data}/>
    </div>
  );
}
