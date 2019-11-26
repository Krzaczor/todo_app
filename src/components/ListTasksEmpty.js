import React from 'react'
import styled, { css } from 'styled-components';

const ListEmpty = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

ListEmpty.displayName = 'ListEmpty';

const Message = styled.p`
    margin-bottom: 2em;
`;

Message.displayName = 'Message';

const QuotationWrapper = styled.p`
    text-align: justify;
`;

QuotationWrapper.displayName = 'QuotationWrapper';

const Quotation = styled.q`
    font-weight: 700;
    line-height: 1.3em;
`;

Quotation.displayName = 'Quotation';

const MotivationsWrapper = styled.div`
    margin-top: 2em;
    text-align: justify;
    line-height: 1.3em;
`;

MotivationsWrapper.displayName = 'MotivationsWrapper';

const Motivation = styled.p`
    margin-bottom: ${props => !props.last && css ? '0.3em' : 0};
`;

Motivation.displayName = 'Motivation';

function ListTasksEmpty() {
    return (
        <ListEmpty>
            <Message>Brak zadań mój Panie</Message>
            <QuotationWrapper>
                <Quotation>Zawsze wydaje się, że coś jest niemożliwe, dopóki nie zostanie to zrobione.</Quotation>
                {" - "}
                <cite>Nelson Mandela</cite>
            </QuotationWrapper>
            <MotivationsWrapper>
                <Motivation>Stawiaj sobie wyzwania i zacznij działać! Nie pozwól, aby Twoje życie stało się rutyną!</Motivation>
                <Motivation>Jesteś człowiekiem zdolnym osiągnąć nieosiągalne!</Motivation>
                <Motivation>Ludzka wyobraźnia nie zna granic, więc nie pozwól by Twój umysł był Twoim ograniczeniem.</Motivation>
                <Motivation last>Przekrocz granice swoich możliwości i odkryj pokłady energii jakiej najstarsi górale nie znają!</Motivation>
            </MotivationsWrapper>
        </ListEmpty>
    );
}

export default ListTasksEmpty;
