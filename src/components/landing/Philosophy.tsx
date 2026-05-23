import { Column, Heading, Text } from "@once-ui-system/core";
import { landing } from "@/resources";

export const Philosophy = () => {
  return (
    <Column fillWidth gap="64">
      <Heading as="h2" wrap="balance" className="streaktap-display-m">
        Built on four principles.
      </Heading>
      <Column gap="24">
        {landing.principles.map((line) => (
          <Heading
            key={line}
            as="p"
            variant="heading-strong-xl"
            onBackground="neutral-strong"
          >
            {line}
          </Heading>
        ))}
      </Column>
      <Text
        onBackground="neutral-weak"
        variant="body-default-l"
        style={{ lineHeight: 1.6, maxWidth: "720px" }}
      >
        {landing.principlesClosing}
      </Text>
    </Column>
  );
};
