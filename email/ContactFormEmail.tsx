import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type Props = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: Props) {
  const subject = 'Nouveau message via le formulaire de contact';
  const mailtoHref = `mailto:${senderEmail}?subject=Re:%20${encodeURIComponent(subject)}`;

  return (
    <Html>
      <Head />
      <Preview>Nouveau message depuis aely.dev</Preview>
      <Tailwind>
        <Body className="m-0 bg-gray-100 p-0 text-black">
          <Container className="mx-auto my-10 w-full max-w-[600px]">
            <Section className="rounded-lg border border-black/10 bg-white px-8 py-6 shadow-sm">
              <Heading className="mb-2 text-xl font-semibold leading-tight">Nouveau message reçu</Heading>
              <Text className="mb-6 text-sm text-gray-600">
                Vous avez reçu un message via le formulaire de contact de votre portfolio.
              </Text>

              <Hr className="my-4 border-gray-200" />

              <Text className="mb-2 text-sm font-medium text-gray-700">Message :</Text>
              <Text className="whitespace-pre-wrap rounded-md bg-gray-50 p-4 text-[15px] leading-6">{message}</Text>

              <Hr className="my-6 border-gray-200" />

              <Text className="mb-2 text-sm font-medium text-gray-700">Expéditeur :</Text>
              <Text className="mb-4 text-[15px]">{senderEmail}</Text>

              <Button
                href={mailtoHref}
                className="mt-2 inline-block rounded-md bg-black px-5 py-3 text-sm font-medium text-white no-underline hover:opacity-90"
              >
                Répondre à l’expéditeur
              </Button>

              <Hr className="my-6 border-gray-200" />

              <Text className="text-xs text-gray-500">
                Cet e-mail a été généré automatiquement par votre site aely.dev.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
