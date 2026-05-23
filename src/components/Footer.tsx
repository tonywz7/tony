import Link from "next/link";
import { Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      as="footer"
      fillWidth
      paddingX="24"
      paddingY="48"
      horizontal="center"
    >
      <Row
        fillWidth
        className={`${styles.mobile} streaktap-wide`}
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          © {currentYear} StreakTap
        </Text>
        <Row gap="24" vertical="center">
          <Link href="/privacy" style={{ textDecoration: "none" }}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Privacy
            </Text>
          </Link>
          <Link href="/terms" style={{ textDecoration: "none" }}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Terms
            </Text>
          </Link>
          <a href={`mailto:${person.email}`} style={{ textDecoration: "none" }}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Contact
            </Text>
          </a>
        </Row>
      </Row>
    </Row>
  );
};
