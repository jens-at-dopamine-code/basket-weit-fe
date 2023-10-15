import Image from 'next/image';

import { styled } from '@/styled-system/jsx';

const Container = styled('article', {
  base: {
    bgColor: 'primary',
    display: 'flex',
    color: 'white',
    borderRadius: 'md',
    padding: 2,
  },
});

const ContentContainer = styled('div', {
  base: {
    padding: 4,
  },
});

const Title = styled('h2', {
  base: {
    fontSize: '3xl',
    fontWeight: 'bold',
    pb: 4,
  },
});

const Text = styled('p', {});

export const About = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Basket Weit</Title>
        <Text>
          Onze bezieler Arvid Leemans vond het jammer dat er geen weerds
          basketbal meer was nadat de club Basket klub Weerde in 2014 de boeken
          had moeten neerleggen. Nadat een groot deel van de spelers een jaar
          hadden vertoefd bij een andere Zemste club werd er besloten om toch
          terug een Weerds team het leven in te roepen. En zo geschiede dat in
          2015 Basket Weit het leven werd ingeroepen en we aan de slag gingen in
          het Antwerps Vriendenverbond (KAVVV)
        </Text>
      </ContentContainer>
      <Image
        alt="Player avatar"
        width={321}
        height={550}
        src="/player.png"
        sizes="250px"
        style={{
          height: '100%',
          width: 'auto',
        }}
      />
    </Container>
  );
};
