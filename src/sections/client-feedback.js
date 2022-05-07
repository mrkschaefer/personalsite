/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import Client from 'assets/images/client-thumb.png';

export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="Ihre Investition: Nur 39€ pro Monat"
          description="Wir sind uns sicher, dass dieser Preis im Vergleich zu anderen Agenturen fast unschlagbar ist. Wir setzten auf langfristige Kundenbeziehungen und möchten daher eine faire Geschäftsbeziehung aufbauen."
        />
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    background: "#E5E4E2",
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    img: {
      height: [100, 'auto'],
    },
  },
};
