import { fetchFilteredCustomers } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import Table from "@/app/ui/customers/table";

export const metadata = {
  title: "Customers"
};

export default async function Page({
  searchParams
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <Suspense fallback={<div>Loading... </div>}>
          <Table customers={customers} />
        </Suspense>
      </div>
    </div>
  );
}
