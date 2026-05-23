import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Privacy Policy — StreakTap",
    description: "Privacy policy for the StreakTap iOS habit tracking app.",
    baseURL,
    path: "/privacy",
  });
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Column gap="12">
    <Heading as="h2" variant="heading-strong-l" onBackground="neutral-strong">
      {title}
    </Heading>
    {children}
  </Column>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <Text variant="body-default-m" onBackground="neutral-weak" style={{ lineHeight: 1.7 }}>
    {children}
  </Text>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <Text
    as="li"
    variant="body-default-m"
    onBackground="neutral-weak"
    style={{ lineHeight: 1.7, paddingLeft: "1em", listStyle: "disc" }}
  >
    {children}
  </Text>
);

export default function Privacy() {
  return (
    <Column fillWidth horizontal="center" paddingX="24" paddingY="80">
      <Column gap="48" className="streaktap-prose" fillWidth>

        <Column gap="16">
          <Heading as="h1" className="streaktap-display-m" onBackground="neutral-strong">
            Privacy Policy
          </Heading>
          <P>
            This privacy policy applies to the StreakTap app (hereby referred to as
            "Application") for mobile devices that was created by Ali Sina Yousofi (hereby
            referred to as "Service Provider") as a Free service. This service is intended
            for use "AS IS".
          </P>
        </Column>

        <Section title="Information Collection and Use">
          <P>
            The Application collects information when you download and use it. This
            information may include:
          </P>
          <Column as="ul" gap="8" style={{ paddingLeft: "0.5rem" }}>
            <Li>Your device's Internet Protocol address (e.g. IP address)</Li>
            <Li>
              The pages of the Application that you visit, the time and date of your
              visit, the time spent on those pages
            </Li>
            <Li>The time spent on the Application</Li>
            <Li>The operating system you use on your mobile device</Li>
          </Column>
          <P>
            The Application does not gather precise information about the location of your
            mobile device.
          </P>
          <P>
            The Application does not use Artificial Intelligence (AI) technologies to
            process your data or provide features.
          </P>
          <P>
            The Service Provider may use the information you provided to contact you from
            time to time to provide you with important information, required notices and
            marketing promotions.
          </P>
          <P>
            For a better experience, while using the Application, the Service Provider may
            require you to provide us with certain personally identifiable information. The
            information that the Service Provider requests will be retained by them and
            used as described in this privacy policy.
          </P>
        </Section>

        <Section title="Third Party Access">
          <P>
            Only aggregated, anonymized data is periodically transmitted to external
            services to aid the Service Provider in improving the Application and their
            service. The Service Provider may share your information with third parties in
            the ways that are described in this privacy statement.
          </P>
          <P>
            Please note that the Application utilizes third-party services that have their
            own Privacy Policy about handling data. Below are the links to the Privacy
            Policy of the third-party service providers used by the Application:
          </P>
          <Column as="ul" gap="8" style={{ paddingLeft: "0.5rem" }}>
            <Li>
              <a
                href="https://expo.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Expo
              </a>
            </Li>
          </Column>
          <P>
            The Service Provider may disclose User Provided and Automatically Collected
            Information:
          </P>
          <Column as="ul" gap="8" style={{ paddingLeft: "0.5rem" }}>
            <Li>
              as required by law, such as to comply with a subpoena, or similar legal
              process;
            </Li>
            <Li>
              when they believe in good faith that disclosure is necessary to protect
              their rights, protect your safety or the safety of others, investigate
              fraud, or respond to a government request;
            </Li>
            <Li>
              with their trusted service providers who work on their behalf, do not have
              an independent use of the information we disclose to them, and have agreed
              to adhere to the rules set forth in this privacy statement.
            </Li>
          </Column>
        </Section>

        <Section title="Opt-Out Rights">
          <P>
            You can stop all collection of information by the Application easily by
            uninstalling it. You may use the standard uninstall processes as may be
            available as part of your mobile device or via the mobile application
            marketplace or network.
          </P>
        </Section>

        <Section title="Data Retention Policy">
          <P>
            The Service Provider will retain User Provided data for as long as you use
            the Application and for a reasonable time thereafter. If you'd like them to
            delete User Provided Data that you have provided via the Application, please
            contact them at{" "}
            <a href="mailto:senayousofiali@gmail.com" style={{ color: "inherit" }}>
              senayousofiali@gmail.com
            </a>{" "}
            and they will respond in a reasonable time.
          </P>
        </Section>

        <Section title="Children">
          <P>
            The Service Provider does not use the Application to knowingly solicit data
            from or market to children under the age of 13.
          </P>
          <P>
            The Application does not address anyone under the age of 13. The Service
            Provider does not knowingly collect personally identifiable information from
            children under 13 years of age. In the case the Service Provider discovers
            that a child under 13 has provided personal information, the Service Provider
            will immediately delete this from their servers. If you are a parent or
            guardian and you are aware that your child has provided us with personal
            information, please contact the Service Provider (
            <a href="mailto:senayousofiali@gmail.com" style={{ color: "inherit" }}>
              senayousofiali@gmail.com
            </a>
            ) so that they will be able to take the necessary actions.
          </P>
        </Section>

        <Section title="Security">
          <P>
            The Service Provider is concerned about safeguarding the confidentiality of
            your information. The Service Provider provides physical, electronic, and
            procedural safeguards to protect information the Service Provider processes
            and maintains.
          </P>
        </Section>

        <Section title="Changes">
          <P>
            This Privacy Policy may be updated from time to time for any reason. The
            Service Provider will notify you of any changes to the Privacy Policy by
            updating this page with the new Privacy Policy. You are advised to consult
            this Privacy Policy regularly for any changes, as continued use is deemed
            approval of all changes.
          </P>
          <P>This privacy policy is effective as of 2026-05-22.</P>
        </Section>

        <Section title="Your Consent">
          <P>
            By using the Application, you are consenting to the processing of your
            information as set forth in this Privacy Policy now and as amended by us.
          </P>
        </Section>

        <Section title="Contact Us">
          <P>
            If you have any questions regarding privacy while using the Application, or
            have questions about the practices, please contact the Service Provider via
            email at{" "}
            <a href="mailto:senayousofiali@gmail.com" style={{ color: "inherit" }}>
              senayousofiali@gmail.com
            </a>
            .
          </P>
        </Section>

      </Column>
    </Column>
  );
}
