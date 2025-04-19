const FormatterErrors = ({error}) => {
    return (
        <div>
            <pre className="min-h-[2rem]">{error}</pre>
        </div>
    );
}

export default FormatterErrors;
