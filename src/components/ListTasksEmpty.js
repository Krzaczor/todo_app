import React from 'react'

import ListEmpty from '../assets/List/Empty';

function ListTasksEmpty() {
    return (
        <ListEmpty>
            <p style={{marginBottom: '2em'}}>Brak zadań mój Panie</p>
            <p style={{textAlign: 'justify'}}>
                <q style={{fontWeight: '700', lineHeight: '1.3em'}}>Zawsze wydaje się, że coś jest niemożliwe, dopóki nie zostanie to zrobione.</q>
                { " - " }
                <cite>Nelson Mandela</cite>
            </p>
            <div style={{marginTop: '2em', textAlign: 'justify', lineHeight: '1.3em'}}>
                <p style={{marginBottom: '0.3em'}}>Stawiaj sobie wyzwania i zacznij działać!
                    Nie pozwól, aby Twoje życie stało się rutyną!</p>
                <p style={{marginBottom: '0.3em'}}>Jesteś człowiekiem zdolnym osiągnąć nieosiągalne!</p>
                <p style={{marginBottom: '0.3em'}}>Ludzka wyobraźnia nie zna granic, więc nie pozwól by Twój umysł był Twoim ograniczeniem.</p>
                <p>Przekrocz granice swoich możliwości i odkryj pokłady energii jakiej najstarsi górale nie znają!</p>
            </div>
        </ListEmpty>
    )
}

export default ListTasksEmpty;
