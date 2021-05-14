import styled from 'styled-components';

const ListEmpty = styled.div`
    height: 100%;
    padding: 15px;
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
    line-height: 1.4em;
`;

Quotation.displayName = 'Quotation';

const messageText = [
    'Brak zadań mój Panie.',
    'Sir, lista zadań jest pusta!'
]

const quotationTexts = [
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
    }
];

function ListTasksEmpty() {
    const randomIndexMessage = Math.floor(Math.random() * messageText.length);
    const randomIndexQuotation = Math.floor(Math.random() * quotationTexts.length);

    return (
        <ListEmpty>
            <Message>{messageText[randomIndexMessage]}</Message>
            <QuotationWrapper>
                <Quotation>{quotationTexts[randomIndexQuotation].quotation}</Quotation>
                {" - "}
                <cite>{quotationTexts[randomIndexQuotation].author}</cite>
            </QuotationWrapper>
        </ListEmpty>
    );
}

export default ListTasksEmpty;
