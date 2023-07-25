const Header = (props) => {
    return (
        <h2>
            {props.title ? props.title : 'Tasks'}
        </h2>
    );
};

export default Header;
