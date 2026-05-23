import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Terms of Use — StreakTap",
    description: "Terms and conditions for the StreakTap iOS habit tracking app.",
    baseURL,
    path: "/terms",
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

export default function Terms() {
  return (
    <Column fillWidth horizontal="center" paddingX="24" paddingY="80">
      <Column gap="48" className="streaktap-prose" fillWidth>

        <Column gap="16">
          <Heading as="h1" className="streaktap-display-m" onBackground="neutral-strong">
            Terms of Use
          </Heading>
          <P>
            These terms and conditions apply to the StreakTap app (hereby referred to as
            "Application") for mobile devices that was created by Ali Sina Yousofi (hereby
            referred to as "Service Provider") as a Free service.
          </P>
          <P>
            Upon downloading or utilizing the Application, you are automatically agreeing
            to the following terms. It is strongly advised that you thoroughly read and
            understand these terms prior to using the Application.
          </P>
          <P>
            Unauthorized copying, modification of the Application, any part of the
            Application, or our trademarks is strictly prohibited. Any attempts to extract
            the source code of the Application, translate the Application into other
            languages, or create derivative versions are not permitted. All trademarks,
            copyrights, database rights, and other intellectual property rights related to
            the Application remain the property of the Service Provider.
          </P>
          <P>
            The Service Provider is dedicated to ensuring that the Application is as
            beneficial and efficient as possible. As such, they reserve the right to modify
            the Application or charge for their services at any time and for any reason.
            The Service Provider assures you that any charges for the Application or its
            services will be clearly communicated to you.
          </P>
          <P>
            The Application stores and processes personal data that you have provided to
            the Service Provider in order to provide the Service. It is your responsibility
            to maintain the security of your phone and access to the Application. The
            Service Provider strongly advises against jailbreaking or rooting your phone,
            which involves removing software restrictions and limitations imposed by the
            official operating system of your device. Such actions could expose your phone
            to malware, viruses, malicious programs, compromise your phone's security
            features, and may result in the Application not functioning correctly or at all.
          </P>
          <P>
            Please note that the Application utilizes third-party services that have their
            own Terms and Conditions. Below are the links to the Terms and Conditions of
            the third-party service providers used by the Application:
          </P>
          <Column as="ul" gap="8" style={{ paddingLeft: "0.5rem" }}>
            <Li>
              <a
                href="https://expo.dev/terms"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Expo
              </a>
            </Li>
          </Column>
          <P>
            Please be aware that the Service Provider does not assume responsibility for
            certain aspects. Some functions of the Application require an active internet
            connection, which can be Wi-Fi or provided by your mobile network provider.
            The Service Provider cannot be held responsible if the Application does not
            function at full capacity due to lack of access to Wi-Fi or if you have
            exhausted your data allowance.
          </P>
          <P>
            If you are using the application outside of a Wi-Fi area, please be aware that
            your mobile network provider's agreement terms still apply. Consequently, you
            may incur charges from your mobile provider for data usage during the
            connection to the application, or other third-party charges. By using the
            application, you accept responsibility for any such charges, including roaming
            data charges if you use the application outside of your home territory (i.e.,
            region or country) without disabling data roaming. If you are not the bill
            payer for the device on which you are using the application, they assume that
            you have obtained permission from the bill payer.
          </P>
          <P>
            Similarly, the Service Provider cannot always assume responsibility for your
            usage of the application. For instance, it is your responsibility to ensure
            that your device remains charged. If your device runs out of battery and you
            are unable to access the Service, the Service Provider cannot be held
            responsible.
          </P>
          <P>
            In terms of the Service Provider's responsibility for your use of the
            application, it is important to note that while they strive to ensure that it
            is updated and accurate at all times, they do rely on third parties to provide
            information to them so that they can make it available to you. The Service
            Provider accepts no liability for any loss, direct or indirect, that you
            experience as a result of relying entirely on this functionality of the
            application.
          </P>
          <P>
            The Service Provider may wish to update the application at some point. The
            application is currently available as per the requirements for the operating
            system (and for any additional systems they decide to extend the availability
            of the application to) may change, and you will need to download the updates
            if you want to continue using the application. The Service Provider does not
            guarantee that it will always update the application so that it is relevant to
            you and/or compatible with the particular operating system version installed on
            your device. However, you agree to always accept updates to the application
            when offered to you. The Service Provider may also wish to cease providing the
            application and may terminate its use at any time without providing termination
            notice to you. Unless they inform you otherwise, upon any termination, (a) the
            rights and licenses granted to you in these terms will end; (b) you must cease
            using the application, and (if necessary) delete it from your device.
          </P>
        </Column>

        <Section title="Changes to These Terms and Conditions">
          <P>
            The Service Provider may periodically update their Terms and Conditions.
            Therefore, you are advised to review this page regularly for any changes. The
            Service Provider will notify you of any changes by posting the new Terms and
            Conditions on this page.
          </P>
          <P>These terms and conditions are effective as of 2026-05-22.</P>
        </Section>

        <Section title="Contact Us">
          <P>
            If you have any questions or suggestions about the Terms and Conditions, please
            do not hesitate to contact the Service Provider at{" "}
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
