import Form from "@/app/ui/invoices/form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { updateInvoice } from "@/app/lib/actions";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export const metadata: Metadata = {
  title: "Edit Invoice"
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers()
  ]);
  if (!invoice) {
    notFound();
  }
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true
          }
        ]}
      />
      <Form
        id="edit-invoice"
        invoice={invoice}
        customers={customers}
        action={updateInvoiceWithId}
      />
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" form="edit-invoice">
          Edit Invoice
        </Button>
      </div>
    </main>
  );
}
