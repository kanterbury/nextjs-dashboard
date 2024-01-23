import Form from "@/app/ui/invoices/form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { createInvoice } from "@/app/lib/actions";

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
      <Form customers={customers} action={createInvoice} />
    </main>
  );
}
