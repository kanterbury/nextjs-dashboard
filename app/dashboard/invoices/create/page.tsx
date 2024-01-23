import Form from "@/app/ui/invoices/form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { createInvoice } from "@/app/lib/actions";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export const metadata = {
  title: "Create Invoice"
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true
          }
        ]}
      />
      <Form customers={customers} action={createInvoice} id="create-invoice" />
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" form="create-invoice">
          Create Invoice
        </Button>
      </div>
    </main>
  );
}
