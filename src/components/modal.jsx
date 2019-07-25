import React from "react";
import styled from "styled-components";
import { devices } from "../components/tools/devices";

const S = {};

S.Background = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 4px;
`;

S.Panel = styled.div`
  box-sizing: border-box;
  width: 820px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 40px 50px;
  display: flex;
  color: #444;
  @media (${devices.mobile}) {
    flex-direction: column;
    height: auto;
    max-width: calc(100% - 20px);
    padding: 30px 20px;
  }
`;

S.Content = styled.div`
  display: flex;
  flex-direction: column;
`;

S.Title = styled.span`
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.56px;
  text-align: center;
  margin-bottom: 35px;
  @media (${devices.mobile}) {
    margin-bottom: 30px;
  }
`;

S.Wrapbenefit = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${devices.mobile}) {
    flex-direction: column;
    align-items: center;
    line-height: 2.5;
  }
`;

S.Free = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

S.Foot = styled.div`
  display: flex;
  flex: 1;
  font-size: 12px;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  @media (${devices.mobile}) {
    align-items: center;
  }
`;

S.FootContent = styled.div`
  max-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 25px;
  @media (${devices.mobile}) {
    margin: 0;
    max-width: inherit;
    flex: 1;
    flex-direction: row;
  }
`;

S.WrapDocument = styled.div`
  display: flex;
  justify-content: center;
  min-width: 250px;
  @media (${devices.mobile}) {
    margin-top: 40px;
  }
`;

S.Divider = styled.div`
  border-left: 1px solid #e8e8e8;
  margin: 0 35px;
`;

S.SpanFoot = styled.span`
  line-height: 24px;
`;

S.Icon = styled.i`
  font-size: 20px;
`;

function App() {
  return (
    <div>
      <S.Background>
        {/* <S.Panel>
          <S.Content>
            <S.Title>
              VALIDANDO TU SUSCRIPCIÓN AL DIARIO IMPRESO, APROVECHA EL DESCUENTO
              QUE TENEMOS PARA TI:
            </S.Title>
            <S.Wrapbenefit>
              <span>Beneficio especial para suscriptores</span>
              <S.Free>GRATIS</S.Free>
            </S.Wrapbenefit>
            <S.Foot>
              <S.FootContent>
                <S.SpanFoot>Por los 3 primeros meses.</S.SpanFoot>
                <S.SpanFoot>Luego, S/ 19 cada mes.</S.SpanFoot>
              </S.FootContent>
              <S.FootContent>
                <S.SpanFoot>Precio Regular: S/ 29.00 al mes</S.SpanFoot>
              </S.FootContent>
            </S.Foot>
          </S.Content>
          <S.Divider />
          <S.WrapDocument>
            <strong>Ingresa tu Documento</strong>
          </S.WrapDocument>
        </S.Panel> */}
        <p>ACCESO NO AUTORIZADO</p>
        <S.Icon>
          <svg
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="64 64 896 896"
          >
            <title>Importante</title>
            <path d="M470.8 344.4c0-22.8 18.6-39.8 41-39.8 22.8 0 41.4 17 41.4 39.8s-18.6 40-41.4 40c-22.4 0-41-17.2-41-40zM473.6 415.8h76.4v288.2h-76.4v-288.2z" />
            <path d="M512 152c96.2 0 186.6 37.4 254.6 105.4s105.4 158.4 105.4 254.6-37.4 186.6-105.4 254.6-158.4 105.4-254.6 105.4c-96.2 0-186.6-37.4-254.6-105.4s-105.4-158.4-105.4-254.6 37.4-186.6 105.4-254.6 158.4-105.4 254.6-105.4zM512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416z" />
          </svg>
        </S.Icon>
        <a href="/">VOLVER A LA PORTADA</a>
      </S.Background>
    </div>
  );
}

export default App;
