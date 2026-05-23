"use client";

import Link from "next/link";
import Image from "next/image";
import { Fade, Flex, Row, Text } from "@once-ui-system/core";
import { display } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="16"
        horizontal="center"
        s={{ position: "fixed" }}
      >
        <Row fillWidth className="streaktap-wide" horizontal="between" vertical="center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Row gap="8" vertical="center">
              <Image
                src="/images/icon_light.png"
                alt="StreakTap"
                width={28}
                height={28}
                style={{ borderRadius: "7px", display: "block" }}
              />
              <Text variant="heading-strong-m" onBackground="neutral-strong">
                StreakTap
              </Text>
            </Row>
          </Link>
          <Flex vertical="center" gap="8">
            {display.themeSwitcher && <ThemeToggle />}
          </Flex>
        </Row>
      </Row>
    </>
  );
};
