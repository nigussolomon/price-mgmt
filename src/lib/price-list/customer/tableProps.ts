import { Column, Reviews } from "@/components/ui/table/table";
import { currencyFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  sellingPrice: number;
  margin: number;
  customerPrice: number;
  customer: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Product Code",
    accessor: "code",
  },
  { label: "Product Name", accessor: "name" },
  { label: "Description", accessor: "description" },
  { label: "Customer", accessor: "customer" },
  {
    label: "Selling Price",
    accessor: "sellingPrice",
    render: (val) => currencyFormatter(val.sellingPrice),
  },
  {
    label: "Margin",
    accessor: "margin",
    render: (val) => `${val.margin}%`,
  },
  {
    label: "Customer Price",
    accessor: "customerPrice",
    render: (val) => currencyFormatter(val.customerPrice),
  },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    customer: "ABC Electronics",
    sellingPrice: 120,
    margin: 20,
    customerPrice: 140,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    customer: "XYZ Clothing",
    sellingPrice: 60,
    margin: 10,
    customerPrice: 70,
    reviews: { positive: 456, negative: 78 },
  },
];
