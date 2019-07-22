import React from "react";
import styled from "styled-components";
import { devices } from "../components/tools/devices";

const S = {};

S.Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
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

function App() {
  return (
    <div style={{ height: "200vh" }}>
      <S.Background>
        <S.Panel>
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
        </S.Panel>
      </S.Background>
    </div>
  );
}

export default App;
