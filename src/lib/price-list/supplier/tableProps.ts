import { Column, Reviews } from "@/components/ui/table/table";
import { currencyFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  purchasePrice: number;
  margin: number;
  sellingPrice: number;
  supplier: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Product Code",
    accessor: "code",
  },
  { label: "Product Name", accessor: "name" },
  { label: "Description", accessor: "description" },
  { label: "Supplier", accessor: "supplier" },
  {
    label: "Purchase Price",
    accessor: "purchasePrice",
    render: (val) => currencyFormatter(val.purchasePrice),
  },
  {
    label: "Margin",
    accessor: "margin",
    render: (val) => `${val.margin}%`,
  },
  {
    label: "Selling Price",
    accessor: "sellingPrice",
    render: (val) => currencyFormatter(val.sellingPrice),
  },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    supplier: "ABC Electronics",
    purchasePrice: 100,
    margin: 20,
    sellingPrice: 120,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    supplier: "XYZ Clothing",
    purchasePrice: 50,
    margin: 10,
    sellingPrice: 60,
    reviews: { positive: 456, negative: 78 },
  },
];
