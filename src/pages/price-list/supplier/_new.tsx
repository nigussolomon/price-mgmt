import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Product" placeholder="Product" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Supplier" placeholder="Supplier" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Purchase Price"
            placeholder="Purchase Price"
          />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Margin" placeholder="Margin" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
