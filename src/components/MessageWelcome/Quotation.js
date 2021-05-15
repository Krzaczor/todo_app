import styled from 'styled-components';
import { randomInteger } from '../../helpers/randomInteger';

const QuotationWrapper = styled.p`
    text-align: justify;
`;

QuotationWrapper.displayName = 'QuotationWrapper';

const QuotationText = styled.q`
    font-weight: 700;
    line-height: 1.4em;
`;

QuotationText.displayName = 'Quotation';

const quotations = [
    {
        quotation: 'Jeśli ustawisz sobie cele absurdalnie wysoko i ich nie osiągniesz, to twoja „porażka” i tak będzie powyżej „sukcesu” innych ludzi.',
        author: 'James Cameron'
    },
    {
        quotation: 'Zawsze wydaje się, że coś jest niemożliwe, dopóki nie zostanie to zrobione.',
        author: 'Nelson Mandela'
    },
    {
        quotation: 'Sukces wymaga wcześniejszego przygotowania, bez niego z pewnością osiągniemy porażkę.',
        author: 'Konfucjusz'
    },
    {
        quotation: 'Wybierz jeden pomysł. Spraw, aby ten pomysł stał się Twoim życiem – myśl o nim, śnij o nim, żyj tym pomysłem. Pozwól mózgowi, mięśniom, nerwom, każdej części Twojego ciała napełnić się tym pomysłem i po prostu zostaw w spokoju wszystkie inne pomysły. To jest droga do sukcesu.',
        author: 'Swami Vivekananda'
    },
    {
        quotation: 'Wszelki postęp dzieje się poza strefą komfortu.',
        author: 'Michael John Bobak'
    },
    {
        quotation: 'Jeśli potrafisz o czymś marzyć, to potrafisz także tego dokonać.',
        author: 'Walt Disney'
    },
    {
        quotation: 'Jeśli nie stworzysz własnego planu na życie, prawdopodobnie znajdziesz się w planie kogoś innego. Zgadnij, co w nim dla Ciebie przygotowano? Nic specjalnego.',
        author: 'Jim Rohn'
    },
    {
        quotation: 'Aby osiągnąć sukces, musisz mądrze pracować, nigdy nie rezygnować – lecz przede wszystkim powinieneś pielęgnować swą wspaniałą obsesję.',
        author: 'Walt Disney'
    },
    {
        quotation: 'Żadne zadanie nie jest szczególnie trudne, jeśli podzielisz je na mniejsze podzadania.',
        author: 'Henry Ford'
    },
    {
        quotation: 'Nie bądź jednym z tych, którzy obawiając się niepowodzenia, niczego nie próbują.',
        author: 'Thomas Metron'
    },
];

function Quotation() {
    const randomIndex = randomInteger(quotations.length - 1);
    const { quotation, author = 'Autor Nieznany' } = quotations[randomIndex];

    return (
        <QuotationWrapper>
            <QuotationText>{ quotation }</QuotationText>
            {" - "}
            <cite>{ author }</cite>
        </QuotationWrapper>
    );
}

export default Quotation;
