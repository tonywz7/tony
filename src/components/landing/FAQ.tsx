import { Accordion, Column, Heading, Text } from "@once-ui-system/core";
import { landing } from "@/resources";

export const FAQ = () => {
  return (
    <Column fillWidth gap="48">
      <Heading as="h2" wrap="balance" className="streaktap-display-m">
        Questions, briefly answered.
      </Heading>
      <Column fillWidth gap="0">
        {landing.faq.map((item) => (
          <Accordion
            key={item.q}
            size="m"
            radius="s"
            title={
              <Text variant="heading-strong-s" onBackground="neutral-strong">
                {item.q}
              </Text>
            }
          >
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              style={{ lineHeight: 1.6 }}
            >
              {item.a}
            </Text>
          </Accordion>
        ))}
      </Column>
    </Column>
  );
};
