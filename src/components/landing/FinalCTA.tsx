import { Column, Heading } from "@once-ui-system/core";
import { AppStoreBadge } from "./AppStoreBadge";

export const FinalCTA = () => {
  return (
    <Column fillWidth gap="32" horizontal="center" align="center">
      <Heading
        as="h2"
        wrap="balance"
        className="streaktap-display-m"
        onBackground="neutral-strong"
      >
        Start a streak today.
      </Heading>
      <AppStoreBadge />
    </Column>
  );
};
