import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { landing } from "@/resources";

const List = ({
  label,
  items,
  marker,
}: {
  label: string;
  items: string[];
  marker: string;
}) => (
  <Column flex={1} gap="24">
    <Text
      onBackground="neutral-weak"
      className="streaktap-eyebrow"
    >
      {label}
    </Text>
    <Column as="ul" gap="16" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <Row
          as="li"
          key={item}
          gap="12"
          vertical="start"
          style={{ lineHeight: 1.55 }}
        >
          <Text
            onBackground="neutral-weak"
            style={{
              minWidth: "12px",
              fontVariantNumeric: "tabular-nums",
              userSelect: "none",
            }}
          >
            {marker}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-strong">
            {item}
          </Text>
        </Row>
      ))}
    </Column>
  </Column>
);

export const FeaturesGrid = () => {
  return (
    <Column fillWidth gap="64">
      <Heading as="h2" wrap="balance" className="streaktap-display-m">
        What it does. And what it doesn't.
      </Heading>
      <Row fillWidth gap="80" s={{ direction: "column", gap: "48" }}>
        <List label="Does" items={landing.features.does} marker="+" />
        <List label="Doesn't" items={landing.features.doesnt} marker="—" />
      </Row>
    </Column>
  );
};
