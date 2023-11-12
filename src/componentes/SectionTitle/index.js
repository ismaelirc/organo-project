import './SectionTitle.css';

const SectionTitle = ({title,aoClick, buttonHide = false}) => {
    return (
        < >
            <p>{title}</p>
            {
                buttonHide ? <button onClick={aoClick}>Toggle form</button> : null
            }
        </> 
    )
}

export default SectionTitle
