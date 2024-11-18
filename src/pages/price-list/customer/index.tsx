import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/price-list/customer/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="CUSTOMER PRICE LISTS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconPackage size={16} />}
          size="xs"
        >
          NEW CUSTOMER PRICE LIST
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Customer Price List"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />

        <CustomSelect
          label="Product Code"
          placeholder="Select a product code"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Customer"
          placeholder="Select a customer"
          value=""
          onChange={() => {}}
          data={[]}
        />
      </Group>
      <Divider my="md" />
      <Drawer
        size="lg"
        opened={opened}
        onClose={close}
        title="New Customer Price List"
      >
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
