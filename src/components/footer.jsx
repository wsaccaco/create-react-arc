import React from 'react';
import styled from "styled-components";
import { devices } from "../components/tools/devices";

const S = {};

S.Footer = styled.footer`
  background-color: #000;
  color: #FFF;
  padding: 30px;
`;

S.FooterContent = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  max-width: 1120px;
  margin: 0 auto;
  @media ${devices.tablet} {
    grid-template-columns: 2fr 2fr;
  }
  @media (${devices.mobile}) {
    grid-template-columns: 1fr;
  }
`;

S.ImageContent = styled.div`
  margin: 10px 0;
  padding: 0;
  @media ${devices.tablet} {
    margin: 0 15px;
  }
  @media (${devices.mobile}) {
    margin: 0 15px;
  }
`;

S.Image = styled.img`
  display: block;
`;

S.List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
    @media (${devices.mobile}) {
      width: 100%;
    }
  }
`;

S.ListLink = styled.a`
  color: #FFF;
  text-decoration: none;
  font-size: 15px;
  display: inline-block;
  padding: 5px 0;
  margin: 5px 0;
`;

S.Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 20px 0 0;
  a {
    font-weight: 600;
    color: #FFF;
    text-decoration: none;
  }
`;

S.Subtitle = styled.h3`
  font-size: 15px;
  font-weight: 400;
  margin: 0 0 15px;
  @media (${devices.mobile}) {
    text-align: center;
  }
`;

S.CenterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
  }
  @media (${devices.mobile}) {
    flex-direction: row;
  }
`;

S.SocialContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-size: 24px;
  a {
    margin: 0 15px;
    color: #FFF;
  }
  svg {
    display: block;
  }
`;

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContent>
        <div>
          <div>
            <S.Image src="https://placehold.it/103x22" alt="Gestión"/>
          </div>
          <S.Text>Contáctanos al <a href="tel:+5113115100">01 311-5100</a> o <a href="mailto:suscriptores@diariogestion.com.pe">suscriptores@diariogestion.com.pe</a></S.Text>
          <S.Text>Paquetes que incluyen diario impreso, disponibles sólo para Lima y Callao</S.Text>
        </div>
        <div>
          <S.List>
            <li><S.ListLink href="/">Soporte</S.ListLink></li>
            <li><S.ListLink href="/">Políticas de privacidad</S.ListLink></li>
            <li><S.ListLink href="/">Preguntas frecuentes</S.ListLink></li>
            <li><S.ListLink href="/">Libro de reclamaciones</S.ListLink></li>
            <li><S.ListLink href="/">Términos y Condiciones</S.ListLink></li>
          </S.List>
        </div>
        <div>
          <S.Subtitle>Descarga nuestra app</S.Subtitle>
          <S.CenterContent>
            <S.ImageContent>
              <S.Image src="https://placehold.it/106x32" alt="App Store"/>
            </S.ImageContent>
            <S.ImageContent>
              <S.Image src="https://placehold.it/106x32" alt="Google Play"/>
            </S.ImageContent>
          </S.CenterContent>
        </div>
        <S.SocialContent>
          <a href="/">
            <i>
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 880 1024"
              >
                <title>Twitter</title>
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z" />
              </svg>
            </i>
          </a>
          <a href="/">
            <i>
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 675 1024"
              >
                <title>Facebook</title>
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z" />
              </svg>
            </i>
          </a>
          <a href="/">
            <i>
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </i>
          </a>
        </S.SocialContent>
      </S.FooterContent>
    </S.Footer>
  )
}

export default Footer;
