import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { landing } from "@/resources";

export const Steps = () => {
  return (
    <Column fillWidth gap="64">
      <Heading as="h2" wrap="balance" className="streaktap-display-m">
        Three steps. No setup.
      </Heading>
      <Row
        fillWidth
        gap="48"
        s={{ direction: "column" }}
        vertical="start"
      >
        {landing.steps.map((step) => (
          <Column key={step.number} flex={1} gap="16">
            <Text
              onBackground="neutral-weak"
              className="streaktap-step-number"
            >
              {step.number}
            </Text>
            <Heading as="h3" variant="heading-strong-l">
              {step.title}
            </Heading>
            <Text
              onBackground="neutral-weak"
              variant="body-default-m"
              style={{ lineHeight: 1.6 }}
            >
              {step.body}
            </Text>
          </Column>
        ))}
      </Row>
    </Column>
  );
};
