import Menu from './Menu/Menu';
import Content from './Content/Content';
import Title from './Title/Title';
import PopupAddingTask from '../Popup/AddingTask';

function Page() {
    return (
        <>
            <Title />
            <Content />
            <Menu />
            <PopupAddingTask />
        </>
    )
}

export default Page;
